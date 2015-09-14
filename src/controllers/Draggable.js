angular.module('windows.js').controller('DraggableCtrl', ['$scope', '$document', function ($scope, $document) {
    var startMousePosition,
        onMouseDown, onMouseMove, onMouseUp;

    startMousePosition = {
        x: 0,
        y: 0
    };

    onMouseDown = function (event) {
        if (event.buttons === 1) {
            event.preventDefault();
            startMousePosition.x = event.pageX - $scope.draggablePosition.x;
            startMousePosition.y = event.pageY - $scope.draggablePosition.y;
            $document.on('mousemove', onMouseMove);
            $document.on('mouseup', onMouseUp);
        }
    };

    onMouseMove = function (event) {
        $scope.$apply(function () {
            $scope.draggablePosition.x = event.pageX - startMousePosition.x;
            $scope.draggablePosition.y = event.pageY - startMousePosition.y;
        });
    };

    onMouseUp = function () {
        $document.off('mousemove', onMouseMove);
        $document.off('mouseup', onMouseUp);
    };

    this.onMouseDown = onMouseDown;
}]);