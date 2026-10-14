import { expect, type Locator, test } from "@playwright/test";
import { mkdirSync } from "node:fs";

const turnstileScript = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const localBypassRequested = process.env.NEXT_PUBLIC_HOTEL_RATINGS_LOCAL_BYPASS === "true";
const cardScreenshotStyle = "nextjs-portal, .overlay-header { display: none !important; }";
const mockTurnstile = `window.turnstile = {
  render: function (container, options) {
    if (options.action !== 'hotel-rating') throw new Error('Unexpected CAPTCHA action');
    setTimeout(function () { options.callback('mock-token'); }, 0);
    return 'mock-widget';
  },
  remove: function () {}
};`;

test.beforeEach(async ({ page }) => {
  // These tests exercise the member rating controls. The separate member suite
  // covers guests and the real server routes without browser session mocks.
  await page.route(/\/api\/auth\/get-session(?:\?|$)/, (route) => route.fulfill({
    contentType: "application/json",
    body: JSON.stringify({
      session: { id: "test-session", userId: "test-member", token: "test-token", expiresAt: new Date(Date.now() + 86_400_000).toISOString() },
      user: { id: "test-member", name: "Test member", email: "member@example.test", emailVerified: true },
    }),
  }));
});

async function expectRatingBeforeFooter(card: Locator) {
  const rating = card.locator('[aria-label^="Google rating for "]');
  const footer = card.locator('[class*="cardFooter"]');
  await expect(rating).toBeVisible();
  await expect(footer.getByText("View hotel", { exact: true })).toBeVisible();
  expect(await rating.evaluate((element) => {
    const footerElement = element.closest("article")?.querySelector('[class*="cardFooter"]');
    return Boolean(footerElement && (element.compareDocumentPosition(footerElement) & Node.DOCUMENT_POSITION_FOLLOWING));
  })).toBe(true);
  await expect.poll(async () => {
    const [ratingBox, footerBox] = await Promise.all([rating.boundingBox(), footer.boundingBox()]);
    return Boolean(ratingBox && footerBox && ratingBox.y + ratingBox.height <= footerBox.y + 1);
  }).toBe(true);
  const [cardBox, footerBox] = await Promise.all([card.boundingBox(), footer.boundingBox()]);
  expect(cardBox && footerBox && cardBox.y + cardBox.height - footerBox.y - footerBox.height).toBeLessThanOrEqual(32);
  await expect(card.locator("a button")).toHaveCount(0);
}

async function expectFallbackToggle(card: Locator, hiddenScreenshot?: string) {
  const hideButton = card.getByRole("button", { name: /^Hide Google rating for / });
  await expect(hideButton).toHaveAttribute("aria-expanded", "true");
  await expect(hideButton.locator("svg.lucide-eye-off")).toHaveCount(1);
  await hideButton.click();
  const showButton = card.getByRole("button", { name: /^Show Google rating for / });
  await expect(showButton).toHaveAttribute("aria-expanded", "false");
  await expect(showButton.locator("svg.lucide-eye")).toHaveCount(1);
  await expect(card.getByText("****", { exact: true })).toBeVisible();
  await expect(card.getByText("Google rating is unavailable right now.", { exact: true })).toHaveCount(0);
  await expect(card.getByRole("link", { name: "View on Google Maps", exact: true })).toHaveCount(0);
  await expectRatingBeforeFooter(card);
  if (hiddenScreenshot) {
    mkdirSync(".scratch", { recursive: true });
    await card.screenshot({ path: hiddenScreenshot, style: cardScreenshotStyle });
  }
  await showButton.focus();
  await showButton.press("Enter");
  await expect(card.getByText("Google rating is unavailable right now.", { exact: true })).toBeVisible();
  await expect(card.getByRole("link", { name: "View on Google Maps", exact: true })).toBeVisible();
  await expect(card.getByText("****", { exact: true })).toHaveCount(0);
  await expect(hideButton).toHaveAttribute("aria-expanded", "true");
  await expectRatingBeforeFooter(card);
}

