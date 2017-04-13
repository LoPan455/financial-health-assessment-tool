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

Withdrew multi-pull authorization (every 6 months for 5 years)

TransUnion Type of Report
Single Bureau (Business)
Tri-Merge (Business)
Consumer

TransUnion FICO Score Status
Did not attempt to pull score
Got score
No score available (insufficient credit history
NoScoreAvailableNoCredit history

TransUnionFICOScore: _____________

TransUnion Non-FICO Score Status
Did not attempt to pull score
Got score
No score available (insufficient credit history
No score available (reasons other than insufficient credit history)
TransUnion Non-FICO Score Type:
VantageScore
TransRisk Score
CreditXpert
CE Score
Other
TransUnion Non-FICO Score: ______________

//// Other Bureau: ____________________________________
Other Bureau Authorization Status:    ❑ Every 6 months for 5 years       ❑ One time only      ❑ Refused to sign
❑ Withdrew multi-pull authorization (every 6 months for 5 years)    ❑ N/A
Other Bureau Type of Report:          ❑ Single Bureau (Business)         ❑ Tri-Merge (Business)         ❑ Consumer
Other Bureau FICO Score Status:   ❑ Did not attempt to pull score    ❑ Got score
❑ No score available (insufficient credit history)         ❑ No score available (reasons other than insufficient credit history)
Other Bureau FICO Score: _____________
Other Bureau Non-FICO Score Status:    ❑ Did not attempt to pull score       ❑ Got score
❑ No score available (insufficient credit history)         ❑ No score available (reasons other than insufficient credit history)
Other Bureau Non-FICO Score Type:       ❑ VantageScore       ❑ TransRisk Score       ❑ CreditXpert      ❑ CE Score
❑ Other
Other Bureau Non-FICO Score: ______________

//// ACTIVE LINES OF CREDIT
How many active lines of credit does the participant have? __________
	How many are active installment loans? _______     How many are active revolving lines of credit? _______

//// TABLE:   REVOLVING ACCOUNTS – ACTIVE CREDIT CARDS
<thead>
<tr>
  <td> (blank)
  <td> Name of Credit Card
  <td> Total Limit
  <td> Account Balance
  <td> Amount Past Due
</tr>

<tbody>
<tr>
  <td> CC1
  <td> (blank input for name)
  <td> $
  <td> $
  <td> $
</tr>

**NOTE: above: there are 9 rows: CC2, CC3, etc. up to CC9

///// new TABLE:  REVOLVING ACCOUNTS – HOME EQUITY LINES OF CREDIT (HELOCs)

<thead>
<tr>
  <td> (blank)
  <td> Name of HELOC
  <td> Total Limit
  <td> Account Balance
  <td> Amount Past Due
</tr>

<tbody>
<tr>
  <td> HELOC 1
  <td> (blank input for name)
  <td> $
  <td> $
  <td> $
</tr>

(Variables) NotYet-{COPIED}




foreclosureLastSeven
recentForeclosureDate
bankruptcyLastTen
recentBankruptcyDate: { type: Date },
collectionsChargeOffs-General
collectionsChargeOffs-Medical
civilJudgmentsPublicRecordsTaxLiens
delinquencies30Day
delinquencies60Day
delinquencies90Day


});

var Client = mongoose.model('Client', clientBalanceSchema); // Green 'Client' refers to the users collection adding plurality and not case sensitive.


module.exports = Client;