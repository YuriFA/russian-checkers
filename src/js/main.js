import GameBoard from './GameBoard'
import { COLORS } from './constants'

const board = document.getElementById('board')

class Checkers {
  constructor (args) {
    console.time('New board')
    this.board = new GameBoard(board)
    this.board.start()
    console.timeEnd('New board')
  }

  test () {
    this.deleteChecker(1, 3)
    this.deleteChecker(2, 2)
    this.deleteChecker(3, 3)
    this.deleteChecker(3, 5)
    this.testCheckers([
      {x: 2, y: 2, color: COLORS.checker.light},
      {x: 4, y: 6, color: COLORS.checker.dark}
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

function resizeHandle () {
  const w = window.innerWidth
  const h = window.innerHeight
  const minWH = Math.floor(Math.min(w, h) * 0.9)
  board.style.width = `${minWH}px`
  board.style.height = `${minWH}px`
  board.style.left = `${Math.floor((w - minWH) / 2)}px`
}

window.onload = () => {
  window.checkers = new Checkers()
}
