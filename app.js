var express = require('express');
var app = express();
var path = require('path');

/*
//TO ADD A CLIENT FOLDER AND MAKE IT WORK:

app.use(express.static(path.join(__dirname, '/client')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

*/
app.use(express.static(path.join(__dirname, '/')));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,  'index.html'));
});


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 5000!');
});
