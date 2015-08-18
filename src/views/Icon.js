define(
    [
        'backbone',
        'objects/eventHandler',
        'tpl!templates/Icon._.html'
    ],
    function (Backbone, eventHandler, template) {
        var IconView = Backbone.View.extend({
            tagName: 'li',
            className: 'icon',
            template: template,
            events: {
                'click': 'handleClick',
            },

            action: null,

            initialize: function (options) {
                this.action = options.action;
            },

            render: function () {
                this.$el.html(template(this.model.toJSON()));
            },

            handleClick: function (event) {
                eventHandler.handleEvent(this, this.action, event);
            }
        });
        return IconView;
    }
);