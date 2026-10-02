import {test, expect} from '@playwright/test';

test('GoTo Command', async({ page }) => {
    await page.goto('https://www.youtube.com/');
    let title = await page.title();

    console.log('Tile of the page: ', title);
    await expect(page).toHaveURL('https://www.youtube.com/');
})

test('Refereral the URL', async ({ page }) => {
    await page.goto('https://www.youtube.com/channel/UCkYQyvc_i9hXEo4xic9Hh2g', {
        referer: "https://www.youtube.com/"
    });

    console.log(await page.title());
});