import { expect, test } from "@playwright/test";

const cities = [
  { slug: "orlando", name: "Orlando", count: 50 },
  { slug: "la", name: "Los Angeles", count: 50 },
  { slug: "lasvegas", name: "Las Vegas", count: 50 },
];

test.beforeEach(async ({ page }) => {
  await page.route(/\/api\/auth\/get-session(?:\?|$)/, route => route.fulfill({ contentType: "application/json", body: "null" }));
  await page.route(/\/api\/auth\/(?!get-session)/, route => route.fulfill({ status: 503, body: "No auth writes in tests" }));
});

for (const city of cities) {
  const path = `/destination/${city.slug}/hotel`;
  test(`${city.name} displays database cards without inventing tiers or exposing rates and booking URLs`, async ({ page }) => {
    let providerCalls = 0;
    await page.route(/\/api\/hotel-ratings|places\.googleapis\.com|challenges\.cloudflare\.com/, async route => { providerCalls++; await route.abort(); });
    const response = await page.goto(path);
    await expect(page.getByRole("heading", { name: `Find Your ${city.name} Hotel`, exact: true })).toBeVisible();
    await expect(page.locator("[data-hotel-card]")).toHaveCount(city.count);
    await expect(page.getByRole("combobox", { name: /Hotel tier/ })).toHaveCount(0);
    await expect(page.locator("[data-hotel-card]").getByText(/\d[.,]\d rating|[\d,]+ reviews/)).toHaveCount(0);
    const links = await page.locator('[data-hotel-card] a[data-booking-type="hotel"]').evaluateAll(elements => elements.map(element => element.getAttribute("href")));
    expect(links.every(href => /^\/api\/hotel-prices\/[1-9]\d*$/.test(href!))).toBe(true);
    expect(await response!.text()).not.toMatch(/https?:[^"<>\s]*(?:google\.com\\?\/travel|booking\.com|venetianlasvegas\.com)/i);
    await expect(page.locator("[data-hotel-card]").getByText(/^\$[\d,]+/)).toHaveCount(0);
    expect(providerCalls).toBe(0);
  });

  test(`${city.name} price click preserves the selected hotel through sign-in`, async ({ page }) => {
    await page.goto(path);
    const link = page.locator("[data-hotel-card]").first().getByRole("link", { name: /See prices/ });
    const target = await link.getAttribute("href");
    await link.click();
    await expect(page).toHaveURL(/\/signin\?/);
    expect(new URL(page.url()).searchParams.get("next")).toBe(target);
    expect(new URL(page.url()).searchParams.get("action")).toBe("prices");
  });

  test(`${city.name} header sign-in returns to its own city`, async ({ page }) => {
    await page.goto(path);
    const trigger = page.getByRole("button", { name: "Account menu", exact: true });
    await expect(trigger).toBeEnabled();
    await trigger.click();
    const href = await page.getByRole("menuitem", { name: "Sign in", exact: true }).getAttribute("href");
    expect(new URL(href!, "http://localhost").searchParams.get("next")).toBe(path);
  });

  test(`${city.name} legacy hotel tab opens the dedicated listing`, async ({ page }) => {
    await page.goto(`/destination/${city.slug}/bookings?tab=hotels`);
    await expect(page).toHaveURL(new RegExp(`/destination/${city.slug}/hotel$`));
    await expect(page.locator("[data-hotel-card]")).toHaveCount(city.count);
  });

  test(`${city.name} cards fit a mobile viewport`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    await expect(page.locator("[data-hotel-card]")).toHaveCount(city.count);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}
