let path = require('path');
let serve = require('koa-static');

exports.assert = function* (next) {
    yield serve(path.join(__dirname, '../../static')).call(this, next);
}