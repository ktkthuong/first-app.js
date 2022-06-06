const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');//Allow the request to continue to the next middleware in line
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from express!</h1>');
});

const server = http.createServer(app);

server.listen(3002);