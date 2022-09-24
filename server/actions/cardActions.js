const mongoClient = require('../mongo-client');

const Side = {
    FreePeople: 0,
    SauronForces: 1
}

const CardType = {
    Strategy: 0,
    Character: 1
}

exports.subscribe = async function (socket, io) {
    socket.on("draw-card", async ({_id, side, cardType}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        const currentPlayerSide = socket.username === game.freePeoplePlayer ? Side.FreePeople : Side.SauronForces;
       
        if (currentPlayerSide !== side) return;

        let deck;

        if (side === Side.FreePeople) {
            if (cardType === CardType.Strategy)
                deck = game.gameState.cards.freePeople.strategyDeck;
            else
                deck = game.gameState.cards.freePeople.characterDeck;
        } else {
            if (cardType === CardType.Strategy)
                deck = game.gameState.cards.sauronForces.strategyDeck;
            else
                deck = game.gameState.cards.sauronForces.characterDeck;
        }

        if (deck.length === 0) return; 

        const card = deck.shift();

        if (side === Side.FreePeople) {
            game.gameState.cards.freePeople.hand.push(card);

            await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                { $set: {"gameState.cards.freePeople": game.gameState.cards.freePeople } });
        } else {
            game.gameState.cards.sauronForces.hand.push(card);
   
            await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                { $set: {"gameState.cards.sauronForces": game.gameState.cards.sauronForces } });
        }

        io.to(_id).emit("room-message", `${socket.username} drawn card.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("draft-card", async ({_id, card, isPlayed}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        const currentPlayerSide = socket.username === game.freePeoplePlayer ? Side.FreePeople : Side.SauronForces;
       
        if (currentPlayerSide !== side) return;

        let hand;
        let draftCards;

        if (card.side === Side.FreePeople) {
            hand = game.gameState.cards.freePeople.hand;
            draftCards = game.gameState.cards.freePeople.draft;
        } else {
            hand = game.gameState.cards.sauronForces.hand;
            draftCards = game.gameState.cards.sauronForces.draft;
        }
    
        let requestedCard = hand.find(x => x.key === card.key);
    
        if (requestedCard) {
            hand.splice(hand.indexOf(requestedCard), 1);  
            
            if (card.side === Side.FreePeople) {
                await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                    { $set: {"gameState.cards.freePeople.hand": game.gameState.cards.freePeople.hand } });
            } else {
                await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                    { $set: {"gameState.cards.sauronForces.hand": game.gameState.cards.sauronForces.hand } });
            }
        } else {
            let activeCards = card.side === Side.FreePeople
                ? game.gameState.cards.freePeople.active
                : game.gameState.cards.sauronForces.active;
    
            requestedCard = activeCards.find(x => x.key === card.key);
    
            activeCards.splice(activeCards.indexOf(requestedCard), 1);

            if (card.side === Side.FreePeople) {
                await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                    { $set: {"gameState.cards.freePeople.active": game.gameState.cards.freePeople.active } });
            } else {
                await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                    { $set: {"gameState.cards.sauronForces.active": game.gameState.cards.sauronForces.active } });
            }
        }
    
        draftCards.push(requestedCard);

        if (card.side === Side.FreePeople) {
            await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                { $set: {"gameState.cards.freePeople.draft": game.gameState.cards.freePeople.draft } });
        } else {
            await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                { $set: {"gameState.cards.sauronForces.draft": game.gameState.cards.sauronForces.draft } });
        }

        io.to(_id).emit("room-message", `${socket.username} ${isPlayed ? 'played' : 'discarded'} card ${card.imageUrl}.`);
        io.to(_id).emit("game-updated", game);
    });

    socket.on("activate-card", async ({_id, card}) => {
        const collection = await mongoClient.gamesCollection();
        const game = await collection.find({ '_id': mongoClient.ObjectId(_id) }).next();

        const currentPlayerSide = socket.username === game.freePeoplePlayer ? Side.FreePeople : Side.SauronForces;
       
        if (currentPlayerSide !== side) return;

        let hand;
        let activeCards;

        if (card.side === Side.FreePeople) {
            hand = game.gameState.cards.freePeople.hand;
            activeCards = game.gameState.cards.freePeople.active;
        } else {
            hand = game.gameState.cards.sauronForces.hand;
            activeCards = game.gameState.cards.sauronForces.active;
        }

        const requestedCard = hand.find(x => x.key === card.key);

        hand.splice(hand.indexOf(requestedCard), 1);
        activeCards.push(requestedCard);

        if (card.side === Side.FreePeople) {
            await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                { $set: {"gameState.cards.freePeople": game.gameState.cards.freePeople } });
        } else {
            await collection.updateOne({ '_id': mongoClient.ObjectId(_id) }, 
                { $set: {"gameState.cards.sauronForces": game.gameState.cards.sauronForces } });
        }

        io.to(_id).emit("room-message", `${socket.username} activated card ${card.imageUrl}.`);
        io.to(_id).emit("game-updated", game);
    });
}
