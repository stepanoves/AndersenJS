function debounce(func, delay) {
    var timeoutID;

    function debounced() {

        var args = arguments;

        if (timeoutID) clearTimeout(timeoutID);

        timeoutID = setTimeout(function () {
            func(args);
        }, delay);

    }

    return debounced;
}







