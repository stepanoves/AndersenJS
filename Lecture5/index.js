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


function promisifySetTimeout(func, delay) {
    
    return new Promise(function (resolve) {
       setTimeout(func, delay);
       resolve('result');
    });
}


promisifySetTimeout(function () {
    console.log('1');
}, 1000)
    .then(function (result) {
        console.log(result);
        return promisifySetTimeout(function () {
            console.log('2');
        }, 1000)
    })
    .then(function (result) {
        console.log(result);
    });


