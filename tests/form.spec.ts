import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/form");
});

test.describe("Form elements", () => {
  test("renders without errors", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Form" })).toBeVisible();
  });

  test("are fillable using a keyboard", async ({ page }) => {
    // Enter name
    await page.keyboard.press("Tab");
    await page.keyboard.type("John Doe");

    // Select fruit
    await page.keyboard.press("Tab");
    await page.keyboard.type("Apel");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    // Select date
    await page.keyboard.press("Tab");
    await page.keyboard.type("01-01-2021");

    // Select animal
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    // Accept terms
    await page.keyboard.press("Tab");
    await page.keyboard.press("Space");

    // Submit
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

    await expect(page.getByText("name: John Doe")).toBeVisible();
    await expect(page.getByText("fruit: Apelsin")).toBeVisible();
    await expect(page.getByText("date: 2021-1-1")).toBeVisible();
    await expect(page.getByText("animal: Tiger")).toBeVisible();
    await expect(page.getByText("accept: Ja")).toBeVisible();
  });
});
