let cwd = process.cwd(),
    path = require('path');

module.exports = {
    port: 3000,
    pages: path.join(cwd, 'pages/')
}