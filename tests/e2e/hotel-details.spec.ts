import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(/\/api\/auth\/get-session(?:\?|$)/, route => route.fulfill({ contentType: "application/json", body: "null" }));
  await page.route(/\/api\/auth\/(?!get-session)/, route => route.fulfill({ status: 503, body: "No auth writes in tests" }));
});

for (const city of ["nyc", "la", "orlando", "lasvegas"]) {
  test(`${city} detail link is public, ratings are on demand and prices require sign-in`, async ({ page }) => {
    let providerCalls = 0;
    await page.route(/\/api\/hotel-ratings|places\.googleapis\.com|challenges\.cloudflare\.com/, async route => { providerCalls++; await route.abort(); });
    await page.goto(`/destination/${city}/hotel`);
    const card = page.locator("[data-hotel-card]").first();
    const name = await card.getByRole("heading").textContent();
    await card.getByRole("link", { name: "View hotel", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/destination/${city}/hotel/[1-9]\\d*$`));
    await expect(page.getByRole("heading", { level: 1, name: name!, exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Location", exact: true })).toBeVisible();
    expect(providerCalls).toBe(0);
    await page.setViewportSize({ width: 390, height: 844 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.setViewportSize({ width: 1280, height: 900 });
    const path = new URL(page.url()).pathname;
    await page.getByRole("button", { name: "Account menu", exact: true }).click();
    const signIn = await page.getByRole("menuitem", { name: "Sign in", exact: true }).getAttribute("href");
    expect(new URL(signIn!, page.url()).searchParams.get("next")).toBe(path);
    await page.getByRole("button", { name: "Account menu", exact: true }).click();
    const prices = page.getByRole("link", { name: "See prices", exact: true });
    const priceHref = await prices.getAttribute("href");
    await prices.click();
    await expect(page).toHaveURL(/\/signin\?/);
    expect(new URL(page.url()).searchParams.get("next")).toBe(priceHref);
  });
}

test("invalid and wrong-city hotel IDs return 404", async ({ page }) => {
  for (const path of ["/destination/nyc/hotel/invalid", "/destination/nyc/hotel/999999999", "/destination/la/hotel/1"]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
  }
});
