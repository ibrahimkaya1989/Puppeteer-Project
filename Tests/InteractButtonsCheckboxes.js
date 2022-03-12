const puppeteerVar = require('puppeteer');

describe('Interacting with CheckBoxes and Buttons ', () => {
    it('Launch the Broswer', async function() {
        const browser = await puppeteerVar.launch({ headless: false, slowMo: 50 })
        const page = await browser.newPage()
        await page.goto("C:/Users/Azhar/Desktop/Puppeteer%20Project/webPage.html")
        await page.waitForTimeout(3000);
        var eleCheckbox = await page.waitForXPath("//input[@id='male']")
        await eleCheckbox.click({ clickCount: 1 })
        await page.waitForTimeout(3000);
        var eleSubmitButton = await page.waitForXPath("//input[@type='submit']")
        await eleSubmitButton.click()
        await browser.close();

    })
})