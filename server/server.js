const http = require("http");
const express = require('express');
const path = require('path');
const socketio = require('socket.io');

const app = express();

app.use(express.static(path.join(__dirname + "/public")));

const PORT = process.env.PORT || 3000

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: "http://localhost:3001",
      methods: ["GET", "POST"]
    }
})

io.on('connection', (sock) => {
    sock.emit('message', 'You are connected');
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(PORT, () => {
    console.log('server is ready');
});