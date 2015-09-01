define(
    [
        'backbone',
        'underscore'
    ],
    function (Backbone, _) {
        var ContainerView = Backbone.View.extend({
            container: null,

            setContainer: function (container) {
                this.container = container;
            },

            appendChild: function (child) {
                this.container.append(child);
            },

            appendChildren: function (children) {
                _.each(children, function (child) {
                    this.appendChild(child);
                }, this);
            },

            render: function () {
                this.renderContainer();
            },

            renderContainer: function () {
                if (this.container) {
                    this.container.render();
                    this.$el.append(this.container.$el);
                }
            }
        });

        return ContainerView;
    }
);