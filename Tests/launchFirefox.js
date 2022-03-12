const puppeteerVar = require('puppeteer-core');

describe('My first Test at Firefox ', () => {
    it('Launch the Browser', async function() {
        const Browser = await puppeteerVar.launch({
            headless: false,
            slowMo: 500,
            devtools: false,
            product: 'firefox',
            args: ['-wait-for-browser'],
            executablePath: 'C:/Program Files/Mozilla Firefox/firefox.exe'
        })
        const page = await Browser.newPage()
        await page.goto("https://www.google.com")
            //await page.waitForTimeout(3000)
        await page.reload();
        await page.goto("https://www.sahibinden.com")
        await Browser.close();
    })
})