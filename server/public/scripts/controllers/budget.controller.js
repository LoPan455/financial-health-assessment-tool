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
});//end app.controller
