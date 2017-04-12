var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientBudgetSchema = new Schema({
// email: { type: String, require: true, unique: true },

// budgetAssessment_label
	clientName: { type: String },
	assessmentDate: { type: Date },
	onlyYouOrWholeHousehold_question: { type: Boolean },
	checkingBalanceValue: { type: Number },

onlyYouOrWholeHousehold_question { type: Boolean },
// onlyYou_answer
// wholeHousehold_answer

firstSheetCreated_question { type: Boolean },
// firstSheetYes_answer
// firstSheetNo_answer

partialOrCompleteUpdate_question { type: Boolean },
// partialUpdate_answer
// completeUpdate_answer

netOrGrossAndNet_question { type: Boolean },
// netIncomeOnly_answer
// netAndGrossIncome_answer

// monthlyIncome_label
	monthlyWagesNet: { type: Number },
	monthlyWagesGross: { type: Number },
	monthlySelfAndBusinessNet: { type: Number },
	monthlySelfAndBusinessGross: { type: Number },
	monthlyNetSSI: { type: Number },
	monthlyGrossSSI: { type: Number },
	monthlyNetSNAPWIC: { type: Number },
	monthlyGrossSNAPWIC: { type: Number },
	monthlyAlimonyNet: { type: Number },
	monthlyAlimonyGross: { type: Number },
	monthlyUnemploymentNet: { type: Number },
	monthlyUnemploymentGross: { type: Number },
	monthlyWorkersCompensationNet: { type: Number },
	monthlyWorkersCompensationGross: { type: Number },
	monthlyVeteransCompensationNet: { type: Number },
	monthlyVeteransCompensationGross: { type: Number },
	monthlyRentalIncomeNet: { type: Number },
	monthlyRentalIncomeGross: { type: Number },
	monthlyInvestmentIncomeNet: { type: Number },
	monthlyInvestmentIncomeGross: { type: Number },
	monthlyIncomeOtherHouseholdMembersNet: { type: Number },
	monthlySocialSecurityNetNotSSI: { type: Number },
	monthlySocialSecurityGrossNotSSI: { type: Number },
	monthlyPensionsNet: { type: Number },
	monthlyPensionsGross: { type: Number },
	monthlyOtherPublicBenefitsNet: { type: Number },
	monthlyOtherIncomeNet: { type: Number },
	monthlyOtherIncomeGross: { type: Number },
	totalMonthlyIncomeNet: { type: Number },
	totalMonthlyIncomeGross: { type: Number },


// monthlyExpenses_label
// housing_label
monthlyRent: { type: Number },
monthlyRentersInsurance: { type: Number },
numberOfMortgages: { type: Number },  // ***(not a dollar amount - skip this?)
monthlyMortgage1: { type: Number },
monthlyMortgage2: { type: Number },
monthlyHeloc: { type: Number },
monthlyPropertyTaxIfNotInMortgage: { type: Number },
monthlyHomeownersInsurance: { type: Number },
monthlyHomeMaintenance: { type: Number },
monthlyCondoTownhomeFees: { type: Number },
monthlyOtherRealEstate: { type: Number },
monthlyOtherHousingExpenses: { type: Number },
monthlyTotalHousingExpenses: { type: Number },

// utilities_label
monthlyGasHeating: { type: Number },
monthlyElectric: { type: Number },
monthlyWater: { type: Number },
monthlyTrash: { type: Number },
monthlySewer: { type: Number },
monthlyLandline: { type: Number },
monthlyCellPhone: { type: Number },
monthlyOtherUtilitiesNotCableAndInternet: { type: Number },
monthlyTotalUtilities: { type: Number },

// food_label
monthlyGroceries: { type: Number },
monthlyOtherFood: { type: Number },
monthlyTotalFoodExpenses: { type: Number },

// transportation_label
numberOfVehicles: { type: Number },  // ***(not a dollar amount - could skip this)
monthlyVehicle1: { type: Number },
monthlyVehicle2: { type: Number },
monthlyVehiclesOther: { type: Number },
monthlyGas: { type: Number },
monthlyCarInsurance: { type: Number },
monthlyCarMaintenance: { type: Number },
monthlyPublicTransportation: { type: Number },
monthlyTransportationExpenses: { type: Number },
monthlyTotalTransportationExpenses: { type: Number },

// healthRelated_label
monthlyHealthInsurance: { type: Number },
monthlyDentalInsurance: { type: Number },
monthlyLifeInsurance: { type: Number },
monthlyMedicalAndPrescription: { type: Number },
monthlyOtherHealthRelated: { type: Number },
monthlyTotalHealthRelatedExpenses: { type: Number },

// dependentRelatedExpenses_label
monthlyChildSupport: { type: Number },
monthlyChildcare: { type: Number },
monthlyEducation: { type: Number },
monthlyOtherDependentExpenses: { type: Number },
monthlyTotalDependentRelatedExpenses: { type: Number },

// creditCardLoanDebtPayments_label
monthlyCombinedCreditCards: { type: Number },
monthlyStudentLoans: { type: Number },
monthlyConsumerLoans: { type: Number },
monthlyBusinessLoans: { type: Number },
monthlyInformalLoans: { type: Number },
monthlyOtherDebtPayments: { type: Number },
monthlyTotalCreditCardLoanDebtPayments: { type: Number },

// personalExpenses_label
monthlyCableInternet: { type: Number },
monthlyLaundryDryCleaning: { type: Number },
monthlyTobaccoAndAlcohol: { type: Number },
monthlyClothingAndAccessories: { type: Number },
monthlyHairProductsAndToiletries: { type: Number },
monthlyBeautySalonBarberShop: { type: Number },
monthlyRecreation: { type: Number },
monthlyOtherPersonalExpenses: { type: Number },
monthlyTotalPersonalExpenses: { type: Number },

// miscellaneous_label
monthlyCharitableGiving: { type: Number },
monthlyGiftsToOthers: { type: Number },
monthlyNewspapersMagazines: { type: Number },
monthlyPetCare: { type: Number },
monthlyAllowancesForDependencies: { type: Number },
monthlyMembershipDues: { type: Number },
monthlyEducationForParticipant: { type: Number },
monthlyFinancialFees: { type: Number },
monthlyOtherMiscellaneousExpenses: { type: Number },
monthlyTotalMiscellaneousExpenses: { type: Number },

// monthlySavingsTarget_label
monthlySavingsTarget: { type: Number },

// totalMonthlyNetIncome_label
totalMonthlyIncome: { type: Number },
totalMonthlyExpenses: { type: Number },
totalMonthlyNetIncome: { type: Number },

budgetAssessmentNotes: { type: Number },



	

});

