const readLine = require('readline');
const fs = require('fs');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    if (input !== 'exit') {
        fs.appendFile('tmp.txt', input, (err) => {
            if (err) throw err;
        });
    } else {
        rl.close();
    }
});
