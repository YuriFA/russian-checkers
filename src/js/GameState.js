import { COLORS, BG_COLORS } from './constants'
export default class GameState {
  constructor () {
    this.infoDOM = document.getElementById('info')
    this.TURNS = [ COLORS.checker.light, COLORS.checker.dark ]
    // 0 - light, 1 - dark
    this.gameStarted = false
    this.currentTurn = this.TURNS[0]
    this.turnsCount = 0
    this.currentChecker = null
  }

  startGame () {
    this.gameStarted = true
    this.showInfo()
  }

  endGame () {
    if (this.gameStarted) {
      this.gameStarted = false
      this.currentChecker = null
      this.currentTurn = null
    }
  }

  setNexnTurn () {
    if (this.gameStarted) {
      this.turnsCount++
      this.currentTurn = this.TURNS[ this.turnsCount % 2 ]
    }
  }

  showInfo () {
    this.infoDOM.style.display = 'block'
    this.updateInfo()
  }

  updateInfo () {
    if (this.gameStarted) {
      const turnsCountDOM = document.getElementById('turns_count')
      const turnColorDOM = document.getElementById('current_turn_color')
      this.infoDOM.style.visibility = 'visible'
      turnsCountDOM.textContent = this.turnsCount
      turnColorDOM.style.backgroundColor = BG_COLORS[ this.currentTurn ]
    } else {
      this.infoDOM.style.visibility = 'hidden'
    }
  }
}
