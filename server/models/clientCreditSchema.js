var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientCreditSchema = new Schema({
// email: { type: String, require: true, unique: true },

	clientName: { type: String },
	assessmentDate: { type: Date },

//// INFORMATION
firstCreditReport: { type: Boolean },
partialOrCompleteCreditReport: { type: Boolean },

//// PARTICIPANT PRESENT?
pullingCreditReportClientPresent: { type: Boolean },
creditReportUnusualActivity: { type: Boolean },
creditReportErrors: { type: Boolean },

//// CREDIT REPORT
ablePullCreditReport: { type: Boolean },
// Add textArea or string for user notes??
pullCreditReport: { type: String },
// ❑ Yes, report(s) available
// ❑ No report/score available – agency could not access Business report
// ❑ No report/score available – client could not access Consumer report
// ❑ No report/score available – agency could not access Business report AND client could not access Consumer report
// ❑ Client refused credit report pull

/*
//// Equifax
Equifax Authorization Status:    ❑ Every 6 months for 5 years       ❑ One time only      ❑ Refused to sign
❑ Withdrew multi-pull authorization (every 6 months for 5 years)    ❑ N/A
Equifax Type of Report:          ❑ Single Bureau (Business)         ❑ Tri-Merge (Business)         ❑ Consumer
Equifax FICO Score Status:   ❑ Did not attempt to pull score    ❑ Got score
❑ No score available (insufficient credit history)         ❑ No score available (reasons other than insufficient credit history)
Equifax FICO Score: _____________
Equifax Non-FICO Score Status:    ❑ Did not attempt to pull score       ❑ Got score
❑ No score available (insufficient credit history)         ❑ No score available (reasons other than insufficient credit history)
Equifax Non-FICO Score Type:       ❑ VantageScore       ❑ TransRisk Score       ❑ CreditXpert      ❑ CE Score
❑ Other
Equifax Non-FICO Score: ______________

//// Experian
Experian Authorization Status:    ❑ Every 6 months for 5 years       ❑ One time only      ❑ Refused to sign
❑ Withdrew multi-pull authorization (every 6 months for 5 years)    ❑ N/A
Experian Type of Report:          ❑ Single Bureau (Business)         ❑ Tri-Merge (Business)         ❑ Consumer
Experian FICO Score Status:   ❑ Did not attempt to pull score    ❑ Got score
❑ No score available (insufficient credit history)         ❑ No score available (reasons other than insufficient credit history)
Experian FICO Score: _____________
Experian Non-FICO Score Status:    ❑ Did not attempt to pull score       ❑ Got score
❑ No score available (insufficient credit history)         ❑ No score available (reasons other than insufficient credit history)
Experian Non-FICO Score Type:       ❑ VantageScore       ❑ TransRisk Score       ❑ CreditXpert      ❑ CE Score
❑ Other
Experian Non-FICO Score: ______________
*/

////  TransUnion
TransUnionAuthOneTime: { type: Boolean },
TransUnionAuthEverySixMnths: { type: Boolean },
TransUnionAuthEveryFiveYears: { type: Boolean },
TransUnionAuthEveryRefusedSign: { type: Boolean },

WithdrewMultipullAuthEverySixMonthsFiveYears

TransUnionReportType
SingleBureauBusiness
TriMergeBusiness
Consumer

TransUnionFICOScoreStatus
DidNotAttemptPullScore
GotScore
NoScoreAvailableLowOrNoCreditHistory
TransUnionFICOScore

TransUnionNonFICOScoreStatus
DidNotAttemptPullScore
GotScore
NoScoreAvailableLowOrNoCreditHistory
TransUnionNon-FICOScoreType

VantageScore: { type: Number },
TransRiskScore: { type: Number },
CreditXpert: { type: Number },
CEScore: { type: Number },
Other: { type: String },
TransUnionNonFicoScore: { type: Number },

//// Other Bureau: ____________________________________
OtherBureauAuthStatus
Every 6 months for 5 years
One time only
Refused to sign
Withdrew multi-pull authorization (every 6 months for 5 years
N/A

Other Bureau Type of Report
Single Bureau (Business
Tri-Merge (Business
Consumer

Other Bureau FICO Score Status
Did not attempt to pull score
Got score
No score available (insufficient credit history
No score available (reasons other than insufficient credit history)

Other Bureau FICO Score
Other Bureau Non-FICO Score Status
Did not attempt to pull score
Got score
No score available (insufficient credit history)
No score available (reasons other than insufficient credit history)

Other Bureau Non-FICO Score Type: { type: Number },
VantageScore: { type: Number },
TransRisk Score: { type: Number },
CreditXpert: { type: Number },
CE Score: { type: Number },
Other: { type: Number },
Other Bureau Non-FICO Score: { type: Number },

//// ACTIVE LINES OF CREDIT
qtyActiveLinesCredit: { type: Number },
qtyActiveInstallmentLoans: { type: Number },
qtyActiveRevolvingLinesCredit: { type: Number },

//// REVOLVING ACCOUNTS – ACTIVE CREDIT CARDS
CreditCardName: { type: String },
Limit: { type: Number },
AcctBalance: { type: Number },
AmtPastDue: { type: Number },

///// new TABLE:  REVOLVING ACCOUNTS – HOME EQUITY LINES OF CREDIT (HELOCs)
NameOfHELOC: { type: String },
TotalLimit: { type: Number },
AccountBalance: { type: Number },
AmountPastDue: { type: Number },

foreclosureLastSevenYrs: { type: Number },
recentForeclosureDate: { type: Date },
bankruptcyLastTen: { type: Number },
recentBankruptcyDate: { type: Date },
collectionsChargeOffs-General: { type: Number },
collectionsChargeOffs-Medical: { type: Number },
civilJudgmentsPublicRecordsTaxLiens: { type: Number },
delinquencies30Day: { type: Number },
delinquencies60Day: { type: Number },
delinquencies90Day: { type: Number },

});

var Client = mongoose.model('Client', clientBalanceSchema); // Green 'Client' refers to the users collection adding plurality and not case sensitive.


module.exports = Client;