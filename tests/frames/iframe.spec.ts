import { expect, test } from "@playwright/test";

test("Switch To Iframe And Validate Text", async ({ page }) => {
  await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/");
  await page.locator("#iFrame").click();
  await page.waitForTimeout(5000);
  const frame = page.frameLocator('iframe[name="globalSqa"]');
  await expect(frame.locator(".page_heading")).toContainText("Trainings");
});

test("Click Element Inside Frame", async ({ page }) => {
  await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/");
  await page.locator("#iFrame").click();
  await page.waitForTimeout(5000);
  const frame = page.frameLocator('iframe[name="globalSqa"]');
  await frame.locator("#mobile_menu_toggler").click();
  await frame.locator("#mobile_menu").getByText("About").click();
  await expect(frame.locator(".page_heading")).toContainText("About");
});
