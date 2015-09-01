var windowsJs = angular.module('windows.js', []);

windowsJs.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
}]);
