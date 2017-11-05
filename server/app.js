const path = require('path');
const config = require('./config.js');
const koa = require('koa');
const htmlMiddleware = require('./middleware/htmlMiddleware.js');
const serve = require('koa-static');
const app = new koa();


//app.use(htmlMiddleware.getPage);
//app.use(serve(path.resolve(__dirname, '../static')));
const router = require('./routers/index')

app.use(router.routes()).use(router.allowedMethods())
app.listen(config.port);