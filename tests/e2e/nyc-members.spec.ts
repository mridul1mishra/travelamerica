import { expect, type Page, test } from "@playwright/test";
import { mkdirSync } from "node:fs";

const hotelPath = "/destination/nyc/hotel";
const testPassword = "A test password 42!";
const newTestPassword = "A new test password 53!";
const sessionRoute = /\/api\/auth\/get-session(?:\?|$)/;
const memberSession = () => ({
  session: { id: "test-session", userId: "test-member", token: "test-token", expiresAt: new Date(Date.now() + 86_400_000).toISOString() },
  user: { id: "test-member", name: "Test member", email: "member@example.test", emailVerified: true },
});

async function guestSession(page: Page) {
  await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: "null" }));
}

async function openAccountMenu(page: Page) {
  const button = page.getByRole("button", { name: "Account menu", exact: true }).first();
  await expect(button).toBeEnabled();
  await button.click();
  const menu = page.getByRole("menu", { name: "Account", exact: true });
  await expect(menu).toBeVisible();
  return { button, menu };
}

async function fillRegistration(page: Page, phone = "+1 (202) 555-0123") {
  await page.getByLabel("Full name", { exact: true }).fill("  Morgan Taylor  ");
  await page.getByLabel("Email address", { exact: true }).fill("MEMBER@example.test");
  await page.getByLabel("Phone number (optional)", { exact: true }).fill(phone);
  await page.getByLabel("Password", { exact: true }).fill(testPassword);
}

async function mockSignup(page: Page) {
  await page.route("**/api/auth/sign-up/email", (route) => route.fulfill({
    contentType: "application/json", body: JSON.stringify({ token: null, user: { ...memberSession().user, emailVerified: false } }),
  }));
}

test.beforeEach(async ({ page }) => {
  // Unexpected browser auth mutations must fail instead of sending real mail.
  // Flow-specific mocks registered later take precedence over this guard.
  await page.route(/\/api\/auth\/(?!get-session)/, (route) => route.fulfill({
    status: 503, contentType: "application/json", body: '{"code":"TEST_AUTH_UNAVAILABLE","message":"No live auth mutations in browser tests"}',
  }));
});

test("guests can browse and filter hotels; revealing a rating sends them to sign-in without provider calls", async ({ page }) => {
  await guestSession(page);
  const providerRequests: string[] = [];
  await page.route(/\/api\/hotel-ratings|challenges\.cloudflare\.com\/turnstile|places\.googleapis\.com|maps\.googleapis\.com/, async (route) => {
    providerRequests.push(route.request().url());
    await route.abort();
  });
  await page.goto(`${hotelPath}?from=member-test`);
  await expect(page.locator("[data-hotel-card]")).toHaveCount(12);
  await page.getByRole("combobox", { name: /^Hotel tier/ }).selectOption("Premium");
  await expect(page.locator("[data-hotel-card]").first()).toBeVisible();
  const eye = page.getByRole("button", { name: /^Show Google rating for / }).first();
  await expect(eye).toBeEnabled();
  await eye.click();
  await expect(page).toHaveURL(/\/signin\?/);
  const url = new URL(page.url());
  expect(url.searchParams.get("next")).toBe(`${hotelPath}?from=member-test`);
  expect(url.searchParams.get("action")).toBe("rating");
  await expect(page.getByLabel("Email address", { exact: true })).toBeVisible();
  expect(providerRequests).toEqual([]);
});

