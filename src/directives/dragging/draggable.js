angular.module('windows.js').directive('draggable', function () {
    return {
        restrict: 'AC',
        controller: 'DraggableCtrl',
        link: function (scope, element) {
            var position = function (element, cssParam) {
                return parseInt(element.css(cssParam), 10) || 0;
            };
            scope.draggablePosition = {
                x: position(element, 'left'),
                y: position(element, 'top')
            };

            scope.$watch('draggablePosition', function (position) {
                element.css({
                    left: position.x + 'px',
                    top: position.y + 'px'
                });
            }, true);
        }
    };
});