var Client = mongoose.model('Client', clientBalanceSchema); // Green 'Client' refers to the users collection adding plurality and not case sensitive.


module.exports = Client;








Client Name == clientName    ***(possibly repeated data)
Assessment Date

//// INFORMATION
Is this the first Credit Report assessment created for this participant?
❑ Yes        ❑ No*
*If no, Is this a partial or complete update of the Credit Report assessment?
❑ Partial update    ❑ Complete update

//// PARTICIPANT PRESENT?
Is the agency pulling the credit report with the participant present (in person or over the phone)?
❑ Yes*     ❑ No
*If yes, Does the participant see any activity on the credit report that does not belong to him/her, or does the participant see any errors on the report?     ❑ Yes        ❑ No

//// CREDIT REPORT
Note to agency: Please complete the rest of this Credit Report assessment using information from the actual credit report, whether or not it is accurate.
Was the organization able to pull the credit report?
❑ Yes, report(s) available
❑ No report/score available – agency could not access Business report
❑ No report/score available – client could not access Consumer report
❑ No report/score available – agency could not access Business report AND client could not access Consumer report
❑ Client refused credit report pull

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

////  TransUnion
TransUnion Authorization Status:    ❑ Every 6 months for 5 years       ❑ One time only      ❑ Refused to sign
❑ Withdrew multi-pull authorization (every 6 months for 5 years)    ❑ N/A
TransUnion Type of Report:          ❑ Single Bureau (Business)         ❑ Tri-Merge (Business)         ❑ Consumer
TransUnion FICO Score Status:   ❑ Did not attempt to pull score    ❑ Got score
❑ No score available (insufficient credit history)         ❑ No score available (reasons other than insufficient credit history)
TransUnion FICO Score: _____________
TransUnion Non-FICO Score Status:    ❑ Did not attempt to pull score       ❑ Got score
❑ No score available (insufficient credit history)         ❑ No score available (reasons other than insufficient credit history)
TransUnion Non-FICO Score Type:       ❑ VantageScore       ❑ TransRisk Score       ❑ CreditXpert      ❑ CE Score
❑ Other
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
recentBankruptcyDate
collectionsChargeOffs-General
collectionsChargeOffs-Medical
civilJudgmentsPublicRecordsTaxLiens
delinquencies30Day
delinquencies60Day
delinquencies90Day
