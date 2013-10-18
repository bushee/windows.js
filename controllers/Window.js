define(
    [
        'controllers/Controller',
        'views/Window',
        'objects/bus'
    ],
    function (Controller, WindowView, bus) {
        var WindowController = Controller.extend({
            initialize: function () {
                this.view = new WindowView();
                bus.trigger('windowCreate', this);
            }
        });

        return WindowController;
    }
);