define(
	[
        'controllers/Window',
        'exceptions/OpenWindowException'
    ],
	function (WindowController, OpenWindowException) {
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
                if (action.data) {
                    var window = new WindowController(action.data);
                    window.getView().render();
                } else {
                    throw new OpenWindowException('Missing window data.');
                }
            }
		};
		return actionHandler;
	}
);