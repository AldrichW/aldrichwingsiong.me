var PersonalWebApp = angular.module("PersonalWebApp", [
    "homeControllers",
    "ngRoute",
    "smoothScroll"
]).config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.
  when("/home", {
      templateUrl: "components/home/home.html", 
      controller: "HomeController"}).

  otherwise({
      redirectTo: '/home'
  });
}]);

PersonalWebApp.constant("APP_CONSTANTS",{
                            'LINKEDIN_URL':'https://www.linkedin.com/pub/aldrich-wingsiong/4b/659/232',
                            'FACEBOOK_URL':'https://www.facebook.com/aldrich.wingsiong',
                            'GITHUB_URL':'https://github.com/AldrichW',
                            'EMAIL':'aldrich.wingsiong@mail.utoronto.ca'
                        });
