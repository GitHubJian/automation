require('chromedriver');
const path = require('path');
const fs = require('fs');
const webdriver = require('selenium-webdriver');
const { Builder, By } = webdriver;

let driver = new Builder().forBrowser('chrome').build();
driver
  .get('http://localhost:3000/webdriver/index.html')
  .then(() => {
    driver.takeScreenshot().then(data => {
      let base64Data = data.replace(/^data:image\/png;base64,/, '');
      let pngPath = path.join(__dirname, 'out.png');
      fs.writeFile(pngPath, base64Data, 'base64', err => {
        err && console.log(err);
      });
    });
  })
  .then(() => {
    driver.findElement(By.id('input')).sendKeys('xiao');
    driver.findElement(By.id('input')).sendKeys('xiao');
  })
  .then(() => {
    driver.findElement(By.id('select')).sendKeys(1);
  })
  .then(() => {
    driver.sleep(10 * 1000);
  })
  .then(() => {
    driver.findElement(By.id('submit')).click();
  })
  .then(() => {
    driver.sleep(10 * 1000);
    driver.quit();
  });