test("Google ratings endpoint requires membership before checking provider configuration", async ({ request }) => {
  const response = await request.post("/api/hotel-ratings", {
    headers: { origin: "http://127.0.0.1:3000", "sec-fetch-site": "same-origin", "user-agent": "Mozilla/5.0 test browser" },
    data: { hotelId: "1", turnstileToken: "mock-token" },
  });
  expect(response.status()).toBe(401);
  expect(response.headers()["cache-control"]).toContain("no-store");
  expect(await response.json()).toMatchObject({ code: "auth_required" });
});

test("NYC hotel page and filters make no rating or CAPTCHA request", async ({ page }) => {
  const requests: string[] = [];
  await page.route(/\/api\/hotel-ratings|challenges\.cloudflare\.com\/turnstile|places\.googleapis\.com|maps\.googleapis\.com/, async (route) => {
    requests.push(route.request().url());
    await route.abort();
  });
  await page.goto("/destination/nyc/hotel");
  await expect(page.locator('[data-hotel-card]')).toHaveCount(12);
  const button = page.getByRole("button", { name: /Show Google rating for / }).first();
  await expect(button.locator("xpath=..").getByText("****", { exact: true })).toBeVisible();
  await expect(button).toHaveText("");
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await expect(button.locator("svg")).toHaveCount(1);
  const cardId = await button.locator('xpath=ancestor::article').getAttribute("data-hotel-card");
  const card = page.locator(`[data-hotel-card="${cardId}"]`);
  const appearance = await button.evaluate((element) => {
    const style = getComputedStyle(element);
    const box = element.getBoundingClientRect();
    return { border: style.borderTopWidth, background: style.backgroundColor, width: box.width, height: box.height };
  });
  expect(appearance.border).toBe("0px");
  expect(appearance.background).toBe("rgba(0, 0, 0, 0)");
  expect(appearance.width).toBeLessThanOrEqual(100);
  expect(appearance.height).toBeLessThanOrEqual(32);
  await expectRatingBeforeFooter(card);
  const filters = page.getByLabel("Hotel filters");
  await expect(filters.getByRole("combobox", { name: /^Rating/ })).toHaveCount(0);
  await expect(filters.getByRole("combobox", { name: /^Sort/ }).locator('option[value="rating"], option[value="reviews"]')).toHaveCount(0);
  await expect(page.locator('[data-hotel-card]').getByText(/^\d(?:\.\d+)? rating$/)).toHaveCount(0);
  await filters.getByRole("combobox", { name: /^Hotel tier/ }).selectOption("Premium");
  await filters.getByRole("combobox", { name: /^Hotel tier/ }).selectOption("all");
  await expect(page.locator('[data-hotel-card]')).toHaveCount(12);
  expect(requests).toEqual([]);
  await expect(page.locator('script[src*="challenges.cloudflare.com/turnstile"]')).toHaveCount(0);
  mkdirSync(".scratch", { recursive: true });
  await card.screenshot({ path: ".scratch/google-rating-idle-desktop.png", style: cardScreenshotStyle });
  await page.setViewportSize({ width: 390, height: 844 });
  await expectRatingBeforeFooter(card);
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await card.screenshot({ path: ".scratch/google-rating-idle-mobile.png", style: cardScreenshotStyle });
  expect(requests).toEqual([]);
});

