var express = require('express');
var router = express.Router();
var Test = require('../models/test.js');
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');

router.post('/client', function (req,res){
  console.log('test/client route hit on the server');
  console.log('the req.body is: ', req.body);
  var addedClient = new Test({
    clientName: req.body.clientName,
    assessmentDate: req.body.assessmentDate,
    onlyYouOrWholeHousehold_question: req.body.onlyYouOrWholeHousehold_question,
    firstSheetCreated_question: req.body.firstSheetCreated_question,
    partialOrCompleteUpdate_question: req.body.partialOrCompleteUpdate_question,
    checkingBalanceValue: req.body.checkingBalanceValue,
    savingsBalanceValue: req.body.savingsBalanceValue,
    cashOnHandValue: req.body.cashOnHandValue,
    vehicle1Value: req.body.vehicle1Value,
    vehicle2Value: req.body.vehicle2Value,
    vehicleOthersValue:req.body.vehicleOthersValue
  }); // Now we run the DB insert statement
    addedClient.save(function(err, result) {
      if (err) {
        console.log('There was an error running the INSERT to add a new client');
        res.sendStatus(500);
      } else {
        console.log('Success adding a new client', result);
        res.sendStatus(200);
       }
    });
 }); //  end User.findOne on 234



 module.exports = router;
