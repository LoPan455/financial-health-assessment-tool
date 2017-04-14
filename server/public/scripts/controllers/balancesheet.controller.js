app.controller('BalanceSheetController', function(ClientFactory) {

  console.log('BalanceSheetController controller running');
  var self = this;
    self.user = ClientFactory.client;

    // test variable
    self.user.numberVehicles = 2;
    self.user.housing = 'Own';
    self.user.otherRealEstateValue = 1;

    self.housingSum = 0;
    addHousing();

    function addHousing() {
      self.housingSum += Number (self.user.mortgageBalance);
      if (self.user.heloc == true) {
          self.housingSum += Number (self.user.helocBalance);
      }else if (self.user.otherRealEstateValue != null) {
          self.housingSum += Number (self.user.otherRealEstateBalance);
      }
      return self.housingSum;
    }


});//end app.controller
