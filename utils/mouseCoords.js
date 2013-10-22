define(
    [],
    function () {
        var mouseCoords = function (event) {
            if (event.pageX || event.pageY){
                return {
                    x: event.pageX,
                    y: event.pageY
                };
            }
            return {
                x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
                y: event.clientY + document.body.scrollTop  - document.body.clientTop
            };
        }
        return mouseCoords;
    }
);