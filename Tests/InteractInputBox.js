const puppeteerVar = require('puppeteer');

describe('Testing Input box in Google ', () => {
    it('Launch the Browser', async function() {
        const Browser = await puppeteerVar.launch({ headless: false, slowMo: 50, devtools: false })
        const page = await Browser.newPage()
        await page.goto("https://www.google.com")
        var ele = await page.waitForXPath("//input[@name='q']")
        await ele.type("This is google input box")
        await Browser.close();

    })
})