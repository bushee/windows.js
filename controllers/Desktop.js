define(
    [
        'controllers/ContainerController',
        'controllers/Icon',
        'views/Desktop'
    ],
    function (ContainerController, IconController, DesktopView) {
        var DesktopController = ContainerController.extend({
            initialize: function () {
                this.view = new DesktopView();
            }
        });

        return DesktopController;
    }
);