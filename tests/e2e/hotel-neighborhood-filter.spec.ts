import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(/\/api\/auth\/get-session(?:\?|$)/, route => route.fulfill({ contentType: "application/json", body: "null" }));
});

test("neighborhood checkboxes preselect linked areas and support multiple selections", async ({ page }) => {
  const areas = "Midtown / Times Square|Upper West Side|Tribeca";
  await page.goto(`/destination/nyc/hotel?areas=${encodeURIComponent(areas)}`);
  const cards = page.locator("[data-hotel-card]");
  await page.getByRole("button", { name: /^Neighborhood Selected areas:/ }).click();
  for (const area of areas.split("|")) await expect(page.getByRole("checkbox", { name: new RegExp(area.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) })).toBeChecked();
  await expect(cards).toHaveCount(31);
  await page.getByRole("checkbox", { name: "Chelsea (8)", exact: true }).check();
  await expect(cards).toHaveCount(39);
  await page.getByRole("checkbox", { name: "Midtown / Times Square (25)", exact: true }).uncheck();
  await expect(cards).toHaveCount(14);
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(cards).toHaveCount(12);
  await page.getByRole("button", { name: "Neighborhood All neighborhoods", exact: true }).click();
  await expect(page.locator('fieldset input:checked')).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Neighborhood All neighborhoods", exact: true })).toHaveAttribute("aria-expanded", "false");
});

for (const [heading, area] of [["Midtown", "Midtown / Times Square"], ["Upper West Side", "Upper West Side"], ["Battery Park", "Financial District / Downtown"]]) {
  test(`${heading} safety card opens the matching neighborhood`, async ({ page }) => {
    await page.goto("/destination/nyc/is-nyc-safe-at-night");
    const card = page.locator("article").filter({ has: page.getByRole("heading", { name: heading, exact: true }) });
    await card.getByRole("link", { name: /Find hotels in/ }).click();
    await expect(page).toHaveURL(/\/destination\/nyc\/hotel\?/);
    expect(new URL(page.url()).searchParams.get("areas")).toBe(area);
    const cards = page.locator("[data-hotel-card]");
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeLessThan(50);
    for (const card of await cards.all()) await expect(card).toContainText(area);
  });
}
