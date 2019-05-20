const http = require('http');
var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('<h1>Hello World\n</h1>');
// });

app.get('/', (req, res)=>{
    res.sendFile('index.html',{root:__dirname});
})

app.get('/products', (req, res) => {
    var products = [
        {name:'Laptop', price:40000},
        {name:'TV', price:30000},
        {name:'Washing Machine', price:40000},
        {name:'Go Pro', price:5000},
        {name:'Computer', price:70000}
    ];
    res.json(products);
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});