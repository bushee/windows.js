define(
    [
        'underscore',
        'controllers/Icon'
    ],
    function (_, IconController) {
        var arrayToIcons = function (array) {
            var icons = [];
            _.each(array, function (item) {
                icons.push(new IconController(item.data, item.action));
            }, this);
            return icons;
        }

        return arrayToIcons;
    }
);