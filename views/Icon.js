define(
    [
        'backbone',
        'controllers/Window',
        'tpl!templates/Icon._.html'
    ],
    function (Backbone, WindowController, template) {
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
                if (typeof this.action === 'function') {
                    this.action.apply(event, this);
                } else if (this.action.event) {
                    switch (this.action.event) {
                        case 'openWindow':
                            this.openWindow();
                            break;
                    }
                }
            },

            openWindow: function () {
                if (this.action.type && this.action.content) {
                    var window = new WindowController();
                    window.getView().render();
                }
            }
        });
        return IconView;
    }
);