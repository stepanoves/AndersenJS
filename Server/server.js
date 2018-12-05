const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../MyOwnCompanyV2');
const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript'
};

http.createServer((request, response) => {

    const filePath = path.join(dir, request.url);

    fs.readFile(filePath, (error, data) => {

        if (error) {
            response.status = 500;
            response.end('File not found');
            // response.status(500).end('File not found'); // Так не работает
        } else {

            for (type in contentType) {
                if (request.url.indexOf(type) !== -1) {
                    response.setHeader('Content-type', contentType[type]);
                    response.end(data);
                }
            }

        }

        });

}).listen(3000);
