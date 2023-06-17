var http = require('http');
var date = require('./myfirstmodule.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(date.myDate());
  res.write(req.url);
  res.end('Hello World!');
}).listen(8080);