console.log('client.js loaded');

var app = angular.module('fhatApp', ['ngMaterial','ui.router']);

app.controller('DemoCtrl', function($scope) {
  console.log('demo controller running');

  $scope.user = {};
  // console.log($scope.user);
  $scope.employmentStatus = ['working','unemployed']
  $scope.creditProducts = ['Credit Cards' ,'Auto Loan' ,'Mortgage' ,'HELOC'];
  $scope.searchTerm;
  $scope.clearSearchTerm = function() {
    $scope.searchTerm = '';
  };
  $scope.assistanceArray = [];
  $scope.undoMarrige = function() {
    console.log('mawige is what bwings us together');
    if ($scope.user.married == false) {
      $scope.user.married = null;
    }else if ($scope.user.married == true) {
      $scope.user.married = null;
      $scope.user.individual = null;
    }
  };
  $scope.bankSection = true;
  $scope.hideBank = function (){
    $scope.bankSection = !$scope.bankSection;
  }

  $scope.productSection = true;
  $scope.hideProducts = function (){
    $scope.productSection = !$scope.productSection;
  }

  $scope.undoVehicle = function() { // NOTE: function is not responding when called,
    if ($scope.user.vehicle == false) {
      $scope.user.vehicle = null;
    }else if ($scope.user.vehicle == true) {
      $scope.user.vehicle = null;
      $scope.user.numberVehicles = null;
    }
  };


})//end app.controller

app.controller('SideNav', function($scope) {
  // console.log('sideNav controller running');
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
