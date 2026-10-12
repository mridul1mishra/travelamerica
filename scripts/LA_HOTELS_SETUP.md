# LA hotel neighborhood integration

The LA hotel listing uses the same PostgreSQL model and React filter components
as NYC. No LA-specific database tables, columns or duplicate hotel inventory are
introduced.

## Existing schema

- `cities`: LA is resolved by `slug = 'la'`; the seed does not invent a city ID.
- `neighborhoods`: the existing unique city/name relationship stores 18 editorial
  hotel-planning areas.
- `hotels`: the existing `city_id`, `neighborhood_id`, `neighborhood` and
  `classification_evidence` fields hold assignments and their evidence.
- `tags` and `hotel_tags`: preserved; no unsupported safety, amenities or visitor
  suitability tags are assigned by this change.
- `hotel_catalog` and `hotel_system_metadata`: unchanged existing views.

## Inventory and location evidence

The read-only database audit found 50 active LA saved listings with no neighborhood,
tier or tag assignments. The review manifest is
`content/cities/losangeles/hotel-neighborhood-assignments.json`, following NYC's
source-ID assignment pattern. It records each saved address, coordinates, evidence
URL and geographic rationale.

The 18 areas are hotel-planning categories, not official administrative boundaries
or safety ratings. Hollywood-brand hotel names are not treated as location evidence:
W Los Angeles is assigned to Westwood/UCLA, The Garland to North Hollywood, and
Sofitel to Beverly Grove. LA properties using Beverly Hills in their name are not
presented as hotels inside that independent city.

The current inventory has no assigned hotels in Santa Monica, West Hollywood,
Koreatown or the Arts District. Those destinations remain in the article, but do
not get misleading filtered booking links. No hotel tiers, current-price ranges,
parking filters or reception-hours filters are invented.

## Seed and release behavior

`seedLaHotelNeighborhoods` runs inside the existing `seedCityHotels` transaction,
after the saved inventory import. The normal `scripts/migrate.mjs` build workflow
already invokes that importer. The existing importer CLI can also be used against
an explicitly selected, approved database:

```powershell
node scripts/seed-city-hotels.mjs
```

This CLI imports the existing saved inventory for LA, Orlando and Las Vegas before
assigning LA neighborhoods, as it did previously. It is not a read-only audit.
Do not run it against production as a test.

The new assignment step creates missing neighborhood rows idempotently. It fills
unassigned hotels only when the source ID, name, address, coordinates and city match.
It preserves existing reviewed neighborhood relationships, tiers, tags and other
classifications. It validates stale or duplicate manifest entries before writes.
The city/neighborhood composite foreign key remains enforced.

The user confirmed that local and production databases are separate and authorized
applying the assignments to the connected local database. On October 12, 2026, the
LA-only seed was committed to the connection defined in `.env.local`: 50 hotel rows
were assigned and 18 neighborhood rows were added. Transaction checks confirmed
that other cities, `cities`, `tags`, `hotel_tags`, tiers and unrelated hotel fields
were unchanged. No production connection, push or deployment was used.

Filters and filtered article links become effective in production when the prepared
seed runs against that environment's separate database. Applying the code without
the data step will not populate the missing neighborhood fields there.

## Page behavior

The shared `NeighborhoodDropdown` supports multiple selections and counts. LA adds
location shortcuts for Hollywood shows, L.A. LIVE events, Downtown stays, Venice,
Universal visits, westside stays and LAX stays. These select reviewed geographic
categories; they do not assign new hotel tags or promise a safe walking route.

Selections persist in the existing `areas` query parameter and preserve `from`
attribution. Clear filters removes `areas`. An unavailable requested area returns
zero matches instead of silently displaying unrelated hotels.

The night-safety article links to filtered Hollywood, Downtown, South Park/L.A. LIVE,
Venice, Little Tokyo and Universal City results. Other neighborhood sections retain
planning advice without claiming inventory coverage. General hotel CTAs show all
available LA properties. Member access to prices and on-demand Google ratings is
preserved. Breadcrumb structured data follows the NYC hotel page's pattern.

## Verification

The seed was exercised in an isolated local PostgreSQL runtime using the existing
schema SQL. Checks covered 50 assignments, 18 areas, repeated-run stability, preserved
manual classifications, rejected stale evidence and unchanged NYC control records.
No test writes were sent to the shared database.

Portable manifest/link tests:

```powershell
node --test tests/unit/la-hotel-neighborhoods.test.mjs
```

Browser regression tests require the approved seeded test database:

```powershell
npx playwright test tests/e2e/la-hotel-neighborhood-filter.spec.ts tests/e2e/hotel-neighborhood-filter.spec.ts
```

During local review, LA browser tests used the isolated seed's projected data through
a temporary local loader, restored afterward. NYC tests used its existing read-only
listing. Cases cover linked preselection, multi-selection, reload persistence,
clearing and attribution, itinerary choices, empty results, article navigation and
mobile width. Review actual properties' amenities separately before enabling any
additional classification filters.

## Reviewed optional tags

`content/cities/losangeles/hotel-tags.json` records each hotel's official evidence and rationale. `seed-la-hotel-tags.mjs` reuses active catalog IDs and upserts only reviewed LA saved-listing assignments, preserving existing assignments and classifications. The city importer invokes it in its transaction after neighborhood assignments. Do not use the NYC-only tag application script for LA.

Connected local database application: 64 assignments across 49 properties (48 BusinessFriendly, 7 FamilyFriendly, 5 WalkableArea, 2 NearTransit, 2 NightlifeAccess). Stile remains pending because current official property information could not be verified. Existing `tags` definitions were unchanged; only `hotel_tags` assignments and associated hotel modification timestamps changed. Production was not updated. Tags describe documented facilities/access, not safety guarantees; room availability, occupancy, meeting fees and service schedules need checking for the trip.
