const puppeteerVar = require('puppeteer')
var xlsx = require('xlsx')
var fs = require('fs')

describe('Title: Convert Excel to PDF', () => {
    it('Test Case : Convert Excel to PDF', async function() {
        const browser = await puppeteerVar.launch({ headless: true, slowMo: 50 });
        const page = await browser.newPage();
        var dataPathExcelToRead = "D:/Codes/Visual Studio Code/Puppeteer Project/data/Sample.xlsx"
        var wb = xlsx.readFile(dataPathExcelToRead)
        var sheetName = wb.SheetNames[0]
        var sheetValue = wb.Sheets[sheetName]
        var htmlData = xlsx.utils.sheet_to_html(sheetValue)
        fs.writeFile('./data/excelToHtml.html', htmlData, function(err) {
            console.log("Data is successfully converted")
        })
        await page.waitForTimeout(3000)
        await page.goto('D:/Codes/Visual Studio Code/Puppeteer Project/data/excelToHtml.html', async function() {
            console.log("Error while loading the file")
        })
        await page.pdf({ path: './data/ExcelToPDF.pdf', format: 'a4', printBackground: true })
        await browser.close()
    })
})