const http = require("http");
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../client/build`));

const PORT = process.env.PORT || 3000

const server = http.createServer(app);

server.on('error', (err) => {
    console.error(err);
});

server.listen(PORT, () => {
    console.log('server is ready');
});