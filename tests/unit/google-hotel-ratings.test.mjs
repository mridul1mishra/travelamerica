import assert from "node:assert/strict";
import test from "node:test";
import { loadTypescriptModule } from "./load-typescript-module.mjs";

const { handleHotelRatingRequest, readHotelRatingConfig, isValidTurnstileResult, trustedClientIp } =
  await loadTypescriptModule("../../app/lib/google-hotel-ratings-core.ts");
const now = Date.parse("2026-10-11T16:00:00Z");
const config = {
  googleApiKey: "mock-google-secret", turnstileSecretKey: "mock-captcha-secret", turnstileSiteKey: "mock-sitekey",
  allowedOrigins: ["https://example.test"], dailyLimit: 3, monthlyLimit: 7, ipHourlyLimit: 2, trustedProxy: null,
};
const verified = { success: true, action: "hotel-rating", hostname: "example.test", challenge_ts: new Date(now).toISOString() };

function request({ method = "POST", headers = {}, body = { hotelId: "42", turnstileToken: "mock-token" }, url = "https://example.test/api/hotel-ratings" } = {}) {
  return new Request(url, {
    method,
    headers: { origin: "https://example.test", "sec-fetch-site": "same-origin", "user-agent": "Mozilla/5.0 test browser", "content-type": "application/json", ...headers },
    ...(["GET", "HEAD"].includes(method) ? {} : { body: typeof body === "string" ? body : JSON.stringify(body) }),
  });
}

function fixture(overrides = {}) {
  const calls = { find: [], captcha: [], budget: [], google: [] };
  return {
    calls,
    deps: {
      config, now: () => now,
      findHotel: async (hotelId) => { calls.find.push(hotelId); return { placeId: "canonical-place-id" }; },
      verifyTurnstile: async (token, ip) => { calls.captcha.push({ token, ip }); return verified; },
      reserveBudget: async (ip) => { calls.budget.push(ip); return "allowed"; },
      fetchRating: async (placeId) => { calls.google.push(placeId); return { rating: 4.7, reviewCount: 321 }; },
      ...overrides,
    },
  };
}

function noExternalCalls(calls) {
  assert.equal(calls.captcha.length, 0);
  assert.equal(calls.budget.length, 0);
  assert.equal(calls.google.length, 0);
}

function noStore(response) {
  assert.match(response.headers.get("cache-control"), /no-store/);
  assert.equal(response.headers.get("cdn-cache-control"), "no-store");
  assert.equal(response.headers.get("vercel-cdn-cache-control"), "no-store");
}

const invalidRequests = [
  ["GET", { method: "GET" }, 405],
  ["foreign origin", { headers: { origin: "https://attacker.test" } }, 403],
  ["missing origin", { headers: { origin: "" } }, 403],
  ["cross-site fetch", { headers: { "sec-fetch-site": "cross-site" } }, 403],
  ["same-site fetch", { headers: { "sec-fetch-site": "same-site" } }, 403],
  ["unconfigured request host", { url: "https://attacker.test/api/hotel-ratings", headers: { origin: "https://attacker.test" } }, 403],
  ["crawler", { headers: { "user-agent": "Googlebot/2.1" } }, 403],
  ["missing user agent", { headers: { "user-agent": "" } }, 403],
  ["wrong content type", { headers: { "content-type": "text/plain" } }, 415],
  ["malformed JSON", { body: "{" }, 400],
  ["null JSON", { body: "null" }, 400],
  ["array JSON", { body: [] }, 400],
  ["unknown request field", { body: { hotelId: "42", turnstileToken: "mock-token", placeId: "attacker-place" } }, 400],
  ["numeric hotel ID", { body: { hotelId: 42, turnstileToken: "mock-token" } }, 400],
  ["zero hotel ID", { body: { hotelId: "0", turnstileToken: "mock-token" } }, 400],
  ["SQL-like hotel ID", { body: { hotelId: "42 OR 1=1", turnstileToken: "mock-token" } }, 400],
  ["overflow hotel ID", { body: { hotelId: "9223372036854775808", turnstileToken: "mock-token" } }, 400],
  ["missing token", { body: { hotelId: "42" } }, 400],
  ["blank token", { body: { hotelId: "42", turnstileToken: "  " } }, 400],
  ["oversized token", { body: { hotelId: "42", turnstileToken: "x".repeat(2049) } }, 400],
  ["oversized actual body", { body: JSON.stringify({ hotelId: "42", turnstileToken: "x".repeat(5000) }) }, 400],
  ["oversized declared body", { headers: { "content-length": "5000" } }, 400],
  ["invalid declared body", { headers: { "content-length": "bad" } }, 400],
];

