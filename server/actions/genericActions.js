const mongoClient = require('../mongo-client');

function getPoliticsFacitonName(factionNumber) {
    switch(factionNumber) {
        case 0: return 'Elves';
        case 1: return 'Dwarfs';
        case 2: return 'Northmen';
        case 3: return 'Gondor';
        case 4: return 'Rohan';
        case 5: return 'Sauron';
        case 6: return 'Isengard';
        case 7: return 'Easterlings';
    }
}

exports.subscribe = async function (socket, io) {
    socket.on("set-fp-victory-points", async ({_id, value}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        game.gameState.victoryPoints.freePeople = value;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.victoryPoints.freePeople": value } });

        io.to(_id).emit("room-message", `${socket.username} set FP victory points to ${value}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("set-sf-victory-points", async ({_id, value}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        game.gameState.victoryPoints.sauronForces = value;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.victoryPoints.sauronForces": value } });

        io.to(_id).emit("room-message", `${socket.username} set SF victory points to ${value}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("move-politics", async ({_id, politics}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        const requestPolitics = game.gameState.politics.find(x => x.faction === politics.faction);
        requestPolitics.track--;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.politics": game.gameState.politics } });

        io.to(_id).emit("room-message", `${socket.username} moved ${getPoliticsFacitonName(politics.faction)} on political track.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("activate-politics", async ({_id, politics}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        const requestPolitics = game.gameState.politics.find(x => x.faction === politics.faction);
        requestPolitics.isActive = true;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.politics": game.gameState.politics } });

        io.to(_id).emit("room-message", `${socket.username} activated ${getPoliticsFacitonName(politics.faction)}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("add-hunt-tile-to-pool", async ({_id, huntTile}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let requestHuntTile = game.gameState.hunt.drawn.find(x => x.key === huntTile.key);

        game.gameState.hunt.drawn = game.gameState.hunt.drawn.filter(x => x.key !== requestHuntTile.key);
        game.gameState.hunt.pool.push(requestHuntTile);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.hunt": game.gameState.hunt } });

        io.to(_id).emit("room-message", `${socket.username} added ${requestHuntTile.imageUrl} to pool.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("remove-hunt-tile-from-pool", async ({_id, huntTile}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let requestHuntTile = game.gameState.hunt.pool.find(x => x.key === huntTile.key);

        game.gameState.hunt.pool = game.gameState.hunt.pool.filter(x => x.key !== requestHuntTile.key);
        game.gameState.hunt.drawn.push(requestHuntTile);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.hunt": game.gameState.hunt } });

        io.to(_id).emit("room-message", `${socket.username} removed ${requestHuntTile.imageUrl} from pool.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("get-random-hunt-tile-from-pool", async ({_id}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let tile = game.gameState.hunt.pool[Math.floor(Math.random() * game.gameState.hunt.pool.length)]

        game.gameState.hunt.pool = game.gameState.hunt.pool.filter(x => x.key !== tile.key);
        game.gameState.hunt.drawn.push(tile);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.hunt": game.gameState.hunt } });

        io.to(_id).emit("room-message", `${socket.username} drawn ${tile.imageUrl} from pool.`);
        io.to(_id).emit("game-updated", game);
    });
}
