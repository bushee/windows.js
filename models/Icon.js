define(
    [
        'backbone'
    ],
    function (Backbone) {
        var IconModel = Backbone.Model.extend({
            defaults: {
                iconUrl: '',
                title: '',
                fontColor: ''
            }
        });

        return IconModel;
    }
);