import { test, expect } from "@playwright/test";

test("renders without errors", async ({ page }) => {
  const heading = page.getByRole("heading", { name: "Form" });
  await page.goto("/form");
  await expect(heading).toBeVisible();
});
