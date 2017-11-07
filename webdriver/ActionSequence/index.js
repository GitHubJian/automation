require('chromedriver');
const fs = require('fs');
const webdriver = require('selenium-webdriver');
const {
    ActionSequence, //Class for defining sequences of complex user interactions.
    Browser, //Recognized browser names.
    Builder, //Creates new WebDriver instances
    Button, //Enumeration of the buttons used in the advanced interactions API.
    By, //Describes a mechanism for locating an element on the page.
    Capabilities, //Describes a set of capabilities for a WebDriver session.
    Capability, //Common Capability keys.
    Condition, //Defines a condition for use with WebDriver's wait command.
    EventEmitter, //Object that can emit events for others to listen for.
    FileDetector, //
    Key, //Representations of pressable keys that aren't text.
    Session, //Contains information about a single WebDriver session.
    ThenableWebDriver, //A thenable wrapper around a IWebDriver instance
    TouchSequence, //Class for defining sequences of user touch interactions
    WebDriver, //Each WebDriver instance provides automated control over a browser session.
    WebElement, //Represents a DOM element.
    WebElementCondition, //Defines a condition that will result in a WebElement.
    WebElementPromise, //WebElementPromise is a promise that will be fulfilled with a WebElement
} = webdriver;

let driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get("http://localhost:3000/webdriver/sequence.html");
driver.takeScreenshot().then(data => {
    let base64Data = data.replace(/^data:image\/png;base64,/, '');
    fs.writeFile("out.png", base64Data, 'base64', function (err) {
        if (err) console.log(err);
    });
}).then(()=>{
    driver.quit();
});