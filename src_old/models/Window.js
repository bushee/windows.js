define(
    [
        'backbone'
    ],
    function (Backbone) {
        var WindowModel = Backbone.Model.extend({
            defaults: {
                title: '',
                icon: '',
                options: {},
                type: '',
                content: ''
            }
        });
        return WindowModel;
    }
);