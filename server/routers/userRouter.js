const Router = require('koa-router');
let router = new Router();
const User = require('./../entry/user.js');

router.get('/list/:id', function* (next) {
    this.user = user.findById(this.params.id);
    yield next;
})


exports.get = router;