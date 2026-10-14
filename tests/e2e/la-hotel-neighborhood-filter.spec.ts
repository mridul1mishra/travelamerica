import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(/googletagmanager\.com/, route => route.abort());
  await page.route(/\/api\/auth\/get-session/, route => route.fulfill({ contentType: "application/json", body: "null" }));
});

test("LA neighborhood selection persists in the URL and clears without losing attribution", async ({ page }) => {
  await page.goto("/destination/la/hotel?from=is-la-safe-at-night&areas=Hollywood");
  await page.getByRole("button", { name: /^(Filter hotels|Refine your search)$/ }).click();
  const cards = page.locator("[data-hotel-card]");
  await expect(cards).toHaveCount(4);
  await page.getByText("Neighborhoods", { exact: true }).click();
  await expect(page.getByRole("checkbox", { name: "Hollywood (4)", exact: true })).toBeChecked();
  await page.getByRole("checkbox", { name: "Venice (1)", exact: true }).check();
  await expect(cards).toHaveCount(5);
  await expect.poll(() => new URL(page.url()).searchParams.get("areas")).toBe("Hollywood|Venice");
  await page.reload();
  await page.getByRole("button", { name: /^(Filter hotels|Refine your search)$/ }).click();
  await expect(cards).toHaveCount(5);
  await page.getByRole("dialog").getByRole("button", { name: "Clear filters", exact: true }).click();
  await expect(cards).toHaveCount(12);
  await expect.poll(() => new URL(page.url()).searchParams.has("areas")).toBe(false);
  expect(new URL(page.url()).searchParams.get("from")).toBe("is-la-safe-at-night");
});

test("LA itinerary choices select only matching properties and preserve access controls", async ({ page }) => {
  await page.goto("/destination/la/hotel");
  await page.getByRole("button", { name: /^(Filter hotels|Refine your search)$/ }).click();
  await page.getByRole("checkbox", { name: "L.A. LIVE events 6 hotels", exact: true }).check();
  const cards = page.locator("[data-hotel-card]");
  await expect(cards).toHaveCount(6);
  for (const card of await cards.all()) await expect(card).toContainText("Downtown / South Park & L.A. LIVE");
  await expect(page.getByRole("checkbox", { name: "L.A. LIVE events 6 hotels", exact: true })).toBeChecked();
  await expect(page.getByLabel("Hotel tier", { exact: true })).toHaveCount(0);
  await expect(page.getByLabel("Price", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "See prices", exact: true }).first()).toHaveAttribute("href", /\/api\/hotel-prices\//);
  await page.getByRole("checkbox", { name: "L.A. LIVE events 6 hotels", exact: true }).uncheck();
  await expect(cards).toHaveCount(12);
});

test("an unavailable requested area does not silently display unrelated hotels", async ({ page }) => {
  await page.goto("/destination/la/hotel?areas=Santa%20Monica");
  await expect(page.locator("[data-hotel-card]")).toHaveCount(0);
  await expect(page.getByText("No hotels match those filters.", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Clear filters", exact: true }).first().click();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(12);
});

test("article neighborhood link opens the matching LA hotel results", async ({ page }) => {
  await page.goto("/destination/la/is-la-safe-at-night");
  await page.locator("#little-tokyo").getByRole("link", { name: "Compare Little Tokyo hotels", exact: true }).click();
  await expect(page).toHaveURL(/\/destination\/la\/hotel\?/);
  expect(new URL(page.url()).searchParams.get("areas")).toBe("Little Tokyo");
  await expect(page.locator("[data-hotel-card]")).toHaveCount(2);
});

test("LA location filters remain usable on mobile", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/destination/la/hotel?areas=Hollywood");
  await page.getByRole("button", { name: /^(Filter hotels|Refine your search)$/ }).click();
  const trigger = page.getByText("Neighborhoods", { exact: true });
  await trigger.click();
  await page.getByRole("checkbox", { name: "Venice (1)", exact: true }).check();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(5);
  const overflowing = await page.evaluate(() => [...document.querySelectorAll("body *")].filter(element => {
    // Children intentionally clipped by the swipeable plan row do not
    // contribute to document overflow.
    let ancestor = element.parentElement;
    while (ancestor) {
      if (["auto", "scroll", "hidden"].includes(getComputedStyle(ancestor).overflowX)) return false;
      ancestor = ancestor.parentElement;
    }
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.right > innerWidth + 1;
  }).slice(0, 8).map(element => ({ tag: element.tagName, className: element.className })));
  expect(overflowing).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole("checkbox", { name: "LAX airport stays 8 hotels", exact: true }).check();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(8);
  await page.getByRole("heading", { name: "Choose a base for your plans", exact: true }).scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath("la-mobile-filters.png") });
});

test("LA hotel tags filter the reviewed properties", async ({ page }) => {
  await page.goto("/destination/la/hotel");
  await page.getByRole("button", { name: /^(Filter hotels|Refine your search)$/ }).click();
  const cards = page.locator("[data-hotel-card]");
  await page.getByText("Hotel preferences", { exact: true }).click();
  await expect(page.getByRole("dialog").getByRole("combobox")).toHaveCount(0);
  await expect(cards).toHaveCount(12);
  for (const [tag, count] of [["Family friendly", 7], ["Near transit", 2], ["Walkable area", 5], ["Nightlife access", 2], ["Business friendly", 48]] as const) {
    const choice = page.getByRole("checkbox", { name: `${tag} (${count})`, exact: true });
    await choice.check();
    await expect(cards).toHaveCount(count);
    await choice.uncheck();
  }
  await page.getByRole("dialog").getByRole("button", { name: "Clear filters", exact: true }).click();
  await expect(cards).toHaveCount(12);
});



