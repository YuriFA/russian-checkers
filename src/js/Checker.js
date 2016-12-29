export default class Checker {
  constructor (color) {
    this.color = color
    this.cell = null
    this.marked = false
    this.queen = false
    this.checkerDOM = (() => {
      const checker = document.createElement('div')
      checker.className = `checker checker__${this.color}`
      if (!checker.hasOwnProperty('obj')) {
        checker.obj = this
      }
      return checker
    })()
  }

  // public methods
  activate () {
    this.checkerDOM.classList.toggle('active')
  }
  belongsTo (cell) {
    this.cell = cell
    if (cell) {
      cell.cellDOM.appendChild(this.checkerDOM)
    }
  }
  mark () {
    this.marked = true
    this.checkerDOM.classList.toggle('marked')
  }
  unmark () {
    this.marked = false
    this.checkerDOM.classList.remove('marked')
  }
  isMarked () {
    return this.marked
  }
  isMovePossible (currentChecker, currentTurnColor) {
    return this.color === currentTurnColor && this.isMarked() && (currentChecker == null || currentChecker !== this)
  }
  moveTo (cell) {
    this.cell.removeChecker()
    this.belongsTo(cell)
    cell.containChecker(this)
  }
  makeQueen () {
    this.queen = true
    this.checkerDOM.classList.toggle('queen')
  }
  isQueen () {
    this.queen
  }
}
