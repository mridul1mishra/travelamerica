import { expect, test } from "@playwright/test";

const safetyGuidePath = "/destination/nyc/nyc-safety-guide";
const nightSafetyPath = "/destination/nyc/is-nyc-safe-at-night";
const soloTripPath = "/destination/nyc/solo-trip-to-nyc";
const subwaySafetyPath = "/destination/nyc/subway-safety-guide";

test.describe("NYC safety SEO pages", () => {
  test("broad safety guide keeps the approved answer, sources, and internal links", async ({ page }) => {
    await page.goto(safetyGuidePath);

    await expect(page).toHaveTitle(/Is NYC Safe in 2026/i);
    await expect(page.getByRole("heading", { level: 1, name: /Is New York City Safe to Visit in 2026/i })).toBeVisible();
    await expect(page.getByText(/Citywide major crime is down 6\.2%/i).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: /Use official data for current conditions/i })).toBeVisible();

    await expect(page.getByRole("link", { name: /Read the dedicated NYC night safety guide/i })).toHaveAttribute(
      "href",
      nightSafetyPath,
    );
    await expect(page.getByRole("link", { name: /NYC subway safety guide/i })).toHaveAttribute(
      "href",
      subwaySafetyPath,
    );

    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonLd).toContain('"dateModified":"2026-06-27"');
    expect(jsonLd).toContain("Is the NYC subway safe at night?");
  });

  test("night safety guide includes exact neighborhood answers and subway safety link", async ({ page }) => {
    await page.goto(nightSafetyPath);

    await expect(page).toHaveTitle(/Is NYC Safe at Night\? 2026 Neighborhood Safety Guide/i);
    await expect(page.getByRole("heading", { name: /Is New York Safe at Night/i })).toBeVisible();
    const exactAnswers = page.getByLabel(/Manhattan, Lower Manhattan, Tribeca, and Times Square/i);

    await expect(exactAnswers.getByRole("heading", { name: /Manhattan, Lower Manhattan, Tribeca, and Times Square/i })).toBeVisible();
    await expect(exactAnswers.getByRole("heading", { name: /Is Manhattan safe at night\?/i })).toBeVisible();
    await expect(exactAnswers.getByRole("heading", { name: /Is Lower Manhattan safe at night\?/i })).toBeVisible();
    await expect(exactAnswers.getByRole("heading", { name: /Is Tribeca safe at night\?/i })).toBeVisible();
    await expect(exactAnswers.getByRole("heading", { name: /Are Times Square and Midtown safe at night\?/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Is the NYC subway safe for visitors\?/i })).toBeVisible();

    await expect(page.getByRole("link", { name: /NYC subway safety guide/i })).toHaveAttribute(
      "href",
      subwaySafetyPath,
    );

    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonLd).toContain('"dateModified":"2026-06-27"');
    expect(jsonLd).toContain("Is Lower Manhattan safe at night?");
    expect(jsonLd).toContain("Is Tribeca safe at night?");
    expect(jsonLd).toContain("Are Times Square and Midtown safe at night?");
  });

  test("solo trip guide keeps solo intent, schema freshness, and support links", async ({ page }) => {
    await page.goto(soloTripPath);

    await expect(page).toHaveTitle(/Solo Trip to NYC Guide/i);
    await expect(page.getByRole("heading", { level: 1, name: /Solo Trip to NYC/i })).toBeVisible();
    await expect(page.getByText(/By Manisha Shukla/i)).toBeVisible();
    const narrative = page.getByLabel(/Solo trip to NYC deep dive/i);
    await expect(narrative.getByRole("heading", { name: /Can You Travel to NYC Alone/i })).toBeVisible();
    await expect(narrative.getByRole("heading", { name: /Your First 24 Hours/i })).toBeVisible();
    await expect(narrative.getByRole("heading", { name: /Solo Dining in NYC/i })).toBeVisible();

    await expect(page.getByRole("link", { name: /Start with safety/i })).toHaveAttribute("href", safetyGuidePath);
    await expect(page.getByRole("link", { name: /NYC subway safety guide/i }).first()).toHaveAttribute(
      "href",
      subwaySafetyPath,
    );
    await expect(page.getByRole("link", { name: /Solo female travel in NYC/i })).toHaveAttribute(
      "href",
      "/destination/nyc/nyc-female-solo-travel-guide",
    );

    const articleSchema = await page.locator("#schema-article").textContent();
    expect(articleSchema).toContain('"dateModified":"2026-06-27"');
    expect(articleSchema).toContain("Manisha Shukla");

    const faqSchema = await page.locator("#schema-faq").textContent();
    expect(faqSchema).toContain("Can you travel to NYC alone?");
    expect(faqSchema).toContain("What should I do on the first day of a solo NYC trip?");
    expect(faqSchema).toContain("Is the NYC subway safe for solo travelers?");
  });
});