test("plan cards combine without duplicates, persist on reload and support keyboard selection", async ({ page }) => {
  await page.goto("/destination/la/hotel?from=is-la-safe-at-night");
  await page.getByRole("button", { name: /^(Filter hotels|Refine your search)$/ }).click();
  await page.getByRole("checkbox", { name: "L.A. LIVE events 6 hotels", exact: true }).check();
  await page.getByRole("checkbox", { name: "Downtown stays 20 hotels", exact: true }).check();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(20);
  await page.getByRole("checkbox", { name: "Hollywood shows 4 hotels", exact: true }).check();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(24);
  await expect.poll(() => new URL(page.url()).searchParams.get("plans")?.split("|").length).toBe(3);
  await page.reload();
  await page.getByRole("button", { name: /^(Filter hotels|Refine your search)$/ }).click();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(24);
  await expect(page.getByRole("checkbox", { name: "L.A. LIVE events 6 hotels", exact: true })).toBeChecked();
  await page.getByRole("checkbox", { name: "Downtown stays 20 hotels", exact: true }).uncheck();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(10);
  const hollywood = page.getByRole("checkbox", { name: "Hollywood shows 4 hotels", exact: true });
  await hollywood.focus();
  await page.keyboard.press("Space");
  await expect(page.locator("[data-hotel-card]")).toHaveCount(6);
  await page.getByRole("button", { name: "Clear plans", exact: true }).click();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(12);
  await expect.poll(() => new URL(page.url()).searchParams.has("plans")).toBe(false);
  expect(new URL(page.url()).searchParams.get("from")).toBe("is-la-safe-at-night");
});

test("offcanvas closes with Escape and Show hotels and restores focus", async ({ page }) => {
  await page.goto("/destination/la/hotel");
  const trigger = page.getByRole("button", { name: /^(Filter hotels|Refine your search)$/ });
  await trigger.click();
  const panel = page.getByRole("dialog", { name: "Filter hotels" });
  await expect(panel).toBeVisible();
  await panel.getByRole("checkbox", { name: "Hollywood shows 4 hotels", exact: true }).check();
  await panel.getByRole("button", { name: "Show 4 hotels", exact: true }).click();
  await expect(panel).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(4);
  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(panel).not.toBeVisible();
  await expect(trigger).toBeFocused();
});


test("filter accordion retains selections when sections collapse", async ({ page }) => {
  await page.goto("/destination/la/hotel");
  await page.getByRole("button", { name: "Filter hotels", exact: true }).click();
  const plans = page.getByRole("dialog").locator("details").filter({ has: page.locator("summary", { hasText: /^Base plans/ }) });
  await plans.getByRole("checkbox", { name: "Hollywood shows 4 hotels", exact: true }).check();
  await plans.locator("summary").click();
  await expect(plans.getByRole("checkbox", { name: "Hollywood shows 4 hotels", exact: true })).not.toBeVisible();
  await expect(page.getByRole("button", { name: "Show 4 hotels", exact: true })).toBeVisible();
  await plans.locator("summary").click();
  await expect(plans.getByRole("checkbox", { name: "Hollywood shows 4 hotels", exact: true })).toBeChecked();
});

test("hotel preference checkboxes combine requirements", async ({ page }) => {
  await page.goto("/destination/la/hotel");
  await page.getByRole("button", { name: "Filter hotels", exact: true }).click();
  await page.getByText("Hotel preferences", { exact: true }).click();
  await page.getByRole("checkbox", { name: "Family friendly (7)", exact: true }).check();
  await page.getByRole("checkbox", { name: "Walkable area (5)", exact: true }).check();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(2);
  await page.getByRole("dialog").getByRole("button", { name: "Clear filters", exact: true }).click();
  await expect(page.locator("[data-hotel-card]")).toHaveCount(12);
  await expect(page.getByRole("checkbox", { name: "Family friendly (7)", exact: true })).not.toBeChecked();
});

test("hotel text search matches names, areas and addresses alongside filters", async ({ page }) => {
  await page.goto("/destination/la/hotel");
  const search = page.getByRole("searchbox", { name: "Search hotels", exact: true });
  const cards = page.locator("[data-hotel-card]");
  await search.fill("  CAMEO  ");
  await expect(cards).toHaveCount(1);
  await expect(cards.first()).toContainText("Cameo Beverly Hills");
  await search.fill("939 S Figueroa");
  await expect(cards).toHaveCount(1);
  await search.fill("Little Tokyo");
  await expect(cards).toHaveCount(2);
  await page.getByRole("button", { name: "Clear search", exact: true }).click();
  await expect(cards).toHaveCount(12);
  await page.getByRole("button", { name: "Filter hotels", exact: true }).click();
  await page.getByRole("checkbox", { name: "Hollywood shows 4 hotels", exact: true }).check();
  await page.getByRole("button", { name: "Show 4 hotels", exact: true }).click();
  await search.fill("Loews");
  await expect(cards).toHaveCount(1);
  await search.fill("no-such-hotel-xyz");
  await expect(cards).toHaveCount(0);
  await expect(page.getByText("No hotels match those filters.", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Clear search", exact: true }).click();
  await expect(cards).toHaveCount(4);
  await page.getByRole("button", { name: "Clear filters", exact: true }).first().click();
  await expect(cards).toHaveCount(12);
});

