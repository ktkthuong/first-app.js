//const http = require('http'); cách 1 hiển thị chữ Hello from express! ra trang html.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();



// app.use((req, res, next) => {
//     console.log('In the middleware!');//Allow the request to continue to the next middleware in line
//     next();
// });
app.use(bodyParser.urlencoded({extended: false})); 


app.use('/add-product',(req, res, next) => {
    
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req, res, next) => {
    
    res.send('<h1>Hello from express!</h1>');
});

// const server = http.createServer(app); cách 1

// server.listen(3002); cách 1
app.listen(3002);//cách 2 y chang, nhanh hơn