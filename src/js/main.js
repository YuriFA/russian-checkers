import { Checkers, CheckersOnline } from './Checkers'

window.onload = () => {
  const homeDOM = document.getElementById('home')
  const gameDOM = document.getElementById('game')
  const boardDOM = document.getElementById('board')
  const newGamePopup = document.getElementById('new_game_popup')
  const showGame = () => {
    homeDOM.style.height = '0'
    gameDOM.style.height = '100%'
  }
  const createSoloBtn = document.getElementById('create_solo')
  const createOnlineBtn = document.getElementById('create_online')
  const createOnlineRoom = document.getElementById('create_room')

  createSoloBtn.addEventListener('click', (e) => {
    window.game = new Checkers(boardDOM)
    window.game.start()
    showGame()
  })

  createOnlineBtn.addEventListener('click', (e) => {
    newGamePopup.style.left = '0'
    newGamePopup.style.opacity = '1'
    document.body.classList.toggle('popup_showing')
  })

  document.body.addEventListener('click', function (e) {
    const className = this.getAttribute('class')
    if (className && className.indexOf('popup_showing') !== -1 && e.target === newGamePopup) {
      newGamePopup.style.left = '-100%'
      newGamePopup.style.opacity = '0'
      document.body.classList.remove('popup_showing')
    }
  })

  createOnlineRoom.addEventListener('click', function (e) {
    const name = newGamePopup.querySelector('#game_name').value || 'Без названия'


  })

  // window.game = online ? new CheckersOnline(boardDOM) : new Checkers(boardDOM)
}