test("public hotel cards expose only internal price links and no actual prices", async ({ page }) => {
  await guestSession(page);
  const response = await page.goto(hotelPath);
  await expect(page.locator("[data-hotel-card]")).toHaveCount(12);
  const links = await page.locator('[data-hotel-card] a[data-booking-type="hotel"]').evaluateAll((anchors) =>
    anchors.map((anchor) => anchor.getAttribute("href")));
  expect(links.length).toBeGreaterThanOrEqual(50);
  expect(links.every((href) => href && /^\/api\/hotel-prices\/[1-9]\d*$/.test(href))).toBe(true);
  await expect(page.locator("[data-hotel-card]").getByText(/^\$[\d,]+/)).toHaveCount(0);
  const html = await response!.text();
  expect(html).not.toMatch(/https?:[^"<>\s]*(?:google\.com\\?\/travel|booking\.com|tripadvisor\.com\\?\/Hotel|tpx\.lt)/i);
});

test("guest price clicks preserve the selected hotel for sign-in", async ({ page }) => {
  await guestSession(page);
  await page.goto(hotelPath);
  const first = page.locator("[data-hotel-card]").first();
  const link = first.locator('a[data-booking-type="hotel"]').filter({ hasText: "View hotel" });
  const pricePath = await link.getAttribute("href");
  await expect(page.getByRole("button", { name: "Account menu", exact: true }).first()).toBeVisible();
  await expect(link).not.toHaveAttribute("aria-busy", "true");
  await link.click();
  await expect(page).toHaveURL(/\/signin\?/);
  const url = new URL(page.url());
  expect(url.searchParams.get("next")).toBe(pricePath);
  expect(url.searchParams.get("action")).toBe("prices");
  await expect(page.getByText("Sign in to check this hotel's prices and availability.", { exact: true })).toBeVisible();
});

for (const cookie of [undefined, "travels-americas-member.session_token=fabricated.invalid-signature"]) {
  test(`ratings and prices require a real verified server session ${cookie ? "with a fabricated cookie" : "without a cookie"}`, async ({ request }) => {
    // Deliberately use real routes. Browser session mocks cannot satisfy these.
    const headers = { origin: "http://127.0.0.1:3000", "sec-fetch-site": "same-origin", "user-agent": "Mozilla/5.0 test browser", ...(cookie ? { cookie } : {}) };
    const rating = await request.post("/api/hotel-ratings", {
      headers, data: { hotelId: "42", turnstileToken: "mock-token" },
    });
    expect(rating.status()).toBe(401);
    expect(await rating.json()).toMatchObject({ code: "auth_required" });
    expect(rating.headers()["cache-control"]).toContain("no-store");
    const prices = await request.get("/api/hotel-prices/42", { headers, maxRedirects: 0 });
    expect(prices.status()).toBe(303);
    const signIn = new URL(prices.headers().location, "http://127.0.0.1:3000");
    expect(signIn.origin).toBe("http://127.0.0.1:3000");
    expect(signIn.pathname).toBe("/signin");
    expect(signIn.searchParams.get("next")).toBe("/api/hotel-prices/42");
    expect(signIn.searchParams.get("action")).toBe("prices");
    expect(prices.headers()["cache-control"]).toContain("no-store");
    expect(await prices.text()).not.toMatch(/https?:|booking\.com|google\.com/);
  });
}

test("invalid price IDs return an uncached 404 before member redirects", async ({ request }) => {
  for (const hotelId of ["0", "not-a-hotel", "9223372036854775808"]) {
    const response = await request.get(`/api/hotel-prices/${hotelId}`, { maxRedirects: 0 });
    expect(response.status()).toBe(404);
    expect(response.headers().location).toBeUndefined();
    expect(response.headers()["cache-control"]).toContain("no-store");
  }
});

test("email verification creates a member session and returns to the hotel page", async ({ page }) => {
  let signedIn = false;
  let explicitCodeRequests = 0;
  await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(signedIn ? memberSession() : null) }));
  await page.route("**/api/auth/email-otp/send-verification-otp", (route) => {
    explicitCodeRequests += 1;
    return route.fulfill({ contentType: "application/json", body: '{"success":true}' });
  });
  await page.route("**/api/auth/sign-up/email", async (route) => {
    expect(route.request().postDataJSON()).toEqual({ name: "Morgan Taylor", email: "member@example.test", phone: "+12025550123", password: testPassword });
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ token: null, user: { ...memberSession().user, emailVerified: false } }) });
  });
  await page.route("**/api/auth/email-otp/verify-email", async (route) => {
    expect(route.request().postDataJSON()).toEqual({ email: "member@example.test", otp: "123456" });
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ status: true, token: null, user: memberSession().user }) });
  });
  await page.route("**/api/auth/sign-in/email", async (route) => {
    expect(route.request().postDataJSON()).toEqual({ email: "member@example.test", password: testPassword });
    signedIn = true;
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ token: "test-token", user: memberSession().user }) });
  });
  await page.goto(`/register?next=${encodeURIComponent(`${hotelPath}?from=member-test`)}`);
  await expect(page.getByRole("button", { name: "Create account", exact: true })).toBeEnabled();
  await page.evaluate(() => document.fonts.ready);
  mkdirSync(".scratch", { recursive: true });
  await page.screenshot({ path: ".scratch/member-register-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: ".scratch/member-register-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1280, height: 720 });
  await fillRegistration(page);
  await page.getByRole("button", { name: "Create account", exact: true }).click();
  const code = page.getByLabel("Six-digit code", { exact: true });
  await expect(code).toBeFocused();
  await expect(page.getByRole("button", { name: /^Resend code in / })).toBeDisabled();
  await code.fill("12");
  await expect(page.getByRole("button", { name: "Verify and continue", exact: true })).toBeDisabled();
  await code.fill("123456");
  await page.getByRole("button", { name: "Verify and continue", exact: true }).click();
  await expect(page).toHaveURL(`${hotelPath}?from=member-test`);
  await expect(page.getByRole("button", { name: "Account menu", exact: true }).first()).toHaveText("TM");
  await expect(page.locator("[data-hotel-card]")).toHaveCount(12);
  expect(explicitCodeRequests).toBe(0);
});

