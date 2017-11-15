require('chromedriver');
let path = require('path');
const fs = require('fs');

let {
    host
} = require('./config');

let webdriver = require('selenium-webdriver');

let {
    By,
    until
} = webdriver;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

dirver.get('http://localhost:3000/create.html').then(_ => {
    driver.findElement(By.id('name')).sendKeys('xiaows1')
}, e => {
    promise.consume(function* () {
        let {
            login
        } = require('./before.test');

    });
})

result.then(() => {

})
driver.findElement(By.id('name')).sendKeys('xiaows1');


driver.takeScreenshot().then((data) => {
    let filename = __filename.replace(/.js$/, '.out.png');
    let base64Data = data.replace(/^data:image\/png;base64,/, '');
    fs.writeFile(filename, base64Data, 'base64', function (err) {
        if (err) console.log(err);
    })
}).then(() => {
    driver.findElement(By.id('submit')).click();
}).then(() => {
    driver.quit();
})