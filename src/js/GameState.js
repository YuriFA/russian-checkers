import { COLORS, BG_COLORS } from './constants'
export default class GameState {
  constructor () {
    this.TURNS = [ COLORS.checker.light, COLORS.checker.dark ]
    // 0 - light, 1 - dark
    this.gameStarted = false
    this.currentTurn = this.TURNS[0]
    this.turnsCount = 0
    this.currentChecker = null
    this.updateInfo()
  }

  startGame () {
    this.gameStarted = true
  }

  endGame () {
    if (this.gameStarted) {
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

  updateInfo () {
    if (this.gameStarted) {
      const turnsCountDOM = document.getElementById('turns_count')
      const turnColorDOM = document.getElementById('current_turn_color')
      turnsCountDOM.textContent = this.turnsCount
      turnColorDOM.style.backgroundColor = BG_COLORS[ this.currentTurn ]
    }
  }
}
