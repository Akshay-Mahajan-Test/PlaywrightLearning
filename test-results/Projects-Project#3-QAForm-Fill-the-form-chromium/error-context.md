# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project#3\QAForm.spec.ts >> Fill the form
- Location: tests\Projects\Project#3\QAForm.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('radio', { name: 'gender' }).first().getByLabel('Male')

```

# Test source

```ts
  1 | import {test, expect} from '@playwright/test';
  2 | 
  3 | test('Fill the form', async ({ page }) => {
  4 |     await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
  5 |     await page.getByPlaceholder('Aarav').fill('ArnavJI');
  6 |     await page.getByPlaceholder('Sharma').fill('Shashri');
> 7 |     await page.getByRole('radio', {name: "gender"}).first().getByLabel('Male').click();
    |                                                                                ^ Error: locator.click: Target page, context or browser has been closed
  8 | })
```