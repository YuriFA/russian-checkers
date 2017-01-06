import GameBoard from './GameBoard'
import { COLORS } from './constants'

const board = document.getElementById('board')

class Checkers {
  constructor (socket) {
    console.time('New board')
    this.board = new GameBoard(board, socket)
    // this.test()
    console.timeEnd('New board')
  }
  // TEST
  test () {
    console.log('TESTING')
    // this.deleteChecker(1, 1)
    this.deleteChecker(1, 3)
    this.deleteChecker(2, 2)
    // this.deleteChecker(3, 1)
    this.deleteChecker(3, 3)
    this.deleteChecker(3, 5)
    // this.deleteChecker(6, 6)
    // this.deleteChecker(6, 8)
    // this.deleteChecker(7, 7)
    // this.deleteChecker(8, 6)
    // this.deleteChecker(8, 8)
    this.testCheckers([
      // {x: 3, y: 1, color: COLORS.checker.light},
      {x: 2, y: 2, color: COLORS.checker.light},
      // {x: 7, y: 7, color: COLORS.checker.dark}
      {x: 4, y: 6, color: COLORS.checker.dark}
    ])
  }

  testCheckers (checkers) {
    checkers.forEach((checker) => {
      const testCell = document.getElementById(`cell_${checker.x}_${checker.y}`).obj
      this.board.createChecker(checker.color, testCell)
    })
  }

  deleteChecker (x, y) {
    const cell = document.getElementById(`cell_${x}_${y}`).obj
    if (!cell || !cell.checker) return false
    cell.removeChecker()
    return true
  }
}

window.onload = () => {
  const socket = io()
  socket.emit('add player')
  socket.on('can play', (data) => {
    console.log('emited can play', data, data && data.id);
    if (data && data.hasOwnProperty('id')) {
      window.checkers = new Checkers(socket);
      console.log('You can play');
      if (data.id === 1) {
        board.style.transform = 'rotate(180deg)';
        window.checkers.board.start();
      }
    }
  });
  socket.on('message', (data) => {
    console.log(data);
  });
  socket.on('start game', () => {
    console.log('all players ready to start game');
    window.checkers.board.start()
  });
  socket.on('player moved', (data) => {
    const game = window.checkers;
    if (game) {
      console.log(data);
      const checker = game.board.getCell(data.from).checker;
      const cell = game.board.getCell(data.to);
      if (checker && cell) {
        checker.checkerDOM.click();
        cell.cellDOM.click();
      }
    }
  });

  console.log('Loaded')
}
