class Checker {
  constructor (color) {
    this.color = color
    this.cell = null
    this.checkerDOM = (() => {
      const checker = document.createElement('div')
      checker.className = `checker checker__${this.color}`
      if (!checker.hasOwnProperty('obj')) {
        checker.obj = this
      }
      // checker.addEventListener('click', clickHandle.bind(this))
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
    this.checkerDOM.classList.toggle('marked')
  }
  unmark () {
    this.checkerDOM.classList.remove('marked')
  }
  isMarked () {
    return this.checkerDOM.classList.contains('marked')
  }
  isMovePossible (currentChecker, currentTurnColor) {
    return this.color === currentTurnColor && this.isMarked() && (currentChecker == null || currentChecker !== this)
  }
  moveTo (cell) {
    this.cell.removeChecker()
    this.belongsTo(cell)
    cell.containChecker(this)
  }
}

export default Checker
