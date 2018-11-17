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


function promisifySetTimeout(delay) {

    return new Promise(function (resolve) {
       setTimeout(function () {
           resolve('Прошло: ' + delay + 'мс');
       }, delay);

    });
}

function promisifyXMLHttpRequest(url, method, body) {

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.onload = function () {

            if (this.status === 200) {
                resolve(this.responseText);
            } else {
                reject(this.status + ' : ' + this.statusText);
            }

        };

        xhr.onerror = function () {
            reject(this.statusText);
        };

        // if(body === undefined) body = null;
        xhr.send(body);
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

    return new Promise(function (resolve, reject) {

        for (var i = 0; i < promisesArray.length; i++) {
            promisesArray[i]
                .then(function (res) {
                    resultArray.push(res);

                    if (resultArray.length === promisesArray.length) resolve(resultArray);

                })
                .catch(function (error) {
                    reject(error);
                });
        }

    })
}
