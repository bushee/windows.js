define(
    [
        'controllers/Controller',
        'views/Window'
    ],
    function (Controller, WindowView) {
        var WindowController = Controller.extend({
            initialize: function () {
                this.view = new WindowView();
            }
        });

        return WindowController;
    }
);