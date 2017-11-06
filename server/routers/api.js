const router = require('koa-router')();
const User = require('./../entry/user.js');


router.get('/users/:id', async(ctx) => {
    let user = User.findById(ctx.params.id);
    let name = ctx.query.name;
    let uid = ctx.cookies.get('uid');
    ctx.body = user;
});
router.post('/users', async(ctx) => {
    console.log(ctx.request.body);
    let user = User.create({
        name: ctx.request.body.name,
        age: ctx.request.body.age
    });
    ctx.cookies.set('uid',
        ctx.params.id, {
            domain: 'localhost', // 写cookie所在的域名
            path: '/', // 写cookie所在的路径
            maxAge: 10 * 60 * 1000, // cookie有效时长
            expires: new Date('2018-02-15'), // cookie失效时间
            httpOnly: false, // 是否只用于http请求中获取
            overwrite: false // 是否允许重写
        })
    ctx.body = user;
});

router.delete('/users/:id', async(ctx) => {
    let user = User.delete(ctx.params.id);
    ctx.body = user;
});

router.patch('/users/:id', async(ctx) => {
    let user = User.update({
        id: ctx.params.id,
        name: ctx.request.body.name,
        age: ctx.request.body.age
    });
    ctx.body = user;
});

module.exports = router;