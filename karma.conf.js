'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            './node_modules/should/should.js',
            './src/*.js',
            './test/*.js'
        ],
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        plugins: ['karma-mocha', 'karma-chrome-launcher', 'karma-coverage', 'karma-spec-reporter'],
        browsers: ['Chrome'],
        reporters: ['spec', 'coverage'],
        singleRun: false,
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
        }
    });
};