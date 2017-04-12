console.log(new Date().getFullYear() + ' client.js loaded');

var app = angular.module('fhatApp', ['ngMaterial','ui.router', 'firebase']);

app.controller('DemoCtrl', function($scope) {

  $scope.user = {};
  $scope.employmentStatus = ['working','unemployed']
  $scope.creditProducts = ['Credit Cards' ,'Auto Loan' ,'Mortgage' ,'HELOC'];
  $scope.searchTerm;
  $scope.clearSearchTerm = function() {
    $scope.searchTerm = '';
  };
})//end app.controller

app.controller('SideNav', function($scope) {
  console.log('sideNav controller running from client.js');
})

// app.component('household',{
//   template: '<h2>This is the Household Component<h2>',
//   controller: function(){
//     this.testMessage = "test message for HH controller";
//   }
//
// })

app.config(['$mdThemingProvider','$mdIconProvider','$stateProvider',function($mdThemingProvider,$mdIconProvider,$stateProvider) {

  var basicProfile = {
    name: 'basicProfile',
    url: '/basicProfile',
    templateUrl:'/views/basic-profile.html',
    contoller: function(){
      console.log('basic profile controller running');
    }
  };

  var form = {
    name: 'basicProfile.form',
    url: '/form',
    templateUrl: '/views/household-view.html'
  }


  var budget = {
    name: 'budget',
    url: '/budget',
    template: '<h2>budget ui-route headline text</h2>'
  }


  $stateProvider.state(basicProfile);
  $stateProvider.state(budget);
  $stateProvider.state(form);


  $mdThemingProvider
    .theme('docs-dark', 'default')
    .primaryPalette('blue') // enter text color here
    .dark();

  // $mdIconProvider
  //   .iconSet('navigation','assets/icons/navigation.svg',24)
  //   .defaultIconSet('')

}]); // end app.config








