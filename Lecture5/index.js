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

function promisifyXMLHttpRequest(url, method) {

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest(url);
        xhr.open(url, method, true);
        xhr.send();

        if (xhr.status === '200') {
            resolve(xhr.responseText);
        } else {
            reject(xhr.status);
        }
    });
}

function request(url) {

    return new Promise((res) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;

        setTimeout(() => res(url), delayTime);
    });
}

function resolveUrlsArray(urls) {
    var promisesArray = urls.map(function (url) {
        return request(url);
    });

    var resultArray = [];
    return new Promise(function (resolve) {
        for (var i = 0; i < promisesArray.length; i++) {
            promisesArray[i].then(function (res) {
                resultArray.push(res);
                if (resultArray.length === promisesArray.length) resolve(resultArray);
            });
        }
    })
}
