const mongoClient = require('../mongo-client');

exports.subscribe = async function (socket, io) {
    socket.on("use-free-people-ring", async ({key, ring}) => {
        const collection = await mongoClient.gamesCollection();

        const game = await collection.find({ 'key': key }).next();

        game.gameState.rings.freePeople = game.gameState.rings.freePeople.filter(x => x.number !== ring.number);
        game.gameState.rings.sauronForces.push(ring);

        await collection.updateOne({ 'key': key },  { $set: {"gameState.rings.freePeople": game.gameState.rings.freePeople } });
        await collection.updateOne({ 'key': key }, { $set: {"gameState.rings.sauronForces": game.gameState.rings.sauronForces } });

        io.to(key).emit("room-message", `${socket.username} used ring.`);
        io.to(key).emit("game-updated", game);
    });

    socket.on("use-sauron-forces-ring", async ({key, ring}) => {
        const collection = await mongoClient.gamesCollection();

        const game = await collection.find({ 'key': key }).next();

        game.gameState.rings.sauronForces = game.gameState.rings.sauronForces.filter(x => x.number !== ring.number);;

        await collection.updateOne({ 'key': key }, { $set: {"gameState.rings.sauronForces": game.gameState.rings.sauronForces } });

        io.to(key).emit("room-message", `${socket.username} used ring.`);
        io.to(key).emit("game-updated", game);
    });
}
