const { createServer } = require('http');//node.js

const hostname = 'localhost';//localhost
const port = 30000;//

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Hoang xin phep tu mo javascript voi hoi dan it');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
