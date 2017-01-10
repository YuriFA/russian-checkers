import { N, COLORS, TOP_UP, BOTTOM_FROM, MOVES } from './constants'
import Checker from './Checker'
import Cell from './Cell'

const LEFT = 0
const RIGHT = 1

const MOVE_MAP = {
  [ COLORS.checker.light ]: {
    fw: [ { x: -1, y: -1 }, { x: -1, y: 1 } ],
    bw: [ { x: 1, y: -1 }, { x: 1, y: 1 } ]
  },
  [ COLORS.checker.dark ]: {
    fw: [ { x: 1, y: -1 }, { x: 1, y: 1 } ],
    bw: [ { x: -1, y: -1 }, { x: -1, y: 1 } ]
  }
}

const MOVE_TYPE = {
  FREE: 0,
  EAT: 1
}

export default class GameBoard {
  constructor (boardDOM) {
    this.boardDOM = boardDOM
    this.draw()
  }

  // drawing board
  draw () {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        const cell = new Cell(i, j)
        // cell.cellDOM.addEventListener('click', this.cellClickHandle.bind(this))
        this.boardDOM.appendChild(cell.cellDOM)
        this.drawChecker(cell)
      }
    }
  }

  drawChecker (cell) {
    if (cell.y % 2 === cell.x % 2 && (cell.x < TOP_UP || cell.x > BOTTOM_FROM)) {
      this.createChecker(cell.x < TOP_UP ? COLORS.checker.dark : COLORS.checker.light, cell)
    }
  }

  createChecker (color, cell) {
    const checker = new Checker(color)
    // checker.checkerDOM.addEventListener('click', this.checkerClickHandle.bind(this))
    checker.belongsTo(cell)
    cell.containChecker(checker)
    return checker
  }

  move (checker, cell) {
    let moveResult = ''
    const wasEaten = this.eatIfItPossible(checker, cell)
    checker.moveTo(cell)
    if (checker.canQueened()) {
      console.log('QUEENED')
      checker.makeQueen()
    }

    const mustEat = this.getAvailableMoves(checker, true) // only for eat(jump)
    this.deactivateCheckers()
    if (wasEaten && mustEat) {
      checker.activate()
      this.showMoves(mustEat.moves)
      moveResult = MOVES.CAN_EAT_MORE
    } else {
      const checkers = this.getCheckers(checker.color, true)
      checkers.forEach((checker) => checker.unmark())
      moveResult = MOVES.MOVE_COMPLETED
    }
    return moveResult
  }

  getCell (pos) {
    const cell = document.getElementById(`cell_${pos.x}_${pos.y}`)
    return cell ? cell.obj : null
  }

  getCheckers (color, marked = false) {
    let checkers = document.querySelectorAll(`.checker.checker__${color}${marked ? '.marked' : ''}`)
    checkers = Object.keys(checkers).map((i) => (checkers[i] = checkers[i].obj))
    return checkers
  }

  showMoves (moves) {
    if (moves) {
      moves.forEach((move) => {
        if (move && move.cell) {
          move.cell.highlight()
        }
      })
    }
  }

  getAvailableMoves (checker, onlyEat = false) {
    const checkerMoves = MOVE_MAP[ checker.color ]
    const enemyEatingFilter = (mv) => mv && mv.cell && mv.type === MOVE_TYPE.EAT
    const freeMoveFilter = (mv) => mv && mv.cell && mv.type === MOVE_TYPE.FREE
    let moves = []
    if (checker.isQueen()) {
      console.log('searching moves for queen')
      moves.push(
        ...this.getAvailableCellsForQueen(checker, checkerMoves.fw[ LEFT ], onlyEat),
        ...this.getAvailableCellsForQueen(checker, checkerMoves.fw[ RIGHT ], onlyEat),
        ...this.getAvailableCellsForQueen(checker, checkerMoves.bw[ LEFT ], onlyEat),
        ...this.getAvailableCellsForQueen(checker, checkerMoves.bw[ RIGHT ], onlyEat)
      )
    } else {
      // console.log('searching moves for checker')
      moves.push(
        this.getAvailableCell(checker, checkerMoves.fw[ LEFT ], onlyEat),
        this.getAvailableCell(checker, checkerMoves.fw[ RIGHT ], onlyEat),
        this.getAvailableCell(checker, checkerMoves.bw[ LEFT ], true),
        this.getAvailableCell(checker, checkerMoves.bw[ RIGHT ], true)
      )
    }
    if (moves.some(enemyEatingFilter)) {
      moves = {
        type: MOVE_TYPE.EAT,
        moves: moves.filter(enemyEatingFilter)
      }
    } else {
      moves = {
        type: MOVE_TYPE.FREE,
        moves: moves.filter(freeMoveFilter)
      }
    }
    // if (checker.isQueen()) {
    //   console.log('ALO', moves)
    // }
    return moves.moves.length ? moves : null
  }

  getAvailableCellsForQueen (checker, direction, onlyEat) {
    let aCell = {}
    let ret = []
    let eatDirection = false
    let curDirection = direction
    do {
      // console.log('DIRECTION', curDirection, eatDirection ? false : onlyEat)
      aCell = this.getAvailableCell(checker, curDirection, eatDirection ? false : onlyEat)
      if (aCell) {
        let isEat = aCell.type === MOVE_TYPE.EAT
        if (eatDirection && isEat) {
          break
        }
        eatDirection = isEat ? true : eatDirection
        curDirection = this.calcNextDirectionCell(curDirection, direction, isEat ? 2 : 1)
        if (eatDirection) {
          aCell.type = MOVE_TYPE.EAT
        }
        console.log(aCell)
        ret.push(aCell)
        // if (!confirm('CYKA BLYAT')) {
        //   break
        // }
      } else {
        break
      }
      // console.log(aCell, aCell ? aCell.cell.cellDOM : '', curDirection)
    } while (aCell !== null)

    return ret
  }

  getAvailableCell (checker, direction, onlyEat = false) {
    const curPos = checker.cell.getPosition()
    const cell = this.getCell({ x: curPos.x + direction.x, y: curPos.y + direction.y })
    if (cell && !cell.hasChecker() && !onlyEat) {
      return {
        type: MOVE_TYPE.FREE,
        cell: cell
      }
    }
    if (cell && cell.hasChecker() && checker.color !== cell.checker.color) {
      let cellAfterEat = this.cellAfterEating(cell.getPosition(), direction)
      if (cellAfterEat) {
        return {
          type: MOVE_TYPE.EAT,
          cell: cellAfterEat
        }
      }
    }

    return null
  }

  cellAfterEating (enemyPosition, direction) {
    const cell = this.getCell({
      x: enemyPosition.x + Math.sign(direction.x),
      y: enemyPosition.y + Math.sign(direction.y)
    })
    return cell && !cell.hasChecker() ? cell : null
  }

  eatIfItPossible (checker, nextCell) {
    const curCell = checker.cell
    if (Math.abs(curCell.x - nextCell.x) >= 2) {
      const direction = this.calcDirectionOfMove(curCell, nextCell)
      const enemyCell = !checker.isQueen()
                        ? this.getCell({ x: curCell.x + direction.x, y: curCell.y + direction.y })
                        : this.findEnemyCell(curCell, nextCell, direction)
      if (enemyCell && enemyCell.checker) {
        enemyCell.checker.belongsTo(null)
        enemyCell.removeChecker()
        return true
      }
    }
    return false
  }

  findEnemyCell (cellFrom, cellTo, direction) {
    let enemy = null
    let curDirection = this.calcNextDirectionCell(cellFrom, direction)
    while (enemy !== cellTo) {
      enemy = this.getCell(curDirection)
      if (!enemy || enemy && enemy.hasChecker()) {
        break
      }
      curDirection = this.calcNextDirectionCell(curDirection, direction)
    }
    return enemy
  }

  calcNextDirectionCell (curDirection, direction, offset = 1) {
    return {
      x: curDirection.x + direction.x * offset,
      y: curDirection.y + direction.y * offset
    }
  }

  calcDirectionOfMove (curCell, nextCell) {
    return {
      x: Math.sign(nextCell.x - curCell.x),
      y: Math.sign(nextCell.y - curCell.y)
    }
  }

  markAvailableCheckers (color) {
    const checkers = this.getCheckers(color)
    let eatMoves = false
    let freeMoves = []
    checkers.forEach((checker) => {
      const moves = this.getAvailableMoves(checker)
      if (moves) {
        if (moves.type === MOVE_TYPE.EAT) {
          checker.mark()
          eatMoves = true
        } else {
          freeMoves.push(checker)
        }
      }
    })
    if (!eatMoves && freeMoves.length) {
      freeMoves.forEach((checker) => checker.mark())
    }
  }

  deactivateCheckers () {
    const activeCheckers = document.getElementsByClassName('checker active')
    if (activeCheckers.length) {
      Object.keys(activeCheckers).map((i) => activeCheckers[i].classList.remove('active'))
      var highlights = document.querySelectorAll('.cell.highlight')
      Object.keys(highlights).map((i) => highlights[i].obj.unhighlight())
    }
  }
}
