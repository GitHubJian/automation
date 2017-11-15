const glob = require('glob');
const {
    resolve,
    relative,
    join
} = require('path');
const cwd = process.cwd();
const VUE_PATH = `${cwd}/vue`;
const ENTRY_PATH = `${cwd}/vue-webpack`;
const pageList = glob.sync(join(VUE_PATH, '**/index.vue'));
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
const entry = pageList.reduce((prev, cur) => {
    const key = relative(VUE_PATH, cur).split('/').slice(0, -1).join('/');
    const value = join(ENTRY_PATH, key);
    prev[key] = join(value, 'index.js');
    return prev;
}, {});

module.exports = {
    entry: entry,
    output: {
        path: `${cwd}`,
        filename: 'static/vue/[name].js',
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
    plugins: [
        new HappyPack({
            id: 'js',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            verbose: false,
            debug: false
        }),
        new HappyPack({
            id: 'styles',
            threadPool: happyThreadPool,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            verbose: false,
            debug: false
        }),
        new HappyPack({
            id: 'vue',
            loaders: ['vue-loader'],
            threadPool: happyThreadPool,
            verbose: false,
            debug: false
        })

    ]
}