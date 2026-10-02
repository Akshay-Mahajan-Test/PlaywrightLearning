import { Browser, BrowserContext, chromium, Page } from "playwright";

async function multiPage() {

let browser: Browser = await chromium.launch({headless: false});
let context: BrowserContext = await browser.newContext();
let adminPage: Page = await context.newPage();
await adminPage.goto('https://www.google.com/');
console.log(await adminPage.title());

let viewerPage: Page = await context.newPage();
await viewerPage.goto("https://www.youtube.com/");
console.log(await viewerPage.title());

await adminPage.close();
await viewerPage.close();
await context.close();
}

multiPage();