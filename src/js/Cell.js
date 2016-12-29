import {COLORS, WH} from './constants'

export default class Cell {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.id = `cell_${x}_${y}`
    this.color = COLORS.cell[ x % 2 === y % 2 ]
    this.checker = null
    this.cellDOM = (() => {
      const cell = document.createElement('div')
      cell.id = this.id
      cell.className = `cell cell__${this.color}`
      cell.style.width = `${WH}%`
      cell.style.height = `${WH}%`
      if (!cell.hasOwnProperty('obj')) {
        cell.obj = this
      }
      return cell
    })()
  }

  // public methods
  getPosition () {
    return {
      x: this.x,
      y: this.y
    }
  }
  containChecker (checker) {
    this.checker = checker
  }
  hasChecker () {
    return this.checker != null
  }
  removeChecker () {
    if (this.checker) {
      this.cellDOM.removeChild(this.checker.checkerDOM)
      this.checker = null
    }
  }
  highlight () {
    this.cellDOM.classList.toggle('highlight')
  }
  unhighlight () {
    this.cellDOM.classList.remove('highlight')
  }
  isHighlighted () {
    return this.cellDOM.classList.contains('highlight')
  }
}
