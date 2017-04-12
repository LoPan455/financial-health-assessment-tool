var express = require('express');
var router = express.Router();
var UserMon = require('../models/user');
var mongoConnection = require('../modules/mongo-connection');
mongoConnection.connect();


router.get('/logIn', function(req, res) {
  console.log('/login route hit: ', req.decodedToken.email);
  var userEmail = req.decodedToken.email; // creating variable which equals the decoded token email.
  
  
  
  
  UserMon.findOne(
    {
      email: userEmail
    },
    function(err, receipt) {
      if (err) {
        console.log('Error completing user query', err);
        res.sendStatus(500);
      } else {
          console.log('successful user query', receipt);
          res.sendStatus(200); // send is for data, status for messages.

        }
    });
});

module.exports = router;
