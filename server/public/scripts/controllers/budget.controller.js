myApp.controller('BudgetController', function(ClientFactory) {
  console.log('BudgetController controller running');
  var self = this;
  this.user = {};
  this.employmentStatus = ['working','unemployed'];
  this.creditProducts = ['Credit Cards' ,'Auto Loan' ,'Mortgage' ,'HELOC'];
  this.searchTerm;
  this.clearSearchTerm = function() {
    this.searchTerm = '';
  };

  self.mortgageOption = false;
  self.secondMortgage = function (){
    self.mortgageOption = !self.mortgageOption;
  }

});//end app.controller
