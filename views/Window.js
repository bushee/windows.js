define(
    [
        'views/ContainerView',
        'tpl!templates/Window._.html'
    ],
    function (ContainerView, template) {
        var Window = ContainerView.extend({
            tagName: 'div',
            className: 'window',
            template: template,

            render: function () {
                this.$el.html(template());
                this.renderContainer();
            }
        });
        return Window;
    }
);