var PersonalWebApp = angular.module("PersonalWebApp", [
    "homeControllers",
    "ngRoute"
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when("/home", {
      templateUrl: "components/home/home.html", 
      controller: "HomeController"}).

  otherwise({redirectTo: '/home'});
}]);

