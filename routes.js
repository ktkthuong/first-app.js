const fs = require('fs');
//function requestHandler(req, res){} = với arrow function bên dưới
const requestHandler = (req, res) => {
    const url =req.url;
    const method = req.method;
    if (url ==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url ==='/message' && method ==='POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('message.text', message);
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};
// 1.module.exports = requestHandler;

// 2.module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// 3.module.exports.handler = requestHandler;
// module.exports.someText = 'some text';

//3 cách trên và cách dưới đều cho ra kết quả giống nhau.

exports.handler = requestHandler;
exports.someText = 'Some hard code text';

