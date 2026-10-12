import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(/googletagmanager\.com/, route => route.abort());
  await page.route(/\/api\/auth\/get-session/, route => route.fulfill({ contentType: "application/json", body: "null" }));
});

test("article DOM and CSP retain the existing tag and hotel destinations", async ({ page }) => {
  const response = await page.goto("/destination/nyc/is-nyc-safe-at-night");
  const csp = response!.headers()["content-security-policy"];
  expect(csp.match(/connect-src[^;]+/)?.[0].split(/\s+/)).toContain("https://www.google-analytics.com");
  await expect(page.locator('script[src*="gtag/js?id=G-SM7NC16K21"]')).toHaveCount(1);
  await expect(page.locator('script[src*="gtm.js"]')).toHaveCount(0);
  await expect(page.locator('meta[http-equiv="Content-Security-Policy"]')).toHaveCount(0);
  const links = page.locator('a[data-hotel-cta="true"]');
  await expect(links).toHaveCount(11);
  const ids = await links.evaluateAll(elements => elements.map(el => (el as HTMLElement).dataset.ctaId));
  expect(new Set(ids).size).toBe(11);
  await expect(page.locator('a[href^="/destination/nyc/booking"]')).toHaveCount(0);
  // Exercise browser CSP enforcement without sending synthetic production hits.
  await page.route("https://www.google-analytics.com/g/collect**", route => route.fulfill({ status: 204, headers: { "access-control-allow-origin": "*" } }));
  const request = page.waitForRequest("https://www.google-analytics.com/g/collect**");
  const status = await page.evaluate(async () => (await fetch("https://www.google-analytics.com/g/collect?tid=G-SM7NC16K21", { method: "POST", body: "" })).status);
  await request;
  expect(status).toBe(204);
});

for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
  test(`native visibility targets work at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/destination/nyc/is-nyc-safe-at-night");
    await page.locator('script[id="ga-script"]').waitFor({ state: "attached" });
    await page.evaluate(() => {
      const win = window as any;
      win.__events = [];
      win.gtag = (...args: any[]) => win.__events.push(args);
    });
    for (const [selector, eventName] of [["#recommended-nyc-hotel-areas", "hotel_cta_view"], ["#neighborhood-advice", "safety_section_view"]]) {
      const box = await page.locator(selector).boundingBox();
      expect(box!.height / 2).toBeLessThan(viewport.height);
      await page.locator(selector).evaluate(el => el.scrollIntoView({ block: "center" }));
      await expect.poll(() => page.evaluate(name => (window as any).__events.filter((event: any[]) => event[1] === name).length, eventName)).toBe(1);
    }
  });
}

test("views accumulate only at 50%, pause in hidden tabs, and fire once", async ({ page }) => {
  await page.addInitScript(() => {
    const win = window as any;
    win.__observers = [];
    win.IntersectionObserver = class {
      callback: any;
      target: any;
      constructor(callback: any) { this.callback = callback; win.__observers.push(this); }
      observe(target: any) { this.target = target; }
      disconnect() {}
      unobserve() {}
    };
  });
  await page.goto("/destination/nyc/is-nyc-safe-at-night");
  await page.waitForFunction(() => (window as any).__observers.filter((observer: any) =>
    observer.target?.matches("[data-safety-section], [data-hotel-cta-module]")).length === 2);
  await page.evaluate(() => {
    const win = window as any;
    win.__events = [];
    win.gtag = (...args: any[]) => win.__events.push(args);
  });
  const ratio = async (value: number) => page.evaluate(value => {
    for (const observer of (window as any).__observers.filter((observer: any) =>
      observer.target?.matches("[data-safety-section], [data-hotel-cta-module]"))) observer.callback([
      { target: observer.target, time: performance.now(), isIntersecting: value > 0, intersectionRatio: value },
    ]);
  }, value);
  const events = () => page.evaluate(() => (window as any).__events);
  await ratio(0.49);
  await page.waitForTimeout(2100);
  expect(await events()).toHaveLength(0);
  await ratio(0.5);
  await page.waitForTimeout(1100);
  await ratio(0);
  await page.waitForTimeout(1200);
  expect(await events()).toHaveLength(0);
  await ratio(0.5);
  await page.evaluate(() => {
    Object.defineProperty(document, "visibilityState", { configurable: true, value: "hidden" });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.waitForTimeout(2100);
  expect(await events()).toHaveLength(0);
  await page.evaluate(() => {
    Object.defineProperty(document, "visibilityState", { configurable: true, value: "visible" });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect.poll(async () => (await events()).length).toBe(2);
  expect(await events()).toEqual(expect.arrayContaining([
    ["event", "safety_section_view", { page_location: page.url(), section_id: "neighborhood-advice" }],
    ["event", "hotel_cta_view", { page_location: page.url(), cta_id: "recommended-nyc-hotel-areas", cta_placement: "after_hero" }],
  ]));
  await ratio(0);
  await ratio(1);
  await page.waitForTimeout(2100);
  expect(await events()).toHaveLength(2);
});

test("every recommendation click emits one event with distinct placement", async ({ page }) => {
  await page.goto("/destination/nyc/is-nyc-safe-at-night");
  await page.locator('script[id="ga-script"]').waitFor({ state: "attached" });
  const result = await page.evaluate(() => {
    const win = window as any;
    const events: any[] = [];
    win.gtag = (...args: any[]) => events.push(args);
    document.addEventListener("click", event => event.preventDefault());
    const links = [...document.querySelectorAll<HTMLAnchorElement>('a[data-hotel-cta="true"]')];
    links.forEach(link => (link.querySelector<HTMLElement>("span") || link).click());
    return { events, expected: links.map(link => ["event", "hotel_cta_click", {
      page_location: location.href, cta_id: link.dataset.ctaId,
      cta_placement: link.dataset.ctaPlacement, link_url: link.href,
    }]) };
  });
  expect(result.events).toEqual(result.expected);
});
