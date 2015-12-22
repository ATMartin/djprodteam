var dubIpsum = require('./ipsum_gen.js');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Hiya!<br>Try `/paragraph`, `/sentence` or `/paragraphs/:num` for better results.');
});

app.get('/paragraph', function(req, res) {
  res.send(dubIpsum.make_a_paragraph());
});

app.get('/paragraphs/:num', function(req, res) {
 var result = dubIpsum.make_paragraphs(req.params.num).replace(/\n/g, '<br>');
 res.send(result);
});

app.get('/sentence', function(req, res) {
 res.send(dubIpsum.make_a_sentence());
});

app.listen(app.get('port'), function() {
  console.log("DJ Prod Team is IN THE BUILDING!");
});
