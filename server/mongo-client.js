const { MongoClient } = require("mongodb");
const mongoDbUri = process.env.MONGODB_URI;

const client = new MongoClient(mongoDbUri, { useUnifiedTopology: true });

exports.gamesCollection = async function () {
    await client.connect();

    const database = client.db('alex-cluster');

    return database.collection('games');
}
