import {test, expect} from '@playwright/test';

test('Fill the form', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
    await page.getByPlaceholder('Aarav').fill('ArnavJI');
    await page.getByPlaceholder('Sharma').fill('Shashri');
    await page.getByRole('radio', {name: "gender"}).first().getByLabel('Male').click();
})