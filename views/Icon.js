define(
    [
        'backbone',
        'tpl!templates/Icon._.html'
    ],
    function (Backbone, template) {
        var IconView = Backbone.View.extend({
            tagName: 'li',
            className: 'icon',
            template: template,

            render: function () {
                this.$el.html(template(this.model.toJSON()));
            }
        });
        return IconView;
    }
);