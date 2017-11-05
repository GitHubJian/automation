let fs = require('fs'),
    send = require('koa-send');

exports.getPage = function* (next) {
    if (this.path === '/' || /\.html$/.test(this.path)) {
        let cwd = process.cwd();
        this.body = yield new Promise(function (resolve, reject) {
            fs.readFile(cwd + '/pages/index.html', function (err, data) {
                err ? resolve('error') : resolve(data.toString());
            });
        }).then(data => {
            return data;
        });
    }
    yield next;
}