test("missing public CAPTCHA key shows a safe fallback only after the eye is clicked", async ({ page }) => {
  test.skip(localBypassRequested, "Local testing explicitly bypasses CAPTCHA");
  test.skip(Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim()), "This check requires the normal server without a public CAPTCHA key");
  const requests: string[] = [];
  await page.route(/\/api\/hotel-ratings|challenges\.cloudflare\.com\/turnstile|places\.googleapis\.com|maps\.googleapis\.com/, async (route) => {
    requests.push(route.request().url());
    await route.abort();
  });
  await page.goto("/destination/nyc/hotel");
  const button = page.getByRole("button", { name: /Show Google rating for / }).first();
  await expect(button.locator("xpath=..").getByText("****", { exact: true })).toBeVisible();
  await expect(button).toHaveText("");
  const cardId = await button.locator('xpath=ancestor::article').getAttribute("data-hotel-card");
  const card = page.locator(`[data-hotel-card="${cardId}"]`);
  await expect(card.getByText("Google rating is unavailable right now.", { exact: true })).toHaveCount(0);
  await button.click();
  await expect(card).toContainText("Google rating is unavailable right now.");
  await expect(card.getByRole("link", { name: "View on Google Maps", exact: true })).toBeVisible();
  await expectRatingBeforeFooter(card);
  expect(requests).toEqual([]);
  await page.setViewportSize({ width: 390, height: 844 });
  await expectRatingBeforeFooter(card);
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expectFallbackToggle(card, ".scratch/google-rating-missing-key-hidden-mobile.png");
  expect(requests).toEqual([]);
  mkdirSync(".scratch", { recursive: true });
  await card.screenshot({ path: ".scratch/google-rating-missing-key-mobile.png", style: cardScreenshotStyle });
});

test("one explicit click fetches a rating; hide and keyboard show reuse the result", async ({ page }) => {
  test.skip(localBypassRequested, "This check covers the CAPTCHA widget flow");
  let scriptRequests = 0;
  let ratingRequests = 0;
  let bookingPopups = 0;
  page.on("popup", () => { bookingPopups += 1; });
  let releaseResponse = () => {};
  const holdResponse = new Promise<void>((resolve) => { releaseResponse = resolve; });
  await page.route(/places\.googleapis\.com|maps\.googleapis\.com/, (route) => route.abort());
  await page.route(turnstileScript, async (route) => {
    scriptRequests += 1;
    await route.fulfill({ contentType: "application/javascript", body: mockTurnstile });
  });
  await page.route("**/api/hotel-ratings", async (route) => {
    ratingRequests += 1;
    expect(route.request().method()).toBe("POST");
    expect(route.request().postDataJSON()).toEqual({ hotelId: expect.any(String), turnstileToken: "mock-token" });
    await holdResponse;
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ rating: 4.7, reviewCount: 321 }) });
  });
  try {
    await page.goto("/destination/nyc/hotel");
    await expect(page.locator('[data-hotel-card]')).toHaveCount(12);
    expect(scriptRequests).toBe(0);
    expect(ratingRequests).toBe(0);
    const button = page.getByRole("button", { name: /Show Google rating for / }).first();
    await expect(button.locator("xpath=..").getByText("****", { exact: true })).toBeVisible();
    await expect(button).toHaveText("");
    const cardId = await button.locator('xpath=ancestor::article').getAttribute("data-hotel-card");
    expect(cardId).toBeTruthy();
    const card = page.locator(`[data-hotel-card="${cardId}"]`);
    const hotelName = await card.locator("h3").innerText();
    await button.click();
    await expect.poll(() => ratingRequests).toBe(1);
    await expect(button).toBeDisabled();
    await button.evaluate((element) => { if (element instanceof HTMLElement) { element.click(); element.click(); } });
    expect(ratingRequests).toBe(1);
    expect(scriptRequests).toBe(1);
    releaseResponse();
    await expect(card.getByText("4.7 rating", { exact: true })).toBeVisible();
    await expect(card.getByText("321 reviews", { exact: true })).toBeVisible();
    await expectRatingBeforeFooter(card);
    const [ratingBox, reviewsBox] = await Promise.all([
      card.getByText("4.7 rating", { exact: true }).boundingBox(),
      card.getByText("321 reviews", { exact: true }).boundingBox(),
    ]);
    expect(ratingBox && reviewsBox && Math.abs(ratingBox.y - reviewsBox.y)).toBeLessThanOrEqual(1);
    await expect(card.getByRole("link", { name: /Google Maps/ })).toBeVisible();
    await expect(card.getByRole("link", { name: "Google Maps", exact: true })).toHaveAttribute("translate", "no");
    const hideButton = card.getByRole("button", { name: `Hide Google rating for ${hotelName}`, exact: true });
    await expect(hideButton).toHaveAttribute("aria-expanded", "true");
    await expect(hideButton.locator("svg.lucide-eye-off")).toHaveCount(1);
    expect(await hideButton.evaluate((element) => {
      const rating = element.parentElement?.querySelector('[aria-live="polite"]');
      const attribution = element.parentElement?.querySelector('a[translate="no"]');
      return Boolean(rating && attribution
        && (rating.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING)
        && (element.compareDocumentPosition(attribution) & Node.DOCUMENT_POSITION_FOLLOWING));
    })).toBe(true);
    await expect(card.locator("a button")).toHaveCount(0);
    expect(ratingRequests).toBe(1);
    expect(bookingPopups).toBe(0);
    mkdirSync(".scratch", { recursive: true });
    await card.screenshot({ path: ".scratch/google-rating-desktop.png", style: cardScreenshotStyle });
    await page.setViewportSize({ width: 390, height: 844 });
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expectRatingBeforeFooter(card);
    await card.screenshot({ path: ".scratch/google-rating-mobile.png", style: cardScreenshotStyle });
    await hideButton.click();
    const showButton = card.getByRole("button", { name: `Show Google rating for ${hotelName}`, exact: true });
    await expect(showButton).toHaveAttribute("aria-expanded", "false");
    await expect(showButton.locator("svg.lucide-eye")).toHaveCount(1);
    await expect(card.getByText("****", { exact: true })).toBeVisible();
    await expect(card.getByText("4.7 rating", { exact: true })).toHaveCount(0);
    await expect(card.getByText("321 reviews", { exact: true })).toHaveCount(0);
    await expect(card.getByRole("link", { name: "Google Maps", exact: true })).toHaveCount(0);
    await expectRatingBeforeFooter(card);
    await card.screenshot({ path: ".scratch/google-rating-hidden-mobile.png", style: cardScreenshotStyle });
    await showButton.focus();
    await showButton.press("Enter");
    await expect(card.getByText("4.7 rating", { exact: true })).toBeVisible();
    await expect(card.getByText("321 reviews", { exact: true })).toBeVisible();
    await expect(card.getByRole("link", { name: "Google Maps", exact: true })).toBeVisible();
    await expect(card.getByText("****", { exact: true })).toHaveCount(0);
    await expect(hideButton).toHaveAttribute("aria-expanded", "true");
    await expectRatingBeforeFooter(card);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(ratingRequests).toBe(1);
    expect(scriptRequests).toBe(1);
    expect(bookingPopups).toBe(0);
  } finally {
    releaseResponse();
  }
});

