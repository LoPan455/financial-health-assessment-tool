app.controller('LogonController', ['LogonFactory', function(LogonFactory) {
  console.log('LogonController');
  var self = this;
  self.message = 'LogonController message';
  // self.loggedIn = LogonFactory.loggedIn;


  self.logIn = function() {
    console.log('LogIn button clicked');
    LogonFactory.logIn();
  }

    self.logOut = function() {
    console.log('LogOut button clicked');
    LogonFactory.logOut();
  }

  
  //   var user = require('../MondoDB Build Files/balanceSheet.js');
  //   self.balanceSheet = function() {
  //   console.log('balanceSheet button clicked');
  //  }
}]);
