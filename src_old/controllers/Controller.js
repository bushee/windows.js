define(
    ['backbone'],
    function (Backbone) {
        var Controller = function() {
            this.model = null;
            this.view = null;

            this.getModel = function () {
                return this.model;
            };

            this.getView = function () {
                return this.view;
            };

            if (this.initialize) {
                this.initialize.apply(this, arguments);
            }
        };

        Controller.extend = Backbone.Model.extend;

        return Controller;
    }
);