test("an invalid code keeps the visitor on registration with a retry message", async ({ page }) => {
  await guestSession(page);
  await mockSignup(page);
  await page.route("**/api/auth/email-otp/verify-email", (route) => route.fulfill({ status: 400, contentType: "application/json", body: '{"code":"INVALID_OTP","message":"Invalid OTP"}' }));
  await page.goto("/register");
  await fillRegistration(page, "");
  await page.getByRole("button", { name: "Create account", exact: true }).click();
  await page.getByLabel("Six-digit code", { exact: true }).fill("999999");
  await page.getByRole("button", { name: "Verify and continue", exact: true }).click();
  await expect(page.locator("#member-form-error")).toHaveText("We couldn't verify that code. Check it and try again, or request a new code.");
  await expect(page).toHaveURL(/\/register$/);
  await expect(page.getByLabel("Six-digit code", { exact: true })).toBeEnabled();
});

for (const failure of ["password sign-in rejected", "verified session unavailable"]) {
  test(`consumed email verification returns to sign-in when ${failure}`, async ({ page }) => {
    await guestSession(page);
    await mockSignup(page);
    await page.route("**/api/auth/email-otp/verify-email", (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify({ status: true, token: null, user: memberSession().user }) }));
    await page.route("**/api/auth/sign-in/email", (route) => route.fulfill(failure === "password sign-in rejected"
      ? { status: 401, contentType: "application/json", body: '{"code":"INVALID_EMAIL_OR_PASSWORD","message":"Sign in unavailable"}' }
      : { contentType: "application/json", body: JSON.stringify({ token: "test-token", user: memberSession().user }) }));
    await page.goto(`/register?next=${encodeURIComponent(`${hotelPath}?from=member-test`)}&action=rating`);
    await fillRegistration(page, "");
    await page.getByRole("button", { name: "Create account", exact: true }).click();
    await page.getByLabel("Six-digit code", { exact: true }).fill("123456");
    await page.getByRole("button", { name: "Verify and continue", exact: true }).click();
    await expect(page.getByText("Your email is verified. Sign in with your password or an email code to continue.", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Six-digit code", { exact: true })).toHaveCount(0);
    await expect(page.getByLabel("Email address", { exact: true })).toHaveValue("");
    await expect(page.getByLabel("Password", { exact: true })).toHaveValue("");
    await expect(page.getByRole("heading", { level: 1, name: "Sign in", exact: true })).toBeVisible();
    const signIn = new URL(page.url());
    expect(signIn.pathname).toBe("/signin");
    expect(signIn.searchParams.get("next")).toBe(`${hotelPath}?from=member-test`);
    expect(signIn.searchParams.get("action")).toBe("rating");
    expect(signIn.searchParams.get("verified")).toBe("1");
    expect(Array.from(signIn.searchParams.keys()).sort()).toEqual(["action", "next", "verified"]);
  });
}

test("registration requires name, email, and password while an empty phone remains optional", async ({ page }) => {
  await guestSession(page);
  let registrations = 0;
  await page.route("**/api/auth/sign-up/email", async (route) => {
    registrations += 1;
    expect(route.request().postDataJSON()).toEqual({ name: "Morgan Taylor", email: "member@example.test", password: testPassword });
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ token: null, user: { ...memberSession().user, emailVerified: false } }) });
  });
  await page.goto("/register");
  await expect(page.getByLabel("Full name", { exact: true })).toHaveJSProperty("required", true);
  await expect(page.getByLabel("Email address", { exact: true })).toHaveJSProperty("required", true);
  await expect(page.getByLabel("Password", { exact: true })).toHaveJSProperty("required", true);
  await expect(page.getByLabel("Phone number (optional)", { exact: true })).toHaveJSProperty("required", false);
  await fillRegistration(page, "2025550123");
  await page.getByRole("button", { name: "Create account", exact: true }).click();
  await expect(page.locator("#member-form-error")).toContainText("Enter a phone number with its country code");
  expect(registrations).toBe(0);
  await page.getByLabel("Phone number (optional)", { exact: true }).fill("");
  await page.getByRole("button", { name: "Create account", exact: true }).click();
  await expect(page.getByLabel("Six-digit code", { exact: true })).toBeVisible();
  expect(registrations).toBe(1);
});

