
var weather = angular.module('weatherApp', ['ngRoute', 'weatherControllers']);

weather.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/cities.html',
        controller: 'CitiesCtrl'
      }).
      when('/details/:cityName', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
