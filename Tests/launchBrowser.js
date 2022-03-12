const puppeteerVar = require('puppeteer');

describe('My first Test ', () => {
    it('Launch the Browser', async function() {
        const Browser = await puppeteerVar.launch({ headless: false, slowMo: 500, devtools: false })
        const page = await Browser.newPage()
        await page.goto("https://www.google.com")
            //await page.waitForTimeout(3000)
        await page.goto("https://www.sahibinden.com")
        await page.goBack()
        await page.waitForTimeout(3000)
        await page.goForward()
        await page.waitForTimeout(3000)
        await page.reload();
        await Browser.close();
    })
})