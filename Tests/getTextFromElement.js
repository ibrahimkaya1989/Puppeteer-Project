const puppeteerVar = require('puppeteer');

describe('Get Text from Element ', () => {
    it('Launch the Broswer', async function() {
        const browser = await puppeteerVar.launch({ headless: false, slowMo: 50 })
        const page = await browser.newPage()
        await page.goto("D:/Codes/Visual Studio Code/Puppeteer Project/index.html")
        await page.waitForTimeout(3000);
        const h1Text = await page.$eval('h1', element => element.textContent);
        console.log("The content of element is " + h1Text)
        await browser.close();

    })
})