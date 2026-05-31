# NYC Booking Page — Journey & Interlinking Plan (conversion-focused)

**Target page:** `/destination/nyc/booking` (tabs: Flights, Hotels, Things to Do)
**Goal:** make booking the deliberate endpoint of every NYC journey, and turn
the booking page itself into a router that moves users across revenue tabs.
Money is earned on: Flights (Aviasales, marker 733422), Things to Do (WeGoTrip
affiliate). Hotels currently link to Google (not yet monetized).

---

## 1. Funnel model

| Stage | Pages (existing) | User intent | Job of the page |
|-------|------------------|-------------|-----------------|
| Inspire | nyc hub, things-to-do, landmark, food, group-landmarks | "Is NYC for me?" | Excite → push toward planning |
| Plan | solo-itinerary, group-itinerary, neighborhood-guide, best-areas-to-stay, solo-trip-to-nyc, group-travel | "How do I do this trip?" | Build the plan → hand off to booking |
| Reassure | is-nyc-safe-at-night, nyc-safety-guide, nyc-female-solo-travel-guide, nyc-subway-map, subway-safety-guide | "Will I be ok / how do I get around?" | Remove friction → nudge to book |
| **Book** | **/booking** | "Lock it in" | Convert + cross-sell across tabs |

Principle: every Inspire/Plan/Reassure page must contain ONE clear, contextual
link into the right booking tab. Booking must never dead-end — each tab links
onward (next tab + relevant guides).

---

## 2. Tab deep-linking (prerequisite)

Add tab routing so inbound links land on the right tab:
`/destination/nyc/booking?tab=flights | hotels | activities` (default flights).
The booking client reads `?tab=` on load and sets the active tab. Every inbound
CTA below uses the matching `?tab=` value.

---

## 3. Inbound interlinking map (guide page → booking)

Place ONE primary CTA per page (mid-article + end-of-article repeat is fine).
Use the exact keyword-rich anchor text — avoid "click here".

| From page | → Booking tab | Anchor text |
|-----------|---------------|-------------|
| nyc hub (`/destination/nyc`) | ?tab=flights | "Book your New York trip: flights, hotels & tickets" |
| solo-itinerary | ?tab=flights | "Book the flights and hotels for this itinerary" |
| group-itinerary | ?tab=hotels | "Find group-friendly hotels for this plan" |
| best-areas-to-stay | ?tab=hotels | "Compare live hotel prices in these neighborhoods" |
| neighborhood-guide | ?tab=hotels | "See hotels in the best NYC neighborhoods" |
| is-nyc-safe-at-night | ?tab=hotels | "Book a hotel in a safe, well-connected area" |
| nyc-safety-guide | ?tab=hotels | "Choose a hotel in a safe NYC neighborhood" |
| nyc-female-solo-travel-guide | ?tab=hotels | "Book a safe, central hotel for solo travelers" |
| things-to-do | ?tab=activities | "Book skip-the-line tickets & audio tours" |
| landmark | ?tab=activities | "Get tickets to NYC's top landmarks" |
| group-landmarks | ?tab=activities | "Book group tickets to these landmarks" |
| food | ?tab=activities | "Book a guided NYC food tour" |
| group-dining | ?tab=activities | "Book a food tour for your group" |
| nyc-subway-map | ?tab=flights | "Booked your flight? Plan your NYC trip" |
| subway-safety-guide | ?tab=flights | "Plan and book your NYC trip" |
| solo-trip-to-nyc | ?tab=flights | "Start your trip: book flights & hotels" |
| group-travel | ?tab=flights | "Book flights & stays for your group" |

CTA component spec (reusable): a banded card with a short headline
("Ready to book your New York trip?"), a one-line subhead tailored per page,
and a button using the anchor text + `?tab=` link above. One component, props:
`{ headline?, text, href, label }`.

---

## 4. Outbound from booking (per tab) — keep the journey moving

Replace the single static "Travel Smart" box with a **tab-aware "Related + Next
step" rail**. Each tab shows: (a) a cross-sell to the next revenue tab, and
(b) 2–3 contextual guides.

**Flights tab**
- Next step (primary): "Now book your hotel →" (switch to Hotels tab)
- Guides: nyc-subway-map ("Getting from the airport"), solo-itinerary or
  group-itinerary ("Plan your days"), best time/what to expect (safety hub)

**Hotels tab**
- Next step: "Next: things to do in NYC →" (switch to Things to Do tab)
- Guides: best-areas-to-stay ("Where to stay"), neighborhood-guide
  ("Compare neighborhoods"), is-nyc-safe-at-night ("Safe areas at night")

**Things to Do tab**
- Next step: "Compare return flights →" (Flights tab) OR "Where to stay near
  these sights →" (Hotels tab)
- Guides: things-to-do ("Full attractions guide"), landmark ("Top landmarks"),
  food ("Where to eat"), solo-itinerary/group-itinerary ("Build a day plan")

Cross-sell loop = Flights → Hotels → Things to Do, so a visitor entering on any
tab is always pushed toward the other revenue surfaces.

---

## 5. Booking-page SEO scaffolding (supports conversions via traffic)

- **Breadcrumb:** Home › New York › Book your trip (with BreadcrumbList schema).
- **Related-guides footer** grouped by intent so link equity flows back into the
  cluster and gives users a path if they're not ready to book:
  - Plan: solo-itinerary, group-itinerary, neighborhood-guide, best-areas-to-stay
  - Stay safe & get around: is-nyc-safe-at-night, nyc-safety-guide, nyc-subway-map
  - Explore: things-to-do, landmark, food
- Keyword-rich anchors throughout; one canonical (already set:
  `…/destination/nyc/booking`).

---

## 6. Build priority (phased, when you implement)

1. **Tab deep-linking** (`?tab=`) — unblocks every inbound CTA.
2. **Tab-aware Related + Next-step rail** on booking (replaces static sidebar) —
   biggest conversion lever; keeps users on revenue tabs.
3. **Reusable CTA component** + add to the 4 highest-traffic guide pages first
   (solo-itinerary, best-areas-to-stay, things-to-do, nyc hub), then roll out.
4. **Breadcrumb + related-guides footer** on booking.

---

## 7. Measurement

- Track tab switches and outbound clicks per tab (which tab earns most).
- Tag inbound CTAs (e.g. `?from=solo-itinerary`) to see which guides convert.
- Watch affiliate clicks: Flights (Aviasales) and Things to Do (WeGoTrip) are the
  monetized surfaces; Hotels is a candidate for a future affiliate swap.

---

## 8. Open follow-ups

- Hotels tab isn't monetized (Google links). Revisit with a hotel affiliate so
  the Hotels cross-sell also earns.
- Consider a single "Plan your NYC trip" hub block on the nyc landing page that
  visually presents the Inspire → Plan → Book journey.
