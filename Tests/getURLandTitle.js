const puppeteerVar = require('puppeteer');

describe('Get the page URL and Title ', () => {
    it('Launch the Broswer', async function() {
        const browser = await puppeteerVar.launch({ headless: false, slowMo: 50 })
        const page = await browser.newPage()
        await page.goto("D:/Codes/Visual Studio Code/Puppeteer Project/index.html")
        await page.waitForTimeout(3000);

        const pageURL = await page.url();
        console.log("The page URL is " + pageURL)

        const pageTitle = await page.title();
        console.log("The page Title is " + pageTitle)

        await browser.close();
    })
})