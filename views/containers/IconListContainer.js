define(
    [
        'views/containers/Container',
        'tpl!templates/containers/IconListContainer._.html'
    ],
    function (Container, template) {
        var IconListContainer = Container.extend({
            tagName: 'ul',
            className: 'icon-list',
            template: template
        });

        return IconListContainer;
    }
);