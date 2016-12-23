import { N, COLORS, TOP_UP, BOTTOM_FROM, MOVE_TYPE } from './constants'
import Checker from './Checker'
import Cell from './Cell'

class Board {
  constructor () {
    this.boardDOM = document.getElementById('board')
    this.draw()
    this.LEFT = 0
    this.RIGHT = 1
    this.movesMap = {
      [ COLORS.checker.light ]: {
        fw: [
          { x: -1, y: -1 },
          { x: -1, y: 1 }
        ],
        bw: [
          { x: 1, y: -1 },
          { x: 1, y: 1 }
        ]
      },
      [ COLORS.checker.dark ]: {
        fw: [
          { x: 1, y: -1 },
          { x: 1, y: 1 }
        ],
        bw: [
          { x: -1, y: -1 },
          { x: -1, y: 1 }
        ]
      }
    }
  }

  // drawing board
  draw () {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        const cell = new Cell(i, j)
        this.boardDOM.appendChild(cell.cellDOM)
        this.drawChecker(cell)
      }
    }
  }

  drawChecker (cell) {
    if (cell.y % 2 === cell.x % 2 && (cell.x < TOP_UP || cell.x > BOTTOM_FROM)) {
      const checker = new Checker(cell.x < TOP_UP ? COLORS.checker.dark : COLORS.checker.light)
      checker.belongsTo(cell)
      cell.containChecker(checker)
    }
  }

  getCell (x, y) {
    const cell = document.getElementById(`cell_${x}_${y}`)
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
    const checkerMoves = this.movesMap[ checker.color ]
    const enemyEatingFilter = (mv) => mv && mv.cell && mv.type === MOVE_TYPE.EAT
    const freeMoveFilter = (mv) => mv && mv.cell && mv.type === MOVE_TYPE.FREE
    let moves = []
    moves.push(
      this.getAvailableCell(checker, checkerMoves.fw[ this.LEFT ], onlyEat),
      this.getAvailableCell(checker, checkerMoves.fw[ this.RIGHT ], onlyEat),
      this.getAvailableCell(checker, checkerMoves.bw[ this.LEFT ], true),
      this.getAvailableCell(checker, checkerMoves.bw[ this.RIGHT ], true)
    )
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
    return moves.moves.length ? moves : null
  }

  getAvailableCell (checker, direction, onlyEat = false) {
    const curPos = checker.cell.getPosition()
    const cell = this.getCell(curPos.x + direction.x, curPos.y + direction.y)
    const cellHasChecker = cell && cell.hasChecker()
    if (!cellHasChecker && !onlyEat) {
      return {
        type: MOVE_TYPE.FREE,
        cell: cell
      }
    }
    if (cellHasChecker && checker.color !== cell.checker.color) {
      return {
        type: MOVE_TYPE.EAT,
        cell: this.cellAfterEating(cell.getPosition(), direction)
      }
    }

    return null
  }

  cellAfterEating (enemyPosition, dirPosition) {
    const cell = this.getCell(enemyPosition.x + dirPosition.x, enemyPosition.y + dirPosition.y)
    return cell && !cell.hasChecker() ? cell : null
  }

  eatIfItPossible (curCell, nextCell) {
    if (Math.abs(curCell.x - nextCell.x) === 2) {
      const direction = this.calcDirectionOfMove(curCell, nextCell)
      const enemyCell = this.getCell(curCell.x + direction.x, curCell.y + direction.y)
      enemyCell.checker.belongsTo(null)
      enemyCell.removeChecker()

      return true
    }
    return false
  }

  calcDirectionOfMove (curCell, nextCell) {
    return {
      x: (nextCell.x - curCell.x) / 2,
      y: (nextCell.y - curCell.y) / 2
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

export default Board
