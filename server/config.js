let cwd = process.cwd(),
    path = require('path');

let projectConfig = require('./../project.config');

let serverConfig = {
    port: 3000,
    pages: path.join(cwd, 'pages/')
}

module.exports = Object.assign(serverConfig, projectConfig);