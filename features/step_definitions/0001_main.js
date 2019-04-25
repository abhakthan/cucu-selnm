const { Given, When, Then } = require('cucumber');

const func1 = (driver, className, textName) => {
    return driver.findElement(By.className(className))
        .then((el) => {
            return el.getText().then((txt) => {
                return assert.ok(txt, textName);
            })
        });
}

const click1 = (driver, className) => {
    return driver.findElement(By.className(className))
        .then((el) => {
            return el.click().then(() => {
                return assert.ok(true);
            })
        });
}

Given('user opens the browser', function () {
    return true;
});

When('user navigates to {string}', function (url) {
    return this.loadPage(url).then(() => {
        return true;
    });
});

Then('user should see {string} button', function (name) {
    return func1(this.driver, 'c3-sign-in-btn');
});

When('user click {string} button', function (name) {
    return click1(this.driver, 'c3-sign-in-btn', name);
});

Then('user should see {string} screen', function (name) {
    return func1(this.driver, 'siw-h2', name);
});