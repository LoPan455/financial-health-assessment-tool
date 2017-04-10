app.factory('LogonFactory', ['$http', '$firebaseAuth', '$location', function($http,$firebaseAuth, $location) {

var userObject = { };
var userIsLoggedIn = false;

//if (idTo)
// ng-if for log in
// ng-if for accessing html page
  
  
  self.logIn = function() {
    console.log('logIn is clicked');
    auth.$signInWithPopup('google')
      .then(function(firebaseUser) {
        console.log('fhat authenticated as: ', firebaseUser.user.email);
      })
      .catch(function(error) {
        console.log('irebaseUser authentication failed: ', error);
      });
  };

  auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      firebaseUser.getToken().then(function(idToken) {
        $http({
          method: 'GET',
          url: '/userLogIn',
          headers: {
            id_token: idToken, // can name both sides the same but not here for clarity
            // id_token married to private-data.js file
          },
        }).then(function(response) {
          console.log('response from server: ', response);
          userIsLoggedIn = true;
          // boolean  to show rest of app 
          // self.secretData = response.data;
        });
      });
    } else {
      console.log('logged out');
      userIsLoggedIn = false;
      self.secretData = ' message on DOM';
    }
  });

  self.logOut = function() {
    console.log('logOut is clicked');
    auth.$signOut().then(function() {
      console.log('logged out');
    });
  };
  }]);
  console.log(new Date().getFullYear() + ' logon.factory.js is run');