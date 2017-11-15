const glob = require('glob');
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, './page');
let fileaa = glob.sync(`${dir}/*.js`);
let files = glob.sync(`${dir}/*.test.js`).map(file => {
    return file;
});
files.forEach((path, index) => {
    if (fs.existsSync(path)) {
        require(path);
    }
})