test("password sign-in reports failures and returns verified members to the hotel page", async ({ page }) => {
  let signedIn = false;
  await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(signedIn ? memberSession() : null) }));
  await page.route("**/api/auth/sign-in/email", async (route) => {
    const body = route.request().postDataJSON();
    expect(body.email).toBe("member@example.test");
    if (body.password !== testPassword) {
      await route.fulfill({ status: 401, contentType: "application/json", body: '{"code":"INVALID_EMAIL_OR_PASSWORD","message":"Invalid password"}' });
      return;
    }
    signedIn = true;
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ token: "test-token", user: memberSession().user }) });
  });
  await page.goto("/signin");
  await expect(page.getByRole("button", { name: "Sign in", exact: true })).toBeEnabled();
  await page.evaluate(() => document.fonts.ready);
  mkdirSync(".scratch", { recursive: true });
  await page.screenshot({ path: ".scratch/member-signin-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: ".scratch/member-signin-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.getByLabel("Email address", { exact: true }).fill("MEMBER@example.test");
  await page.getByLabel("Password", { exact: true }).fill("Wrong password 64!");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.locator("#member-form-error")).toHaveText("We couldn't sign you in. Check your email and password, or reset your password.");
  await page.getByLabel("Password", { exact: true }).fill(testPassword);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(hotelPath);
  await expect(page.getByRole("button", { name: "Account menu", exact: true }).first()).toHaveText("TM");
});

test("existing members can sign in with an email code instead of a password", async ({ page }) => {
  let signedIn = false;
  await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(signedIn ? memberSession() : null) }));
  await page.route("**/api/auth/email-otp/send-verification-otp", async (route) => {
    expect(route.request().postDataJSON()).toEqual({ email: "member@example.test", type: "sign-in" });
    await route.fulfill({ contentType: "application/json", body: '{"success":true}' });
  });
  await page.route("**/api/auth/sign-in/email-otp", async (route) => {
    expect(route.request().postDataJSON()).toEqual({ email: "member@example.test", otp: "123456" });
    signedIn = true;
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ token: "test-token", user: memberSession().user }) });
  });
  await page.goto("/signin");
  await page.getByRole("tab", { name: "Email code", exact: true }).click();
  await expect(page.getByLabel("Password", { exact: true })).toHaveCount(0);
  await expect(page.getByLabel("Full name", { exact: true })).toHaveCount(0);
  await page.getByLabel("Email address", { exact: true }).fill("member@example.test");
  await page.getByRole("button", { name: "Email me a code", exact: true }).click();
  await expect(page.getByText("If you've registered and verified member@example.test, check your inbox for a sign-in code.", { exact: true })).toBeVisible();
  await expect(page.getByText("Sign-in codes are sent only to registered, verified accounts. Check your inbox and spam folder.", { exact: true })).toBeVisible();
  await expect(page.getByRole("main").getByRole("link", { name: "Create account", exact: true })).toHaveCount(1);
  await page.getByLabel("Six-digit code", { exact: true }).fill("123456");
  await page.getByRole("button", { name: "Verify and continue", exact: true }).click();
  await expect(page).toHaveURL(hotelPath);
  await expect(page.getByRole("button", { name: "Account menu", exact: true }).first()).toHaveText("TM");
});

test("an unregistered email request shows conditional code guidance and a registration link", async ({ page }) => {
  await guestSession(page);
  let requests = 0;
  await page.route("**/api/auth/email-otp/send-verification-otp", async (route) => {
    requests += 1;
    expect(route.request().postDataJSON()).toEqual({ email: "unknown@example.test", type: "sign-in" });
    // Unknown accounts intentionally receive the same success response without mail.
    await route.fulfill({ contentType: "application/json", body: '{"success":true}' });
  });
  await page.route("**/api/auth/sign-in/email-otp", async (route) => {
    expect(route.request().postDataJSON()).toEqual({ email: "unknown@example.test", otp: "123456" });
    await route.fulfill({ status: 400, contentType: "application/json", body: '{"code":"INVALID_OTP","message":"Invalid OTP"}' });
  });
  const context = new URLSearchParams({ next: "/api/hotel-prices/42", action: "prices" }).toString();
  await page.goto(`/signin?${context}`);
  await page.getByRole("tab", { name: "Email code", exact: true }).click();
  await page.getByLabel("Email address", { exact: true }).fill("unknown@example.test");
  await page.getByRole("button", { name: "Email me a code", exact: true }).click();
  await expect(page.getByText("If you've registered and verified unknown@example.test, check your inbox for a sign-in code.", { exact: true })).toBeVisible();
  await expect(page.getByText("Sign-in codes are sent only to registered, verified accounts. Check your inbox and spam folder.", { exact: true })).toBeVisible();
  await expect(page.getByText(/^Enter the code sent to /)).toHaveCount(0);
  const registration = page.getByRole("main").getByRole("link", { name: "Create account", exact: true });
  await expect(registration).toHaveCount(1);
  await expect(registration).toHaveAttribute("href", `/register?${context}`);
  await expect(page.locator("form").getByRole("link", { name: "Create account", exact: true })).toBeVisible();
  await expect(page.getByLabel("Six-digit code", { exact: true })).toBeFocused();
  await page.evaluate(() => document.fonts.ready);
  mkdirSync(".scratch", { recursive: true });
  await page.screenshot({ path: ".scratch/member-signin-code-message.png", fullPage: true });
  await page.getByLabel("Six-digit code", { exact: true }).fill("123456");
  await page.getByRole("button", { name: "Verify and continue", exact: true }).click();
  await expect(page.locator("#member-form-error")).toHaveText("We couldn't verify that code. Check it and try again, or request a new code.");
  await expect(page).toHaveURL(`/signin?${context}`);
  await registration.click();
  await expect(page).toHaveURL(`/register?${context}`);
  await expect(page.getByRole("heading", { level: 1, name: "Create account", exact: true })).toBeVisible();
  await expect(page.getByLabel("Full name", { exact: true })).toBeVisible();
  expect(requests).toBe(1);
});

