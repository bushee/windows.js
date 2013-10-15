define(
    [
        'views/ContainerView',
        'views/containers/IconListContainer',
        'tpl!templates/Desktop._.html'
    ],
    function (ContainerView, IconListContainer, template) {
        var Desktop = ContainerView.extend({
            tagName: 'div',
            id: 'desktop',
            template: template,

            initialize: function () {
                this.setContainer(new IconListContainer());
            }
        });
        return Desktop;
    }
);