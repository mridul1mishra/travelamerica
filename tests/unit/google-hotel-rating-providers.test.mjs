import assert from "node:assert/strict";

// Written reviews are requested only when the detail-page button asks for them.
import test from "node:test";
import { loadTypescriptModule } from "./load-typescript-module.mjs";

const { fetchGoogleHotelRating, verifyHotelRatingTurnstile } = await loadTypescriptModule("../../app/lib/google-hotel-rating-providers.ts");
const placeId = "ChIJ_mock_place_identifier";

test("written reviews include attribution, original text and safe links while excluding malformed reviews", async () => {
  const review = { authorAttribution: { displayName: "Guest", uri: "https://www.google.com/maps/contrib/123" },
    rating: 4, originalText: { text: "A comfortable stay." }, text: { text: "Translated text" }, publishTime: "2026-10-01T12:00:00Z",
    googleMapsUri: "https://www.google.com/maps/reviews/123" };
  const result = await fetchGoogleHotelRating(placeId, "secret", async (_url, options) => {
    assert.equal(options.headers["X-Goog-FieldMask"], "rating,userRatingCount,reviews");
    return Response.json({ rating: 4, reviews: [review, { ...review, authorAttribution: null },
      { ...review, authorAttribution: { displayName: "Other guest", uri: "javascript:alert(1)" }, googleMapsUri: "https://untrusted.example" }] });
  }, true);
  assert.equal(result.reviews.length, 2);
  assert.equal(result.reviews[0].text, "A comfortable stay.");
  assert.equal(result.reviews[0].author, "Guest");
  assert.equal(result.reviews[1].authorUrl, undefined);
  assert.equal(result.reviews[1].url, undefined);
});

test("Google helper requests only rating fields, keeps key out of URL and disables all caches", async () => {
  const calls = [];
  const result = await fetchGoogleHotelRating(placeId, "mock-google-secret", async (url, options) => {
    calls.push({ url, options });
    return Response.json({ rating: 4.7, userRatingCount: 321, ignoredPrivateProviderField: "not returned" });
  });
  assert.deepEqual(result, { rating: 4.7, reviewCount: 321 });
  assert.equal(calls.length, 1);
  const { url, options } = calls[0];
  assert.equal(url, `https://places.googleapis.com/v1/places/${placeId}`);
  assert.doesNotMatch(url, /mock-google-secret/);
  assert.equal(options.headers["X-Goog-Api-Key"], "mock-google-secret");
  assert.equal(options.headers["X-Goog-FieldMask"], "rating,userRatingCount");
  assert.equal(options.cache, "no-store");
  assert.equal(options.credentials, "omit");
  assert.equal(options.redirect, "error");
  assert.ok(options.signal instanceof AbortSignal);
});

test("Google helper never retries or leaks an upstream failure body", async () => {
  let attempts = 0;
  await assert.rejects(fetchGoogleHotelRating(placeId, "mock-secret", async () => {
    attempts += 1;
    return new Response("mock-secret sensitive response", { status: 403 });
  }), (error) => {
    assert.equal(error.message, "Provider unavailable");
    assert.doesNotMatch(error.message, /secret|sensitive/);
    return true;
  });
  assert.equal(attempts, 1);
});

test("malformed stored Place IDs cannot make a provider request", async () => {
  for (const invalid of ["", "short", "../../other-host", "https://attacker.test", "x".repeat(257)]) {
    let attempts = 0;
    await assert.rejects(fetchGoogleHotelRating(invalid, "mock-secret", async () => {
      attempts += 1;
      return Response.json({});
    }));
    assert.equal(attempts, 0);
  }
});

test("Google failure logs only an allowlisted reason and HTTP status", async () => {
  const entries = [];
  const original = console.error;
  console.error = (...args) => entries.push(args);
  try {
    for (const reason of ["API_KEY_IP_ADDRESS_BLOCKED", "mock-secret"]) {
      await assert.rejects(fetchGoogleHotelRating(placeId, "mock-secret", async () =>
        Response.json({ error: { message: "mock-secret sensitive body", details: [{ reason, metadata: { key: "mock-secret" } }] } }, { status: 403 })));
    }
    assert.deepEqual(entries, [
      ["Google hotel rating lookup failed", { httpStatus: 403, reason: "API_KEY_IP_ADDRESS_BLOCKED" }],
      ["Google hotel rating lookup failed", { httpStatus: 403 }],
    ]);
    assert.doesNotMatch(JSON.stringify(entries), /mock-secret|sensitive/);
  } finally {
    console.error = original;
  }
});

for (const [name, value] of [
  ["wrong JSON shape", []],
  ["rating string", { rating: "4.7" }],
  ["rating out of range", { rating: 5.1 }],
  ["negative rating", { rating: -1 }],
  ["review count string", { userRatingCount: "321" }],
  ["fractional review count", { userRatingCount: 1.5 }],
  ["negative review count", { userRatingCount: -1 }],
  ["unsafe review count", { userRatingCount: Number.MAX_SAFE_INTEGER + 1 }],
]) {
  test(`Google helper rejects ${name}`, async () => {
    await assert.rejects(fetchGoogleHotelRating(placeId, "mock-secret", async () => Response.json(value)));
  });
}

test("Google helper returns unknown values as null and rejects malformed or oversized responses", async () => {
  assert.deepEqual(await fetchGoogleHotelRating(placeId, "mock-secret", async () => Response.json({})), { rating: null, reviewCount: null });
  for (const text of ["not JSON", JSON.stringify({ ignored: "x".repeat(8193) })]) {
    await assert.rejects(fetchGoogleHotelRating(placeId, "mock-secret", async () => new Response(text)));
  }
});

test("CAPTCHA helper validates each token freshly and keeps its secret in POST body", async () => {
  const calls = [];
  const fetcher = async (url, options) => {
    calls.push({ url, options });
    return Response.json({ success: true });
  };
  await verifyHotelRatingTurnstile("mock-token", "192.0.2.1", "mock-captcha-secret", fetcher);
  await verifyHotelRatingTurnstile("mock-token", null, "mock-captcha-secret", fetcher);
  assert.equal(calls.length, 2);
  for (const { url, options } of calls) {
    assert.equal(url, "https://challenges.cloudflare.com/turnstile/v0/siteverify");
    assert.doesNotMatch(url, /secret|token/);
    assert.equal(options.method, "POST");
    assert.equal(options.body.get("secret"), "mock-captcha-secret");
    assert.equal(options.body.get("response"), "mock-token");
    assert.equal(options.cache, "no-store");
    assert.equal(options.redirect, "error");
  }
  assert.equal(calls[0].options.body.get("remoteip"), "192.0.2.1");
  assert.equal(calls[1].options.body.has("remoteip"), false);
});
