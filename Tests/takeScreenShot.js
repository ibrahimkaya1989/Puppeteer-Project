const puppeteerVar = require('puppeteer');

describe('My first Screenshot through Puppeteer ', () => {
    it('Launch the Browser', async function() {
        const Browser = await puppeteerVar.launch({ headless: false, slowMo: 500, devtools: false })
        const page = await Browser.newPage()
        const screenshotOptions = {
            type: 'jpeg',
            path: 'Images/google.jpeg',
            fullPage: true,
            quality: 100,
            omitBackground: true
        }
        await page.goto("https://www.google.com")
        await page.screenshot(screenshotOptions)
        await Browser.close();
    })
})