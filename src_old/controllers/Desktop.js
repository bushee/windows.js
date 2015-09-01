define(
    [
        'controllers/ContainerController',
        'views/Desktop',
        'objects/bus'
    ],
    function (ContainerController, DesktopView, bus) {
        var DesktopController = ContainerController.extend({
            initialize: function () {
                this.view = new DesktopView();
                bus.on('windowCreate', this.view.addWindow, this.view);
            }
        });

        return DesktopController;
    }
);