for (const [name, input, status] of invalidRequests) {
  test(`${name} is rejected before database lookup or external calls`, async () => {
    const { deps, calls } = fixture();
    const response = await handleHotelRatingRequest(request(input), deps);
    assert.equal(response.status, status);
    assert.equal(calls.find.length, 0);
    noExternalCalls(calls);
    noStore(response);
  });
}

test("disabled or missing configuration fails closed", async () => {
  const { deps, calls } = fixture({ config: null });
  const response = await handleHotelRatingRequest(request(), deps);
  assert.equal(response.status, 503);
  assert.equal(calls.find.length, 0);
  noExternalCalls(calls);
});

test("unknown hotel and unavailable database never call CAPTCHA or Google", async () => {
  for (const [findHotel, status] of [[async () => null, 404], [async () => { throw new Error("private database connection details"); }, 503]]) {
    const { deps, calls } = fixture({ findHotel });
    const response = await handleHotelRatingRequest(request(), deps);
    assert.equal(response.status, status);
    assert.doesNotMatch(await response.text(), /private|database connection/);
    noExternalCalls(calls);
  }
});

const badVerifications = [
  ["provider failure/replayed token", { ...verified, success: false, "error-codes": ["timeout-or-duplicate"] }],
  ["wrong action", { ...verified, action: "another-action" }],
  ["wrong hostname", { ...verified, hostname: "attacker.test" }],
  ["missing timestamp", { ...verified, challenge_ts: undefined }],
  ["expired timestamp", { ...verified, challenge_ts: new Date(now - 300_000).toISOString() }],
  ["future timestamp", { ...verified, challenge_ts: new Date(now + 30_001).toISOString() }],
  ["invalid timestamp", { ...verified, challenge_ts: "bad" }],
  ["malformed response", null],
];
for (const [name, verification] of badVerifications) {
  test(`CAPTCHA ${name} is rejected without budget reservation or paid lookup`, async () => {
    const { deps, calls } = fixture({ verifyTurnstile: async () => verification });
    const response = await handleHotelRatingRequest(request(), deps);
    assert.equal(response.status, 403);
    assert.equal(calls.budget.length, 0);
    assert.equal(calls.google.length, 0);
  });
}

test("reusing a token cannot spend a second Google attempt", async () => {
  const consumed = new Set();
  const { deps, calls } = fixture({ verifyTurnstile: async (token) => {
    if (consumed.has(token)) return { ...verified, success: false, "error-codes": ["timeout-or-duplicate"] };
    consumed.add(token);
    return verified;
  } });
  assert.equal((await handleHotelRatingRequest(request(), deps)).status, 200);
  assert.equal((await handleHotelRatingRequest(request(), deps)).status, 403);
  assert.equal(calls.budget.length, 1);
  assert.equal(calls.google.length, 1);
});

test("CAPTCHA and budget outages fail closed without exposing provider errors", async () => {
  for (const method of ["verifyTurnstile", "reserveBudget"]) {
    const { deps, calls } = fixture({ [method]: async () => { throw new Error("mock-google-secret mock-captcha-secret private error"); } });
    const response = await handleHotelRatingRequest(request(), deps);
    assert.equal(response.status, 503);
    assert.doesNotMatch(await response.text(), /secret|private/);
    assert.equal(calls.google.length, 0);
  }
});

test("IP and global limits stop all paid attempts", async () => {
  for (const result of ["ip_limit", "global_limit"]) {
    const { deps, calls } = fixture({ reserveBudget: async () => result });
    assert.equal((await handleHotelRatingRequest(request(), deps)).status, 429);
    assert.equal(calls.google.length, 0);
  }
});

test("success fetches only the database-resolved ID and prevents response caching", async () => {
  const { deps, calls } = fixture();
  const response = await handleHotelRatingRequest(request(), deps);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { rating: 4.7, reviewCount: 321 });
  assert.deepEqual(calls.find, ["42"]);
  assert.deepEqual(calls.google, ["canonical-place-id"]);
  assert.equal(calls.budget.length, 1);
  noStore(response);
});

