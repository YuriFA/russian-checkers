import { COLORS, N } from './constants'

const QUEEN_LINE = {
  [COLORS.checker.dark]: N,
  [COLORS.checker.light]: 1,
}

export default class Checker {
  constructor(color) {
    this.color = color
    this.cell = null
    this.marked = false
    this.queen = false
    this.checkerDOM = (() => {
      const checker = document.createElement('div')

      checker.className = `checker checker__${this.color}`
      checker.obj = checker.obj || this

      return checker
    })()
  }

  activate() {
    this.checkerDOM.classList.toggle('active')
  }

  belongsTo(cell) {
    this.cell = cell

    if (cell) {
      cell.cellDOM.appendChild(this.checkerDOM)
    }
  }

  mark(selfTurn = true) {
    this.marked = true

    if (selfTurn) {
      this.checkerDOM.classList.toggle('marked')
    }
  }

  unmark() {
    this.marked = false
    this.checkerDOM.classList.remove('marked')
  }

  isMarked() {
    return this.marked
  }

  isMovePossible(currentChecker, currentTurnColor) {
    return (
      this.color === currentTurnColor &&
      this.isMarked() &&
      (currentChecker == null || currentChecker !== this)
    )
  }

  moveTo(cell) {
    this.cell.removeChecker()
    this.belongsTo(cell)
    cell.containChecker(this)
  }

  canQueened() {
    return !this.queen && this.cell.x === QUEEN_LINE[this.color]
  }

  makeQueen() {
    this.queen = true
    this.checkerDOM.classList.toggle('queen')
  }

  isQueen() {
    return this.queen
  }
}
