import { expect, test } from "@playwright/test";

test("NYC booking categories use dedicated pages", async ({ page }) => {
  await page.goto("/destination/nyc/hotel");
  await expect(page.getByRole("heading", { level: 1, name: "Find Your New York City Hotel" })).toBeVisible();
  await expect(page.locator('[data-booking-type="hotel"]').first()).toBeVisible();
  await expect(page.locator('[data-booking-type="flight"]')).toHaveCount(0);
  await expect(page.locator('[data-booking-type="activity"]')).toHaveCount(0);
  await expect(page.locator('[data-booking-type="hotel"]')).toHaveCount(50);
  await page.getByLabel("Hotel filters").getByRole("combobox").nth(1).selectOption("4.5");
  await expect(page.locator('[data-booking-type="hotel"]').first()).toBeVisible();
  await page.getByRole("navigation", { name: "Booking categories" }).getByRole("link", { name: "Flights" }).click();
  await expect(page).toHaveURL(/\/destination\/nyc\/flight$/);
  await expect(page.locator('[data-booking-type="flight"]').first()).toBeVisible();
  await expect(page.locator('[data-booking-type="hotel"]')).toHaveCount(0);
  await page.getByRole("navigation", { name: "Booking categories" }).getByRole("link", { name: "Things to Do" }).click();
  await expect(page).toHaveURL(/\/destination\/nyc\/tours-and-tickets$/);
  await expect(page.getByLabel("Activity filters")).toBeVisible();
  await expect(page.locator('[data-booking-type="activity"]').first()).toBeVisible();
});

for (const [tab, route] of [["hotels", "hotel"], ["flights", "flight"], ["activities", "tours-and-tickets"]]) {
  test(`legacy ${tab} links preserve tracking`, async ({ page }) => {
    await page.goto(`/destination/nyc/booking?tab=${tab}&from=legacy`);
    await expect(page).toHaveURL(`/destination/nyc/${route}?from=legacy`);
  });
}
