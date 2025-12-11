import pupeteer from "puppeteer"
import path from 'path'

const browser = await pupeteer.launch()
const page = await browser.newPage()
const dir = path.join(process.cwd(),"page.html")
await page.goto(`file://${dir}`)

await page.screenshot({
    path:"screenshot.jpg"
})
await browser.close()