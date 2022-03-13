const puppeteerVar = require('puppeteer');

describe('Launch the Browser Incognito Mode ', () => {
    it('Test for Launching the Broswer Incognito Mode', async function() {
        const browser = await puppeteerVar.launch({ headless: false, slowMo: 50 })
        const incognito = await browser.createIncognitoBrowserContext();
        const incognitoPage = await incognito.newPage();

        await incognitoPage.goto("https://www.google.com.tr");
        await incognitoPage.waitForTimeout(3000);
        await browser.close();
    })
})