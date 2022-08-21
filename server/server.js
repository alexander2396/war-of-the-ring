const http = require("http");
const express = require('express');
const path = require('path');
const socketio = require('socket.io');

const app = express();

app.use(express.static(path.join(__dirname + "/public")));

const PORT = process.env.PORT || 3001

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
});

io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
      return next(new Error("invalid username"));
    }
    socket.username = username;
    next();

    socket.on('disconnect', () => {
        io.emit("users", _getAllUsers());
    });
});

io.on("connection", (socket) => {
    io.emit("users", _getAllUsers());
});

function _getAllUsers() {
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username,
        });

    }
    return users;
}



server.on('error', (err) => {
    console.error(err);
});

server.listen(PORT, () => {
    console.log('server is ready');
});