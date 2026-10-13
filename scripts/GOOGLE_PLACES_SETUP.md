# Click-to-view Google hotel ratings

NYC hotel cards display **`****` with an eye icon** in the rating row. Clicking the
eye reveals the Google rating and review count; the eye-off icon hides them again.
Showing the same result again uses component memory without another API request.
The eye-off control also hides an unavailable message; reopening it does not
retry the lookup.
Loading the page, filtering
hotels and opening a booking link do not call Google Places. A rating lookup runs
only after a signed-in member clicks the eye. Guests are sent to sign-in, which links to registration,
without contacting Google or loading the CAPTCHA. Each lookup checks the member
session on the server before verification or quota reservation. Production also requires a server-validated
Cloudflare Turnstile challenge. One Places request retrieves both `rating` and
`userRatingCount`. The server resolves the hotel's saved Place ID; visitors cannot
submit arbitrary Place IDs.

## Complete the setup

First complete [member authentication setup](MEMBER_AUTH_SETUP.md). Ratings and
hotel price links require a verified account session, including in local development.

1. In Google Cloud, enable **Places API (New)** and restrict the server API key to
   that API. Its IP restriction must include the **deployment server's outbound
   public IP**, which can differ from your computer's IP. Confirm your host has a
   suitable stable outbound IP before using an IP restriction. The latest local
   check returned `API_KEY_IP_ADDRESS_BLOCKED`; resolve the allowlist before
   enabling live lookups. Keep `GOOGLE_PLACES_API_KEY` private on the server.
2. Reuse the existing Cloudflare Turnstile keys used by the subscription form.
   Both features already read `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and
   `TURNSTILE_SECRET_KEY`. Confirm the existing widget allows your website's
   hostnames (`www.travelsamericas.com` and `travelsamericas.com`). Create a
   **Managed** widget only if you do not already have one. Configure local testing
   hostnames and keys separately when needed. Set both values in the deployment's
   environment and in `.env.local` for local testing. The public site key requires
   a restart locally or a new production build. Production Google lookups remain
   disabled if either key is absent. Each flow generates its own fresh verification token;
   a subscription token cannot be reused for a hotel rating lookup.
3. Apply `scripts/hotel-rating-limits-schema.sql` to the same PostgreSQL database
   as the hotels. The normal deployment migration also applies it. These tables
   hold request counters and hashed abuse identifiers, never Google ratings.
4. Configure the allowed website hostnames and limits described below, then set
   `GOOGLE_RATINGS_ENABLED=true` and deploy. Until setup is complete the cards offer
   a link to the hotel's page on Google Maps.
5. After deployment, verify that page views create no Places calls, then click
   one hotel and check the Google Maps attribution and rating. Check Google Cloud
   usage and billing reports to confirm only the intended Details request runs.

## Limits and bot protection

For local development, set `NEXT_PUBLIC_HOTEL_RATINGS_LOCAL_BYPASS=true` and
`GOOGLE_RATINGS_ENABLED=true` in `.env.local`, then run `npm run dev:local`.
This skips Turnstile only when `NODE_ENV=development` and the request uses
`http://localhost:3000` or `http://127.0.0.1:3000`. The local server binds to
loopback so the bypass is not available over the LAN. Google credentials,
member login, curated hotel validation, request checks and all shared quota limits still apply.
Production ignores this flag and requires both Turnstile keys. This switch only
affects hotel ratings; the subscription form keeps its existing configuration.

- Set `HOTEL_RATINGS_ALLOWED_HOSTNAMES=www.travelsamericas.com,travelsamericas.com`.
  These are exact hostnames, not wildcards. `PUBLIC_SITE_URL` or
  `NEXT_PUBLIC_SITE_URL` can also establish an exact origin; trusted Vercel
  deployment URLs are recognized automatically. Localhost and `127.0.0.1` on
  port 3000 are accepted only in development. A request's Host header cannot add
  itself to the allowlist.
- `GOOGLE_RATINGS_DAILY_LIMIT=20` and `GOOGLE_RATINGS_MONTHLY_LIMIT=500` are the
  conservative defaults. Limits apply to **attempted** Google lookups across all
  visitors, app instances and deployments sharing this database. They reset at
  UTC calendar boundaries, not on restart or redeployment.
- Every production lookup requires a fresh Turnstile token with the `hotel-rating` action
  and an approved hostname. Validation occurs on the server. A button or an
  Origin header alone is not a bot check.
