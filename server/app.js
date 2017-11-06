const path = require('path');
const config = require('./config.js');
const koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');
const htmlMiddleware = require('./middleware/htmlMiddleware.js');
const app = new koa();

app.use(koaBody());
app.use(htmlMiddleware.getPage);
app.use(serve(path.resolve(__dirname, '../static')));
const router = require('./routers/index')

app.use(router.routes()).use(router.allowedMethods())
app.listen(config.port);