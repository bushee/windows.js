angular.module('windows.js').directive('draggable', function () {
    return {
        restrict: 'AC',
        controller: 'DraggableCtrl',
        require: '?^^dragArea',
        link: function (scope, element, attrs, dragAreaCtrl) {
            var parsePosition, getCurrentPosition, normalizePosition;

            parsePosition = function (cssParam) {
                return parseInt(element.css(cssParam), 10) || 0;
            };
            getCurrentPosition = function () {
                return {
                    x: parsePosition('left'),
                    y: parsePosition('top')
                }
            };

            scope.draggablePosition = getCurrentPosition();

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
                    position.x = Math.max(0, Math.min(position.x, dragAreaCtrl.getWidth() - element[0].offsetWidth));
                    position.y = Math.max(0, Math.min(position.y, dragAreaCtrl.getHeight() - element[0].offsetHeight));
                    return position;
                };

                dragAreaCtrl.onResize(function () {
                    scope.$apply(function () {
                        scope.draggablePosition = normalizePosition(getCurrentPosition());
                    });
                });
            }
        }
    };
});