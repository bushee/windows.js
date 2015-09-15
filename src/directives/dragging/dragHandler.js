angular.module('windows.js').directive('dragHandler', function () {
    return {
        restrict: 'AC',
        require: '^draggable',
        link: function (scope, element, attrs, draggableCtrl) {
            element.on('mousedown', draggableCtrl.onMouseDown);
        }
    };
});