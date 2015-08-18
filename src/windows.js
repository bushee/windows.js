require.config({
    paths: {
        'models': 'src/models/',
        'views': 'src/views/',
        'controllers': 'src/controllers/',
        'exceptions': 'src/exceptions/',
        'templates': 'src/templates/',
        'objects': 'src/objects/',
        'utils': 'src/utils/',

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
        'objects/desktop',
        'utils/arrayToIcons'
    ],
    function ($, desktop, arrayToIcons) {
        var runWindowsJs = function (whereToInject, desktopConfig) {
            desktop.appendChildren(arrayToIcons(desktopConfig.icons));
            desktop.getView().render();
            $(whereToInject).append(desktop.getView().$el);
        }
        return runWindowsJs;
    }
);