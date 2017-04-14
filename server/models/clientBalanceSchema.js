// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// var clientBalanceSchema = new Schema({
//   // email: { type: String, require: true, unique: true },
//
// 	clientName: { type: String },
// 	assessmentDate: { type: Date },
// 	onlyYouOrWholeHousehold_question: { type: Boolean(true, false) },
// 	// onlyYou_answer
// 	// wholeHousehold_answer
// 	firstSheetCreated_question: { type: Boolean(true, false) },
// 	// firstSheetYes_answer
// 	// firstSheetNo_answer
// 	partialOrCompleteUpdate_question: { type: Boolean(true, false) },
// 	// partialUpdate_answer
// 	// completeUpdate_answer
//
//   // assets_label
// 	checkingBalanceValue: { type: Number },
// 	savingsBalanceValue: { type: Number },
//   cashOnHandValue: { type: Number },
//   vehicle1Value: { type: Number },
// 	vehicle2Value: { type: Number },
// 	vehicleOthersValue: { type: Number },
//   primaryResidenceValue: { type: Number },
// 	otherRealEstateValue: { type: Number },
//   stocksBondsAndSimilarValue: { type: Number },
// 	retirementAccountsValue: { type: Number },
// 	collegeSavingsValue: { type: Number },
// 	businessValue: { type: Number },
// 	otherAssetsValue: { type: Number },
// 	totalAssets: { type: Number },
//
//   // liabilities_label
// 	  // housingLiabilities_label
// 			mortgageBalance: { type: Number },
// 			helocBalance: { type: Number },
// 			otherRealEstateBalance: { type: Number },
// 			totalHousingLiabilities: { type: Number },
//
//     // transportationLiabilities_label
// 					vehicle1Balance: { type: Number },
// 					vehicle2Balance: { type: Number },
// 					vehicleOthersBalance: { type: Number },
// 					totalTransportationLiabilities: { type: Number },
//
//     // creditCardsOtherLoansBalance_label
// 					creditCardsCombinedBalance: { type: Number },
// 					studentLoansBalance: { type: Number },
// 					consumerLoansBalance: { type: Number },
// 					businessLoansBalance: { type: Number },
// 					informalLoansBalance: { type: Number },
// 					totalCreditCardsOtherLoansBalance: { type: Number },
//
//     // unpaidBillsNotInCollections_label
// 					unpaidUtilitiesBalance: { type: Number },
// 					unpaidRentBalance: { type: Number },
// 					unpaidMedicalBillsBalance: { type: Number },
// 					moneyOwedToBanksBalance: { type: Number },
// 					otherUnpaidBillsBalance: { type: Number },
// 					totalUnpaidBillsNotInCollections: { type: Number },
//
//     // collectionsChargeOffsJudgments_label
// 					medicalCollectionsBalance: { type: Number },
// 					allOtherCollectionsBalance: { type: Number },
// 					childSupportInArrearsBalance: { type: Number },
// 					BackTaxesBalance: { type: Number },
// 					otherPublicRecordsBalance: { type: Number },
// 					totalCollectionsChargeOffsJudgments: { type: Number },
//
//     // balanceSheetCalculations_label
// 					totalAssets: { type: Number },
// 					totalLiabilities: { type: Number },
// 					totalNetWorth: { type: Number },
// 					balanceSheetAssessmentNotes: { type: Number }
//
// });
//
// var Client = mongoose.model('Client', clientBalanceSchema); // Green 'Client' refers to the users collection adding plurality and not case sensitive.
//
//
// module.exports = Client;
