var app = angular.module('app', []);

app.controller('MainController', function($scope){
  $scope.contact = {
    name: 'James Novak',
    phone: '555-555-5555'
  }

  $scope.year = '1990'
});



