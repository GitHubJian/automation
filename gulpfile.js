var gulp = require('gulp');
var Karma = require('karma').Server;

// 前端自动化测试
gulp.task('test', function (done) {
    new Karma({
        // 配置文件所在路径
        configFile: __dirname + '/karma.conf.js',
        // 执行测试结束后退出
        singleRun: true
    }, done).start();
});

gulp.task('tdd', function (done) {
    new Karma({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});