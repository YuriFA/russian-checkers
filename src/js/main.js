import GameBoard from './GameBoard'
import { COLORS } from './constants'

class Checkers {
  constructor (args) {
    this.board = new GameBoard()
    // this.test()
    this.board.start()
  }
  // TEST
  test () {
    console.log('TESTING')
    this.deleteChecker(1, 1)
    this.deleteChecker(1, 3)
    this.deleteChecker(2, 2)
    this.deleteChecker(3, 1)
    this.deleteChecker(3, 3)
    this.deleteChecker(3, 5)
    this.deleteChecker(6, 6)
    this.deleteChecker(6, 8)
    this.deleteChecker(7, 7)
    this.deleteChecker(8, 6)
    this.deleteChecker(8, 8)
    this.testCheckers([
      {x: 3, y: 1, color: COLORS.checker.light},
      {x: 2, y: 2, color: COLORS.checker.dark},
      {x: 7, y: 7, color: COLORS.checker.dark}
    ])
  }

  testCheckers (checkers) {
    checkers.forEach((checker) => {
      const testCell = document.getElementById(`cell_${checker.x}_${checker.y}`).obj
      const testChecker = this.board.createChecker(checker.color, testCell)
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
}
