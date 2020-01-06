const http = require('http');
const express = require('express');
const PORT = 3000;
const app = express();
const chuck = require('./chuck');

const server = http.createServer(app);

app.get(`/`, (req, res) => {
    res.send(`Please enter joke/YOURNAME in the URL`);
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})