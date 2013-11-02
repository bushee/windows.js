define(
    [
        'controllers/Controller',
        'views/Window',
        'models/Window',
        'objects/bus'
    ],
    function (Controller, WindowView, WindowModel, bus) {
        var WindowController = Controller.extend({
            initialize: function (data) {
                this.model = new WindowModel();
                this.view = new WindowView({
                    model: this.model
                });
                bus.trigger('windowCreate', this);
            }
        });

        return WindowController;
    }
);