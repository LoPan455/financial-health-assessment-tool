var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require('../firebase-service-account.json');
var User = require('../models/user');
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');

router.get('/logIn', function(req, res) {
  console.log(decodedToken);
  var userEmail = decodedToken.email; // creating variable which equals the decoded token email.
  User.findOne(
    {
      email: userEmail,
    },
    function(err, user) {
      // 'email' must match db
      if (err) {
        console.log('Error completing user query', err);
        res.sendStatus(500);
      } else {
        if (err) {
          console.log('Error if/else user query', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200); // send is for data, status for messages.
        }
      }
    });
});

module.exports = router;
