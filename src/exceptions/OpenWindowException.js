define(
    [
        'exceptions/Exception'
    ],
    function (Exception) {
        var OpenWindowException = Exception.extend();
        return OpenWindowException;
    }
);