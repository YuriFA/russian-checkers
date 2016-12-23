import { COLORS, BG_COLORS } from './constants'
import Board from './Board'

class Checkers {
  constructor (args) {
    this.board = new Board()
    this.TURNS = [ COLORS.checker.light, COLORS.checker.dark ]
    // 0 - light, 1 - dark
    this.currentTurn = this.TURNS[0]
    this.turnsCount = 0
    this.currentChecker = null
    this.updateInfo()
    this.board.markAvailableCheckers(this.currentTurn)
  }

  setNexnTurn () {
    this.turnsCount++
    this.currentTurn = this.TURNS[ this.turnsCount % 2 ]
  }

  addEventListeners() {
    //
  }

  checkerClickHandle (e) {
    const checker = this
    this.board.deactivateCheckers()
    if (checker !== undefined && checker.isMovePossible(this.currentChecker, this.currentTurn)) {
      const availableMoves = this.board.getAvailableMoves(checker)
      checker.activate()
      this.board.showMoves(availableMoves.moves)
      this.currentChecker = checker
    } else {
      this.currentChecker = null
    }

    return false
  }

  cellClickHandle (e) {
    const cell = this
    if (this.currentChecker && cell.isHighlighted()) {
      // console.log('can move to this cell')
      const wasEaten = this.board.eatIfItPossible(this.currentChecker.cell, cell)
      this.currentChecker.moveTo(cell)
      const mustEat = this.board.getAvailableMoves(this.currentChecker, true)
      this.board.deactivateCheckers()
      if (wasEaten && mustEat && mustEat.moves) {
        this.currentChecker.activate()
        this.board.showMoves(mustEat.moves)
      } else {
        const checkers = this.board.getCheckers(this.currentTurn, true)
        checkers.forEach((checker) => checker.unmark())
        this.setNexnTurn()
        this.board.markAvailableCheckers(this.currentTurn)
      }
      this.updateInfo()
    } else {
      // console.log('move to this cell is impossible')
    }

    return false
  }

  updateInfo () {
    const turnsCountDOM = document.getElementById('turns_count')
    const turnColorDOM = document.getElementById('current_turn_color')
    turnsCountDOM.textContent = this.turnsCount
    turnColorDOM.style.backgroundColor = BG_COLORS[ this.currentTurn ]
  }

  // TEST
  // testing functions
  // function testCheckers (checkerColor, cells) {
  //   cells.forEach((cell) => {
  //     const testChecker = new Checker(checkerColor, checkerClickHandle)
  //     const testCell = document.getElementById(`cell_${cell.x}_${cell.y}`).obj
  //     testChecker.belongsTo(testCell)
  //     testCell.containChecker(testChecker)
  //   })
  // }

  // function deleteChecker (x, y) {
  //   const cell = document.getElementById(`cell_${x}_${y}`).obj
  //   if (!cell || !cell.checker) return false
  //   cell.removeChecker()
  //   return true
  // }
  // testCheckers(COLORS.checker.dark, [{x: 5, y: 5}, {x: 5, y: 3}])
  // deleteChecker(6, 4)
  // deleteChecker(6, 6)
}

window.onload = () => {
  window.checkers = new Checkers()
}
