"use client";
import Header from "../../../components/Header/header";
import Link from "next/link";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./landmark.module.css";
import BookingCTA from "@/app/destination/nyc/components/BookingCTA/BookingCTA";

// Each landmark gets a concrete data row instead of paragraphs of fluff.
// Approximate ticket prices and hours are noted as ranges or guidance only —
// always verify on the venue's own site before going (linked from each card).
type Landmark = {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  subway: string;
  hours: string;
  ticket: string;
  timeNeeded: string;
  whatToDo: string;
  soloTip: string;
  bestTime: string;
};

const LANDMARKS: Landmark[] = [
  {
    id: "statue-of-liberty",
    name: "Statue of Liberty & Ellis Island",
    neighborhood: "New York Harbor (depart from Battery Park)",
    address: "Liberty Island, New York, NY 10004",
    subway: "1 to South Ferry; 4/5 to Bowling Green; R/W to Whitehall St",
    hours: "Ferries 9:00 AM - 3:30 PM most days (last entry varies by season)",
    ticket: "~$25-30 ferry + grounds access. Pedestal/crown access requires separate timed booking, often 2-3 months ahead.",
    timeNeeded: "Half day (4-5 hours including ferry both ways and Ellis Island)",
    whatToDo: "Take the Statue Cruises ferry, walk Liberty Island grounds, take the included Ellis Island Immigration Museum tour. Skip the crown if you have any mobility limitations - it's 354 narrow stairs.",
    soloTip: "Solo tickets are easier to get than family bundles for crown access. Book the earliest ferry slot you can - lines are dramatically shorter at 9 AM than 11 AM.",
    bestTime: "First ferry of the morning, weekdays only if possible.",
  },
  {
    id: "empire-state-building",
    name: "Empire State Building",
    neighborhood: "Midtown Manhattan",
    address: "20 W 34th St, New York, NY 10001",
    subway: "B/D/F/M/N/Q/R/W to 34 St-Herald Sq; 6 to 33 St",
    hours: "Daily, typically 10:00 AM - 12:00 AM (last entry around 11:15 PM)",
    ticket: "~$44 for the 86th floor observatory; ~$79 for combo with 102nd floor; express passes more.",
    timeNeeded: "1.5 - 2 hours including security and elevators",
    whatToDo: "86th floor outdoor observatory has the iconic view. 102nd floor is enclosed and higher but a much smaller deck. Don't skip the Art Deco lobby - it's a landmark in its own right.",
    soloTip: "Sunset is the most popular slot (and the most crowded). Solo travelers do well with 9 PM-10 PM tickets - skyline lights are full-on, lines are gone, and you'll have room to move around the deck.",
    bestTime: "After 9 PM for fewest crowds; sunrise (very early entry) for solitude.",
  },
  {
    id: "top-of-the-rock",
    name: "Top of the Rock (Rockefeller Center)",
    neighborhood: "Midtown Manhattan",
    address: "30 Rockefeller Plaza, New York, NY 10112",
    subway: "B/D/F/M to 47-50 Sts - Rockefeller Center",
    hours: "Daily 9:00 AM - 11:00 PM (varies seasonally)",
    ticket: "~$40 standard; $50+ for sunset slots; ~$75 for sunrise.",
    timeNeeded: "1 - 1.5 hours",
    whatToDo: "Three-tier observation deck. The big advantage over Empire State is that Empire State is in the view (you can't see it from Empire State because you're standing on it). Best skyline shot in NYC.",
    soloTip: "Picking Top of the Rock over Empire State is the move most New Yorkers recommend to first-timers for exactly the reason above. Sunset is worth the premium if your budget allows.",
    bestTime: "30 minutes before sunset; arrive early to claim a railing spot on the south-facing side.",
  },
  {
    id: "911-memorial-museum",
    name: "9/11 Memorial & Museum",
    neighborhood: "Financial District",
    address: "180 Greenwich St, New York, NY 10007",
    subway: "1 to WTC Cortlandt; E to World Trade Center; R/W to Cortlandt St; 2/3 to Park Place",
    hours: "Memorial plaza open daily 7:30 AM - 9:00 PM (free). Museum daily 9:00 AM - 7:00 PM (last entry 5:00 PM).",
    ticket: "Memorial plaza is free. Museum admission ~$33 (~$0 on Monday evenings 5-7 PM with timed entry, very limited supply).",
    timeNeeded: "Memorial: 30-45 min. Museum: 2-3 hours.",
    whatToDo: "Walk both reflecting pools first; read the names etched along the bronze parapets. The museum is emotionally heavy but essential - allow time and consider not pairing it with another somber experience the same day.",
    soloTip: "Going solo is actually appropriate here - it's a contemplative place, and most people speak quietly. Bring tissues. Plan something light afterward (a walk along the Hudson, a coffee, the Brookfield Place atrium next door).",
    bestTime: "Weekday morning. The museum is significantly less crowded than the memorial plaza outside.",
  },
  {
    id: "central-park",
    name: "Central Park",
    neighborhood: "Manhattan (spans 59th to 110th, 5th to 8th Avenue)",
    address: "Central Park, New York, NY",
    subway: "Many entrances - A/B/C/D/1 to Columbus Circle (south); 5 Av/59 St for southeast; 81/86/96/103 St on 8th Ave subway lines for west side",
    hours: "Daily 6:00 AM - 1:00 AM. Many areas effectively unwalkable after dark - stick to lit main paths.",
    ticket: "Free. The Zoo, Conservatory Garden tours, and some attractions charge separately.",
    timeNeeded: "Self-paced; allow at least 2 hours for a meaningful visit, a full day for a deep one.",
    whatToDo: "Bethesda Terrace + Fountain (the classic photo), the Bow Bridge, the Mall (the tree-lined promenade), Belvedere Castle, the Reservoir loop (1.58 mi running track), the Conservatory Garden (Upper East Side, often empty). Skip the horse carriages - they're overpriced and the welfare situation is questionable.",
    soloTip: "Central Park is one of the easiest places in NYC to be alone in a crowd. Rent a bike at the south entrance for $20-30 to cover ground fast, or do a self-guided walk from the Mall to Bethesda to Bow Bridge to the Lake (about 90 min, the park's greatest-hits).",
    bestTime: "Early morning for the Reservoir, weekday afternoons for the busy meadows, sunset on Sheep Meadow for skyline views.",
  },
  {
    id: "times-square",
    name: "Times Square",
    neighborhood: "Midtown Manhattan",
    address: "Broadway & 7th Ave, around 42nd-47th Streets",
    subway: "1/2/3/7/N/Q/R/W/S to Times Sq - 42 St",
    hours: "Always open; lights are on 24/7.",
    ticket: "Free to walk through. Most attractions inside (Madame Tussauds, Ripley's, etc.) are paid.",
    timeNeeded: "30 minutes is plenty to see it; longer if you're doing TKTS for Broadway tickets or attending a show.",
    whatToDo: "Walk the pedestrian plazas, see the lights at night, watch the street performers from a respectful distance (don't tip the costumed characters unless you want a photo). TKTS booth at the red steps sells same-day Broadway tickets at 20-50% discount from ~3 PM.",
    soloTip: "Most New Yorkers actively avoid Times Square. It's worth seeing once at night for the sensory experience, then leaving. Don't eat here (overpriced tourist traps line every block); walk two avenues away in any direction for better food.",
    bestTime: "After dark for the light effect; weekday evening to avoid weekend tourist crowds.",
  },
  {
    id: "brooklyn-bridge",
    name: "Brooklyn Bridge",
    neighborhood: "Lower Manhattan to DUMBO, Brooklyn",
    address: "Brooklyn Bridge, New York, NY",
    subway: "Manhattan side: 4/5/6 to Brooklyn Bridge - City Hall, J/Z to Chambers St. Brooklyn side: A/C to High St, F to York St.",
    hours: "24/7 pedestrian access.",
    ticket: "Free.",
    timeNeeded: "30-45 min to walk one way (1.1 miles). Add time at either end for photos.",
    whatToDo: "Walk Manhattan to Brooklyn (better view ahead of you). Stay in the pedestrian lane (white painted line) - the bike lane gets aggressive. Stop at the tower arches for the postcard photo. End in DUMBO for the Washington/Water Street arch shot of the bridge framing the Empire State Building.",
    soloTip: "Walk over at sunset - bridge is busy enough to feel safe and the light is stunning. Take an Uber or subway back rather than walking both ways. Avoid mid-day in summer (no shade, very crowded).",
    bestTime: "Sunset (1 hour before sundown), or sunrise for empty bridge and best photos.",
  },
  {
    id: "high-line",
    name: "The High Line",
    neighborhood: "Chelsea / West Side (Gansevoort St up to 34th St)",
    address: "Various entrances; Gansevoort St & Washington St is the south end.",
    subway: "A/C/E to 14 St (then walk west) for south end; 7 to 34 St-Hudson Yards for north end.",
    hours: "Daily 7:00 AM - 10:00 PM (varies seasonally, shorter in winter).",
    ticket: "Free. Timed entry sometimes required in peak summer.",
    timeNeeded: "1 - 1.5 hours to walk the full 1.45 miles.",
    whatToDo: "Walk south-to-north (downhill, ends at Hudson Yards and the Vessel). The garden plantings change month to month - it's an actual landscaped park, not just a walkway. Photo spots: the overlook at 17th St, the sundeck at 14th St, the views into apartment windows are unintentionally funny.",
    soloTip: "Walking the full length top-to-bottom is the move. Hop off at Chelsea Market (16th St exit) for lunch at a counter - perfect solo dining setup, and you can re-enter the High Line afterward.",
    bestTime: "Weekday morning. Weekend afternoons get genuinely crowded.",
  },
  {
    id: "met-museum",
    name: "The Metropolitan Museum of Art",
    neighborhood: "Upper East Side (Museum Mile)",
    address: "1000 5th Ave, New York, NY 10028",
    subway: "4/5/6 to 86 St then walk three blocks west; M1/M2/M3/M4 bus along 5th Ave",
    hours: "Sunday-Tuesday & Thursday 10:00 AM - 5:00 PM; Friday-Saturday 10:00 AM - 9:00 PM; closed Wednesday.",
    ticket: "$30 for non-NY-State residents (covers Met Fifth Ave + The Cloisters within 3 days). NY State residents and NY/NJ/CT students pay-what-you-wish.",
    timeNeeded: "Half day minimum; a full day for serious museum-goers.",
    whatToDo: "Egyptian wing (Temple of Dendur), European Paintings (Vermeer, Rembrandt), American Wing, Arms & Armor, the Roof Garden in season (open May-Oct, rotating sculpture installation, killer Central Park views). Get the museum map at the entrance.",
    soloTip: "Museums are the ultimate solo-friendly NYC activity - no awkwardness, no pace negotiation, can leave whenever. Friday/Saturday evenings (open till 9 PM) are dramatically quieter than weekend days. The roof bar at sunset, when open, is one of the best solo experiences in the city.",
    bestTime: "Friday or Saturday evening 5 PM onwards.",
  },
];

