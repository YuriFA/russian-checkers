const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000
const path = require('path')

let numPlayers = 0

server.listen(port, () => {
  console.log(`server listening at port ${port}`)
})

app.use(express.static(path.join(__dirname, '/public')))

io.sockets.on('connection', socket => {
  let addedPlayer = false

  socket.emit('message', { message: 'WELCOME' })
  socket.emit('status', { players: numPlayers })

  socket.on('add player', () => {
    if (numPlayers < 2) {
      numPlayers++
      socket.emit('can play', { id: numPlayers })
      addedPlayer = true

      if (numPlayers === 2) {
        socket.broadcast.emit('enemy player connected')
      }
    }
    console.log(`players count: ${numPlayers}`)
  })

  socket.on('move', data => {
    const { from: moveFrom, to: moveTo } = data

    if (moveFrom && moveTo) {
      socket.broadcast.emit('enemy player moved', data)
    }
  })

  socket.on('send', data => {
    if (data && data.message) {
      socket.broadcast.emit('chat message', data)
    }
  })

  socket.on('disconnect', () => {
    if (addedPlayer) {
      console.log('player disconnected')
      numPlayers--
      console.log(`players count: ${numPlayers}`)
      if (numPlayers > 0) {
        socket.broadcast.emit('restart game', { id: numPlayers })
      }
    }
  })
})
