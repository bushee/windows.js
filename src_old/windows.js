require.config({
    paths: {
        'models': 'src/models/',
        'views': 'src/views/',
        'controllers': 'src/controllers/',
        'exceptions': 'src/exceptions/',
        'templates': 'src/templates/',
        'objects': 'src/objects/',
        'utils': 'src/utils/',

        'jquery': 'libs/jquery/jquery.min',
        'backbone': 'libs/backbone/backbone-min',
        'underscore': 'libs/underscore/underscore-min',
        'tpl': 'libs/requirejs-tpl/tpl',
        'text': 'libs/requirejs-text/text'
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