test("failed Google attempts consume reservations, never retry, and never expose secrets", async () => {
  let attempts = 0;
  const { deps, calls } = fixture({ fetchRating: async () => { attempts += 1; throw new Error("mock-google-secret private upstream payload"); } });
  const response = await handleHotelRatingRequest(request(), deps);
  assert.equal(response.status, 502);
  assert.equal(attempts, 1);
  assert.equal(calls.budget.length, 1);
  assert.doesNotMatch(await response.text(), /secret|private|payload/);
  noStore(response);
});

test("fresh successful requests are not served from an application cache", async () => {
  const { deps, calls } = fixture();
  await handleHotelRatingRequest(request(), deps);
  await handleHotelRatingRequest(request({ body: { hotelId: "42", turnstileToken: "another-token" } }), deps);
  assert.equal(calls.google.length, 2);
  assert.equal(calls.budget.length, 2);
});

test("only explicitly trusted proxy headers can select a per-IP bucket", () => {
  const req = request({ headers: { "x-forwarded-for": "spoofed", "cf-connecting-ip": "192.0.2.1", "x-vercel-forwarded-for": "192.0.2.2" } });
  assert.equal(trustedClientIp(req, config), null);
  assert.equal(trustedClientIp(req, { ...config, trustedProxy: "cloudflare" }), "192.0.2.1");
  assert.equal(trustedClientIp(req, { ...config, trustedProxy: "vercel" }), "192.0.2.2");
});

test("configuration requires explicit enabling, all services, origin allowlist and valid finite limits", () => {
  const env = {
    NODE_ENV: "production", GOOGLE_RATINGS_ENABLED: "true", DATABASE_URL: "mock-db", GOOGLE_PLACES_API_KEY: "mock-google",
    TURNSTILE_SECRET_KEY: "mock-secret", NEXT_PUBLIC_TURNSTILE_SITE_KEY: "mock-sitekey", PUBLIC_SITE_URL: "https://example.test",
  };
  assert.deepEqual(readHotelRatingConfig(env)?.allowedOrigins, ["https://example.test"]);
  for (const key of ["GOOGLE_RATINGS_ENABLED", "DATABASE_URL", "GOOGLE_PLACES_API_KEY", "TURNSTILE_SECRET_KEY", "NEXT_PUBLIC_TURNSTILE_SITE_KEY", "PUBLIC_SITE_URL"]) {
    assert.equal(readHotelRatingConfig({ ...env, [key]: undefined }), null, key);
  }
  for (const key of ["GOOGLE_RATINGS_DAILY_LIMIT", "GOOGLE_RATINGS_MONTHLY_LIMIT", "GOOGLE_RATINGS_IP_HOURLY_LIMIT"]) {
    for (const value of ["-1", "1.5", "NaN", "Infinity", "1000001"]) assert.equal(readHotelRatingConfig({ ...env, [key]: value }), null);
  }
  assert.equal(readHotelRatingConfig({ ...env, PUBLIC_SITE_URL: "http://example.test" }), null);
  assert.equal(readHotelRatingConfig({ ...env, PUBLIC_SITE_URL: "https://user:password@example.test" }), null);
  assert.equal(readHotelRatingConfig({ ...env, HOTEL_RATINGS_TRUSTED_PROXY: "vercel" }), null);
  assert.equal(isValidTurnstileResult(verified, "example.test", now), true);
});

const localEnv = {
  NODE_ENV: "development", NEXT_PUBLIC_HOTEL_RATINGS_LOCAL_BYPASS: "true",
  GOOGLE_RATINGS_ENABLED: "true", DATABASE_URL: "mock-db", GOOGLE_PLACES_API_KEY: "mock-google",
};

function localRequest({ origin = "http://localhost:3000", headers = {}, body = { hotelId: "42" } } = {}) {
  return request({ url: `${origin}/api/hotel-ratings`, headers: { origin, ...headers }, body });
}

function localFixture(overrides = {}) {
  return fixture({ config: readHotelRatingConfig(localEnv), ...overrides });
}