test("failed bot verification shows the Maps fallback without an automatic retry", async ({ page }) => {
  test.skip(localBypassRequested, "This check covers the CAPTCHA widget flow");
  let ratingRequests = 0;
  let scriptRequests = 0;
  await page.route(/places\.googleapis\.com|maps\.googleapis\.com/, (route) => route.abort());
  await page.route(turnstileScript, (route) => {
    scriptRequests += 1;
    return route.fulfill({ contentType: "application/javascript", body: mockTurnstile });
  });
  await page.route("**/api/hotel-ratings", async (route) => {
    ratingRequests += 1;
    await route.fulfill({ status: 403, contentType: "application/json", body: JSON.stringify({ code: "verification_failed", message: "Verification failed." }) });
  });
  await page.goto("/destination/nyc/hotel");
  const button = page.getByRole("button", { name: /Show Google rating for / }).first();
  const cardId = await button.locator('xpath=ancestor::article').getAttribute("data-hotel-card");
  const card = page.locator(`[data-hotel-card="${cardId}"]`);
  await button.click();
  await expect(card).toContainText("Google rating is unavailable right now.");
  await expect(card.getByRole("link", { name: "View on Google Maps", exact: true })).toBeVisible();
  await expect(card.getByRole("button", { name: /Show Google rating for / })).toHaveCount(0);
  await expectRatingBeforeFooter(card);
  expect(ratingRequests).toBe(1);
  mkdirSync(".scratch", { recursive: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expectRatingBeforeFooter(card);
  await expectFallbackToggle(card);
  expect(ratingRequests).toBe(1);
  expect(scriptRequests).toBe(1);
  await card.screenshot({ path: ".scratch/google-rating-verification-fallback.png", style: cardScreenshotStyle });
});

test("explicit local bypass fetches on click without CAPTCHA and reuses hidden results", async ({ page }) => {
  test.skip(!localBypassRequested, "This check requires the explicit local test flag");
  let ratingRequests = 0;
  let bookingPopups = 0;
  const providerRequests: string[] = [];
  let releaseResponse = () => {};
  const holdResponse = new Promise<void>((resolve) => { releaseResponse = resolve; });
  page.on("popup", () => { bookingPopups += 1; });
  await page.route(/challenges\.cloudflare\.com\/turnstile|places\.googleapis\.com|maps\.googleapis\.com/, async (route) => {
    providerRequests.push(route.request().url());
    await route.abort();
  });
  await page.route("**/api/hotel-ratings", async (route) => {
    ratingRequests += 1;
    expect(route.request().method()).toBe("POST");
    expect(route.request().postDataJSON()).toEqual({ hotelId: expect.any(String), turnstileToken: "" });
    await holdResponse;
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ rating: 4.7, reviewCount: 321 }) });
  });
  try {
    await page.goto("/destination/nyc/hotel");
    await expect(page.locator('[data-hotel-card]')).toHaveCount(12);
    const showButton = page.getByRole("button", { name: /^Show Google rating for / }).first();
    const cardId = await showButton.locator('xpath=ancestor::article').getAttribute("data-hotel-card");
    const card = page.locator(`[data-hotel-card="${cardId}"]`);
    await expect(card.getByText("****", { exact: true })).toBeVisible();
    expect(ratingRequests).toBe(0);
    expect(providerRequests).toEqual([]);
    await showButton.click();
    await expect.poll(() => ratingRequests).toBe(1);
    await expect(card.getByRole("button", { name: /^Show Google rating for / })).toBeDisabled();
    await card.getByRole("button", { name: /^Show Google rating for / }).evaluate((element) => {
      if (element instanceof HTMLElement) { element.click(); element.click(); }
    });
    releaseResponse();
    await expect(card.getByText("4.7 rating", { exact: true })).toBeVisible();
    await expect(card.getByText("321 reviews", { exact: true })).toBeVisible();
    await expect(card.getByRole("link", { name: "Google Maps", exact: true })).toBeVisible();
    await expect(card.getByRole("button", { name: /^Hide Google rating for / })).toHaveAttribute("aria-expanded", "true");
    await expectRatingBeforeFooter(card);
    await card.getByRole("button", { name: /^Hide Google rating for / }).click();
    await expect(card.getByText("****", { exact: true })).toBeVisible();
    await expect(card.getByText("4.7 rating", { exact: true })).toHaveCount(0);
    await expect(card.getByText("321 reviews", { exact: true })).toHaveCount(0);
    await expect(card.getByRole("link", { name: "Google Maps", exact: true })).toHaveCount(0);
    const restoreButton = card.getByRole("button", { name: /^Show Google rating for / });
    await expect(restoreButton).toHaveAttribute("aria-expanded", "false");
    await restoreButton.focus();
    await restoreButton.press("Space");
    await expect(card.getByText("4.7 rating", { exact: true })).toBeVisible();
    await expect(card.getByText("321 reviews", { exact: true })).toBeVisible();
    await expect(card.getByRole("link", { name: "Google Maps", exact: true })).toBeVisible();
    await expectRatingBeforeFooter(card);
    await expect(page.locator('script[src*="challenges.cloudflare.com/turnstile"]')).toHaveCount(0);
    expect(ratingRequests).toBe(1);
    expect(providerRequests).toEqual([]);
    expect(bookingPopups).toBe(0);
    await page.setViewportSize({ width: 390, height: 844 });
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    mkdirSync(".scratch", { recursive: true });
    await card.screenshot({ path: ".scratch/google-rating-local-bypass-mobile.png", style: cardScreenshotStyle });
  } finally {
    releaseResponse();
  }
});
