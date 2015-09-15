angular.module('windows.js').directive('draggable', function () {
    return {
        restrict: 'AC',
        controller: 'DraggableCtrl',
        require: '?^^dragArea',
        link: function (scope, element, attrs, dragAreaCtrl) {
            var position, normalizePosition;

            position = function (element, cssParam) {
                return parseInt(element.css(cssParam), 10) || 0;
            };
            scope.draggablePosition = {
                x: position(element, 'left'),
                y: position(element, 'top')
            };

            normalizePosition = function (position) {
                return position;
            };

            scope.$watch('draggablePosition', function (position) {
                normalizePosition(position);
                element.css({
                    left: position.x + 'px',
                    top: position.y + 'px'
                });
            }, true);

            if (dragAreaCtrl) {
                normalizePosition = function (position) {
                    position.x = Math.min(Math.max(position.x, 0), dragAreaCtrl.getWidth() - element[0].offsetWidth);
                    position.y = Math.min(Math.max(position.y, 0), dragAreaCtrl.getHeight() - element[0].offsetHeight);
                }
            }
        }
    };
});