var helloModule = angular.module('HelloAngular', []);
helloModule.controller('helloNgCtrl', function($scope) {
  $scope.greeting = {
    text: 'Hello'
  };
});