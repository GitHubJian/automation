let alias = {
    pages: path.resolve(__dirname, '../pages'),
}


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

module.exports = (config) => {
    config.set({
        browsers: ['Chrome'],
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        frameworks: ['mocha', 'sinon-chai'],
        reporters: ['spec', 'coverage'],
        files: ['./index.js'],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [{
                    type: 'lcov',
                    subdir: '.'
                },
                {
                    type: 'text-summary'
                }
            ]
        },
        client: {
            mocha: {
                timeout: 4000
            }
        },
        webpack: webpackConfig
    })
}