let fs = require('fs'),
    send = require('koa-send');

exports.getPage = function* (next) {
    if (this.path === '/' || /\.html$/.test(this.path)) {
        let cwd = process.cwd();
        this.path === '/' && (this.path = '/index.html');
        let pagePath = this.path;
        this.body = yield new Promise(function (resolve, reject) {
            fs.readFile(cwd + '/pages' + pagePath, function (err, data) {
                err ? resolve('error') : resolve(data.toString());
            });
        }).then(data => {
            return data;
        });
    }
    yield next;
}