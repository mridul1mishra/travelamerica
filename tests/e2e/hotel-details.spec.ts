import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(/\/api\/auth\/get-session(?:\?|$)/, route => route.fulfill({ contentType: "application/json", body: "null" }));
  await page.route(/\/api\/auth\/(?!get-session)/, route => route.fulfill({ status: 503, body: "No auth writes in tests" }));
});

for (const city of ["nyc", "la", "orlando", "lasvegas"]) {
  test(`${city} detail link is public, keeps the title visible and offers public availability`, async ({ page }) => {
    let providerCalls = 0;
    await page.route(/\/api\/hotel-ratings|places\.googleapis\.com|challenges\.cloudflare\.com/, async route => { providerCalls++; await route.abort(); });
    await page.goto(`/destination/${city}/hotel`, { waitUntil: "domcontentloaded" });
    const card = page.locator("[data-hotel-card]").first();
    const name = await card.getByRole("heading").textContent();
    await card.getByRole("link", { name: "View details", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/destination/${city}/hotel/[1-9]\\d*$`));
    await expect(page.getByRole("heading", { level: 1, name: name!, exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Location", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "Account menu", exact: true })).toBeEnabled();
    expect(providerCalls).toBe(0);
    for (const width of [1280, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(() => {
        history.replaceState(history.state, "", location.pathname + location.search);
        window.scrollTo(0, 0);
      });
      const title = await page.getByRole("heading", { level: 1 }).boundingBox();
      const header = await page.getByRole("banner").boundingBox();
      expect(title!.y).toBeGreaterThanOrEqual(header!.y + header!.height);
      expect(title!.y + title!.height).toBeLessThan(900);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

      await page.getByRole("link", { name: "View map", exact: true }).click();
      await expect.poll(async () => {
        const stickyHeader = await page.getByRole("banner").boundingBox();
        const location = await page.getByRole("heading", { name: "Location", exact: true }).boundingBox();
        return location!.y >= stickyHeader!.y + stickyHeader!.height && location!.y < 900;
      }).toBe(true);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.setViewportSize({ width: 1280, height: 900 });
    const path = new URL(page.url()).pathname;
    await page.getByRole("button", { name: "Account menu", exact: true }).click();
    const signIn = await page.getByRole("menuitem", { name: "Sign in", exact: true }).getAttribute("href");
    expect(new URL(signIn!, page.url()).searchParams.get("next")).toBe(path);
    await page.getByRole("button", { name: "Account menu", exact: true }).click();
    const availability = page.getByRole("link", { name: "Check availability", exact: true });
    await expect(availability).toHaveAttribute("href", /^https:\/\//);
    await expect(availability).toHaveAttribute("target", "_blank");
  });
}

test("invalid and wrong-city hotel IDs return 404", async ({ page }) => {
  for (const path of ["/destination/nyc/hotel/invalid", "/destination/nyc/hotel/999999999", "/destination/la/hotel/1"]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
  }
});

test("guests can book without requesting Google photos or reviews", async ({ page }) => {
  const requests: string[] = [];
  await page.route(/\/api\/hotel-(photos|ratings)/, route => {
    requests.push(route.request().url());
    return route.abort();
  });
  await page.goto("/destination/nyc/hotel/1", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("button", { name: "Sign in to view photos" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Check availability" })).toBeVisible();
  await expect(page.getByRole("button", { name: "View photos", exact: true })).toHaveCount(0);
  expect(requests).toEqual([]);
  await page.getByRole("button", { name: "Sign in to view photos" }).click();
  await expect(page).toHaveURL(/\/signin\?/);
  expect(new URL(page.url()).searchParams.get("next")).toBe("/destination/nyc/hotel/1");
  expect(requests).toEqual([]);
});

test("members load a lead photo on visibility and additional photos on demand", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 220 });
  await page.route(/\/api\/auth\/get-session(?:\?|$)/, route => route.fulfill({ json: {
    session: { expiresAt: new Date(Date.now() + 86_400_000).toISOString() },
    user: { name: "Member", email: "member@example.test", emailVerified: true },
  } }));
  await page.route("https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", route => route.fulfill({
    contentType: "text/javascript",
    body: "window.turnstile = { render(_, options) { setTimeout(() => options.callback('test-token')); return 'test-widget'; }, remove() {} };",
  }));
  await page.route("https://lh3.googleusercontent.com/test-hotel-*.png", route => route.fulfill({
    contentType: "image/png",
    body: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jv9sAAAAASUVORK5CYII=", "base64"),
  }));
  const requests: (string | null)[] = [];
  await page.route(/\/api\/hotel-(photos|ratings)/, route => {
    const mode = new URL(route.request().url()).searchParams.get("mode");
    requests.push(mode);
    return route.fulfill({ json: { rating: null, reviewCount: null, photos: [{ url: `https://lh3.googleusercontent.com/test-hotel-${mode}.png`, authors: [] }] } });
  });
  await page.goto("/destination/nyc/hotel/1", { waitUntil: "domcontentloaded" });
  const photoSection = page.getByRole("region", { name: "Hotel photos", exact: true });
  await expect(photoSection).toBeVisible();
  expect(requests).toEqual([]);
  await page.setViewportSize({ width: 390, height: 844 });
  const open = photoSection.getByRole("button", { name: "View photos", exact: true });
  await expect(open).toBeVisible();
  expect(requests).toEqual(["lead"]);
  await open.click();
  await expect(photoSection.getByRole("button", { name: "Show hotel photo 2" })).toBeVisible();
  expect(requests).toEqual(["lead", "gallery"]);
  await expect(page.getByRole("button", { name: "View ratings & reviews" })).toBeVisible();
});
