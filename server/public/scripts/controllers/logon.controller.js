app.controller('LogonController', function($firebaseAuth, $http) {
  console.log('LogonController');
  var self = this;
  self.message = 'LogonController message';

  var auth = $firebaseAuth();

  // self.firebaseUser = firebaseUser;


}); // Note: FOR: app.controller


console.log(new Date().getFullYear() + ' logon.controller.js is run');
// Macintosh HD/Users/PC/Desktop/Firebase-Explained-Lecture-Demos/angular-node-express-starter/node_modules/angular/angular.js
