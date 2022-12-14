const mongoClient = require('../mongo-client');

const Side = {
    FreePeople: 0,
    SauronForces: 1
}

const UnitType = {
    Regular: 0,
    Elite: 1,
    Leader: 2
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

    socket.on("capture-region", async ({_id, regionKey, captured}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let region = game.gameState.regions.find(x => x.key === regionKey);

        region.captured = captured;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": region.key }, 
            { $set: {"gameState.regions.$.captured": region.captured } });

        io.to(_id).emit("room-message", `${socket.username} updated ${regionKey} is captured.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("downgrade-unit", async ({_id, regionKey, unitKey}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let region = game.gameState.regions.find(x => x.key === regionKey);
        let unit = region.units.find(x => x.key === unitKey);

        if (unit.type !== UnitType.Elite) return;

        if (unit.side === Side.SauronForces) {
            let regular =  game.gameState.unitsPool.find(x => x.faction === unit.faction && x.type === UnitType.Regular);
            if (!regular) return;
    
            region.units = region.units.filter(x => x.key !== unit.key);
            region.units.push(regular);
    
            game.gameState.unitsPool = game.gameState.unitsPool.filter(x => x.key !== regular.key);
            game.gameState.unitsPool.push(unit);
        }

        if (unit.side === Side.FreePeople) {
            let regular = game.gameState.deadUnits.find(x => x.faction === unit.faction && x.type === UnitType.Regular);
    
            if (regular) {
                game.gameState.deadUnits = game.gameState.deadUnits.filter(x => x.key !== regular.key);
            } else {
                regular = game.gameState.unitsPool.find(x => x.faction === unit.faction && x.type === UnitType.Regular);
    
                if (!regular) return;
    
                game.gameState.unitsPool = game.gameState.unitsPool.filter(x => x.key !== regular.key);
            }
    
            region.units = region.units.filter(x => x.key !== unit.key);
            region.units.push(regular);
    
            game.gameState.deadUnits.push(unit);
        }

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": region.key }, 
            { $set: {"gameState.regions.$.units": region.units } });
    
        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.unitsPool": game.gameState.unitsPool } });

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.deadUnits": game.gameState.deadUnits } });

        
        io.to(_id).emit("room-message", `${socket.username} downgraded unit in ${regionKey}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("move-dead-unit-to-pool", async ({_id, unitKey}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let unit = game.gameState.deadUnits.find(x => x.key === unitKey);

        game.gameState.unitsPool.push(unit);

        game.gameState.deadUnits = game.gameState.deadUnits.filter(x => x.key !== unit.key);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.unitsPool": game.gameState.unitsPool } });

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.deadUnits": game.gameState.deadUnits } });

            
        io.to(_id).emit("room-message", `${socket.username} moved unit from dead to pool.`);
        io.to(_id).emit("game-updated", game);
    });
}