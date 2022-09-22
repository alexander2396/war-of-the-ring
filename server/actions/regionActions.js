const mongoClient = require('../mongo-client');

const Side = {
    FreePeople: 0,
    SauronForces: 1
}

exports.subscribe = async function (socket, io) {
    socket.on("move-units", async ({_id, regionFromKey, regionToKey, units}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let regionFrom = game.gameState.regions.find(x => x.key === regionFromKey);
        let regionTo = game.gameState.regions.find(x => x.key === regionToKey);

        regionFrom.units = regionFrom.units.filter(x => !units.map(u => u.key).includes(x.key));
        units.forEach(x => regionTo.units.push(x));

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": regionFrom.key }, 
            { $set: {"gameState.regions.$.units": regionFrom.units } });

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": regionTo.key }, 
            { $set: {"gameState.regions.$.units": regionTo.units } });

        io.to(_id).emit("room-message", `${socket.username} moved army from ${regionFromKey} to ${regionToKey}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("remove-units", async ({_id, regionKey, units}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let region = game.gameState.regions.find(x => x.key === regionKey);

        region.units = region.units.filter(x => !units.map(u => u.key).includes(x.key));

        let fpUnits = units.filter(x => x.side === Side.FreePeople);
        fpUnits.forEach(x => game.gameState.deadUnits.push(x));

        let sfUnits = units.filter(x => x.side === Side.SauronForces);
        sfUnits.forEach(x => game.gameState.unitsPool.push(x));

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": region.key }, 
            { $set: {"gameState.regions.$.units": region.units } });

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.deadUnits": game.gameState.deadUnits } });

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.unitsPool": game.gameState.unitsPool } });

        io.to(_id).emit("room-message", `${socket.username} removed units in ${regionKey}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("add-unit", async ({_id, regionKey, unit}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let region = game.gameState.regions.find(x => x.key === regionKey);

        region.units.push(unit);

        game.gameState.unitsPool = game.gameState.unitsPool.filter(x => x.key !== unit.key);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": region.key }, 
            { $set: {"gameState.regions.$.units": region.units } });

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.unitsPool": game.gameState.unitsPool } });

        io.to(_id).emit("room-message", `${socket.username} added unit in ${regionKey}.`);
        io.to(_id).emit("game-updated", game);
    });

    // socket.on("update-units-pool", async ({_id, units}) => {
    //     const collection = await mongoClient.gamesCollection();
    //     const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

    //     await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
    //         { $set: {"gameState.unitsPool": units } });

    //     io.to(_id).emit("room-message", `${socket.username} updated units pool.`);
    //     io.to(_id).emit("game-updated", game);
    // });
}