const glob = require('glob');
const path = require('path');
const cwd = process.cwd();
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const vendor = [
    'element-ui',
    'vue'
]

module.exports = {
    entry: {
        vendor: vendor
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'vue/[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'happypack/loader?id=vue',
            exclude: [/node_modules/, /vendor/]
        }, {
            test: /\.js$/,
            use: 'happypack/loader?id=js',
            exclude: [/node_modules/, /vendor/]
        }, {
            test: /\.css$/,
            use: 'happypack/loader?id=css'
        }, {
            test: /\.scss$/,
            use: 'happypack/loader?id=scss'
        }]
    },
}