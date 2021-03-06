console.log("Hello World for Node JS")

var a = 10;
var b = 20;
console.log(a+b)

console.log(module)
console.log(__filename)
console.log(__dirname)

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});