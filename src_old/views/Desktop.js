define(
    [
        'views/ContainerView',
        'views/containers/IconListContainer',
        'objects/dragHandler',
        'tpl!templates/Desktop._.html'
    ],
    function (ContainerView, IconListContainer, dragHandler, template) {
        var Desktop = ContainerView.extend({
            tagName: 'div',
            className: 'desktop',
            template: template,

            events: {
                'mousemove': dragHandler.doDrag,
                'mouseup': dragHandler.stopDragging
            },

            initialize: function () {
                this.setContainer(new IconListContainer());
            },

            addWindow: function (windowController) {
                this.$el.append(windowController.getView().$el);
            }
        });
        return Desktop;
    }
);