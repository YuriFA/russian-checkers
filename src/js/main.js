import { Checkers, CheckersOnline } from './Checkers'

window.onload = () => {
  const boardDOM = document.getElementById('board')
  const online = true

  window.game = online ? new CheckersOnline(boardDOM) : new Checkers(boardDOM)
}
