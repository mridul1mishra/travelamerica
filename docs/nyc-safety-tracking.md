# NYC night-safety tracking review

Prepared on branch `codex/nyc-safety-tracking`. No deployment, tag publication,
or GA4 production-setting changes are part of this work.

## Inspection

- Root `app/layout.tsx` loads Google `gtag.js` once and configures
  `G-SM7NC16K21` once. No `GTM-` container, `gtm.js`, noscript GTM iframe,
  analytics package, or second GA initialization was found in tracked source.
  The confirmed Google tag ID `GT-MQXCSFLH` does not require a second loader.
- Confirmed account context supplied by the owner: TravelAmerica property
  506202463; Travel America web stream 12198985593.
- No consent-mode commands, consent banner, or consent manager integration was
  found. This patch preserves the current behavior; it does not set consent.
- `LinkClickTracker` handles sitewide `booking_cta_click`,
  `booking_flight_click`, `booking_hotel_click`, `booking_activity_click`,
  `affiliate_click`, `outbound_click`, and `internal_cta_click`. Error boundaries
  emit `exception`; email-signup components emit signup events.
- No existing custom scroll, section-view, or hotel-module-view events were
  found. GA4 enhanced measurement remains untouched, including its scroll and
  outbound-click settings. Custom `outbound_click` overlaps conceptually with
  enhanced measurement's `click`; do not sum them as unique outbound actions.
- On this article, tagged hotel recommendations now emit `hotel_cta_click`
  through that same handler and return before the generic booking event.
  Other pages and untagged links retain their events. Historical reports using
  `booking_cta_click` for this article must account for this event-name change.

## Live DOM and CSP

A direct HTTP inspection of the exact article on October 11, 2026 (New York)
returned a Vercel cached response with one enforced CSP header. Its connect-src:

```text
connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://sentry.avs.io;
```

The repository's `next.config.js` already supplies this same allowlist for all
routes. No CSP meta tag was present in the live HTML or found in source.
`vercel.json` contains redirects/deployment configuration but no additional CSP;
no server/CDN CSP configuration was found elsewhere in tracked source.
Existing script/style `unsafe-inline` directives predate this work and are
unchanged. No wildcard or additional unsafe directive is introduced.

The reported diagnostic cannot be reproduced from this response's policy:
the requested origin is already allowed. No redundant CSP edit is necessary.
If another enforced policy is applied in Vercel project headers, an upstream
proxy/CDN response-header rule, or an older deployed response, edit that policy's
existing **connect-src** by appending exactly `https://www.google-analytics.com`
before its semicolon. Preserve every other source/directive. Multiple enforced
policies must each allow the origin. The external rule location cannot be
confirmed from repository access alone. Inspect the failing response's complete
headers and any CSP meta tags before editing a hosting setting.

The live HTML contains the shared hotel module and 11 hotel recommendation
anchors, all pointing to `/destination/nyc/hotel`, with zero `/booking` anchors.
The web search rendering initially omitted the module and neighborhood links;
direct HTTP HTML inspection supersedes that rendering. `/destination/nyc/booking`
is a legacy redirect and defaults to flights without `tab=hotels`. The owner
explicitly selected tracking the existing hotel links without changing URLs.

## Stable targets and events

| Target | Stable selector / identifier | Placement |
| --- | --- | --- |
| Neighborhood advice introduction | `#neighborhood-advice[data-safety-section]` | Inside existing `#neighborhoods` |
| Shared hotel recommendation module | `#recommended-nyc-hotel-areas[data-hotel-cta-module]` | `after_hero` |
| Hero hotel link | `data-cta-id="safe-area-hotels-hero"` | `hero` |
| Shared module hotel link | `data-cta-id="recommended-nyc-hotel-areas"` | `after_hero` |
| Four exact-answer links | `data-cta-id="exact_night_answers-{area-slug}"` | `exact_night_answers` |
| Four supported neighborhood links | `data-cta-id="safe_neighborhoods-{area-slug}"` | `safe_neighborhoods` |
| Bottom hotel link | `data-cta-id="safe-area-hotels-bottom"` | `bottom_booking_band` |

All eleven anchors have `data-hotel-cta="true"`. Area slugs come from the
original area name, lowercase with non-alphanumeric runs replaced by hyphens.
DUMBO has no corresponding hotel link in the existing area mapping.

The selected advice section includes the neighborhood heading and its two
advice paragraphs. It deliberately excludes the tall card grid so that 50% of
the actual target can be visible on phones. The parent `#neighborhoods` remains.

- `safety_section_view`: `page_location`, `section_id`.
- `hotel_cta_view`: `page_location`, `cta_id`, `cta_placement`.
- `hotel_cta_click`: `page_location`, `cta_id`, `cta_placement`, `link_url`.

Views use native IntersectionObserver with a 0.5 threshold and a cumulative
2,000 ms timer. Falling below 50% or hiding the document pauses accumulation;
returning resumes it. Each identifier fires once in the current document, even
after React remounts/client navigation back to the same URL. A full reload resets
the guard. Events use the existing gtag function; view events queue in the
existing dataLayer if the tag has not initialized. No extra GA config, custom
scroll event, GTM container, or enhanced-measurement replacement is introduced.

## Release verification

Local validation passed: five Playwright tests cover actual rendered DOM,
one GA loader, all eleven unique click payloads without generic duplicates,
49%/50% threshold behavior, cumulative dwell time, hidden-tab pauses, once-only
firing, and native desktop (1280 px) / mobile (390 px) visibility. A browser fetch
to a mocked `https://www.google-analytics.com/g/collect` endpoint returned 204
under the existing CSP, proving that this local policy permits the exact origin
without sending a synthetic hit to production GA4. Targeted ESLint, TypeScript
`tsc --noEmit --incremental false`, and `git diff --check` also passed.

Before any separately approved deployment, validate the branch in a suitable
preview/local environment. Confirm payloads and once-only firing. After an
approved release, inspect DevTools Network for real `g/collect` requests addressed
to `G-SM7NC16K21`, no CSP failures, and the three events in GA4 DebugView.
An allowed response header or a mocked collection request alone does not prove
GA4 receipt. Production measurement delivery has not been asserted by this work.
