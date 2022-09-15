const mongoClient = require('../mongo-client');

exports.subscribe = async function (socket, io) {
    socket.on("use-free-people-ring", async ({_id, ring}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        game.gameState.rings.freePeople = game.gameState.rings.freePeople.filter(x => x.number !== ring.number);
        game.gameState.rings.sauronForces.push(ring);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.rings.freePeople": game.gameState.rings.freePeople } });
        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.rings.sauronForces": game.gameState.rings.sauronForces } });

        io.to(_id).emit("room-message", `${socket.username} used ring.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("use-sauron-forces-ring", async ({_id, ring}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        game.gameState.rings.sauronForces = game.gameState.rings.sauronForces.filter(x => x.number !== ring.number);;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, { $set: {"gameState.rings.sauronForces": game.gameState.rings.sauronForces } });

        io.to(_id).emit("room-message", `${socket.username} used ring.`);
        io.to(_id).emit("game-updated", game);
    });
}
