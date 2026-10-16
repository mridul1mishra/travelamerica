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

test("Santa Monica, Beverly Hills and Winter Park link to hotels inside those cities", () => {
  const la = validateLaNeighborhoodAssignments();
  for (const [area, pattern] of [["Santa Monica", /Santa Monica, CA/], ["Beverly Hills", /Beverly Hills, CA/]]) {
    const hotels = la.filter(entry => entry.neighborhood === area);
    assert.equal(hotels.length, 3);
    for (const entry of hotels) assert.match(entry.address, pattern);
    assert.deepEqual(laSafetyGuideHotelAreas[area].areas, [area]);
  }
  const winterPark = validateCityNeighborhoodAssignments("orlando").filter(entry => entry.neighborhood === "Winter Park");
  assert.equal(winterPark.length, 1);
  assert.match(winterPark[0].address, /Winter Park, FL/);
  assert.deepEqual(orlandoNightHotelAreas["winter-park"].areas, ["Winter Park"]);
});

test("Kissimmee links to the swapped-in US-192 hotels while Orlando stays at 50", async () => {
  const { readFileSync } = await import("node:fs");
  const catalog = JSON.parse(readFileSync(new URL("../../content/cities/hotel-catalog.json", import.meta.url), "utf8"));
  const orlando = catalog.filter(hotel => hotel.city === "orlando");
  assert.equal(orlando.length, 50);
  const kissimmee = validateCityNeighborhoodAssignments("orlando").filter(entry => entry.neighborhood === "Kissimmee / US-192");
  assert.equal(kissimmee.length, 4);
  for (const entry of kissimmee) assert.match(entry.address, /Kissimmee, FL/);
  assert.deepEqual(orlandoSafetyGuideHotelAreas["Kissimmee (US-192)"].areas, ["Kissimmee / US-192"]);
  assert.deepEqual(orlandoNightHotelAreas.kissimmee.areas, ["Kissimmee / US-192"]);
});

test("Summerlin, Henderson and Arts District cards link to real Las Vegas hotels while staying at 50", async () => {
  const { readFileSync } = await import("node:fs");
  const catalog = JSON.parse(readFileSync(new URL("../../content/cities/hotel-catalog.json", import.meta.url), "utf8"));
  assert.equal(catalog.filter(hotel => hotel.city === "lasvegas").length, 50);
  const assignments = validateCityNeighborhoodAssignments("lasvegas");
  assert.equal(assignments.filter(entry => entry.neighborhood === "Summerlin").length, 3);
  const henderson = assignments.filter(entry => entry.neighborhood === "Henderson");
  assert.equal(henderson.length, 3);
  for (const entry of henderson) assert.match(entry.address, /Henderson, NV/);
  assert.deepEqual(lasvegasSafetyGuideHotelAreas.Summerlin.areas, ["Summerlin"]);
  assert.deepEqual(lasvegasSafetyGuideHotelAreas.Henderson.areas, ["Henderson"]);
  // No hotels inside the Arts District itself; the label must say it is the neighboring Downtown area.
  assert.deepEqual(lasvegasSafetyGuideHotelAreas["Arts District"].areas, ["Downtown / Fremont Street"]);
  assert.match(lasvegasSafetyGuideHotelAreas["Arts District"].label, /next to the Arts District/);
});
