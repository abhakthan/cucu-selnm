const { After, setWorldConstructor, setDefaultTimeout } = require('cucumber');
const selenium = require('selenium-webdriver');
const assert = require('assert');

const TIMEOUT = 60 * 1000;

function CustomWorld() {

    this.driver = new selenium.Builder()
        .forBrowser('chrome')
        .withCapabilities({
            browserName: 'chrome',
            javascriptEnabled: true,
            acceptSslCerts: true,
            chromeOptions: {
                args: ['start-maximized', 'disable-extensions']
            }
        })
        .build();

    this.driver.manage().window().maximize();
    this.driver.manage().deleteAllCookies();

    let params = { By: selenium.By, assert: assert };
    Object.keys(params).forEach(function (key) {
        global[key] = params[key];
    });

    this.loadPage = (url) => {
        return this.driver.get(url).then(() => {
            return this.driver.wait(selenium.until.elementLocated(By.css('body')), TIMEOUT);
        });
    }
}

After(function () {
    setTimeout(() => {
        this.driver.quit();
    }, TIMEOUT / 30);
});

setDefaultTimeout(TIMEOUT);
setWorldConstructor(CustomWorld)