test("password reset handles a wrong code and requires a fresh password sign-in", async ({ page }) => {
  let signedIn = false;
  let resetDone = false;
  let passwordSignIns = 0;
  await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(signedIn ? memberSession() : null) }));
  await page.route("**/api/auth/email-otp/request-password-reset", async (route) => {
    expect(route.request().postDataJSON()).toEqual({ email: "member@example.test" });
    await route.fulfill({ contentType: "application/json", body: '{"success":true}' });
  });
  await page.route("**/api/auth/email-otp/reset-password", async (route) => {
    const body = route.request().postDataJSON();
    expect(body.email).toBe("member@example.test");
    expect(body.password).toBe(newTestPassword);
    if (body.otp !== "654321") {
      await route.fulfill({ status: 400, contentType: "application/json", body: '{"code":"INVALID_OTP","message":"Invalid OTP"}' });
      return;
    }
    resetDone = true;
    await route.fulfill({ contentType: "application/json", body: '{"success":true}' });
  });
  await page.route("**/api/auth/sign-in/email", async (route) => {
    passwordSignIns += 1;
    expect(resetDone).toBe(true);
    expect(route.request().postDataJSON()).toEqual({ email: "member@example.test", password: newTestPassword });
    signedIn = true;
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ token: "test-token", user: memberSession().user }) });
  });
  await page.goto("/signin");
  await page.getByLabel("Email address", { exact: true }).fill("MEMBER@example.test");
  await page.getByRole("button", { name: "Forgot password?", exact: true }).click();
  await page.getByRole("button", { name: "Send reset code", exact: true }).click();
  await expect(page.getByText("If member@example.test belongs to an account, check its inbox for a password reset code.", { exact: true })).toBeVisible();
  await expect(page.getByText(/^Enter the code sent to /)).toHaveCount(0);
  await page.getByLabel("Six-digit code", { exact: true }).fill("000000");
  await page.getByLabel("New password", { exact: true }).fill(newTestPassword);
  await page.getByRole("button", { name: "Reset password", exact: true }).click();
  await expect(page.locator("#member-form-error")).toHaveText("We couldn't reset your password. Check the code and try again, or request a new code.");
  await page.getByLabel("Six-digit code", { exact: true }).fill("654321");
  await page.getByRole("button", { name: "Reset password", exact: true }).click();
  await expect(page.getByText("Your password has been reset. Sign in with your new password.", { exact: true })).toBeVisible();
  await expect(page).toHaveURL(/\/signin$/);
  await expect(page.getByLabel("Email address", { exact: true })).toHaveValue("member@example.test");
  await expect(page.getByLabel("Password", { exact: true })).toHaveValue("");
  expect(passwordSignIns).toBe(0);
  await page.getByLabel("Password", { exact: true }).fill(newTestPassword);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(hotelPath);
  expect(passwordSignIns).toBe(1);
});

test("guest account menu links preserve hotel intent between separate account pages", async ({ page }) => {
  await guestSession(page);
  for (const [next, action] of [[`${hotelPath}?from=member-flow&tier=Premium`, "rating"], ["/api/hotel-prices/42", "prices"]]) {
    const context = new URLSearchParams({ next, action }).toString();
    await page.goto(`/register?${context}`);
    await expect(page.getByRole("heading", { level: 1, name: "Create account", exact: true })).toBeVisible();
    const { menu: registrationMenu } = await openAccountMenu(page);
    await expect(registrationMenu.getByRole("menuitem", { name: "Profile", exact: true })).toHaveCount(0);
    await expect(registrationMenu.getByRole("menuitem", { name: "Sign out", exact: true })).toHaveCount(0);
    const headerSignIn = registrationMenu.getByRole("menuitem", { name: "Sign in", exact: true });
    await expect(headerSignIn).toHaveAttribute("href", `/signin?${context}`);
    await headerSignIn.click();
    await expect(page).toHaveURL(`/signin?${context}`);
    await expect(page.getByRole("heading", { level: 1, name: "Sign in", exact: true })).toBeVisible();
    await expect(page.getByLabel("Full name", { exact: true })).toHaveCount(0);
    const { menu: signInMenu } = await openAccountMenu(page);
    const headerRegister = signInMenu.getByRole("menuitem", { name: "Create account", exact: true });
    await expect(headerRegister).toHaveAttribute("href", `/register?${context}`);
    await headerRegister.click();
    await expect(page).toHaveURL(`/register?${context}`);
    await expect(page.getByRole("heading", { level: 1, name: "Create account", exact: true })).toBeVisible();
    await expect(page.getByLabel("Full name", { exact: true })).toBeVisible();
  }
});

