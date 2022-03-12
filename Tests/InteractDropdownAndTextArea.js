const puppeteerVar = require('puppeteer');

describe('Interacting with Dropdown and TextArea ', () => {
    it('Launch the Broswer', async function() {
        const browser = await puppeteerVar.launch({ headless: false, slowMo: 50 })
        const page = await browser.newPage()
        await page.goto("D:/Codes/Visual Studio Code/Puppeteer Project/index.html")
        await page.waitForTimeout(3000);
        await page.select("#cars", "audi")
        await page.waitForTimeout(1000);
        await page.type("#textarea", "I have selected Audi")
        await browser.close();

    })
})