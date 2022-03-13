const puppeteerVar = require('puppeteer');

describe('Test for single element screenshot throught puppeteer ', () => {

    let browser
    let page

    before(async function() {
        browser = await puppeteerVar.launch({ headless: false, slowMo: 50 })
        page = await browser.newPage()
        await page.goto("D:/Codes/Visual Studio Code/Puppeteer Project/index.html")
    })

    after(async function() {
        await browser.close();
    })

    it('Element Screenshots ', async function() {
        await page.waitForTimeout(6000)
        const select = await page.waitForSelector("#cars")
        await select.screenshot({ path: './data/cars.png' })
        await browser.close();
    })

})