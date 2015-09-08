angular.module('windows.js').directive('desktop', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'templates/desktop.html'
    };
});