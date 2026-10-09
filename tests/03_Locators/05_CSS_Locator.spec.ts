import {test, expect} from '@playwright/test';

test('CSS Locators', async ({ page }) => {
    await page.goto('https://awesomeqa.com/css/');

    const allSpans = page.locator("div.first > span");
    const count = await allSpans.count();
    console.log(count);

    const span1 = await allSpans.first().textContent();
    const span2 = await allSpans.nth(1).textContent();
    const span3 = await allSpans.nth(2).textContent();
    const span4 = await allSpans.nth(3).textContent();
    const span5 = await allSpans.nth(4).textContent();
    const span6 = await allSpans.nth(5).textContent();
    const span7 = await allSpans.last().textContent();


    console.log("Span 1: ", span1);
    console.log("Span 2: ", span2);
    console.log("Span 3: ", span3);
    console.log("Span 4: ", span4);
    console.log("Span 5: ", span5);
    console.log("Span 6: ", span6);
    console.log("Span 7: ", span7);

    console.log("----------------- Test -----------------")

    for(let i = 0; i < count; i++) {
        let span_ith = await allSpans.nth(i).textContent();
        console.log("Span - ", span_ith);
    }

});