define(
    [
        'controllers/Controller',
        'views/Icon',
        'models/Icon'
    ],
    function (Controller, IconView, IconModel) {
        var IconController = Controller.extend({
            initialize: function (data, action) {
                this.model = new IconModel(data);
                this.view = new IconView({
                    action: action,
                    model: this.model
                });
            }
        });

        return IconController;
    }
);