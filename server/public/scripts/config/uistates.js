myApp.config(function($stateProvider) {
  var main = {
    name: 'main',
    url: '/main',
    controller: 'MainStateController',
    controllerAs: 'msc',
    templateUrl: '/views/mainstate.html'
  };
  var welcome = {
    name: 'welcome',
    controller: 'WelcomController',
    controllerAs: 'wc',
    templateUrl:'/views/welcome.html'
  };
  var profile = {
    name: 'main.profile',
    controller: 'ProfileController',
    controllerAs: 'pc',
    templateUrl:'/views/profile.html'
  };
  var budget = {
    name: 'main.budget',
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budget.html'
  };
  var budgetOne = {
    name: 'main.budget.one',
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budgetone.html'
  };
  var budgetTwo = {
    name: 'main.budget.two',
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budgettwo.html'
  };
  var budgetThree = {
    name: 'main.budget.three',
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budgetthree.html'
  };
  var balanceSheet = {
    name: 'main.balanceSheet',
    controller: 'BalanceSheetController',
    controllerAs: 'bsc',
    templateUrl: '/views/balancesheet.html'
  };
  var balanceSheetOne = {
    name: 'main.balanceSheet.one',
    controller: 'BalanceSheetController',
    controllerAs: 'bsc',
    templateUrl: '/views/balancesheetone.html'
  };
  var balanceSheetTwo = {
    name: 'main.balanceSheet.two',
    controller: 'BalanceSheetController',
    controllerAs: 'bsc',
    templateUrl: '/views/balancesheettwo.html'
  };
  var balanceSheetThree = {
    name: 'main.balanceSheet.three',
    controller: 'BalanceSheetController',
    controllerAs: 'bsc',
    templateUrl: '/views/balancesheetthree.html'
  };
  var creditReport = {
    name: 'main.creditReport',
    controller: 'CreditReportController',
    controllerAs: 'crc',
    templateUrl: '/views/creditreport.html'
  };
  var creditReportOne = {
    name: 'main.creditReport.one',
    controller: 'CreditReportController',
    controllerAs: 'crc',
    templateUrl: '/views/creditreportone.html'
  };
  var creditReportTwo = {
    name: 'main.creditReport.two',
    controller: 'CreditReportController',
    controllerAs: 'crc',
    templateUrl: '/views/creditreporttwo.html'
  };
  var creditReportThree = {
    name: 'main.creditReport.three',
    controller: 'CreditReportController',
    controllerAs: 'crc',
    templateUrl: '/views/creditreportthree.html'
  };
  var summary = {
    name: 'main.summary',
    controller: 'SummaryController',
    controllerAs: 'sc',
    templateUrl: '/views/summary.html'
  };
  $stateProvider.state(main);
  $stateProvider.state(welcome);
  $stateProvider.state(profile);
  $stateProvider.state(budget);
  $stateProvider.state(budgetOne);
  $stateProvider.state(budgetTwo);
  $stateProvider.state(budgetThree);
  $stateProvider.state(balanceSheet);
  $stateProvider.state(balanceSheetOne);
  $stateProvider.state(balanceSheetTwo);
  $stateProvider.state(balanceSheetThree);
  $stateProvider.state(creditReport);
  $stateProvider.state(creditReportOne);
  $stateProvider.state(creditReportTwo);
  $stateProvider.state(creditReportThree);
  $stateProvider.state(summary);
});
