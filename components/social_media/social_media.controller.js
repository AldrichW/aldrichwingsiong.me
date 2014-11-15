var PersonalWebApp = angular.module("PersonalWebApp");

PersonalWebApp.controller("socialMediaController",["$scope","APP_CONSTANTS",
    function($scope,APP_CONSTANTS){
        $scope.LINKEDIN_URL = APP_CONSTANTS.LINKEDIN_URL;
        $scope.FACEBOOK_URL = APP_CONSTANTS.FACEBOOK_URL;
        $scope.GITHUB_URL = APP_CONSTANTS.GITHUB_URL;
        $scope.EMAIL = APP_CONSTANTS.EMAIL;
    }]);