test("signed-in account menu shows initials and supports keyboard navigation and dismissal", async ({ page }) => {
  const data = { ...memberSession(), user: { ...memberSession().user, name: "Morgan Taylor" } };
  await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(data) }));
  await page.goto("/signin");
  const trigger = page.getByRole("button", { name: "Account menu", exact: true }).first();
  await expect(trigger).toHaveText("MT");
  await expect(trigger).toHaveAttribute("aria-haspopup", "menu");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("header").getByText("member@example.test", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("menu", { name: "Account", exact: true })).toHaveCount(0);
  mkdirSync(".scratch", { recursive: true });
  await page.screenshot({ path: ".scratch/member-account-collapsed-desktop.png", fullPage: true });
  await trigger.focus();
  await trigger.press("ArrowDown");
  const menu = page.getByRole("menu", { name: "Account", exact: true });
  const profile = menu.getByRole("menuitem", { name: "Profile", exact: true });
  const signOut = menu.getByRole("menuitem", { name: "Sign out", exact: true });
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(profile).toHaveAttribute("href", "/profile");
  await expect(profile).toBeFocused();
  await expect(menu.getByRole("menuitem", { name: "Sign in", exact: true })).toHaveCount(0);
  await profile.press("ArrowDown");
  await expect(signOut).toBeFocused();
  await signOut.press("ArrowDown");
  await expect(profile).toBeFocused();
  await profile.press("End");
  await expect(signOut).toBeFocused();
  await signOut.press("Home");
  await expect(profile).toBeFocused();
  await profile.press("Escape");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toBeFocused();
  await trigger.press("ArrowUp");
  await expect(signOut).toBeFocused();
  await page.screenshot({ path: ".scratch/member-account-menu-desktop.png", fullPage: true });
  await page.getByRole("heading", { name: "Sign in", exact: true, level: 1 }).click();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await openAccountMenu(page);
  await profile.press("Tab");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(page.getByRole("link", { name: "Continue", exact: true })).toBeFocused();
  await openAccountMenu(page);
  await profile.press("Shift+Tab");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toBeFocused();
  await openAccountMenu(page);
  await page.getByRole("link", { name: "Continue", exact: true }).focus();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Toggle menu", exact: true }).click();
  await expect(trigger).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: ".scratch/member-account-collapsed-mobile.png", fullPage: true });
  await openAccountMenu(page);
  await page.screenshot({ path: ".scratch/member-account-menu-mobile.png", fullPage: true });
  await profile.click();
  await expect(page).toHaveURL("/profile");
  await expect(page.getByRole("button", { name: "Toggle menu", exact: true })).toHaveAttribute("aria-expanded", "false");
});

test("profile reveals verified details after loading and sign-out removes access", async ({ page }) => {
  const data = { ...memberSession(), user: { ...memberSession().user, name: "Morgan Taylor", phone: "+12025550123" } };
  let signedIn = true;
  let signOuts = 0;
  let releaseSession!: () => void;
  const initialSession = new Promise<void>((resolve) => { releaseSession = resolve; });
  await page.route(sessionRoute, async (route) => {
    await initialSession;
    await route.fulfill({ contentType: "application/json", body: JSON.stringify(signedIn ? data : null) });
  });
  await page.route("**/api/auth/sign-out", async (route) => {
    signOuts += 1;
    signedIn = false;
    await route.fulfill({ contentType: "application/json", body: '{"success":true}' });
  });
  const response = await page.goto("/profile", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("status")).toHaveText("Loading your profile…");
  await expect(page.locator("main dl")).toHaveCount(0);
  const serverHtml = await response!.text();
  for (const privateValue of ["Morgan Taylor", "member@example.test", "+12025550123"]) expect(serverHtml).not.toContain(privateValue);
  releaseSession();
  await expect(page.getByRole("heading", { level: 1, name: "Your profile", exact: true })).toBeVisible();
  await expect(page.locator("main dl")).toContainText("Morgan Taylor");
  await expect(page.locator("main dl")).toContainText("member@example.test");
  await expect(page.locator("main dl")).toContainText("+12025550123");
  await expect(page.getByRole("link", { name: "Explore NYC hotels", exact: true })).toHaveAttribute("href", hotelPath);
  mkdirSync(".scratch", { recursive: true });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: ".scratch/member-profile-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: ".scratch/member-profile-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1280, height: 720 });
  const { menu } = await openAccountMenu(page);
  await menu.getByRole("menuitem", { name: "Sign out", exact: true }).click();
  await expect(page).toHaveURL("/signin?next=%2Fprofile");
  await expect(page.locator("main dl")).toHaveCount(0);
  await expect(page.getByText("Morgan Taylor", { exact: true })).toHaveCount(0);
  const { menu: guestMenu } = await openAccountMenu(page);
  await expect(guestMenu.getByRole("menuitem", { name: "Sign in", exact: true })).toBeVisible();
  await expect(guestMenu.getByRole("menuitem", { name: "Profile", exact: true })).toHaveCount(0);
  expect(signOuts).toBe(1);
});

