require('chromedriver');
let path = require('path');

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

driver.get('http://localhost:3000/create.html');
driver.findElement(By.id('name')).sendKeys('xiaows');
driver.findElement(By.id('submit')).click();
//driver.quit();