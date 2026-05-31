# Booking data sources

The `/destination/nyc/booking` page has three tabs, each backed by a JSON file
in `content/cities/newyork/` and refreshed by a script in `scripts/`.

| Tab          | Data file         | Script                       | Source                          |
|--------------|-------------------|------------------------------|---------------------------------|
| Flights      | `bookflights.json`| `fetch-nyc-flights.mjs`      | Travelpayouts / Aviasales       |
| Hotels       | `hotels.json`     | `fetch-nyc-hotels.mjs`       | RapidAPI · Travel Advisor       |
| Things to Do | `thingstodo.json` | `fetch-nyc-thingstodo.mjs`   | WeGoTrip (Travelpayouts partner)|

## Things to Do — WeGoTrip

The activities tab now uses **WeGoTrip**, a Travelpayouts tours & activities
partner offering self-guided audio tours. Its products carry a real price and
the links can be affiliate-tracked with your Travelpayouts marker (set
`TRAVELPAYOUTS_MARKER` in `.env.local`). The previous Tripadvisor/RapidAPI
source gave good content but no price and no affiliate path.

Config (all optional — the API base defaults are built in):

```
# WEGOTRIP_API=https://api.wegotrip.com/v2
# WEGOTRIP_API_KEY=your_key        # only if your account requires one
# TRAVELPAYOUTS_MARKER=your_marker # for affiliate attribution on links
```

## Why RapidAPI for hotels

We previously tried Travelpayouts Hotellook (shut down 2025-10-20), Amadeus
Self-Service (portal being decommissioned 2026-07-17, registration closed), and
Hotelbeds APItude (free key only returns test/simulated data; live data needs a
multi-month certification + contract). The RapidAPI "Travel Advisor" API returns
live hotel data and reuses the same key as the Things to Do tab.

## Credentials

Both hotel and activity scripts use one key:

```
RAPIDAPI_KEY=your_rapidapi_key
# RAPIDAPI_HOST=travel-advisor.p.rapidapi.com   # default
```

1. Create a free account at https://rapidapi.com
2. Subscribe to **Travel Advisor** by apidojo:
   https://rapidapi.com/apidojo/api/travel-advisor (Basic / free plan)
3. Put the key in `.env.local` (gitignored).

## Refresh the data

```
node scripts/fetch-nyc-flights.mjs      # flights  (Travelpayouts token)
node scripts/fetch-nyc-hotels.mjs       # hotels   (RapidAPI key)
node scripts/fetch-nyc-thingstodo.mjs   # activities (WeGoTrip)
```

Each writes its JSON file. Restart the dev server afterward (JSON is imported at
build time). Hotel/attraction photos load from `media-cdn.tripadvisor.com`
(allowlisted in the CSP in `next.config.ts`).

## Notes & limitations

- Travel Advisor hotels return name, photo, rating, review count, and a price
  string. Response shapes vary by plan — the parser lives in `toCard` /
  `getHotels` and prints a raw sample if nothing usable comes back.
- Outbound hotel/attraction links currently point to Tripadvisor/Google and are
  NOT affiliate-tracked. To earn commission, switch links to an affiliate
  program (e.g. Viator/GetYourGuide for activities, Booking.com for hotels) with
  your partner ID.
- Cruises were retired (no provider offers a cruise API); the third tab is now
  Things to Do.
