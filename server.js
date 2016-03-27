var fs = require('fs');
var multer = require('multer');
var express = require('express');

var upload = multer();
var app = express();

app.post('/api/fileanalyse', upload.single('file'), function(req, res, next) {
  res.send({bytes: req.file.size});
  next();
});

app.get('/', function(req, res, next) {
  fs.readFile('index.html', 'utf8', function(err, data) {
    if (err) throw err;
    data = data.replace(/<!--URL-->/g, 'https://' + req.headers.host + '/');
    res.send(data);
    next();
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('server listening on port:' + port);