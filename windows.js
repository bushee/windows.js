require.config({
    paths: {
        'models': 'models/',
        'views': 'views/',
        'controllers': 'controllers/',
        'templates': 'templates/',
        'utils': 'utils/',

        'jquery': 'libs/jquery-1.10.2.min',
        'backbone': 'libs/backbone-min',
        'underscore': 'libs/underscore-min',
        'tpl': 'libs/require-tpl',
        'text': 'libs/require-text'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

define(
    'windowsJs',
    [
        'jquery',
        'controllers/Desktop',
        'utils/arrayToIcons'
    ],
    function ($, DesktopController, arrayToIcons) {
        var runWindowsJs = function (whereToInject, desktopConfig) {
            var desktopController = new DesktopController();
            desktopController.appendChildren(arrayToIcons(desktopConfig.icons));
            desktopController.getView().render();
            $(whereToInject).append(desktopController.getView().$el);
        }
        return runWindowsJs;
    }
);