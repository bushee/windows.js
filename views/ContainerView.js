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
                this.$el.append(this.container.$el);
            },

            renderContainer: function () {
                this.container.render();
            }
        });

        return ContainerView;
    }
);