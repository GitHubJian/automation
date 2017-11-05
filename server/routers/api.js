const router = require('koa-router')();
const User = require('./../entry/user.js');

module.exports = router.get('/users/:id', async(ctx) => {
    let user = User.findById(ctx.params.id);
    ctx.body = user;
});