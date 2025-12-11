import pupeteer from "puppeteer"
import path from 'path'
import fs from 'fs'
const browser = await pupeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
})
const page = await browser.newPage()
const dir = path.join(process.cwd(), "page.html")
await page.goto(`file://${dir}`)

if (!fs.existsSync("./screenshot")) {
    fs.mkdirSync("./screenshot")
}
await page.screenshot({
    path: "./screenshot/screenshot.jpg"
})
await browser.close()