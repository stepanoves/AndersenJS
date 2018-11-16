function debounce(func, delay) {
    var timeoutID;

    function debounced(value) {

        if (timeoutID !== undefined) clearTimeout(timeoutID);

        timeoutID = setTimeout(function () {
            func(value);
        }, delay);

    }

    return debounced;
}






