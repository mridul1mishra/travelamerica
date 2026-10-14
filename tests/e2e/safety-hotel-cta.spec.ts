import { expect, test } from "@playwright/test";

for (const slug of ["nyc-safety-guide", "is-nyc-safe-at-night", "nyc-female-solo-travel-guide", "subway-safety-guide"]) {
  test(`${slug} links to hotels in the three recommended areas`, async ({ page }) => {
    await page.route(/\/api\/auth\/get-session(?:\?|$)/, route => route.fulfill({ contentType: "application/json", body: "null" }));
    await page.goto(`/destination/nyc/${slug}`);
    const block = page.locator("[data-safety-hotel-cta]");
    await expect(block).toHaveCount(1);
    await expect(block.getByRole("heading", { name: "Stay in NYC’s Recommended Areas" })).toBeVisible();
    await expect(block.getByRole("listitem")).toHaveCount(3);
    await block.getByRole("link", { name: /Find Hotels in These Areas/ }).click();
    await expect(page).toHaveURL(/\/destination\/nyc\/hotel\?/);
    const cards = page.locator("[data-hotel-card]");
    await expect(cards.first()).toBeVisible();
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(50);
    for (const card of await cards.all()) {
      await expect(card).toContainText(/Midtown \/ Times Square|Upper West Side|Tribeca/);
    }
    await page.getByRole("button", { name: "Clear filters", exact: true }).click();
    await expect(cards).toHaveCount(12);
  });
}
