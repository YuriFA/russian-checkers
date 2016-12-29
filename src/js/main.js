import GameBoard from './GameBoard'
import { COLORS } from './constants'

class Checkers {
  constructor (args) {
    this.board = new GameBoard()
  }
  // TEST
  test () {
    console.log('TEST')
    this.testCheckers(COLORS.checker.dark, [{x: 5, y: 5}, {x: 5, y: 3}])
    this.deleteChecker(6, 4)
    this.deleteChecker(6, 6)
  }
  testCheckers (checkerColor, cells) {
    cells.forEach((cell) => {
      const testCell = document.getElementById(`cell_${cell.x}_${cell.y}`).obj
      const testChecker = this.board.createChecker(checkerColor, testCell)
    })
  }

  deleteChecker (x, y) {
    const cell = document.getElementById(`cell_${x}_${y}`).obj
    if (!cell || !cell.checker) return false
    cell.removeChecker()
    return true
  }
}

window.onload = () => {
  window.checkers = new Checkers()
  window.checkers.test()
}
