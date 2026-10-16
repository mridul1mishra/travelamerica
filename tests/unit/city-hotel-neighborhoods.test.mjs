import test from "node:test";
import assert from "node:assert/strict";
import { validateCityNeighborhoodAssignments } from "../../scripts/seed-city-hotel-neighborhoods.mjs";
import { validateLaNeighborhoodAssignments } from "../../scripts/seed-la-hotel-neighborhoods.mjs";
import { cityHotelUrl } from "../../app/lib/cityHotelAreas.ts";
import { orlandoHotelAreaPresets, orlandoRecommendedHotelAreas, orlandoSafetyGuideHotelAreas, orlandoNightHotelAreas } from "../../app/lib/orlandoHotelAreas.ts";
import { lasvegasHotelAreaPresets, lasvegasRecommendedHotelAreas, lasvegasSafetyGuideHotelAreas, lasvegasNightHotelAreas } from "../../app/lib/lasvegasHotelAreas.ts";
import { laRecommendedHotelAreas, laSafetyGuideHotelAreas } from "../../app/lib/laHotelAreas.ts";

const choicesByCity = {
  orlando: [...orlandoHotelAreaPresets, ...orlandoRecommendedHotelAreas, ...Object.values(orlandoSafetyGuideHotelAreas), ...Object.values(orlandoNightHotelAreas)],
  lasvegas: [...lasvegasHotelAreaPresets, ...lasvegasRecommendedHotelAreas, ...Object.values(lasvegasSafetyGuideHotelAreas), ...Object.values(lasvegasNightHotelAreas)],
  la: [...laRecommendedHotelAreas, ...Object.values(laSafetyGuideHotelAreas)],
};

for (const city of ["orlando", "lasvegas"]) {
  test(`${city} location evidence matches saved inventory without safety or tier claims`, () => {
    const assignments = validateCityNeighborhoodAssignments(city);
    assert.ok(assignments.length > 0);
    assert.equal(new Set(assignments.map(entry => entry.sourceId)).size, assignments.length);
    for (const entry of assignments) {
      assert.equal(entry.hotelTier, undefined);
      assert.equal(entry.safeArea, undefined);
      assert.equal(entry.tags, undefined);
    }
  });

  test(`${city} rejects stale, duplicated and foreign evidence`, () => {
    const entry = validateCityNeighborhoodAssignments(city)[0];
    for (const change of [{ address: "Different address" }, { sourceId: "unknown-source" },
      { name: "Different property" }, { latitude: 0 }, { sourceUrl: "http://example.com" }]) {
      assert.throws(() => validateCityNeighborhoodAssignments(city, [{ ...entry, ...change }]));
    }
    assert.throws(() => validateCityNeighborhoodAssignments(city, [entry, entry]));
  });
}

test("every safety-article hotel link targets reviewed neighborhoods", () => {
  const reviewed = {
    orlando: new Set(validateCityNeighborhoodAssignments("orlando").map(entry => entry.neighborhood)),
    lasvegas: new Set(validateCityNeighborhoodAssignments("lasvegas").map(entry => entry.neighborhood)),
    la: new Set(validateLaNeighborhoodAssignments().map(entry => entry.neighborhood)),
  };
  for (const [city, choices] of Object.entries(choicesByCity)) {
    for (const choice of choices) {
      assert.ok(choice.areas.length, `${city}: ${choice.label} has no areas`);
      for (const area of choice.areas) assert.ok(reviewed[city].has(area), `${city}: ${area} is not a reviewed neighborhood`);
      const url = new URL(cityHotelUrl(city, "safety-guide", choice.areas), "https://www.travelsamericas.com");
      assert.equal(url.pathname, `/destination/${city}/hotel`);
      assert.equal(url.searchParams.get("from"), "safety-guide");
      assert.equal(url.searchParams.get("areas"), choice.areas.join("|"));
    }
  }
});

test("areas without reviewed hotels intentionally have no link", () => {
  assert.equal(orlandoSafetyGuideHotelAreas["Kissimmee (US-192)"], undefined);
  assert.equal(orlandoNightHotelAreas.kissimmee, undefined);
  assert.equal(orlandoNightHotelAreas["winter-park"], undefined);
  for (const name of ["Arts District", "Summerlin", "Henderson"]) assert.equal(lasvegasSafetyGuideHotelAreas[name], undefined);
  for (const name of ["Santa Monica", "Beverly Hills"]) assert.equal(laSafetyGuideHotelAreas[name], undefined);
});
