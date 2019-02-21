/* eslint-disable no-console */
import io from 'socket.io-client'

import { COLORS, PLAYER_COLOR, MOVES } from './constants'
import GameBoard from './GameBoard'
import GameState from './GameState'
import Cell from './Cell'
import Chat from './Chat'

export class Checkers {
  constructor(boardDOM) {
    this.board = new GameBoard(boardDOM)
    this.state = new GameState()
    this.playerColor = COLORS.checker.light

    boardDOM.addEventListener('click', this.boardEventHandler.bind(this))
  }

  start() {
    if (!this.state.gameStarted) {
      this.board.show()
      this.state.startGame()
      this.markAvailableCheckers()
    }
    console.log('game started')
  }

  restart() {
    const { boardDOM } = this.board

    boardDOM.innerHTML = ''
    this.board = new GameBoard(boardDOM)
    this.state.endGame()
    this.state = new GameState()
  }

  markAvailableCheckers() {
    const result = this.board.markAvailableCheckers(this.state.currentTurn)

    if (!result) {
      this.state.setWinner(this.state.prevTurn)
    }
  }

  boardEventHandler(e) {
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

  checkerClickHandle(event) {
    const {
      target: { obj: checker },
    } = event

    this.board.deactivateCheckers()

    if (
      checker !== undefined &&
      checker.isMovePossible(this.state.currentChecker, this.state.currentTurn)
    ) {
      const availableMoves = this.board.getAvailableMoves(checker)

      checker.activate()
      this.board.showMoves(availableMoves.moves)
      this.state.currentChecker = checker
    } else {
      this.state.currentChecker = null
    }

    return true
  }

  cellClickHandle(event) {
    const {
      target: { obj: cell },
    } = event
    const { currentChecker: checker } = this.state

    if (cell instanceof Cell && checker && cell.isHighlighted()) {
      this.move(checker, cell)
    }

    return true
  }

  move(checker, toCell) {
    const moveResult = this.board.move(checker, toCell)

    if (moveResult === MOVES.MOVE_COMPLETED) {
      this.state.setNexnTurn()
      this.markAvailableCheckers(this.state.currentTurn)
    }

    this.state.updateInfo()
  }
}

export class CheckersOnline extends Checkers {
  constructor(boardDOM, socket = io()) {
    super(boardDOM)
    this.socket = socket
    this.bindSocketEvents()
    this.socket.emit('add player')
    this.chat = new Chat()
    this.chat.changeSendEvent(this.chatClickHandler.bind(this))
  }

  start() {
    super.start()
    this.chat.show()
  }

  canMove() {
    return this.playerColor === this.state.currentTurn
  }

  markAvailableCheckers() {
    if (this.canMove()) {
      super.markAvailableCheckers(this.state.currentTurn)
    }
  }

  move(checker, toCell, isEnemyMove = false) {
    if ((!isEnemyMove && this.canMove()) || (isEnemyMove && !this.canMove())) {
      super.move(checker, toCell)
    }
  }

  bindSocketEvents() {
    this.socket
      .on('can play', this.onCanPlay.bind(this))
      .on('message', this.onMessage.bind(this))
      .on('enemy player connected', this.onEnemyPlayerConnected.bind(this))
      .on('enemy player moved', this.onEnemyPlayerMoved.bind(this))
      .on('chat message', this.onChatMessage.bind(this))
      .on('restart game', this.onRestartGame.bind(this))
  }

  cellClickHandle(e) {
    const cell = e.target.obj
    const checker = this.state.currentChecker

    if (cell instanceof Cell && checker && cell.isHighlighted()) {
      this.socket.emit('move', {
        from: checker.cell.getPosition(),
        to: cell.getPosition(),
      })
      this.move(checker, cell)
    }

    return true
  }

  chatClickHandler() {
    if (this.chat && this.socket) {
      const {
        messageField: { value: text },
      } = this.chat

      if (text.length) {
        const textWithPlayer = `${this.playerColor}: ${text}`

        this.socket.emit('send', { message: textWithPlayer })
        this.chat.clearField().addMessage(textWithPlayer)
      }
    }
  }

  // todo FIX THIS SHIT
  onCanPlay(data) {
    const { id: playerId = null } = data

    if (playerId) {
      this.playerColor = PLAYER_COLOR[playerId]

      if (playerId === 2) {
        this.board.boardDOM.style.transform = 'rotate(180deg)'
        this.start()
      } else {
        this.board.boardDOM.style.transform = 'rotate(0deg)'
      }
      console.log('You can play')
    } else {
      console.log('You can not play yet')
    }
  }

  onMessage(data) {
    console.log(`message: ${data.message}`)
    return this
  }

  onEnemyPlayerConnected() {
    this.start()
    console.log('all players ready to start game')
  }

  onEnemyPlayerMoved(data) {
    const { from: moveFrom, to: moveTo } = data
    const { checker } = this.board.getCell(moveFrom)
    const cell = this.board.getCell(moveTo)

    if (checker && cell) {
      this.move(checker, cell, true)
      console.log(
        `enemy moved from: ${moveFrom.x},${moveFrom.y} to: ${moveTo.x},${
          moveTo.y
        }`,
      )
    }
  }

  onChatMessage(data) {
    const { message } = data

    if (message) {
      this.chat.addMessage(message)
    } else {
      console.log(`there is a problem: ${data}`)
    }
  }

  onRestartGame(data) {
    this.onCanPlay(data)
    this.restart()
    console.log(`restarting game...\nwait for players...`)
  }
}
