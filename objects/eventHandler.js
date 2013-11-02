define(
	[
        'controllers/Window'
    ],
	function (WindowController) {
		var actionHandler = {
            handleEvent: function (view, action, event) {
                if (typeof action === 'function') {
                    action.apply(event, view);
                } else if (action.event) {
                    switch (action.event) {
                        case 'openWindow':
                            actionHandler.openWindow(action);
                            break;
                    }
                }
            },

            openWindow: function (action) {
                if (action.type && action.content) {
                    var window = new WindowController();
                    window.getView().render();
                }
            }
		};
		return actionHandler;
	}
);