test("account profile link supports legacy missing phone and email initials", async ({ page }) => {
  const data = { ...memberSession(), user: { ...memberSession().user, name: "" } };
  await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(data) }));
  await page.goto("/signin");
  const { button, menu } = await openAccountMenu(page);
  await expect(button).toHaveText("M");
  await menu.getByRole("menuitem", { name: "Profile", exact: true }).click();
  await expect(page).toHaveURL("/profile");
  await expect(page.getByRole("heading", { level: 1, name: "Your profile", exact: true })).toBeVisible();
  await expect(page.locator("main dl")).toContainText("member@example.test");
  await expect(page.locator("main dd").filter({ hasText: /^Not provided$/ })).toHaveCount(2);
  await expect(page.getByRole("menu", { name: "Account", exact: true })).toHaveCount(0);
});

test("sign-out failure restores the member menu and permits a retry", async ({ page }) => {
  let signedIn = true;
  let attempts = 0;
  await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(signedIn ? memberSession() : null) }));
  await page.route("**/api/auth/sign-out", async (route) => {
    attempts += 1;
    if (attempts === 1) {
      await route.fulfill({ status: 503, contentType: "application/json", body: '{"code":"TEST_UNAVAILABLE","message":"Try again"}' });
      return;
    }
    signedIn = false;
    await route.fulfill({ contentType: "application/json", body: '{"success":true}' });
  });
  await page.goto("/signin");
  const { menu } = await openAccountMenu(page);
  await menu.getByRole("menuitem", { name: "Sign out", exact: true }).click();
  await expect(menu.getByRole("alert")).toHaveText("We couldn't sign you out. Please try again.");
  await expect(menu.getByRole("menuitem", { name: "Profile", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Account menu", exact: true }).first()).toHaveText("TM");
  await menu.getByRole("menuitem", { name: "Sign out", exact: true }).click();
  await expect(menu).toHaveCount(0);
  const { menu: guestMenu } = await openAccountMenu(page);
  await expect(guestMenu.getByRole("menuitem", { name: "Sign in", exact: true })).toBeVisible();
  expect(attempts).toBe(2);
});

test("unverified and expired profiles redirect without revealing traveler details", async ({ page }) => {
  for (const data of [
    { ...memberSession(), user: { ...memberSession().user, emailVerified: false } },
    { ...memberSession(), session: { ...memberSession().session, expiresAt: new Date(Date.now() - 60_000).toISOString() } },
  ]) {
    await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(data) }));
    await page.goto("/profile");
    await expect(page).toHaveURL("/signin?next=%2Fprofile");
    await expect(page.locator("main dl")).toHaveCount(0);
    await expect(page.getByText("member@example.test", { exact: true })).toHaveCount(0);
    await page.unroute(sessionRoute);
  }
});

test("an open profile clears its details when the member session expires", async ({ page }) => {
  let expiresAt: string | undefined;
  await page.route(sessionRoute, (route) => {
    expiresAt ??= new Date(Date.now() + 5_000).toISOString();
    const data = { ...memberSession(), session: { ...memberSession().session, expiresAt }, user: { ...memberSession().user, phone: "+12025550123" } };
    return route.fulfill({ contentType: "application/json", body: JSON.stringify(data) });
  });
  await page.goto("/profile");
  await expect(page.locator("main dl")).toContainText("member@example.test");
  await expect(page.locator("main dl")).toContainText("+12025550123");
  await expect(page).toHaveURL("/signin?next=%2Fprofile");
  await expect(page.locator("main dl")).toHaveCount(0);
  await expect(page.getByText("member@example.test", { exact: true })).toHaveCount(0);
  const { menu } = await openAccountMenu(page);
  await expect(menu.getByRole("menuitem", { name: "Profile", exact: true })).toHaveCount(0);
  await expect(menu.getByRole("menuitem", { name: "Sign in", exact: true })).toBeVisible();
});

