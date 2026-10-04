import { test, expect } from '@playwright/test';

test('Created the Multiple context', async ({ browser }) => {
    let adminContext = await browser.newContext();

    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://www.google.com/");

    let adminPage1 = await adminContext.newPage();
    await adminPage1.goto("https://www.youtube.com/")

    let adminPage2 = await adminContext.newPage();
    await adminPage2.goto("https://app.eraser.io/")
    console.log("First Context launched: ",
        await adminPage.title(),
        await adminPage1.title(),
        await adminPage2.title());
    // Second Context with multiple pages
    let viewContext = await browser.newContext();
    let viwerPage = await viewContext.newPage();
    await viwerPage.goto("https://www.youtube.com/");

    let viwerPage1 = await viewContext.newPage();
    await viwerPage1.goto("https://www.google.com/")

    let viwerPage2 = await viewContext.newPage();
    await viwerPage2.goto("https://app.eraser.io/")

    console.log("Second Context launched: ", 
        await viwerPage.title(),
        await viwerPage1.title(),
        await viwerPage2.title());

    // Third Context with multiple pages
    let thirdContext = await browser.newContext();
    let thirdPage = await thirdContext.newPage();
    await thirdPage.goto("https://app.eraser.io/")

});