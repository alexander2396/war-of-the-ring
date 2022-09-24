const mongoClient = require('../mongo-client');

exports.subscribe = async function (socket, io) {
    socket.on("move-fellowship-to-region", async ({_id, destinationKey}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        let currentLocation = game.gameState.regions.find(x => x.isFellowshipHere);
        let destination = game.gameState.regions.find(x => x.key === destinationKey);
    
        currentLocation.isFellowshipHere = false;
        destination.isFellowshipHere = true;
        
        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": currentLocation.key }, 
            { $set: {"gameState.regions.$.isFellowshipHere": currentLocation.isFellowshipHere } });
            
        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": destination.key }, 
            { $set: {"gameState.regions.$.isFellowshipHere": destination.isFellowshipHere } });
        
        io.to(_id).emit("room-message", `Fellowship revealed in ${destination.key}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("set-fellowship-track-position", async ({_id, position}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();
        
        game.gameState.fellowship.trackPosition = position;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.fellowship.trackPosition": position } });
        
        io.to(_id).emit("room-message", `${socket.username} set fellowship track position to ${position}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("set-corruption", async ({_id, corruption}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();
        
        game.gameState.fellowship.corruption = corruption;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.fellowship.corruption": corruption } });
        
        io.to(_id).emit("room-message", `${socket.username} set corruption to ${corruption}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("reveal-fellowship", async ({_id}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();
        
        game.gameState.fellowship.isRevealed = true;
        game.gameState.fellowship.trackPosition = 0;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.fellowship": game.gameState.fellowship } });
        
        io.to(_id).emit("room-message", `${socket.username} revealed fellowship.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("hide-fellowship", async ({_id}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();
        
        game.gameState.fellowship.isRevealed = false;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.fellowship.isRevealed": game.gameState.fellowship.isRevealed } });
        
        io.to(_id).emit("room-message", `${socket.username} hide fellowship.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("set-mordor-track", async ({_id, mordorPosition}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();
        
        game.gameState.fellowship.mordorPosition = mordorPosition;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.fellowship.mordorPosition": game.gameState.fellowship.mordorPosition } });
        
        io.to(_id).emit("room-message", `${socket.username} moved fellowship in Mordor on track ${mordorPosition}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("kill-random-companion", async ({_id}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();
        
        let fellowship = game.gameState.regions.find(x => x.key === 'fellowship');
        let target = fellowship.units[Math.floor(Math.random() * fellowship.units.length)];

        fellowship.units = fellowship.units.filter(x => x.hero !== target.hero);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id), "gameState.regions.key": fellowship.key }, 
            { $set: {"gameState.regions.$.units": fellowship.units } });
        
        let heroName;
        switch(target.hero) {
            case 0: heroName = 'Gandalf'; break;
            case 1: heroName = 'Aragorn'; break;
            case 2: heroName = 'Legolas'; break;
            case 3: heroName = 'Gimli'; break;
            case 4: heroName = 'Boromir'; break;
            case 5: heroName = 'Merry'; break;
            case 6: heroName = 'Pippin'; break;
        }

        io.to(_id).emit("room-message", `${socket.username} killed ${heroName}.`);
        io.to(_id).emit("game-updated", game);
    });
}