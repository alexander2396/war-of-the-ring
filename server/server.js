const http = require("http");
const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const mongoClient = require('./mongo-client');
const { v4: uuidv4 } = require('uuid');

const ringActions = require('./actions/ringActions');

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

io.use(async (socket, next) => {
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

    socket.on("new-game", async (game) => {
        const collection = await mongoClient.gamesCollection();

        game.key = uuidv4();

        await collection.insertOne(game);

        io.emit("games", await collection.find().toArray());
    });

    socket.on("join-game", async (key) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ 'key': key }).next();
        
        if (game.sauronForcesPlayer !== null && game.freePeoplePlayer !== null)
            return;

        game.sauronForcesPlayer === null
            ? game.sauronForcesPlayer = socket.username
            : game.freePeoplePlayer = socket.username;

        await collection.replaceOne({
            'key': key
        }, game);

        io.emit("games", await collection.find().toArray());
    });

    socket.on("room-message", ({key, message}) => {
        io.to(key).emit("room-message", message);
    });

    socket.on("update-game", async ({key, gameState, message}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ 'key': key }).next();
        
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

        await collection.replaceOne({ 'key': key }, game);

        io.to(key).emit("room-message", message);
        io.to(key).emit("game-updated", game);

        if (isNewGame) {
            io.emit("games", await collection.find().toArray());
        }
    });

    socket.on("enter-game", (key) => {
        socket.join(key);

        io.to(key).emit("room-message", `${socket.username} has joined`);
    });

    await ringActions.subscribe(socket, io);
});



io.on("connection", async () => {
    const collection = await mongoClient.gamesCollection()
    io.emit("users", _getAllUsers());
    io.emit("games", await collection.find().toArray());
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