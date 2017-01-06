const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const path = require('path');

server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

app.use(express.static(path.join(__dirname, '/public')));

let numPlayers = 0;

io.sockets.on('connection', (socket) => {
  let addedPlayer = false;
  socket.emit('message', { message: 'WELCOME' });
  socket.on('add player', () => {
    if (numPlayers < 2) {
      socket.emit('can play', { id: numPlayers });
      numPlayers++;
      addedPlayer = true;
      if (numPlayers === 2) {
        socket.broadcast.emit('start game');
      }
    }
    console.log(`Players count: ${numPlayers}`);
  });
  socket.on('move', (data) => {
    if (data && data.from && data.to) {
      socket.broadcast.emit('player moved', data)
    }
  });
  socket.on('disconnect', () => {
    if (addedPlayer) {
      console.log('Player disconnected');
      numPlayers--;
    }
  })
});
