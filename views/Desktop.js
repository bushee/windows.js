define(
    [
        'views/ContainerView',
        'views/containers/IconListContainer',
        'tpl!templates/Desktop._.html'
    ],
    function (ContainerView, IconListContainer, template) {
        var Desktop = ContainerView.extend({
            tagName: 'div',
            className: 'desktop',
            template: template,

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