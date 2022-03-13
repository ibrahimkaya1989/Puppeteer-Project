// desktop: width: 1920, height: 1080

const { afterEach } = require('mocha');
const puppeteerVar = require('puppeteer');

describe('Device Emulation using puppeteer ', () => {

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

    beforeEach(async function() {})

    afterEach(async function() {})

    it('Test Desktop View ', async function() {
        await page.setViewport({ width: 1920, height: 1080 })
        await page.waitForTimeout(6000)
    })

    it('Test Ipad View ', async function() {
        const ipad = puppeteerVar.devices['iPad landscape']
        await page.emulate(ipad)
        await page.waitForTimeout(6000)
    })

    it('Test Iphone View ', async function() {
        const mobile = puppeteerVar.devices['iPhone X']
        await page.emulate(mobile)
        await page.waitForTimeout(6000)
    })
})