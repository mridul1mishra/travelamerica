import assert from "node:assert/strict";
import test from "node:test";
import { loadTypescriptModule } from "./load-typescript-module.mjs";

const { MEMBER_RETURN_TO, safeMemberReturnTo, memberSignInUrl, memberRegisterUrl } =
  await loadTypescriptModule("../../app/lib/member-access.ts");

test("member return links preserve hotels, a selected price endpoint, or the private profile", () => {
  for (const value of [MEMBER_RETURN_TO, `${MEMBER_RETURN_TO}?from=female-solo&tier=Premium`, "/destination/la/hotel", "/destination/orlando/hotel?from=hub", "/destination/lasvegas/hotel", "/api/hotel-prices/42", "/profile"]) {
    assert.equal(safeMemberReturnTo(value), value);
  }
});

test("hotel detail return links preserve the selected city and hotel", () => {
  for (const city of ["nyc", "la", "orlando", "lasvegas"]) {
    const path = `/destination/${city}/hotel/42`;
    assert.equal(safeMemberReturnTo(path), path);
    assert.equal(safeMemberReturnTo(`${path}?from=rating`), `${path}?from=rating`);
  }
  for (const path of ["/destination/nyc/hotel/0", "/destination/la/hotel/42/extra", "/destination/nyc/hotel/42#fragment"]) {
    assert.equal(safeMemberReturnTo(path), MEMBER_RETURN_TO);
  }
});

for (const value of [
  undefined, null, "", "https://attacker.example", "//attacker.example", "/\\attacker.example", "/register", "/signin",
  "/api/auth/sign-out", "/destination/nyc/hotel/other", "/api/hotel-prices/0", "/api/hotel-prices/42?redirect=elsewhere",
  "/profile?email=private@example.test", "/profile/other", "/profile#fragment",
  "/destination/la/hotel/other", "/destination/lasvegas/hotel#fragment", "/destination/orlando/hotel?bad=%0d%0aheader", "/destination/other/hotel",
  "/destination/nyc/hotel#fragment", "/destination/nyc/hotel?bad=\r\nheader", "/destination/nyc/hotel?bad=%0d%0aheader",
  "/destination/nyc/hotel?bad=%250d%250aheader", "/destination/nyc/hotel?bad=%255cattacker", "/destination/nyc/hotel?bad=%zz",
  `/destination/nyc/hotel?filter=${"x".repeat(2048)}`,
]) {
  test(`unsafe or unrelated return link ${JSON.stringify(value)?.slice(0, 120)} uses the hotel page`, () => {
    assert.equal(safeMemberReturnTo(value), MEMBER_RETURN_TO);
  });
}

for (const [pathname, createLink] of [["/signin", memberSignInUrl], ["/register", memberRegisterUrl]]) {
  test(`${pathname} links safely encode the return path and allowed context`, () => {
    const url = new URL(createLink(`${MEMBER_RETURN_TO}?from=solo&tier=Premium`, "rating"), "https://example.test");
    assert.equal(url.pathname, pathname);
    assert.equal(url.searchParams.get("next"), `${MEMBER_RETURN_TO}?from=solo&tier=Premium`);
    assert.equal(url.searchParams.get("action"), "rating");
    assert.deepEqual(Array.from(url.searchParams.keys()), ["next", "action"]);
  });

  test(`${pathname} links cannot add attacker-controlled parameters or destinations`, () => {
    const url = new URL(createLink("https://attacker.example", "prices&next=//attacker.example"), "https://example.test");
    assert.equal(url.searchParams.get("next"), MEMBER_RETURN_TO);
    assert.equal(url.searchParams.get("action"), null);
    assert.equal(url.origin, "https://example.test");
  });

  test(`${pathname} links safely preserve the private profile return path`, () => {
    const url = new URL(createLink("/profile"), "https://example.test");
    assert.equal(url.pathname, pathname);
    assert.equal(url.searchParams.get("next"), "/profile");
    assert.deepEqual(Array.from(url.searchParams.keys()), ["next"]);
  });
}
