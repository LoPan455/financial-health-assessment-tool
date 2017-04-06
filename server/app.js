var express = require('express');
var app = express();
var path = require('path');
var portDecision = process.env.PORT || 5000;

app.get('/', function(req, res){
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.use(express.static('server/public'));





app.listen(portDecision, function(){
  console.log("Listening on port: ", portDecision);
});
