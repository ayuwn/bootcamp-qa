const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('SauceDemo Automation Task', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
        await driver.get('https://www.saucedemo.com/');
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    async function loginSuccessfully() {
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'));
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'));
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'));

        await inputUsername.sendKeys('standard_user');
        await inputPassword.sendKeys('secret_sauce');
        await buttonLogin.click();

        await driver.wait(until.urlContains('/inventory.html'), 10000);
    }

    it('Sukses Login ke SauceDemo', async function () {
        await loginSuccessfully();

        let title = await driver.getTitle();
        assert.strictEqual(title, 'Swag Labs');

        let productsTitle = await driver.findElement(By.className('title'));
        let isTitleDisplayed = await productsTitle.isDisplayed();
        assert.strictEqual(isTitleDisplayed, true);

        let inventoryContainer = await driver.findElement(By.id('inventory_container'));
        let isInventoryDisplayed = await inventoryContainer.isDisplayed();
        assert.strictEqual(isInventoryDisplayed, true);
    });

    it('Urutkan Produk dari A-Z', async function () {
        await loginSuccessfully();

        let sortDropdown = await driver.findElement(By.className('product_sort_container'));
        await sortDropdown.click();

        let optionAZ = await driver.findElement(By.css('option[value="az"]'));
        await optionAZ.click();

        await driver.wait(until.elementLocated(By.className('inventory_item_name')), 10000);

        let firstProduct = await driver.findElement(By.className('inventory_item_name'));
        let isFirstProductDisplayed = await firstProduct.isDisplayed();
        assert.strictEqual(isFirstProductDisplayed, true);

        let productName = await firstProduct.getText();
        assert.strictEqual(productName, 'Sauce Labs Backpack');
    });
});