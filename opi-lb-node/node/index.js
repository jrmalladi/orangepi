var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.get('/', function (req, res) {
  console.log('Responding to API on '+ hostname);
  res.send('<html><body>Hello from Node.js container ' + hostname + '</body></html>');
});

app.listen(3000);
console.log('Running on http://localhost');
