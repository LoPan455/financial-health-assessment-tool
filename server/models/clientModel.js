var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  email: { type: String, require: true, unique: true },
  // assets_label
	checkingBalanceValue: { type: Number },
	savingsBalanceValue: { type: Number },
  cashOnHandValue: { type: Number },
  vehicle1Value: { type: Number },
	vehicle2Value: { type: Number },
	vehicleOthersValue: { type: Number },
  primaryResidenceValue: { type: Number },
	otherRealEstateValue: { type: Number },
  stocksBondsAndSimilarValue: { type: Number },
	retirementAccountsValue: { type: Number },
	collegeSavingsValue: { type: Number },
	businessValue: { type: Number },
	otherAssetsValue: { type: Number },
	totalAssets: { type: Number },

  // liabilities_label
	  // housingLiabilities_label
			mortgageBalance: { type: Number },
			helocBalance: { type: Number },
			otherRealEstateBalance: { type: Number },
			totalHousingLiabilities: { type: Number },


});

var Client = mongoose.model('Client', clientSchema); // Green 'Client' refers to the users collection adding plurality and not case sensitive.


module.exports = Client;