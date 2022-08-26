const http = require("http");
const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const JSONFileStorage = require('node-json-file-storage');

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

const file_uri = __dirname + "/data.json";
const storage = new JSONFileStorage(file_uri);

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

    socket.on("new-game", (game) => {
        storage.put(game);
        io.emit("games", storage.all());
    });

    socket.on("join-game", (key) => {
        const game = storage.get(key);
        
        if (game.sauronForcesPlayer !== null && game.freePeoplePlayer !== null)
            return;

        game.sauronForcesPlayer === null
            ? game.sauronForcesPlayer = socket.username
            : game.freePeoplePlayer = socket.username;
        storage.put(game);
        io.emit("games", storage.all());
    });
});

io.on("connection", (socket) => {
    io.emit("users", _getAllUsers());
    io.emit("games", storage.all());
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

function _createGame() {
    return storage.put(obj_1);
}














server.on('error', (err) => {
    console.error(err);
});

server.listen(PORT, () => {
    console.log('server is ready');
});