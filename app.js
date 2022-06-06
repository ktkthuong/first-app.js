//const http = require('http'); cách 1 hiển thị chữ Hello from express! ra trang html.

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware!');//Allow the request to continue to the next middleware in line
//     next();
// });
app.use('/',(req, res, next) => {
    console.log('This always run!');
    next();
});


app.use('/add-product',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "Add product" Page</h1>');
});


app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from express!</h1>');
});

// const server = http.createServer(app); cách 1

// server.listen(3002); cách 1
app.listen(3002);//cách 2 y chang, nhanh hơn