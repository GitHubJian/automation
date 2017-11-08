module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/*.js'
        ],
        preprocessors: {
            'test/*.js': ['webpack']
        },
        reporters: ['spec', 'coverage'],
        coverageReporter: {
            dir: 'coverage',
            reporters: [{
                type: 'json',
                subdir: '.',
                file: 'coverage.json',
            }, {
                type: 'lcov',
                subdir: '.'
            }, {
                type: 'text-summary'
            }]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        webpack: {
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015'],
                        plugins: ['istanbul']
                    }
                }]
            }
        }
    });
};