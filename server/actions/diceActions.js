const mongoClient = require('../mongo-client');

const DiceType = {
    Character: 0,
    Army: 1,
    Muster: 2,
    ArmyMuster: 3,
    Palantir: 4,
    Eye: 5,
    WillOfTheWest: 6
}

exports.subscribe = async function (socket, io) {
    socket.on("use-fp-dice", async ({_id, diceKey, diceAs}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        if (socket.username !== game.freePeoplePlayer) return;
  
        let dice = game.gameState.dices.freePeople.available.find(x => x.key === diceKey);

        game.gameState.dices.freePeople.available = game.gameState.dices.freePeople.available.filter(x => x.key !== dice.key);

        let usedDice = diceAs ? diceAs : dice;

        game.gameState.dices.freePeople.used.push(usedDice);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.dices.freePeople": game.gameState.dices.freePeople } });
        
        io.to(_id).emit("room-message", dice.type === DiceType.WillOfTheWest
            ? `${socket.username} used ${dice.type} dice as ${usedDice.type}.`
            : `${socket.username} used ${dice.type} dice.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("use-sf-dice", async ({_id, diceKey}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        if (socket.username !== game.sauronForcesPlayer) return;
  
        let dice = game.gameState.dices.sauronForces.available.find(x => x.key === diceKey);
        game.gameState.dices.sauronForces.available = game.gameState.dices.sauronForces.available.filter(x => x.key !== dice.key);
        game.gameState.dices.sauronForces.used.push(dice);

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.dices.sauronForces": game.gameState.dices.sauronForces } });
        
        io.to(_id).emit("room-message", `${socket.username} used ${dice.type} dice.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("roll-fp-dices", async ({_id, dices}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        if (socket.username !== game.freePeoplePlayer) return;
  
        game.gameState.dices.freePeople.available = dices;
        game.gameState.dices.freePeople.used = [];

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.dices.freePeople": game.gameState.dices.freePeople } });

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.turn": game.gameState.turn++ } });
        
        io.to(_id).emit("room-message", `${socket.username} rolled dices.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("roll-sf-dices", async ({_id, available, used}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        if (socket.username !== game.sauronForcesPlayer) return;
  
        game.gameState.dices.sauronForces.available = available;
        game.gameState.dices.sauronForces.used = used;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.dices.sauronForces": game.gameState.dices.sauronForces } });
        
        io.to(_id).emit("room-message", `${socket.username} rolled dices.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("set-sf-hunt-dices", async ({_id, dices}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        if (socket.username !== game.sauronForcesPlayer) return;
  
        game.gameState.dices.sauronForces.hunt = dices;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.dices.sauronForces.hunt": game.gameState.dices.sauronForces.hunt } });
        
        io.to(_id).emit("room-message", `${socket.username} updated SF hunt.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("set-fp-hunt-dices", async ({_id, dices}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        if (socket.username !== game.freePeoplePlayer) return;
  
        game.gameState.dices.freePeople.hunt = dices;

        await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
            { $set: {"gameState.dices.freePeople.hunt": game.gameState.dices.freePeople.hunt } });
        
        io.to(_id).emit("room-message", `${socket.username} updated FP hunt.`);
        io.to(_id).emit("game-updated", game);
    });
}