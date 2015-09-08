angular.module('windows.js').directive('icon', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/icon.html',
        scope: {
            url: '@',
            caption: '@'
        }
    };
});