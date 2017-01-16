import { COLORS, PLAYER_COLOR, MOVES } from './constants'
import GameBoard from './GameBoard'
import GameState from './GameState'
import Cell from './Cell'
import Chat from './Chat'

export class Checkers {
  constructor (boardDOM) {
    this.board = new GameBoard(boardDOM)
    boardDOM.addEventListener('click', this.boardEventHandler.bind(this))
    this.state = new GameState()
    this.playerColor = COLORS.checker.light
    this._test()
  }

  start () {
    if (!this.state.gameStarted) {
      this.board.show()
      this.state.startGame()
      this.markAvailableCheckers()
    }
    console.log('game started')
  }

  restart () {
    let boardDOM = this.board.boardDOM
    boardDOM.innerHTML = ''
    this.board = new GameBoard(boardDOM)
    this.state.endGame()
    this.state = new GameState()
  }

  markAvailableCheckers () {
    let result = this.board.markAvailableCheckers(this.state.currentTurn)
    console.log(result)
    if (!result) {
      this.state.setWinner(this.state.prevTurn)
    }
  }

  boardEventHandler (e) {
    const elClass = e.target.getAttribute('class')
    if (elClass) {
      if (elClass.indexOf('cell') !== -1) {
        this.cellClickHandle(e)
      } else if (elClass.indexOf('checker') !== -1) {
        this.checkerClickHandle(e)
      }
    }
    return false
  }

  checkerClickHandle (e) {
    const checker = e.target.obj
    this.board.deactivateCheckers()
    if (checker !== undefined && checker.isMovePossible(this.state.currentChecker, this.state.currentTurn)) {
      const availableMoves = this.board.getAvailableMoves(checker)
      checker.activate()
      this.board.showMoves(availableMoves.moves)
      this.state.currentChecker = checker
    } else {
      this.state.currentChecker = null
    }

    return true
  }

  cellClickHandle (e) {
    const cell = e.target.obj
    const checker = this.state.currentChecker
    if (cell instanceof Cell && checker && cell.isHighlighted()) {
      this.move(checker, cell)
    }
    return true
  }

  move (checker, toCell) {
    let moveResult = this.board.move(checker, toCell)
    if (moveResult === MOVES.MOVE_COMPLETED) {
      this.state.setNexnTurn()
      this.markAvailableCheckers(this.state.currentTurn)
    }
    this.state.updateInfo()
  }

  // TEST
  _test () {
    console.log('TESTING')
    this._deleteCheckers([
      {x: 1, y: 1},
      {x: 1, y: 3},
      {x: 1, y: 5},
      {x: 1, y: 7},
      {x: 2, y: 2},
      {x: 2, y: 4},
      {x: 2, y: 6},
      {x: 2, y: 8}
    ])
    this._testCheckers([
      {x: 2, y: 2, color: COLORS.checker.light}
      // {x: 4, y: 6, color: COLORS.checker.dark}
    ])
  }

  _testCheckers (checkers) {
    checkers.forEach((checker) => {
      const testCell = document.getElementById(`cell_${checker.x}_${checker.y}`).obj
      this.board.createChecker(checker.color, testCell)
    })
  }

  _deleteCheckers (positions) {
    positions.forEach((pos) => {
      const cell = document.getElementById(`cell_${pos.x}_${pos.y}`).obj
      if (!cell || !cell.checker) return false
      cell.removeChecker()
    })
    return true
  }
}

export class CheckersOnline extends Checkers {
  constructor (boardDOM) {
    super(boardDOM)
    this.socket = io()
    this.bindSocketEvents()
    this.socket.emit('add player')
    this.chat = new Chat()
    this.chat.changeSendEvent(this.chatClickHandler.bind(this))
  }

  start () {
    super.start()
    this.chat.show()
  }

  canMove () {
    return this.playerColor === this.state.currentTurn
  }

  markAvailableCheckers () {
    if (this.canMove()) {
      super.markAvailableCheckers(this.state.currentTurn)
    }
  }

  move (checker, toCell, isEnemyMove = false) {
    if (!isEnemyMove && this.canMove() || isEnemyMove && !this.canMove()) {
      super.move(checker, toCell)
    }
  }

  bindSocketEvents () {
    this.socket
      .on('can play', this.onCanPlay.bind(this))
      .on('message', this.onMessage.bind(this))
      .on('enemy player connected', this.onEnemyPlayerConnected.bind(this))
      .on('enemy player moved', this.onEnemyPlayerMoved.bind(this))
      .on('chat message', this.onChatMessage.bind(this))
      .on('restart game', this.onRestartGame.bind(this))
  }

  cellClickHandle (e) {
    const cell = e.target.obj
    const checker = this.state.currentChecker
    if (cell instanceof Cell && checker && cell.isHighlighted()) {
      this.socket.emit('move', {
        from: checker.cell.getPosition(),
        to: cell.getPosition()
      })
      this.move(checker, cell)
    }
    return true
  }

  chatClickHandler (e) {
    if (this.chat && this.socket) {
      var text = this.chat.messageField.value
      if (text.length) {
        text = `${this.playerColor}: ${text}`
        this.socket.emit('send', { message: text })
        this.chat.clearField()
          .addMessage(text)
      }
    }
  }
  // todo FIX THIS SHIT
  onCanPlay (data) {
    if (data && data.hasOwnProperty('id')) {
      console.log('you can play')
      this.playerColor = PLAYER_COLOR[data.id]
      if (data.id === 2) {
        this.board.boardDOM.style.transform = 'rotate(180deg)'
        this.start()
      } else {
        this.board.boardDOM.style.transform = 'rotate(0deg)'
      }
    } else {
      console.log('cant play')
    }
  }

  onMessage (data) {
    console.log(`message: ${data.message}`)
  }

  onEnemyPlayerConnected () {
    this.start()
    console.log('all players ready to start game')
  }

  onEnemyPlayerMoved (data) {
    const checker = this.board.getCell(data.from).checker
    const cell = this.board.getCell(data.to)
    if (checker && cell) {
      this.move(checker, cell, true)
      console.log(`enemy moved from: ${data.from.x},${data.from.y} to: ${data.to.x},${data.to.y}`)
    }
  }

  onChatMessage (data) {
    if (data.message) {
      this.chat.addMessage(data.message)
    } else {
      console.log(`there is a problem: ${data}`)
    }
  }

  onRestartGame (data) {
    this.onCanPlay(data)
    this.restart()
    console.log(`restarting game...\nwait for players...`)
  }
}
