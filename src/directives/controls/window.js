angular.module('windows.js').directive('window', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'templates/window.html',
        scope: {
            caption: '@',
            icon: '@',
            options: '@'
        }
    };
});