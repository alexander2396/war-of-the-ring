const { MongoClient } = require("mongodb");
const mongoDbUri = 'mongodb+srv://kalaha1996:morisson11@alex-cluster.n99rymc.mongodb.net/test';

const client = new MongoClient(mongoDbUri, { useUnifiedTopology: true });

exports.gamesCollection = async function () {
    await client.connect();

    const database = client.db('alex-cluster');

    return database.collection('games');
}
