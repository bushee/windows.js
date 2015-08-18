define(
    [
        'underscore',
        'controllers/Controller'
    ],
    function (_, Controller) {
        var ContainerController = Controller.extend({
            children: [],

            appendChild: function (child) {
                this.children.push(child);
                if (typeof this.getView().appendChild === 'function') {
                    this.getView().appendChild(child.getView());
                }
            },

            appendChildren: function (children) {
                _.each(children, function (child) {
                    this.appendChild(child);
                }, this);
            },
        });

        return ContainerController;
    }
);