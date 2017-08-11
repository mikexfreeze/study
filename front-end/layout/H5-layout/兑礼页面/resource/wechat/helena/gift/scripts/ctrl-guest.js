
var app = angular.module('guest', [  'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'tpl/menu-guest.html',
    }).
    when('/vip', {
      templateUrl: 'tpl/vip.html',
    }).
    when('/404', {
      templateUrl: 'tpl/404.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);


function showPopup(id, flag, dur){
    $("#popup-"+id)[flag?"fadeIn":"fadeOut"](dur);
}