export default function LandmarkPage() {

  // ---- JSON-LD schemas ----
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top NYC Landmarks Solo Travel Guide",
    "itemListOrder": "Unordered",
    "itemListElement": LANDMARKS.map((l, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": l.name,
      "description": l.whatToDo,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What NYC landmarks are most worth visiting on a first trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a first NYC trip, prioritize: Statue of Liberty + Ellis Island (half day), Empire State Building or Top of the Rock for skyline views (pick one), the 9/11 Memorial & Museum, Central Park, the Brooklyn Bridge walk, and a Broadway show. That's a comfortable 4-5 day itinerary."
        },
      },
      {
        "@type": "Question",
        "name": "Should I visit the Empire State Building or Top of the Rock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top of the Rock is generally recommended over the Empire State Building for first-time visitors because the Empire State Building is in the view from Top of the Rock (you can't see it from Empire State because you're standing on it). Empire State is iconic; Top of the Rock is the better photo."
        },
      },
      {
        "@type": "Question",
        "name": "Is the Statue of Liberty crown worth booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The crown access is a separate timed ticket that usually books out 2-3 months ahead, requires climbing 354 narrow stairs with no elevator, and the view from inside the crown is small. Most visitors are better served by the standard ferry plus grounds and pedestal access. Skip the crown unless you specifically want to say you did it."
        },
      },
      {
        "@type": "Question",
        "name": "Are there any free NYC landmarks worth visiting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes: Central Park, the Brooklyn Bridge walk, the 9/11 Memorial plaza (the museum is paid), the Staten Island Ferry (free, passes the Statue of Liberty), Grand Central Terminal, the New York Public Library's main branch, Bryant Park, the High Line, Washington Square Park, and Times Square at night. You can have an excellent NYC day for $0."
        },
      },
      {
        "@type": "Question",
        "name": "How much time do NYC landmarks take to visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Plan for half a day per major attraction (Statue of Liberty, 9/11 Museum, Met Museum) and 1-2 hours per observation deck (Empire State, Top of the Rock). Free walking landmarks (Brooklyn Bridge, High Line, Central Park sections) can be combined into single-day routes. Don't try to do more than two paid attractions in a day - logistics and lines make it exhausting."
        },
      },
      {
        "@type": "Question",
        "name": "Which NYC landmark is best for solo travelers specifically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Metropolitan Museum of Art on a Friday or Saturday evening (open until 9 PM, dramatically less crowded than daytime). Museums are the ideal solo activity because there's no pace negotiation, no awkwardness eating alone, and you can leave whenever. The Met's rooftop bar at sunset, in season, is one of NYC's best solo experiences."
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
      { "@type": "ListItem", "position": 2, "name": "New York", "item": "https://www.travelsamericas.com/destination/nyc/" },
      { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/nyc/landmark" },
    ],
  };

  const touristAttractions = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "NYC Tourist Attractions",
    "itemListElement": LANDMARKS.map((l, i) => ({
      "@type": "TouristAttraction",
      "name": l.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": l.address,
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US",
      },
      "position": i + 1,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractions) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Header
        image="/data/majorcities/newyork/assets/statue-of-liberty.webp"
        bannerText="New York City Landmarks Guide"
      />
      <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=activities&from=landmark" label="See tickets" />

      <section className={styles.intro} style={{ textAlign: "center" }}>
        <h1 className={styles.sectionheading}>NYC Landmarks: A Practical Solo Traveler Guide</h1>
        <p className={styles.introLead}>
          Real visitor information for the 9 New York City landmarks first-time and solo
          travelers actually want. Each entry includes the address, nearest subway, current
          hours, approximate ticket price, time to allocate, and a solo-specific tip.
          Verify hours and ticket prices on the venue&apos;s own site before going &mdash;
          NYC attractions change schedules seasonally.
        </p>

        <nav aria-label="Jump to landmark" className={styles.jumpnav}>
          {LANDMARKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={styles.jumpLink}>{l.name}</a>
          ))}
        </nav>
      </section>

      <section className={styles.landmarkList}>
        {LANDMARKS.map((l) => (
          <article key={l.id} id={l.id} className={styles.landmarkCard}>
            <h2 className={styles.landmarkName}>{l.name}</h2>
            <p className={styles.landmarkNeighborhood}>{l.neighborhood}</p>

            <dl className={styles.landmarkMeta}>
              <div className={styles.metaRow}>
                <dt>Address</dt>
                <dd>{l.address}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Subway</dt>
                <dd>{l.subway}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Hours</dt>
                <dd>{l.hours}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Ticket</dt>
                <dd>{l.ticket}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Time needed</dt>
                <dd>{l.timeNeeded}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Best time to go</dt>
                <dd>{l.bestTime}</dd>
              </div>
            </dl>

            <div className={styles.landmarkBody}>
              <h3 className={styles.landmarkSubhead}>What to do</h3>
              <p>{l.whatToDo}</p>

              <h3 className={styles.landmarkSubhead}>Solo traveler tip</h3>
              <p>{l.soloTip}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.routeSection} id="suggested-routes">
        <h2 className={styles.sectionheading}>Suggested 1-Day Landmark Routes</h2>

        <article className={styles.routeCard}>
          <h3>Classic First-Timer Route (1 day, walking + subway)</h3>
          <ol>
            <li><strong>9:00 AM</strong> &mdash; Statue of Liberty + Ellis Island (first ferry from Battery Park)</li>
            <li><strong>1:30 PM</strong> &mdash; Quick lunch in the Financial District</li>
            <li><strong>2:30 PM</strong> &mdash; 9/11 Memorial plaza (skip the museum if pressed for time)</li>
            <li><strong>4:00 PM</strong> &mdash; Walk the Brooklyn Bridge (Manhattan to DUMBO)</li>
            <li><strong>6:00 PM</strong> &mdash; Dinner in DUMBO</li>
            <li><strong>8:30 PM</strong> &mdash; Subway back to Midtown, finish with Empire State Building at 9-10 PM</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Slow-Paced Solo Route (1 day, low-energy)</h3>
          <ol>
            <li><strong>10:00 AM</strong> &mdash; The Metropolitan Museum (3 hours, take it room by room)</li>
            <li><strong>1:30 PM</strong> &mdash; Lunch on the Upper East Side</li>
            <li><strong>3:00 PM</strong> &mdash; Walk south through Central Park (Conservatory Garden &rarr; Reservoir &rarr; Bow Bridge &rarr; Bethesda Terrace)</li>
            <li><strong>5:30 PM</strong> &mdash; Exit Central Park at Columbus Circle</li>
            <li><strong>6:30 PM</strong> &mdash; Sunset at Top of the Rock (book the sunset slot in advance)</li>
            <li><strong>8:30 PM</strong> &mdash; Dinner at a bar in Hell&apos;s Kitchen or Midtown West</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Free Landmarks Day (1 day, $0 attractions + transit)</h3>
          <ol>
            <li><strong>8:30 AM</strong> &mdash; Staten Island Ferry round trip (free, passes Statue of Liberty)</li>
            <li><strong>10:30 AM</strong> &mdash; 9/11 Memorial plaza (the museum is paid; the plaza is free)</li>
            <li><strong>12:00 PM</strong> &mdash; Walk to and across Brooklyn Bridge</li>
            <li><strong>1:30 PM</strong> &mdash; Cheap eats in DUMBO; subway back to Manhattan</li>
            <li><strong>3:00 PM</strong> &mdash; Bryant Park + NY Public Library (free, gorgeous)</li>
            <li><strong>4:30 PM</strong> &mdash; Walk Grand Central Terminal&apos;s main concourse</li>
            <li><strong>5:30 PM</strong> &mdash; High Line + Hudson Yards Vessel viewing</li>
            <li><strong>8:00 PM</strong> &mdash; Times Square at night (free, do it once, leave fast)</li>
          </ol>
        </article>
      </section>

      <section className={styles.faqSection} id="landmarks-faq">
        <h2 className={styles.sectionheading}>Practical Questions</h2>

        <details className={styles.faqItem}>
          <summary>How far in advance should I book Statue of Liberty / Empire State tickets?</summary>
          <p>
            Statue of Liberty grounds + pedestal: 1-2 weeks ahead is comfortable. Crown
            access: 2-3 months ahead, usually sold out closer to date.
            Empire State Building and Top of the Rock: 1-3 days ahead is fine for standard
            tickets; sunset slots fill up earlier so book those 1-2 weeks out.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Are city passes (CityPASS, New York Pass, GoCity) worth it?</summary>
          <p>
            Only if you genuinely plan to use 4+ of the included attractions in a few days.
            For 2-3 attractions, paying separately is usually cheaper. For first-time
            visitors hitting Statue of Liberty + Empire State + Top of the Rock + a museum,
            CityPASS often pencils out. Run the math against your actual planned itinerary
            rather than buying optimistically.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Can I see most landmarks in 3 days?</summary>
          <p>
            Yes, but you&apos;ll be moving fast. A realistic 3-day landmark sprint:
            Day 1 - Statue of Liberty + 9/11 Memorial + Brooklyn Bridge. Day 2 - Central
            Park + Met Museum + sunset Top of the Rock. Day 3 - High Line + Times
            Square + Broadway show. That covers 8 of the 9 landmarks in this guide.
            4-5 days is more comfortable.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>What time of year has the best landmark experience?</summary>
          <p>
            April-June and September-October offer the best combination: comfortable
            walking weather, manageable crowds, full schedules everywhere. December
            is magical visually (lights, decorations) but punishing crowd-wise.
            July-August is hot and tourist-heavy. February is the cheapest but coldest.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is it safe to visit these landmarks alone?</summary>
          <p>
            Yes &mdash; every landmark in this guide is in a heavily-trafficked tourist
            area during normal visiting hours. For more on solo travel safety in NYC,
            see our{" "}
            <Link href="/destination/nyc/nyc-safety-guide">NYC safety guide</Link>{" "}
            and{" "}
            <Link href="/destination/nyc/nyc-female-solo-travel-guide">solo female travel guide</Link>.
          </p>
        </details>
      </section>

      <section className={styles.relatedLinks}>
        <h2 className={styles.sectionheading}>Plan the Rest of Your Trip</h2>
        <div className={styles.linkGrid}>
          <Link href="/destination/nyc/solo-trip-to-nyc" className={styles.relatedLink}>
            <h3>Solo Trip to NYC Guide</h3>
            <p>Budget, where to stay, your first 24 hours, and what to avoid.</p>
          </Link>
          <Link href="/destination/nyc/best-areas-to-stay" className={styles.relatedLink}>
            <h3>Best Areas to Stay</h3>
            <p>Neighborhood comparison for solo travelers, with safety and transit scoring.</p>
          </Link>
          <Link href="/destination/nyc/food" className={styles.relatedLink}>
            <h3>Solo Dining in NYC</h3>
            <p>Where solo travelers should actually eat, by neighborhood and meal.</p>
          </Link>
          <Link href="/destination/nyc/nyc-safety-guide" className={styles.relatedLink}>
            <h3>NYC Safety Guide</h3>
            <p>Practical safety: subway, neighborhoods, scams, emergencies.</p>
          </Link>
        </div>
      </section>

      <BookingCTA variant="full" text="Get tickets to NYC's top landmarks" href="/destination/nyc/booking?tab=activities&from=landmark" label="See tickets" />
      <Footer />
    </>
  );
}
