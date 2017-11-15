const alias = require('../build/alias');
let webpack = require('webpack');

let webpackConfig = {
    resolve: {
        alias: alias
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            __WEEX__: false,
            'process.env': {
                NODE_ENV: '"development"',
                TRANSITION_DURATION: 50,
                TRANSITION_BUFFER: 10
            }
        })
    ],
    devtool: '#cheap-module-eval-source-map'
}

module.exports = {
    webpackConfig: webpackConfig
}