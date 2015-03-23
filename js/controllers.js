var weatherControllers = angular.module('weatherControllers', []);
weatherControllers.controller('CitiesCtrl', ['$scope', '$http',
  function ($scope, $http) {

    $http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo').success(function(data){
      $scope.places = data.geonames;
    });
  }]);

  weatherControllers.controller('DetailsCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
  $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $routeParams.cityName).success(function(data){
      $scope.city = data.weather[0];
    });
  }]);
