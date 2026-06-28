import { expect, test } from "@playwright/test";

const safetyGuidePath = "/destination/nyc/nyc-safety-guide";
const nightSafetyPath = "/destination/nyc/is-nyc-safe-at-night";
const soloTripPath = "/destination/nyc/solo-trip-to-nyc";
const subwaySafetyPath = "/destination/nyc/subway-safety-guide";
const femaleSoloPath = "/destination/nyc/nyc-female-solo-travel-guide";

async function expectNoOverlap(
  page: Parameters<Parameters<typeof test>[1]>[0]["page"],
  firstSelector: string,
  secondSelector: string,
) {
  const boxes = await page.evaluate(
    ([first, second]) => {
      const a = document.querySelector(first)?.getBoundingClientRect();
      const b = document.querySelector(second)?.getBoundingClientRect();
      if (!a || !b) return null;
      return {
        a: { left: a.left, top: a.top, right: a.right, bottom: a.bottom, width: a.width, height: a.height },
        b: { left: b.left, top: b.top, right: b.right, bottom: b.bottom, width: b.width, height: b.height },
      };
    },
    [firstSelector, secondSelector],
  );

  expect(boxes, `${firstSelector} and ${secondSelector} should exist`).not.toBeNull();
  expect(boxes!.a.width).toBeGreaterThan(0);
  expect(boxes!.a.height).toBeGreaterThan(0);
  expect(boxes!.b.width).toBeGreaterThan(0);
  expect(boxes!.b.height).toBeGreaterThan(0);

  const overlaps =
    boxes!.a.left < boxes!.b.right &&
    boxes!.a.right > boxes!.b.left &&
    boxes!.a.top < boxes!.b.bottom &&
    boxes!.a.bottom > boxes!.b.top;
  expect(overlaps, `${firstSelector} should not overlap ${secondSelector}`).toBe(false);
}

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
      femaleSoloPath,
    );

    const articleSchema = await page.locator("#schema-article").textContent();
    expect(articleSchema).toContain('"dateModified":"2026-06-27"');
    expect(articleSchema).toContain("Manisha Shukla");

    const faqSchema = await page.locator("#schema-faq").textContent();
    expect(faqSchema).toContain("Can you travel to NYC alone?");
    expect(faqSchema).toContain("What should I do on the first day of a solo NYC trip?");
    expect(faqSchema).toContain("Is the NYC subway safe for solo travelers?");
  });

  test("female solo guide keeps specialist safety role, author, sources, and cluster links", async ({ page }) => {
    await page.goto(femaleSoloPath);

    await expect(page).toHaveTitle(/Is NYC Safe for Solo Female Travelers\? 2026 Guide/i);
    await expect(page.getByRole("heading", { level: 1, name: /Is NYC Safe for Solo Female Travelers\?/i })).toBeVisible();
    await expect(page.getByText(/By Manisha Shukla/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /Use data for reassurance, and scenarios for decisions/i })).toBeVisible();
    await expect(page.getByText(/citywide major crime down 6\.2%/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /Use stay heuristics, not fixed safety rankings/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Someone keeps engaging after you say no/i })).toBeVisible();

    await expect(page.getByRole("link", { name: /General NYC safety guide/i })).toHaveAttribute(
      "href",
      safetyGuidePath,
    );
    await expect(page.getByRole("link", { name: /Subway safety guide/i }).first()).toHaveAttribute(
      "href",
      subwaySafetyPath,
    );
    await expect(page.getByRole("link", { name: "Solo trip guide", exact: true })).toHaveAttribute("href", soloTripPath);

    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonLd).toContain('"dateModified":"2026-06-27"');
    expect(jsonLd).toContain("Manisha Shukla");
    expect(jsonLd).toContain("Where should solo female travelers stay in NYC?");
  });

  test("female solo guide hero renders cleanly on desktop and mobile", async ({ page }) => {
    for (const viewport of [
      { width: 1440, height: 1000 },
      { width: 390, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto(femaleSoloPath);

      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("h1")).toBeInViewport();
      await expect(page.getByText(/Fact-checked against NYPD & MTA data/i)).toBeVisible();
      await expect(page.getByRole("link", { name: /See safe-area hotels/i })).toBeVisible();
      await expect(page.getByRole("link", { name: /Check subway safety/i }).first()).toBeVisible();
      await expect(page.locator("img").first()).toHaveJSProperty("complete", true);

      await expectNoOverlap(page, "h1", "p[class*='byline']");
      await expectNoOverlap(page, "p[class*='byline']", "div[class*='actions']");
      await expectNoOverlap(page, "div[class*='actions']", "div[class*='trustRow']");

      const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      expect(horizontalOverflow, `no horizontal overflow at ${viewport.width}px`).toBe(false);
    }
  });
});
