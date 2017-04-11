myApp.controller('ProfileController', function(ClientFactory) {
  console.log('ProfileController controller running');
  var self = this;
  this.user = {};
  this.employmentStatus = ['working','unemployed'];
  this.creditProducts = ['Credit Cards' ,'Auto Loan' ,'Mortgage' ,'HELOC'];
  this.searchTerm;
  this.clearSearchTerm = function() {
    this.searchTerm = '';
  };
});//end app.controller
