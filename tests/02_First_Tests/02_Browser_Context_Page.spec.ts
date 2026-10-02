import { Browser, BrowserContext, chromium, Page } from "playwright";

async function run() {
let browser: Browser = await chromium.launch({headless: false});
console.log('Browser Launched', browser);

let context: BrowserContext = await browser.newContext();
console.log('Context created', context);

let page: Page = await context.newPage();
console.log('Page Opened');

await page.goto('https://www.youtube.com/');
console.log('Title: ', await page.title());

await page.close();
await context.close();
await browser.close();
}


run();