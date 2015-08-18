define(
    [
        'backbone'
    ],
    function (Backbone) {
        var Exception = function (message) {
            this.message = message;
            this.toString = function () {
                return this.message;
            }
        };
        Exception.extend = Backbone.Model.extend;

        return Exception;
    }
);