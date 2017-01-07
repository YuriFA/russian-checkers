import { COLORS, PLAYER_COLOR, MOVES } from './constants'
import GameBoard from './GameBoard'
import GameState from './GameState'
// import PlayerHuman from './Player'
import Cell from './Cell'

class Checkers {
  constructor (boardDOM, online = false, chatContent = false) {
    console.time('New board')
    this.board = new GameBoard(boardDOM)
    boardDOM.addEventListener('click', this.boardEventHandler.bind(this))
    console.timeEnd('New board')
    this.state = new GameState()
    this.playerColor = COLORS.checker.light
    this.online = online
    this.chatContent = chatContent
    if (online) {
      this.chatMessages = []
      this.socket = io()
      this.bindSocketEvents()
      this.socket.emit('add player')
    } else {
      // this.test()
      this.start()
    }
  }

  start () {
    if (!this.state.gameStarted) {
      this.state.startGame()
      this.markAvailableCheckers()
    }
    console.log('game started')
  }

  bindSocketEvents () {
    this.socket.on('can play', this.onCanPlay.bind(this))
    this.socket.on('message', this.onMessage.bind(this))
    this.socket.on('enemy player connected', this.onEnemyPlayerConnected.bind(this))
    this.socket.on('enemy player moved', this.onEnemyPlayerMoved.bind(this))
    this.socket.on('chat message', this.onChatMessage.bind(this))
  }

  markAvailableCheckers () {
    if (this.canMove()) {
      this.board.markAvailableCheckers(this.state.currentTurn)
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

    return false
  }

  cellClickHandle (e) {
    const cell = e.target.obj
    const checker = this.state.currentChecker
    if (cell instanceof Cell && checker && cell.isHighlighted()) {
      if (this.online) {
        this.socket.emit('move', {
          from: checker.cell.getPosition(),
          to: cell.getPosition()
        })
      }
      this.move(checker, cell)
    }
    return false
  }

  canMove () {
    return this.playerColor === this.state.currentTurn
  }

  move (checker, toCell, isEnemyMove = false) {
    if (!isEnemyMove && this.canMove() || isEnemyMove && !this.canMove()) {
      let moveResult = this.board.move(checker, toCell)
      if (moveResult === MOVES.MOVE_COMPLETED) {
        this.state.setNexnTurn()
        this.markAvailableCheckers(this.state.currentTurn)
      } else if (moveResult === MOVES.CAN_EAT_MORE) {
        // IDK
      }
      this.state.updateInfo()
    }
  }

  onCanPlay (data) {
    if (data && data.hasOwnProperty('id')) {
      console.log('You can play')
      this.playerColor = PLAYER_COLOR[data.id]
      if (data.id === 1) {
        // this.playerColor(COLORS.checker.dark)
        this.board.boardDOM.style.transform = 'rotate(180deg)'
        this.start()
      }
    }
    console.log('cant play')
  }

  onMessage (data) {
    console.log(data.message)
  }

  onEnemyPlayerConnected () {
    console.log('all players ready to start this')
    this.start()
  }

  onEnemyPlayerMoved (data) {
    console.log(data)
    const checker = this.board.getCell(data.from).checker
    const cell = this.board.getCell(data.to)
    if (checker && cell) {
      this.move(checker, cell, true)
    }
  }

  onChatMessage (data) {
    if (data.message) {
      this.addChatMessage(data.message)
    } else {
      console.log(`There is a problem: ${data}`)
    }
  }

  addChatMessage (message) {
    this.chatMessages.push(message)
    var html = ''
    for (var i = 0; i < this.chatMessages.length; i++) {
      html += `${this.chatMessages[i]}<br />`
    }
    if (this.chatContent) {
      this.chatContent.innerHTML = html
    }
  }

  // TEST
  _test () {
    console.log('TESTING')
    this._deleteCheckers([
      {x: 1, y: 3},
      {x: 2, y: 2},
      {x: 3, y: 3},
      {x: 3, y: 5}
    ])
    this._testCheckers([
      {x: 2, y: 2, color: COLORS.checker.light},
      {x: 4, y: 6, color: COLORS.checker.dark}
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

window.onload = () => {
  const boardDOM = document.getElementById('board')
  const chatContent = document.getElementById('chat_content')
  const messageField = document.getElementById('message')
  const send = document.getElementById('send')

  const online = true

  var game = new Checkers(boardDOM, online, chatContent)

  send.addEventListener('click', () => {
    var text = `${game.playerColor}: ${messageField.value}`
    game.socket.emit('send', { message: text })
    messageField.value = ''
    game.addChatMessage(text)
  })
  // console.log('Loaded')
}