test("local bypass needs the exact explicit flag and development environment", () => {
  const local = readHotelRatingConfig(localEnv);
  assert.ok(local);
  assert.equal(local.localTurnstileBypass, true);
  assert.equal(local.dailyLimit, 20);
  assert.equal(local.monthlyLimit, 500);
  assert.equal(local.ipHourlyLimit, 5);
  for (const environment of ["production", "test", undefined]) {
    assert.equal(readHotelRatingConfig({ ...localEnv, NODE_ENV: environment }), null, `${environment} without CAPTCHA keys`);
    const configured = readHotelRatingConfig({ ...localEnv, NODE_ENV: environment,
      PUBLIC_SITE_URL: "https://example.test", TURNSTILE_SECRET_KEY: "mock-secret", NEXT_PUBLIC_TURNSTILE_SITE_KEY: "mock-sitekey" });
    assert.ok(configured);
    assert.equal(Boolean(configured.localTurnstileBypass), false, `${environment} with CAPTCHA keys`);
  }
  for (const flag of [undefined, "false", "1", "TRUE"]) {
    assert.equal(readHotelRatingConfig({ ...localEnv, NEXT_PUBLIC_HOTEL_RATINGS_LOCAL_BYPASS: flag }), null);
  }
  for (const key of ["GOOGLE_RATINGS_ENABLED", "DATABASE_URL", "GOOGLE_PLACES_API_KEY"]) {
    assert.equal(readHotelRatingConfig({ ...localEnv, [key]: undefined }), null, key);
  }
  for (const key of ["GOOGLE_RATINGS_DAILY_LIMIT", "GOOGLE_RATINGS_MONTHLY_LIMIT", "GOOGLE_RATINGS_IP_HOURLY_LIMIT"]) {
    assert.equal(readHotelRatingConfig({ ...localEnv, [key]: "-1" }), null, key);
  }
});

test("only the two exact development origins allow missing or empty CAPTCHA tokens", async () => {
  for (const origin of ["http://localhost:3000", "http://127.0.0.1:3000"]) {
    for (const body of [{ hotelId: "42" }, { hotelId: "42", turnstileToken: "" }]) {
      const { deps, calls } = localFixture();
      const response = await handleHotelRatingRequest(localRequest({ origin, body }), deps);
      assert.equal(response.status, 200, origin);
      assert.deepEqual(await response.json(), { rating: 4.7, reviewCount: 321 });
      assert.deepEqual(calls.find, ["42"]);
      assert.equal(calls.captcha.length, 0);
      assert.deepEqual(calls.budget, [null]);
      assert.deepEqual(calls.google, ["canonical-place-id"]);
      noStore(response);
    }
  }
});

const nonBypassOrigins = [
  "https://example.test", "http://192.168.1.23:3000", "http://foo.localhost:3000", "http://localtest.me:3000",
  "http://localhost.attacker.test:3000", "https://localhost:3000", "http://localhost:3001",
  "http://127.0.0.1:3001", "http://127.0.0.2:3000", "http://[::1]:3000",
];

test("local flag never bypasses CAPTCHA on other allowed origins", async () => {
  for (const origin of nonBypassOrigins) {
    const withKeys = { ...readHotelRatingConfig(localEnv), allowedOrigins: [origin],
      turnstileSecretKey: "mock-secret", turnstileSiteKey: "mock-sitekey" };
    const { deps, calls } = fixture({ config: withKeys });
    const response = await handleHotelRatingRequest(localRequest({ origin, body: { hotelId: "42", turnstileToken: "mock-token" } }), deps);
    assert.equal(calls.captcha.length, 1, origin);
    assert.equal(response.status, origin === "https://example.test" ? 200 : 403, origin);
    if (response.status !== 200) assert.equal(calls.google.length, 0);
    const missing = fixture({ config: withKeys });
    assert.equal((await handleHotelRatingRequest(localRequest({ origin }), missing.deps)).status, 400, origin);
    noExternalCalls(missing.calls);
  }
});

test("nonlocal requests with no CAPTCHA keys fail closed before any lookup", async () => {
  for (const origin of nonBypassOrigins) {
    const { deps, calls } = localFixture({ config: { ...readHotelRatingConfig(localEnv), allowedOrigins: [origin] } });
    const response = await handleHotelRatingRequest(localRequest({ origin, body: { hotelId: "42", turnstileToken: "mock-token" } }), deps);
    assert.equal(response.status, 503, origin);
    assert.equal(calls.find.length, 0);
    noExternalCalls(calls);
    noStore(response);
  }
});

