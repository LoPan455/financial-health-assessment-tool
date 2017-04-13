fhatApp.controller('BalanceSheetController', function(ClientFactory) {
  console.log('BalanceSheetController controller running');
  var self = this;
    self.user = ClientFactory.client;
});//end app.controller
