console.log('client.js loaded');

var app = angular.module('mdDemoApp', ['ngMaterial','ui.router']);

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
  console.log('sideNav controller running');
})

app.config(['$mdThemingProvider','$mdIconProvider','$stateProvider',function($mdThemingProvider,$mdIconProvider,$stateProvider) {

  var basicProfile = {
    name: 'basicProfile',
    url: '/basicProfile',
    templateUrl: '/views/basic-profile.html'
  };

  var budget = {
    name: 'budget',
    url: '/budget',
    template: '<h2>budget ui-route headline text</h2>'
  }

  // var childBox = {
  //   name: 'childBox',
  //   url: '/childBox',
  //   template: 'child-box.html'
  // };

  $stateProvider.state(basicProfile);
  $stateProvider.state(budget);


  $mdThemingProvider
    .theme('docs-dark', 'default')
    .primaryPalette('blue') // enter text color here
    .dark();

  // $mdIconProvider
  //   .iconSet('navigation','assets/icons/navigation.svg',24)
  //   .defaultIconSet('')

}]); // end app.config
