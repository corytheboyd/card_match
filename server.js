var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, 'build/index.html'));
})

var port = process.env.PORT || 3000;
app.listen(port);
