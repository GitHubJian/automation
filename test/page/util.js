let {
    promise
} = require('selenium-webdriver');

module.exports = {
    takeScreenshot: function* (ctx, dir) {
        return yield promise.consume(function* () {
            ctx.takeScreenshot().then(data => {
                let filename = __filename.replace(/.js$/, '.out.png');
                let base64Data = data.replace(/^data:image\/png;base64,/, '');
                fs.writeFile(filename, base64Data, 'base64', function (err) {
                    if (err) console.log(err);
                })
            })
            return ctx;
        });
    }
}