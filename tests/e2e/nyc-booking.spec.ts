import { expect, test } from "@playwright/test";
import tierScorecards from "../../content/cities/newyork/hotel-tier-scorecards.json" with { type: "json" };

test("NYC booking categories use dedicated pages", async ({ page }) => {
  await page.goto("/destination/nyc/hotel");
  await expect(page.getByRole("heading", { level: 1, name: "Find Your New York City Hotel" })).toBeVisible();
  await expect(page.locator('[data-hotel-card]').first()).toBeVisible();
  await expect(page.locator('[data-booking-type="flight"]')).toHaveCount(0);
  await expect(page.locator('[data-booking-type="activity"]')).toHaveCount(0);
  await expect(page.locator('[data-hotel-card]')).toHaveCount(50);
  await page.getByRole("combobox", { name: /^Hotel tags/ }).selectOption("FamilyFriendly");
  await expect(page.locator('[data-hotel-card]').filter({ hasText: "Motto by Hilton New York City Chelsea" })).toBeVisible();
  await expect(page.locator('[data-hotel-card]').filter({ hasText: "Hotel Edison" })).toHaveCount(0);
  await expect(page.locator('[data-hotel-card]').first()).toContainText("Family friendly");
  await page.getByRole("combobox", { name: /^Hotel tags/ }).selectOption("all");
  await expect(page.getByLabel("Hotel filters").getByRole("combobox", { name: /^Rating/ })).toHaveCount(0);
  await expect(page.locator('[data-hotel-card]').first()).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Booking categories" })).toHaveCount(0);
  await page.goto("/destination/nyc/flight");
  await expect(page).toHaveURL(/\/destination\/nyc\/flight$/);
  await expect(page.locator('[data-booking-type="flight"]').first()).toBeVisible();
  await expect(page.locator('[data-hotel-card]')).toHaveCount(0);
  await expect(page.getByRole("combobox", { name: /^Hotel tier/ })).toHaveCount(0);
  await expect(page.getByRole("navigation", { name: "Booking categories" })).toHaveCount(0);
  await page.goto("/destination/nyc/tours-and-tickets");
  await expect(page).toHaveURL(/\/destination\/nyc\/tours-and-tickets$/);
  await expect(page.getByRole("navigation", { name: "Booking categories" })).toHaveCount(0);
  await expect(page.getByRole("tablist", { name: "Booking categories" })).toHaveCount(0);
  await expect(page.getByLabel("Activity filters")).toBeVisible();
  await expect(page.getByRole("combobox", { name: /^Hotel tier/ })).toHaveCount(0);
  await expect(page.locator('[data-booking-type="activity"]').first()).toBeVisible();
});

test("NYC hotel tiers match internal assessments, including provisional tiers", async ({ page }) => {
  await page.goto("/destination/nyc/hotel");
  const hotels = page.locator('[data-hotel-card]');
  const tierFilter = page.getByRole("combobox", { name: /^Hotel tier/ });
  await expect(tierFilter).toHaveValue("all");
  await expect(tierFilter.locator("option")).toHaveText(["All tiers", "Standard", "Premium", "Luxury"]);
  await expect(hotels).toHaveCount(tierScorecards.hotels.length);
  await expect(page.getByText("Tiers reflect our assessment of rooms, service and amenities.", { exact: false })).toBeVisible();

  for (const tier of ["Standard", "Premium", "Luxury"] as const) {
    const expectedCount = tierScorecards.hotels.filter((hotel) => hotel.tier === tier).length;
    await tierFilter.selectOption(tier);
    await expect(hotels).toHaveCount(expectedCount);
    await expect(hotels.getByText(new RegExp(`^${tier}(?: · Provisional)?$`))).toHaveCount(expectedCount);
    await expect(page.getByRole("status")).toHaveText(`Showing ${expectedCount} of ${tierScorecards.hotels.length} hotels`);
  }

  await tierFilter.selectOption("all");
  await expect(hotels).toHaveCount(tierScorecards.hotels.length);
});

test("NYC tier filters compose with tags and can be cleared without loading Google ratings", async ({ page }) => {
  await page.goto("/destination/nyc/hotel");
  const hotels = page.locator('[data-hotel-card]');
  const filters = page.getByLabel("Hotel filters");
  const tierFilter = filters.getByRole("combobox", { name: /^Hotel tier/ });
  const tagFilter = filters.getByRole("combobox", { name: /^Hotel tags/ });
  const priceFilter = filters.getByRole("combobox", { name: /^Price/ });
  const motto = hotels.filter({ hasText: "Motto by Hilton New York City Chelsea" });
  const mottoAssessment = tierScorecards.hotels.find((hotel) => hotel.sourceId === "23448880");
  await expect(motto).toContainText("Premium · Provisional");
  await expect(motto).toContainText("Based on available evidence; may change.");
  await expect(motto).toContainText(`Evidence coverage: ${mottoAssessment?.evidenceCoverage}%.`);

  await tierFilter.selectOption("Premium");
  await expect(hotels).toHaveCount(tierScorecards.hotels.filter((hotel) => hotel.tier === "Premium").length);
  const premiumNames = new Set(await hotels.locator("h3").allTextContents());
  await tierFilter.selectOption("all");
  await expect(hotels).toHaveCount(tierScorecards.hotels.length);
  await expect(filters.getByRole("combobox", { name: /^Rating/ })).toHaveCount(0);
  await tagFilter.selectOption("FamilyFriendly");
  await expect(motto).toBeVisible();
  const familyNames = await hotels.locator("h3").allTextContents();
  const expectedNames = familyNames.filter((name) => premiumNames.has(name));
  expect(expectedNames.length).toBeGreaterThan(0);
  expect(expectedNames.length).toBeLessThan(premiumNames.size);

  await tierFilter.selectOption("Premium");
  await expect(hotels.locator("h3")).toHaveText(expectedNames);
  await expect(motto).toBeVisible();
  await expect(hotels.getByText("Family friendly", { exact: true })).toHaveCount(expectedNames.length);
  await expect(hotels.getByText(/^\d(?:\.\d+)? rating$/)).toHaveCount(0);
  await expect(hotels.getByText(/^\d[\d,]* reviews$/)).toHaveCount(0);

  await priceFilter.selectOption("under250");
  await page.getByRole("button", { name: "Clear filters", exact: true }).first().click();
  await expect(tierFilter).toHaveValue("all");
  await expect(tagFilter).toHaveValue("all");
  await expect(priceFilter).toHaveValue("all");
  await expect(hotels).toHaveCount(tierScorecards.hotels.length);
});

for (const [tab, route] of [["hotels", "hotel"], ["flights", "flight"], ["activities", "tours-and-tickets"]]) {
  test(`legacy ${tab} links preserve tracking`, async ({ page }) => {
    await page.goto(`/destination/nyc/booking?tab=${tab}&from=legacy`);
    await expect(page).toHaveURL(`/destination/nyc/${route}?from=legacy`);
  });
}
