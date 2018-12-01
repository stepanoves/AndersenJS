const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../MyOwnCompanyV2');
const contentType = {
    html: 'text/html',
    js: 'text/javascript'
};

http.createServer((request, response) => {

    let filePath = path.join(dir, request.url);

    fs.readFile(filePath, (error, data) => {

        if (error) {
            response.status = 404;
            response.end('File not found');
        } else {

            let fileName = request.url.split('/');
            let fileType = fileName[fileName.length - 1].split('.')[1];

            response.setHeader('Content-type', contentType[fileType]);
            response.end(data);
        }

        });

}).listen(3000);