- `GOOGLE_RATINGS_IP_HOURLY_LIMIT=5` limits each trusted network identifier per UTC
  hour. Identifiers are HMAC-hashed using a server secret. Vercel's trusted client
  IP header is recognized on Vercel. Set `HOTEL_RATINGS_TRUSTED_PROXY=cloudflare`
  only when your server is reachable solely through your controlled Cloudflare
  ingress. On other deployments, all callers share one conservative hourly
  bucket; arbitrary forwarded-IP headers cannot bypass it. Stale hourly counters
  are deleted on the next reservation after 24 hours. No scheduled deletion job
  runs while the feature is idle.
- Reservations are atomic in PostgreSQL. If the database, CAPTCHA validation or
  configuration is unavailable, the endpoint fails closed. Failed upstream
  requests still consume a reservation; the app does not automatically retry.
- After a cap is reached, the visitor can use **Open in Google Maps**, which does
  not call your Places API. Set `GOOGLE_RATINGS_ENABLED=false` to disable lookups.

These limits protect this endpoint's calls. They do not cap other applications
using your API key or billing account. Keep API key restrictions in place and use
Google Cloud quotas where available. Budget alerts are notifications, not a hard
spending limit. Bots may still consume the small permitted allowance; CAPTCHA
reduces that risk, while the shared counters cap its size.

## Click-to-view hotel photos

Hotel detail pages keep their saved cover image and offer **View photos** beneath
it. This button uses `/api/hotel-photos`; page loads and opening reviews do not
request Google photos. It shares the ratings feature flag, private Google key,
member session requirement, Turnstile verification, origin checks and quota tables.

A gallery loads at most three photos. Before any Google request, it atomically
reserves **four attempts** from the existing daily, monthly and hourly counters:
one Details request for `photos`, plus up to three Photo requests. Unused or failed
attempts are not refunded. With the default daily cap of 20, at most five galleries
can load per day if no ratings are requested. With an hourly cap of 5, one gallery
and one rating fit in a network identifier's hourly allowance. These counters cap
request attempts, not a dollar amount; Google prices the request types separately.

The key stays on the server. Photo URLs and photographer credits are returned with
no-store headers and retained only in the mounted gallery's memory. Reopening the
gallery or navigating between its photos makes no further Places API calls; a
reload needs a new lookup and reservation. No photo resource names or images are
persisted in the app. Required photographer credits appear beside the main photo,
each thumbnail and the enlarged viewer. Photos load sequentially without retries;
unavailable photos do not prevent other successful photos from displaying.

See [Google Place Photos](https://developers.google.com/maps/documentation/places/web-service/place-photos)
for the photo request and attribution requirements.

For a one-off gallery check, temporarily override the environment limits to
`GOOGLE_RATINGS_DAILY_LIMIT=100`, `GOOGLE_RATINGS_MONTHLY_LIMIT=1000` and
`GOOGLE_RATINGS_IP_HOURLY_LIMIT=50`. Restart locally or redeploy the hosted app.
After testing, restore 20, 500 and 5 respectively and restart/redeploy again.
The code defaults stay conservative. Existing request counters are not cleared.

## Rating data handling

Google ratings and review counts are returned with `Cache-Control: private,
no-store` and displayed only in the current component's memory. They are not
written to PostgreSQL, browser storage, analytics, logs or a shared cache. The
existing saved Place IDs can be retained. Google Maps attribution appears beside
the result; the site's terms and privacy pages link Google's policies and describe
the bot check. Ratings are separate from the site's own hotel tier assessments.

References:

- [Google Places policies and attribution](https://developers.google.com/maps/documentation/places/web-service/policies)
- [Google Place Details fields](https://developers.google.com/maps/documentation/places/web-service/place-details)
- [Google Places usage and billing](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing)
- [Turnstile server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [Turnstile widget setup](https://developers.cloudflare.com/turnstile/get-started/widget-management/dashboard/)

## Verification

Run `npm run test:hotel-ratings` for the mocked endpoint and provider checks. They
do not call Google or Cloudflare. The NYC booking and Google ratings Playwright
tests cover filters and the click flow. For the mocked successful browser flow,
start the development server with Cloudflare's public test site key
`1x00000000000000000000AA`; the test intercepts both the challenge script and the
rating endpoint. Do not enable the production endpoint using test credentials.

Set `HOTEL_RATING_BUDGET_DB_TEST=1` to opt into the real PostgreSQL concurrency
test when running the same command. It creates an isolated temporary test schema,
exercises the production reservation code, and removes that schema afterward. It
does not consume the live lookup budget or modify hotel rows.