test("local bypass keeps same-origin checks, bot rejection and bounded input validation", async () => {
  for (const [input, status] of [
    [{ headers: { origin: "http://127.0.0.1:3000" } }, 403],
    [{ headers: { origin: "" } }, 403],
    [{ headers: { "sec-fetch-site": "cross-site" } }, 403],
    [{ headers: { "user-agent": "Googlebot/2.1" } }, 403],
    [{ body: { hotelId: "42", turnstileToken: null } }, 400],
    [{ body: { hotelId: "42", turnstileToken: 123 } }, 400],
    [{ body: { hotelId: "42", turnstileToken: "x".repeat(2049) } }, 400],
    [{ body: { hotelId: "42", bypass: true } }, 400],
    [{ body: { hotelId: "42", placeId: "attacker-place" } }, 400],
    [{ body: { hotelId: "0" } }, 400],
    [{ body: { hotelId: "42 OR 1=1" } }, 400],
    [{ body: JSON.stringify({ hotelId: "42", ignored: "x".repeat(5000) }) }, 400],
  ]) {
    const { deps, calls } = localFixture();
    const response = await handleHotelRatingRequest(localRequest(input), deps);
    assert.equal(response.status, status);
    assert.equal(calls.find.length, 0);
    noExternalCalls(calls);
  }
});

test("local bypass retains curated-hotel and database failure checks", async () => {
  for (const [findHotel, status] of [[async () => null, 404], [async () => { throw new Error("private database details"); }, 503]]) {
    const { deps, calls } = localFixture({ findHotel });
    const response = await handleHotelRatingRequest(localRequest(), deps);
    assert.equal(response.status, status);
    assert.doesNotMatch(await response.text(), /private|database details/);
    noExternalCalls(calls);
  }
});

test("local bypass still enforces every quota and fails closed on quota outages", async () => {
  for (const [reserveBudget, status] of [
    [async () => "ip_limit", 429], [async () => "global_limit", 429],
    [async () => { throw new Error("private quota failure"); }, 503],
  ]) {
    const { deps, calls } = localFixture({ reserveBudget });
    const response = await handleHotelRatingRequest(localRequest(), deps);
    assert.equal(response.status, status);
    assert.equal(calls.captcha.length, 0);
    assert.equal(calls.google.length, 0);
    assert.doesNotMatch(await response.text(), /private|quota failure/);
  }
});

test("failed local Google attempts still consume one reservation and never retry", async () => {
  let attempts = 0;
  const { deps, calls } = localFixture({ fetchRating: async () => { attempts += 1; throw new Error("mock-google-secret private upstream payload"); } });
  const response = await handleHotelRatingRequest(localRequest(), deps);
  assert.equal(response.status, 502);
  assert.equal(calls.captcha.length, 0);
  assert.equal(calls.budget.length, 1);
  assert.equal(attempts, 1);
  assert.doesNotMatch(await response.text(), /secret|private|payload/);
  noStore(response);
});

test("Next dev loopback normalization requires the actual matching Host header", async () => {
  const { deps, calls } = localFixture();
  const response = await handleHotelRatingRequest(localRequest({ headers: {
    origin: "http://127.0.0.1:3000", host: "127.0.0.1:3000",
  } }), deps);
  assert.equal(response.status, 200);
  assert.equal(calls.google.length, 1);
  for (const host of ["localhost:3000", "attacker.test", "127.0.0.1:4000"]) {
    const f = localFixture();
    const rejected = await handleHotelRatingRequest(localRequest({ headers: { origin: "http://127.0.0.1:3000", host } }), f.deps);
    assert.equal(rejected.status, 403);
    noExternalCalls(f.calls);
  }
  const production = fixture({ config: { ...config, allowedOrigins: ["http://localhost:3000", "http://127.0.0.1:3000"] } });
  const rejected = await handleHotelRatingRequest(localRequest({ headers: { origin: "http://127.0.0.1:3000", host: "127.0.0.1:3000" } }), production.deps);
  assert.equal(rejected.status, 403);
  noExternalCalls(production.calls);
});
