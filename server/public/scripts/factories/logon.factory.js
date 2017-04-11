app.factory('LogonFactory', [
  '$http',
  '$firebaseAuth',
  '$location',
  function($http, $firebaseAuth, $location) {
    var userObject = {};
    var userIsLoggedIn = false;
    var auth = $firebaseAuth();

    // if (idTo)
    // ng-if for log in
    // ng-if for accessing html page

    self.logIn = function() {
      console.log('logIn is clicked');
      auth.$signInWithPopup('google')
        .then(function(firebaseUser) {
          console.log('fhat authenticated as: ', firebaseUser.user.email);
        })
        .catch(function(error) {
          console.log('firebaseUser authentication failed: ', error);
        });
    };

    auth.$onAuthStateChanged(function(firebaseUser) {
      console.log('auth change trigger');
      if (firebaseUser) {
        firebaseUser.getToken().then(function(idToken) {
          getUserEmail(idToken);
        });
      } else {
        console.log('logged out');
        userIsLoggedIn = false;
        self.secretData = ' message on DOM';
      }
    });

    function getUserEmail(idToken) {
      $http({
        method: 'GET',
        url: '/user/logIn',
        headers: {
          id_token: idToken,
        },
      }).then(function(response) {
        console.log('response from server: ', response.data);
      });
    }

    self.logOut = function() {
      console.log('logOut is clicked');
      auth.$signOut().then(function() {
        console.log('logged out');
      });
    };

    return {
      logIn: logIn,
      logOut: logOut,
    };
  },
]);
