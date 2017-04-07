app.controller('ChildBoxCtrl', function($scope) {

  console.log('childBox controller running');

  $scope.user = {};
  $scope.employmentStatus = ['working','unemployed']
  $scope.creditProducts = ['Credit Cards' ,'Auto Loan' ,'Mortgage' ,'HELOC'];
  $scope.searchTerm;
  $scope.clearSearchTerm = function() {
    $scope.searchTerm = '';
  };
})//end app.controller
