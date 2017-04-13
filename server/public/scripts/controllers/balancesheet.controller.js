fhatApp.controller('BalanceSheetController', function(ClientFactory) {
  console.log('BalanceSheetController controller running');
  var self = this;
    self.user = ClientFactory.client;

    // test variable
    // self.user.numberVehicles = 2;
    // self.user.housing = 'Own';
});//end app.controller
