angular.module('windows.js').directive('dragArea', ['$window', function ($window) {
    return {
        restrict: 'ACE',
        require: 'dragArea',
        controller: function () {
        },
        link: function (scope, element, attrs, dragAreaCtrl) {
            dragAreaCtrl.getWidth = function () {
                return element[0].clientWidth;
            };
            dragAreaCtrl.getHeight = function () {
                return element[0].clientHeight;
            };
            dragAreaCtrl.getSize = function () {
                return {
                    width: dragAreaCtrl.getWidth(),
                    height: dragAreaCtrl.getHeight()
                };
            };
            dragAreaCtrl.onResize = function (callback) {
                var lastElementSize, onWindowResize;

                lastElementSize = dragAreaCtrl.getSize();
                onWindowResize = function (event) {
                    var newElementSize = dragAreaCtrl.getSize();
                    if (newElementSize.width != lastElementSize.width
                        || newElementSize.height != lastElementSize.height) {
                        lastElementSize = newElementSize;
                        callback(newElementSize.width, newElementSize.height);
                    }
                };
                angular.element($window).on('resize', onWindowResize);
            };
        }
    };
}]);