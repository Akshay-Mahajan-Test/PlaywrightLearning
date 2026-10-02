import { Browser, BrowserContext, chromium, Page } from "playwright";


async function multiUserTest() {

    let browser: Browser = await chromium.launch({headless: false});

    let adminContext: BrowserContext = await browser.newContext();
    let adminPage: Page = await adminContext.newPage();
    await adminPage.goto('https://www.youtube.com/');

    let viwerContext: BrowserContext = await browser.newContext();
    let viewerPage: Page = await viwerContext.newPage();
    await viewerPage.goto('https://www.google.com/');


    await adminPage.close();
    await viewerPage.close();
    await adminContext.close();
    await viwerContext.close();
}

multiUserTest();