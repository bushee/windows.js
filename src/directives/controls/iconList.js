angular.module('windows.js').directive('iconList', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'templates/iconList.html'
    };
});