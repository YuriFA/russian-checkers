import io from 'socket.io-client'

import { Checkers, CheckersOnline } from './game/Checkers'

require('./styles/main.sass')

window.onload = () => {
  const homeDOM = document.getElementById('home')
  const gameDOM = document.getElementById('game')
  const boardDOM = document.getElementById('board')
  const newGamePopup = document.getElementById('new_game_popup')
  const createSoloBtn = document.getElementById('create_solo')
  const createOnlineBtn = document.getElementById('create_online')
  const createOnlineRoom = document.getElementById('create_room')

  const socket = io()
  socket.on('status', ({ players }) => {
    console.log({ players })
    if (!window.currentCheckersGame && players > 0) {
      window.currentCheckersGame = new CheckersOnline(boardDOM, socket)
      showGame()
    }
  })

  const showGame = () => {
    homeDOM.style.height = '0'
    gameDOM.style.height = '100%'
  }

  const openPopup = () => {
    newGamePopup.style.left = '0'
    newGamePopup.style.opacity = '1'
    document.body.classList.toggle('popup_showing')
  }

  const closePopup = () => {
    newGamePopup.style.left = '-100%'
    newGamePopup.style.opacity = '0'
    document.body.classList.remove('popup_showing')
  }

  const handleClosePopup = event => {
    const { target, currentTarget } = event
    const className = currentTarget.getAttribute('class')

    if (
      className &&
      className.indexOf('popup_showing') !== -1 &&
      target === newGamePopup
    ) {
      closePopup()
    }
  }

  const handleCreateOnlineClick = event => {
    openPopup()
  }

  const handleCreateSoloClick = event => {
    window.currentCheckersGame = new Checkers(boardDOM)
    window.currentCheckersGame.start()
    showGame()
  }

  const handleConfirmCreateOnlineClick = event => {
    const name =
      newGamePopup.querySelector('#game_name').value || 'Без названия'

    window.currentCheckersGame = new CheckersOnline(boardDOM)

    closePopup()
    showGame()
  }

  createSoloBtn.addEventListener('click', handleCreateSoloClick)
  createOnlineBtn.addEventListener('click', handleCreateOnlineClick)
  document.body.addEventListener('click', handleClosePopup)

  createOnlineRoom.addEventListener('click', handleConfirmCreateOnlineClick)

  // window.currentCheckersGame = online ? new CheckersOnline(boardDOM) : new Checkers(boardDOM)
}
