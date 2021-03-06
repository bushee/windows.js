define(
    [
        'objects/bus',
        'utils/mouseCoords'
    ],
    function (bus, mouseCoords) {
        var dragHandler = {
            draggedView: null,
            lastMousePosition: {
                x: 0,
                y: 0
            },

            doDrag: function (event) {
                if (dragHandler.draggedView) {
                    if (event.buttons !== 1) {
                        dragHandler.draggedView = null;
                    } else {
                        var currentMousePosition = mouseCoords(event),
                            mousePositionDiff = {
                                x: currentMousePosition.x - dragHandler.lastMousePosition.x,
                                y: currentMousePosition.y - dragHandler.lastMousePosition.y
                            };
                        dragHandler.draggedView.trigger('moveBy', mousePositionDiff);
                        dragHandler.lastMousePosition = currentMousePosition;
                    }
                }
            },

            stopDragging: function () {
                dragHandler.draggedView = null;
            }
        },

        startDragging = function (event, draggedView) {
            if (event.buttons === 1) {
                dragHandler.lastMousePosition = mouseCoords(event);
                dragHandler.draggedView = draggedView;
            }
        };

        bus.on('windowDragStart', startDragging);
        return dragHandler;
    }
);