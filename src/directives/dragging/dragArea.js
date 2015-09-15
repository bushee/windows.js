angular.module('windows.js').directive('dragArea', function () {
    return {
        restrict: 'ACE',
        require: 'dragArea',
        controller: function () {
        },
        link: function (scope, element, attrs, dragAreaCtrl) {
            dragAreaCtrl.getWidth = function () {
                return element[0].offsetWidth;
            };
            dragAreaCtrl.getHeight = function () {
                return element[0].offsetHeight;
            };
        }
    };
});