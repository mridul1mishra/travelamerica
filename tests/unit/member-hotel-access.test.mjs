import assert from "node:assert/strict";
import test from "node:test";
import { loadTypescriptModule } from "./load-typescript-module.mjs";

const { handleMemberHotelRating, handleMemberHotelPrices, validHotelId, safeHotelBookingUrl } =
  await loadTypescriptModule("../../app/lib/member-hotel-access.ts", { resolveImports: true });

const request = (cookie = "") => new Request("https://example.test/api/hotel-prices/42", { headers: { cookie } });

function noStore(response) {
  assert.match(response.headers.get("cache-control"), /private.*no-store/);
  assert.equal(response.headers.get("cdn-cache-control"), "no-store");
  assert.equal(response.headers.get("vercel-cdn-cache-control"), "no-store");
}

for (const [name, getMember] of [
  ["guest", async () => null],
  ["fabricated cookie", async (headers) => { assert.equal(headers.get("cookie"), "better-auth.session_token=fabricated"); return null; }],
  ["unavailable session store", async () => { throw new Error("private auth database detail"); }],
]) {
  test(`${name} cannot invoke ratings, CAPTCHA, budget reservation, or Google`, async () => {
    let lookups = 0;
    const response = await handleMemberHotelRating(request("better-auth.session_token=fabricated"), {
      getMember,
      lookup: async () => { lookups += 1; throw new Error("Rating lookup must not run for guests"); },
    });
    assert.equal(response.status, 401);
    assert.equal((await response.json()).code, "auth_required");
    assert.equal(lookups, 0);
    noStore(response);
  });

  test(`${name} is sent to sign-in before a booking destination is loaded`, async () => {
    let lookups = 0;
    const response = await handleMemberHotelPrices(request("better-auth.session_token=fabricated"), "42", {
      getMember,
      findBookingUrl: async () => { lookups += 1; return "https://private-booking.example.test/hotel/42"; },
    });
    assert.equal(response.status, 303);
    const destination = new URL(response.headers.get("location"), "https://example.test");
    assert.equal(destination.origin, "https://example.test");
    assert.equal(destination.pathname, "/signin");
    assert.equal(destination.searchParams.get("next"), "/api/hotel-prices/42");
    assert.equal(destination.searchParams.get("action"), "prices");
    assert.equal(lookups, 0);
    assert.doesNotMatch(await response.text(), /private|booking\.example|database/);
    noStore(response);
  });
}

test("verified membership hands the original rating request to existing protection", async () => {
  const original = request();
  const lookupResponse = Response.json({ rating: 4.7, reviewCount: 321 }, { headers: { "cache-control": "no-store" } });
  let lookups = 0;
  const response = await handleMemberHotelRating(original, {
    getMember: async () => ({ id: "member" }),
    lookup: async (received) => { assert.equal(received, original); lookups += 1; return lookupResponse; },
  });
  assert.equal(response, lookupResponse);
  assert.equal(lookups, 1);
});

test("verified membership resolves the selected hotel and returns an uncached booking redirect", async () => {
  const lookups = [];
  const response = await handleMemberHotelPrices(request(), "42", {
    getMember: async () => ({ id: "member" }),
    findBookingUrl: async (id) => { lookups.push(id); return "https://booking.example.test/hotel/42?dates=selected"; },
  });
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "https://booking.example.test/hotel/42?dates=selected");
  assert.deepEqual(lookups, ["42"]);
  noStore(response);
});

for (const id of ["", "0", "01", "-1", "1.0", "1 OR 1=1", "9223372036854775808", "42/other", " 42"]) {
  test(`invalid hotel ID ${JSON.stringify(id)} never reads sessions or booking data`, async () => {
    assert.equal(validHotelId(id), false);
    const response = await handleMemberHotelPrices(request(), id, {
      getMember: async () => { throw new Error("Session read must not run"); },
      findBookingUrl: async () => { throw new Error("Booking lookup must not run"); },
    });
    assert.equal(response.status, 404);
    assert.equal(response.headers.get("location"), null);
    noStore(response);
  });
}

test("hotel IDs include the full positive signed bigint range", () => {
  assert.equal(validHotelId("1"), true);
  assert.equal(validHotelId("9223372036854775807"), true);
});

for (const url of [null, "", "http://booking.example.test", "javascript:alert(1)", "//booking.example.test", "https://user:password@booking.example.test", "https://booking.example.test/with space", "https://booking.example.test/\r\nInjected: header"]) {
  test(`unavailable or unsafe booking destination ${JSON.stringify(url)} fails closed`, async () => {
    if (url !== null) assert.equal(safeHotelBookingUrl(url), null);
    const response = await handleMemberHotelPrices(request(), "42", {
      getMember: async () => ({ id: "member" }), findBookingUrl: async () => url,
    });
    assert.equal(response.status, 404);
    assert.equal(response.headers.get("location"), null);
    noStore(response);
  });
}

test("booking lookup failure does not expose database details", async () => {
  const response = await handleMemberHotelPrices(request(), "42", {
    getMember: async () => ({ id: "member" }),
    findBookingUrl: async () => { throw new Error("private database host and credentials"); },
  });
  assert.equal(response.status, 503);
  assert.equal(response.headers.get("location"), null);
  assert.doesNotMatch(await response.text(), /private|credentials|database/);
  noStore(response);
});