for (const fabricatedCookie of [false, true]) {
  test(`anonymous profile shell and fresh session contain no traveler data ${fabricatedCookie ? "with a fabricated cookie" : "without a cookie"}`, async ({ page, request }) => {
    const cookieValue = "fabricated.invalid-signature";
    const headers: Record<string, string> = fabricatedCookie ? { cookie: `travels-americas-member.session_token=${cookieValue}` } : {};
    const session = await request.get("/api/auth/get-session?disableCookieCache=true", { headers });
    expect(session.ok()).toBe(true);
    expect(await session.json()).toBeNull();
    const profile = await request.get("/profile", { headers });
    expect(profile.ok()).toBe(true);
    const html = await profile.text();
    for (const privateValue of ["Test member", "member@example.test", "+12025550123", cookieValue]) expect(html).not.toContain(privateValue);
    if (fabricatedCookie) await page.context().addCookies([{ name: "travels-americas-member.session_token", value: cookieValue, url: "http://127.0.0.1:3000", httpOnly: true }]);
    // Use the real read-only session endpoint; a browser mock cannot authorize this.
    await page.goto("/profile");
    await expect(page).toHaveURL("/signin?next=%2Fprofile");
    await expect(page.locator("main dl")).toHaveCount(0);
    await expect(page.getByText("member@example.test", { exact: true })).toHaveCount(0);
  });
}

for (const action of ["rating", "prices"]) {
  test(`${action} intent survives real links between separate sign-in and registration pages`, async ({ page }) => {
    await guestSession(page);
    const hotels = `${hotelPath}?from=member-flow&tier=Premium`;
    await page.goto(hotels);
    let next = hotels;
    if (action === "rating") {
      const eye = page.getByRole("button", { name: /^Show Google rating for / }).first();
      await expect(eye).toBeEnabled();
      await eye.click();
    } else {
      const price = page.locator("[data-hotel-card]").first().locator('a[data-booking-type="hotel"]').filter({ hasText: "View hotel" });
      next = (await price.getAttribute("href"))!;
      await expect(price).not.toHaveAttribute("aria-busy", "true");
      await price.click();
    }
    await expect(page).toHaveURL(/\/signin\?/);
    const expectIntent = (pathname: string) => {
      const url = new URL(page.url());
      expect(url.pathname).toBe(pathname);
      expect(url.searchParams.get("next")).toBe(next);
      expect(url.searchParams.get("action")).toBe(action);
    };
    expectIntent("/signin");
    await expect(page.getByLabel("Full name", { exact: true })).toHaveCount(0);
    await expect(page.getByLabel("Phone number (optional)", { exact: true })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Create account", exact: true })).toHaveCount(0);
    await expect(page.getByRole("tab", { name: "Email code", exact: true })).toBeVisible();
    await page.getByRole("main").getByRole("link", { name: "Create account", exact: true }).click();
    await expect(page).toHaveURL(/\/register\?/);
    expectIntent("/register");
    await expect(page.getByRole("heading", { level: 1, name: "Create account", exact: true })).toBeVisible();
    await expect(page.getByLabel("Full name", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Phone number (optional)", { exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign in", exact: true })).toHaveCount(0);
    await expect(page.getByRole("tab", { name: "Email code", exact: true })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Forgot password?", exact: true })).toHaveCount(0);
    await expect(page.getByRole("tablist", { name: "Member account", exact: true })).toHaveCount(0);
    await page.getByRole("main").getByRole("link", { name: "Sign in", exact: true }).click();
    await expect(page).toHaveURL(/\/signin\?/);
    expectIntent("/signin");
    await expect(page.getByRole("heading", { level: 1, name: "Sign in", exact: true })).toBeVisible();
    await expect(page.getByLabel("Full name", { exact: true })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Forgot password?", exact: true })).toBeVisible();
  });
}

test("legacy sign-in links redirect to the separate page with only safe return context", async ({ page }) => {
  await guestSession(page);
  for (const next of ["/api/hotel-prices/42", "https://attacker.example/private"]) {
    await page.goto(`/register?mode=signin&next=${encodeURIComponent(next)}&action=prices&email=private@example.test&verified=1`);
    await expect(page).toHaveURL(/\/signin\?/);
    const url = new URL(page.url());
    expect(url.searchParams.get("next")).toBe(next.startsWith("/") ? next : hotelPath);
    expect(url.searchParams.get("action")).toBe("prices");
    expect(Array.from(url.searchParams.keys()).sort()).toEqual(["action", "next"]);
    await expect(page.getByRole("heading", { level: 1, name: "Sign in", exact: true })).toBeVisible();
    await expect(page.getByLabel("Full name", { exact: true })).toHaveCount(0);
  }
});

test("unverified and expired client sessions retain the guest rating gate", async ({ page }) => {
  for (const data of [
    { ...memberSession(), user: { ...memberSession().user, emailVerified: false } },
    { ...memberSession(), session: { ...memberSession().session, expiresAt: new Date(Date.now() - 60_000).toISOString() } },
  ]) {
    await page.route(sessionRoute, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(data) }));
    await page.goto(hotelPath);
    const eye = page.getByRole("button", { name: /^Show Google rating for / }).first();
    await expect(eye).toBeEnabled();
    await eye.click();
    await expect(page).toHaveURL(/\/signin\?.*action=rating/);
    await page.unroute(sessionRoute);
  }
});
