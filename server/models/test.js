var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  clientName: { type: String },
  assessmentDate: { type: Date },
  onlyYouOrWholeHousehold_question: { type: Boolean },
  firstSheetCreated_question: { type: Boolean },
  partialOrCompleteUpdate_question: { type: Boolean },
  checkingBalanceValue: { type: Number },
  savingsBalanceValue: { type: Number },
  cashOnHandValue: { type: Number },
  vehicle1Value: { type: Number },
  vehicle2Value: { type: Number },
  vehicleOthersValue: { type: Number }
});

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
