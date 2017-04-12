myApp.controller('BudgetController', function(ClientFactory) {
  console.log('BudgetController controller running');
  var self = this;
  this.user = {};

  self.mortgageOption = false;
  self.secondMortgage = function (){
    self.mortgageOption = !self.mortgageOption;
  };

});//end app.controller
