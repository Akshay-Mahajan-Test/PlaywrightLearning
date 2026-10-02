import { test, expect } from "@playwright/test";

test("login Test", async ({ page }) => {
  await page.goto("https://app.vwo.com");
  await page.fill("#login-username", "ABCDFWIF");
  await page.fill("#login-password", "123415525");
  await page.click("#js-login-btn");

  expect(page.isVisible("#js-notification-box-msg")).toContain("Your email, password, IP address or location did not match");
});
