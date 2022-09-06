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

    socket.on('disconnecting', function(){
        socket.rooms.forEach(room => {
            io.to(room).emit("user-leaved", `${socket.username} has leaved`);
        })
    });

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

    socket.on("room-message", ({key, message}) => {
        io.to(key).emit("room-message", message);
    });

    socket.on("update-game", ({key, gameState, message}) => {
        const game = storage.get(key);

        let isNewGame = false;
        if (game.gameState.gameStarted !== gameState.gameStarted) {
            isNewGame = true;
        }

        if (!isNewGame) {
            if (game.freePeoplePlayer === socket.username) {
                gameState.dices.sauronForces = game.gameState.dices.sauronForces;
                gameState.cards.sauronForces = game.gameState.cards.sauronForces;
            } else {
                gameState.dices.freePeople = game.gameState.dices.freePeople;
                gameState.cards.freePeople = game.gameState.cards.freePeople;
            }
        }

        game.gameState = gameState;

        storage.put(game);

        io.to(key).emit("room-message", message);
        io.to(key).emit("game-updated", game);

        if (isNewGame) {
            io.emit("games", storage.all());
        }
    });

    socket.on("enter-game", (key) => {
        socket.join(key);

        io.to(key).emit("room-message", `${socket.username} has joined`);
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