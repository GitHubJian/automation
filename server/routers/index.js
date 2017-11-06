const router = require('koa-router')()

const api = require('./api')
const upload = require('./upload');

router.use('/api', api.routes(), api.allowedMethods())
router.use('/upload', upload.routes(), upload.allowedMethods());

module.exports = router;