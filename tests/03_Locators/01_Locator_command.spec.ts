import { test } from "@playwright/test";

test("test the locators", async ({ page }) => {
  await page.goto("https://www.youtube.com/", { waitUntil: "commit" });
  console.log("THe commited!!!");
});

test("Test the HTML load", async ({ page }) => {
  await page.goto("https://www.youtube.com/", {
    waitUntil: "domcontentloaded",
  });
  console.log("THe HTML data is Loaded!!!");
});

test("Test the Default load", async ({ page }) => {
  await page.goto("https://www.youtube.com/", { waitUntil: "load" });
  console.log("The dafauld webdata is load with the time!!!");
});

test("Test the netwroks all load", async ({ page }) => {
  await page.goto("https://www.youtube.com/", { waitUntil: "networkidle" });
  console.log("All network field loaded!!!");
});
