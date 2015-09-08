define(
    [
        'views/ContainerView',
        'objects/bus',
        'tpl!templates/Window._.html'
    ],
    function (ContainerView, bus, template) {
        var Window = ContainerView.extend({
            template: template,

            events: {
                'mousedown .header': 'dragStart'
            },

            initialize: function () {
                this.on('moveBy', this.doDrag, this);
            },

            dragStart: function (event) {
                bus.trigger('windowDragStart', event, this);
            },

            doDrag: function (positionDiff) {
                var offset = this.$el.offset();
                offset.left += positionDiff.x;
                offset.top += positionDiff.y;
                this.$el.offset(offset);
            }
        });
        return Window;
    }
);