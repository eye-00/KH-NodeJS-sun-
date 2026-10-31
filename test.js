let http = require('http');
http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello World\n');
  })
  .listen(6969, () => {
    console.log('Server running at http://localhost:6969/');
  });