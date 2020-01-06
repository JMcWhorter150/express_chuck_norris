const http = require('http');
const express = require('express');
const PORT = 3000;
const app = express();
const chuck = require('./chuck');

const server = http.createServer(app);

app.get(`/`, (req, res) => {
    res.send(`Please enter joke/YOURNAME in the URL`);
})

app.get(`/joke`, (req, res) => {
    chuck.getJoke()
        .then(r => {
            res.send(r);
        })
})

app.get(`/joke/:name`, (req, res) => {
    chuck.getJoke()
        .then( r => {
            content = r.replace("Chuck Norris", req.params.name)
            res.send(content);
        })
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})