import { expect, test } from "@playwright/test";

test("hotel pages paginate without provider requests and reset after searching", async ({ page }) => {
  await page.route(/\/api\/auth\/get-session/, route => route.fulfill({ contentType: "application/json", body: "null" }));
  let providerCalls = 0;
  await page.route(/\/api\/hotel-(?:ratings|photos)|places\.googleapis\.com|challenges\.cloudflare\.com/, route => { providerCalls++; return route.abort(); });
  await page.goto("/destination/nyc/hotel");
  const cards = page.locator("[data-hotel-card]");
  const pagination = page.getByRole("navigation", { name: "Hotel results pages" });
  await expect(cards).toHaveCount(12);
  await expect(page.locator('p[role="status"]')).toContainText("Showing 1–12 of 50 hotels");
  const firstHotel = await cards.first().getAttribute("data-hotel-card");
  await pagination.getByRole("button", { name: "Next", exact: true }).click();
  await expect(page.locator('p[role="status"]')).toContainText("Showing 13–24 of 50 hotels");
  expect(await cards.first().getAttribute("data-hotel-card")).not.toBe(firstHotel);
  await pagination.getByRole("button", { name: "Page 5", exact: true }).click();
  await expect(cards).toHaveCount(2);
  await expect(pagination.getByRole("button", { name: "Next", exact: true })).toBeDisabled();
  await page.getByRole("searchbox", { name: "Search hotels" }).fill("Edison");
  await expect(cards).toHaveCount(1);
  await expect(pagination).toHaveCount(0);
  await page.getByRole("searchbox", { name: "Search hotels" }).fill("");
  await expect(cards).toHaveCount(12);
  await expect(pagination.getByRole("button", { name: "Page 1", exact: true })).toHaveAttribute("aria-current", "page");
  expect(providerCalls).toBe(0);
});
