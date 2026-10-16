import test from "node:test";
import assert from "node:assert/strict";
import { validateLaNeighborhoodAssignments } from "../../scripts/seed-la-hotel-neighborhoods.mjs";
import { laHotelAreaPresets, laNightHotelAreas, laHotelAreasUrl } from "../../app/lib/laHotelAreas.ts";

test("LA location evidence covers the inventory without safety or tier claims", () => {
  const assignments = validateLaNeighborhoodAssignments();
  assert.equal(assignments.length, 50);
  assert.equal(new Set(assignments.map(entry => entry.sourceId)).size, 50);
  assert.equal(new Set(assignments.map(entry => entry.neighborhood)).size, 19);
  for (const entry of assignments) {
    assert.equal(entry.hotelTier, undefined);
    assert.equal(entry.safeArea, undefined);
    assert.equal(entry.tags, undefined);
  }
  const byId = new Map(assignments.map(entry => [entry.sourceId, entry]));
  assert.equal(byId.get("ta-77700").neighborhood, "Westwood / UCLA");
  assert.equal(byId.get("ta-76083").neighborhood, "Beverly Grove");
  assert.equal(byId.get("f4ff8a12a9a593d6d06c772b").neighborhood, "North Hollywood");
});

test("stale, duplicated and foreign source evidence is rejected before database work", () => {
  const entry = validateLaNeighborhoodAssignments()[0];
  for (const change of [{ address: "Different address" }, { sourceId: "unknown-source" },
    { name: "Different property" }, { latitude: 0 }, { sourceUrl: "http://example.com" }]) {
    assert.throws(() => validateLaNeighborhoodAssignments([{ ...entry, ...change }]));
  }
  assert.throws(() => validateLaNeighborhoodAssignments([entry, entry]));
});

test("presets and article links only target reviewed inventory locations", () => {
  const neighborhoods = new Set(validateLaNeighborhoodAssignments().map(entry => entry.neighborhood));
  for (const choice of [...laHotelAreaPresets, ...Object.values(laNightHotelAreas)]) {
    assert.ok(choice.areas.length);
    assert.ok(choice.areas.every(area => neighborhoods.has(area)));
    const url = new URL(laHotelAreasUrl(choice.areas), "https://www.travelsamericas.com");
    assert.equal(url.pathname, "/destination/la/hotel");
    assert.equal(url.searchParams.get("from"), "is-la-safe-at-night");
    assert.equal(url.searchParams.get("areas"), choice.areas.join("|"));
  }
  assert.deepEqual(laNightHotelAreas["santa-monica"].areas, ["Santa Monica"]);
  assert.equal(laNightHotelAreas["west-hollywood"], undefined);
  assert.deepEqual(laNightHotelAreas["beverly-hills"].areas, ["Beverly Hills"]);
});
