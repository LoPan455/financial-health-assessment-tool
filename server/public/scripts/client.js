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

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('blue') // enter text color here
    .dark();
});
