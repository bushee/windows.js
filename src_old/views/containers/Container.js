define(
    [
        'backbone',
        'underscore',
    ],
    function (Backbone, _) {
        var Container = Backbone.View.extend({
            children: [],

            append: function (child) {
                this.children.push(child);
            },

            processChildren: function (callback) {
                _.each(this.children, callback, this);
            },

            renderChildren: function () {
                this.processChildren(function (child) {
                    child.render();
                    this.$el.append(child.$el);
                });
            },

            render: function () {
                this.renderChildren();
            }
        });

        return Container;
    }
);