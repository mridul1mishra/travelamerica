"use client";
import Header from "../../../components/Header/header";
import Link from "next/link";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./lalandmark.module.css";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";

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
    id: "griffith-observatory",
    name: "Griffith Observatory",
    neighborhood: "Los Feliz / Griffith Park",
    address: "2800 E Observatory Rd, Los Angeles, CA 90027",
    subway: "Metro B (Red) Line to Vermont/Sunset, then DASH Observatory bus (weekends/holidays) or rideshare up the hill",
    hours: "Tuesday-Friday 12:00 PM - 10:00 PM; Saturday-Sunday 10:00 AM - 10:00 PM; closed Monday.",
    ticket: "Free admission to the building and grounds. Samuel Oschin Planetarium shows ~$10 adults. Parking on-site and on the road is metered.",
    timeNeeded: "2 - 3 hours",
    whatToDo: "Take in the panorama of the entire LA basin from downtown to the ocean, with the Hollywood Sign on the hillside behind you. Look through the public telescopes on clear evenings (free, when staffed), see the Foucault pendulum and the Tesla coil, and catch a planetarium show. The lawn at dusk is the best free sunset-into-skyline view in the city.",
    soloTip: "Parking near the top fills fast - arrive before 10 AM or after 5 PM, or hike up the Charlie Turner Trail from the Greek Theatre lot (about 30-40 min). Going solo at night for the city lights and the telescopes is one of LA's easiest and safest solo evenings.",
    bestTime: "Weekday evening near sunset for the skyline-to-lights transition; avoid weekend midday crowds and parking gridlock.",
  },
  {
    id: "hollywood-sign",
    name: "Hollywood Sign",
    neighborhood: "Mount Lee, Griffith Park",
    address: "Mount Lee Dr, Los Angeles, CA 90068 (sign is fenced; viewpoints vary)",
    subway: "No direct transit. Metro B (Red) Line to Hollywood/Highland, then rideshare to a trailhead.",
    hours: "Viewable in daylight hours; the sign itself is fenced off and cannot be reached on foot.",
    ticket: "Free to view. No paid access to the sign.",
    timeNeeded: "1 - 3 hours depending on whether you hike",
    whatToDo: "You cannot walk up to the letters - they are fenced and monitored. The best views are from Griffith Observatory (free), the Lake Hollywood Park lawn, or the Mt. Hollywood / Mt. Lee trails for the closest legal vantage. The Hollywood & Highland complex frames a clean distant shot at street level.",
    soloTip: "Skip the overpriced 'Hollywood Sign tour' vans. For a solo hike, the Brush Canyon (Canyon Drive) trail to the back of the sign is the most rewarding - about 6 miles round trip, bring water and sun protection, there is no shade.",
    bestTime: "Early morning for clear air and cool hiking temps; the marine layer can hide the sign until mid-morning.",
  },
  {
    id: "hollywood-walk-of-fame",
    name: "Hollywood Walk of Fame & TCL Chinese Theatre",
    neighborhood: "Hollywood",
    address: "6925 Hollywood Blvd, Los Angeles, CA 90028",
    subway: "Metro B (Red) Line to Hollywood/Highland - exits directly onto the Walk.",
    hours: "Walk of Fame is a public sidewalk, open 24/7. TCL Chinese Theatre tours run roughly 10:00 AM - 6:00 PM.",
    ticket: "Free to walk. TCL Chinese Theatre guided tour ~$18; movies screen at standard ticket prices. The forecourt handprints are free to see.",
    timeNeeded: "1 - 1.5 hours",
    whatToDo: "Find your favorite stars set into the terrazzo sidewalk, see the celebrity handprints and footprints in the TCL Chinese Theatre forecourt, and look up at the Dolby Theatre (home of the Oscars). The Egyptian Theatre a block east is the other historic movie palace worth a look.",
    soloTip: "This stretch is heavily touristed and a little gritty - keep your phone secure and don't engage with the costumed characters unless you want to pay for a photo. Daytime is fine solo; it is the quick 'I saw it' stop, not an afternoon. Better food is one block off the boulevard.",
    bestTime: "Weekday late morning. Avoid evenings on the boulevard itself if you want a calmer visit.",
  },
  {
    id: "getty-center",
    name: "The Getty Center",
    neighborhood: "Brentwood",
    address: "1200 Getty Center Dr, Los Angeles, CA 90049",
    subway: "Metro E (Expo) / bus connections to Westwood, then Metro bus 761 to the Getty Center stop; a hilltop tram carries you up from the parking structure.",
    hours: "Tuesday-Sunday 10:00 AM - 5:30 PM (Saturday until 8:00 PM); closed Monday.",
    ticket: "Free admission. Parking is $25 (lower after 3 PM / 4 PM and on Saturday evenings).",
    timeNeeded: "Half day (3 - 4 hours)",
    whatToDo: "World-class European paintings (Van Gogh's 'Irises', Rembrandt, Monet), the Richard Meier travertine architecture, and the Central Garden. Ride the automated tram up from the parking structure - it's part of the experience. The terraces have sweeping views from the ocean to downtown on clear days.",
    soloTip: "The Getty is one of the most solo-friendly outings in LA - free entry, no pressure, easy to wander at your own pace. Reserve parking online in advance for weekends. Pack a light layer; the hilltop is breezier than the basin.",
    bestTime: "Weekday mornings, or Saturday evening (open till 8 PM) for sunset over the city from the terraces.",
  },
  {
    id: "santa-monica-pier",
    name: "Santa Monica Pier",
    neighborhood: "Santa Monica",
    address: "200 Santa Monica Pier, Santa Monica, CA 90401",
    subway: "Metro E (Expo) Line to Downtown Santa Monica, then a ~10-15 minute walk toward the ocean.",
    hours: "Pier open 24/7. Pacific Park rides typically run 11:00 AM - 9:00 PM (later in summer, reduced in winter).",
    ticket: "Free to walk the pier. Pacific Park rides ~$6-$12 each, or an unlimited wristband ~$40+. Aquarium under the pier is donation-suggested.",
    timeNeeded: "1.5 - 2.5 hours",
    whatToDo: "Walk out to the end past the solar-powered Ferris wheel, ride the historic carousel, see the 'End of Route 66' sign, and watch the surfers and street performers. The beach path connects south toward Venice. Sunset from the pier railing is the classic LA postcard.",
    soloTip: "Weekday mornings are calm and great for photos; weekends and summer evenings get packed. The Metro E Line drops you a flat walk away, so you can skip the brutal beach parking entirely - the best move for a solo visitor.",
    bestTime: "Weekday morning for quiet, or any day at sunset for the lights and the ocean.",
  },
  {
    id: "venice-beach-boardwalk",
    name: "Venice Beach Boardwalk",
    neighborhood: "Venice",
    address: "Ocean Front Walk, Venice, CA 90291",
    subway: "Metro E (Expo) to Downtown Santa Monica then Metro bus 1, or rideshare directly to Windward Ave.",
    hours: "Boardwalk open 24/7; vendors and Muscle Beach gym most active 9:00 AM - sunset.",
    ticket: "Free.",
    timeNeeded: "1.5 - 2 hours",
    whatToDo: "Stroll the 2.5-mile oceanfront walk past skaters at the Venice Skatepark, the outdoor Muscle Beach gym, artists, and vendors. Detour one block inland to the Venice Canals (quiet, residential, free) and to Abbot Kinney Blvd for shops and cafes. The basketball courts and graffiti walls are local landmarks.",
    soloTip: "Daytime is lively and fine solo; the boardwalk thins out and gets sketchier after dark, so wrap up by sunset. Keep valuables minimal. Start at the quieter north end near the canals and walk south into the action.",
    bestTime: "Weekend daytime for the full carnival atmosphere; weekday mornings for a mellow walk.",
  },
  {
    id: "broad-lacma",
    name: "The Broad & LACMA (Museum Row)",
    neighborhood: "Downtown LA (The Broad) / Miracle Mile (LACMA)",
    address: "The Broad: 221 S Grand Ave, Los Angeles, CA 90012; LACMA: 5905 Wilshire Blvd, Los Angeles, CA 90036",
    subway: "The Broad: Metro B/D Line to Civic Center/Grand Park. LACMA: Metro to Wilshire/Western, then bus along Wilshire (Metro D Line extension toward the area is in progress).",
    hours: "The Broad: Tuesday-Sunday 11:00 AM - 5:00 PM (closed Monday). LACMA: Monday/Tuesday/Thursday 11:00 AM - 6:00 PM, Friday 11:00 AM - 8:00 PM, weekends 10:00 AM - 7:00 PM; closed Wednesday.",
    ticket: "The Broad: free general admission (reserve a timed slot online; Yayoi Kusama Infinity Mirror Rooms are a separate timed ticket). LACMA: ~$28 adults; LA County residents free after 3 PM on weekdays.",
    timeNeeded: "2 - 3 hours per museum",
    whatToDo: "The Broad holds contemporary heavyweights (Koons, Basquiat, Warhol) and the famous Infinity Mirror Rooms - book those the moment slots open. LACMA's 'Urban Light' lamppost installation out front is free and photographed day and night; inside spans antiquity to modern. Walt Disney Concert Hall (Gehry's stainless-steel sails) is right by The Broad.",
    soloTip: "Both are ideal solo activities - free or low-cost, self-paced, no awkwardness. Reserve The Broad's free timed entry in advance; walk-up availability is unreliable. Pair The Broad with a stroll past Disney Concert Hall and Grand Central Market for lunch.",
    bestTime: "Weekday mornings for The Broad; LACMA on a weekday after 3 PM if you qualify for the LA County resident free entry.",
  },
  {
    id: "rodeo-drive",
    name: "Rodeo Drive & Beverly Hills",
    neighborhood: "Beverly Hills",
    address: "Rodeo Dr, Beverly Hills, CA 90210",
    subway: "Metro E (Expo) toward the Westside then bus, or rideshare; the Metro D Line extension toward Beverly Hills is opening in phases.",
    hours: "Street open 24/7; boutiques typically 10:00 AM - 6:00 PM.",
    ticket: "Free to walk and window-shop.",
    timeNeeded: "1 - 1.5 hours",
    whatToDo: "Window-shop the luxury flagships, photograph the curving cobblestone Two Rodeo lane, and find the Beverly Hills sign at the Beverly Gardens Park lily pond on Santa Monica Blvd. Greystone Mansion (a free public park about two miles north) offers gardens and city views. The Wallis Annenberg Center hosts free public events.",
    soloTip: "This is a low-cost stop if you treat it as a walk rather than a shopping spree. Combine it with the gardens at Beverly Gardens Park for the classic sign photo, then head to a cafe off the main drag where prices are saner.",
    bestTime: "Weekday late morning for window light and fewer crowds.",
  },
  {
    id: "union-station-olvera",
    name: "Union Station & Olvera Street",
    neighborhood: "Downtown LA",
    address: "800 N Alameda St, Los Angeles, CA 90012",
    subway: "Metro B/D Line and the LA Metro / Metrolink / Amtrak hub - Union Station is itself the transit center.",
    hours: "Union Station open daily ~4:00 AM - 1:00 AM. Olvera Street shops roughly 10:00 AM - 7:00 PM.",
    ticket: "Free to visit both.",
    timeNeeded: "1 - 1.5 hours",
    whatToDo: "Union Station is a 1939 Mission Revival / Art Deco landmark - tiled floors, leather seats, and the historic waiting room are worth seeing even if you aren't catching a train. Across Alameda St, Olvera Street is the city's oldest block: a Mexican marketplace with food stalls, crafts, and the Avila Adobe (LA's oldest standing house, free).",
    soloTip: "This is the easiest car-free landmark in LA because every Metro line converges here. Grab taquitos on Olvera Street, then use Union Station as your launch point for the rest of downtown (The Broad, Grand Central Market, Little Tokyo are all a short ride or walk).",
    bestTime: "Weekday midday; Olvera Street is liveliest around lunch.",
  },
];

export default function LALandmarkClient() {

  // ---- JSON-LD schemas ----
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Los Angeles Landmarks Solo Travel Guide",
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
        "name": "What LA landmarks are most worth visiting on a first trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a first Los Angeles trip, prioritize: Griffith Observatory (free, best city view), the Getty Center (free art on a hilltop), Santa Monica Pier and Venice Beach for the coast, the Hollywood Walk of Fame and TCL Chinese Theatre, and a view of the Hollywood Sign from Griffith or Lake Hollywood Park. The Broad and Union Station round out a strong 3-4 day itinerary."
        },
      },
      {
        "@type": "Question",
        "name": "Can you walk up to the Hollywood Sign?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The Hollywood Sign is fenced off and monitored, and you cannot legally reach the letters on foot. The best views are from Griffith Observatory (free), Lake Hollywood Park, or the Mt. Lee trails for the closest legal vantage. Skip the overpriced 'Hollywood Sign tour' vans - the free viewpoints are better."
        },
      },
      {
        "@type": "Question",
        "name": "Are any LA landmarks free to visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - many of LA's best are free: Griffith Observatory (free admission), the Getty Center (free, pay only for parking), the Broad (free general admission with a timed reservation), the Hollywood Walk of Fame, Santa Monica Pier and Venice Beach boardwalks, Union Station and Olvera Street, and LACMA's 'Urban Light' installation out front. You can have an excellent LA day for the cost of parking or a Metro fare."
        },
      },
      {
        "@type": "Question",
        "name": "Do I need a car to see LA landmarks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not entirely. The Metro E (Expo) Line reaches Santa Monica, the B (Red) Line reaches Hollywood, and Union Station ties downtown landmarks (The Broad, Grand Central Market, Olvera Street) together. Griffith Observatory and the Getty need a bus-plus-walk or rideshare for the final hill. A car helps for the Westside and beaches, but a transit-plus-rideshare mix covers most landmarks."
        },
      },
      {
        "@type": "Question",
        "name": "How much time do LA landmarks take to visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Plan a half day for big museums (the Getty, LACMA) and 2-3 hours for Griffith Observatory. Beach landmarks (Santa Monica Pier, Venice) take 1.5-2.5 hours each. LA traffic is the real time cost - cluster landmarks by region (Hollywood/Griffith, the Westside/beaches, downtown) rather than crisscrossing the city in one day."
        },
      },
      {
        "@type": "Question",
        "name": "Which LA landmark is best for solo travelers specifically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Griffith Observatory in the evening - free entry, easy and safe to do alone, public telescopes on clear nights, and the best city-lights view in LA. The Getty Center is the runner-up: free, self-paced, and ideal for a solo museum afternoon with no pace negotiation and easy solo dining at the cafe."
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
      { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la/" },
      { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/la/landmark" },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LA Landmarks Guide: Top Must-See Sights with Hours, Prices & Tips",
    "description": "Practical guide to Los Angeles\'s top landmarks — Griffith Observatory, the Getty Center, Hollywood Walk of Fame, Santa Monica Pier and more. Hours, prices, and how to get there.",
    "url": "https://www.travelsamericas.com/destination/la/landmark",
    "inLanguage": "en-US",
    "image": "https://www.travelsamericas.com/data/majorcities/losangeles/assets/losangeles.webp",
    "author": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    "publisher": {
      "@type": "Organization",
      "name": "Travels Americas",
      "logo": { "@type": "ImageObject", "url": "https://www.travelsamericas.com/logo.png" },
    },
    "datePublished": "2025-10-05",
    "dateModified": "2026-06-03",
  };

  const touristAttractions = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "LA Tourist Attractions",
    "itemListElement": LANDMARKS.map((l, i) => ({
      "@type": "TouristAttraction",
      "name": l.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": l.address,
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US",
      },
      "position": i + 1,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractions) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Header
        image="/data/majorcities/losangeles/assets/losangeles.webp"
        bannerText="Los Angeles Landmarks Guide"
      />
      <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=activities&from=landmark" label="See tickets" />

      <section className={styles.intro} style={{ textAlign: "center" }}>
        <h1 className={styles.sectionheading}>LA Landmarks: A Practical Solo Traveler Guide</h1>
        <p className={styles.introLead}>
          Real visitor information for the 9 Los Angeles landmarks first-time and solo
          travelers actually want. Each entry includes the address, how to get there by
          transit, current hours, approximate ticket price, time to allocate, and a
          solo-specific tip. Verify hours and ticket prices on the venue&apos;s own site
          before going &mdash; LA attractions change schedules seasonally.
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
                <dt>Getting there</dt>
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
          <h3>Classic First-Timer Route (1 day, car or rideshare)</h3>
          <ol>
            <li><strong>9:00 AM</strong> &mdash; Griffith Observatory (arrive early for parking and clear morning air)</li>
            <li><strong>11:30 AM</strong> &mdash; Hollywood Walk of Fame &amp; TCL Chinese Theatre forecourt</li>
            <li><strong>1:00 PM</strong> &mdash; Lunch off Hollywood Blvd</li>
            <li><strong>2:30 PM</strong> &mdash; The Getty Center (art + city views from the terraces)</li>
            <li><strong>6:00 PM</strong> &mdash; Sunset on the Santa Monica Pier</li>
            <li><strong>8:00 PM</strong> &mdash; Dinner in Santa Monica or Venice</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Slow-Paced Solo Route (1 day, low-energy)</h3>
          <ol>
            <li><strong>10:00 AM</strong> &mdash; The Getty Center (3 hours, take it gallery by gallery)</li>
            <li><strong>1:30 PM</strong> &mdash; Lunch at the Getty cafe or in Brentwood</li>
            <li><strong>3:00 PM</strong> &mdash; Walk the Venice Canals and Abbot Kinney Blvd</li>
            <li><strong>4:30 PM</strong> &mdash; Stroll the Venice boardwalk north to Santa Monica</li>
            <li><strong>6:30 PM</strong> &mdash; Sunset on the Santa Monica Pier</li>
            <li><strong>8:00 PM</strong> &mdash; Dinner on Main Street, Santa Monica</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Free Landmarks Day (1 day, $0 attractions + transit)</h3>
          <ol>
            <li><strong>9:00 AM</strong> &mdash; Griffith Observatory (free) and the Hollywood Sign view</li>
            <li><strong>11:30 AM</strong> &mdash; Metro to downtown; Union Station + Olvera Street (free)</li>
            <li><strong>1:00 PM</strong> &mdash; Cheap taquitos on Olvera Street</li>
            <li><strong>2:00 PM</strong> &mdash; The Broad (free general admission; reserve a timed slot)</li>
            <li><strong>3:30 PM</strong> &mdash; Walk past Walt Disney Concert Hall + Grand Park</li>
            <li><strong>4:30 PM</strong> &mdash; LACMA's free 'Urban Light' installation on Museum Row</li>
            <li><strong>6:30 PM</strong> &mdash; Venice Beach boardwalk before sunset (free)</li>
          </ol>
        </article>
      </section>

      <section className={styles.faqSection} id="landmarks-faq">
        <h2 className={styles.sectionheading}>Practical Questions</h2>

        <details className={styles.faqItem}>
          <summary>How far in advance should I book Getty parking or The Broad's timed entry?</summary>
          <p>
            The Getty Center: admission is free, but reserve parking online a few days
            ahead for weekends (weekdays are usually fine same-day). The Broad: free
            general admission requires a timed reservation that often books out 1-2 weeks
            in advance, especially weekends; the Yayoi Kusama Infinity Mirror Rooms are a
            separate, faster-selling ticket.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is a city pass (Go Los Angeles, CityPASS) worth it?</summary>
          <p>
            Only if you plan to use several paid attractions like Universal Studios, the
            Aquarium of the Pacific, Warner Bros. Studio Tour, or harbor cruises within a
            few days. Many of LA's marquee landmarks (Griffith Observatory, the Getty, The
            Broad, the beaches) are already free, so for a landmark-focused trip a pass
            often isn't worth it. Run the math against your actual planned itinerary.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Can I see most landmarks in 3 days?</summary>
          <p>
            Yes, if you cluster by region to beat traffic. Day 1 - Griffith Observatory +
            Hollywood Walk of Fame + Hollywood Sign view. Day 2 - the Getty + Santa Monica
            Pier + Venice Beach. Day 3 - downtown: The Broad + Walt Disney Concert Hall +
            Union Station + Olvera Street, with LACMA on Museum Row. That covers all 9
            landmarks in this guide.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>What time of year has the best landmark experience?</summary>
          <p>
            LA is a year-round destination, but spring (March-May) and fall
            (September-November) offer warm, clear days with thinner crowds. Summer brings
            heat inland and packed beaches; mornings often start under the coastal 'May
            Gray / June Gloom' marine layer that can hide the Hollywood Sign until midday.
            Winter is mild but the rainiest stretch.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is it safe to visit these landmarks alone?</summary>
          <p>
            Yes &mdash; every landmark in this guide is in a well-trafficked area during
            normal visiting hours. Hollywood Blvd and the Venice boardwalk are best done in
            daylight, and Griffith Park trails should be hiked before dark. For more on
            solo travel safety in LA, see our{" "}
            <Link href="/destination/la/safety-guide">LA safety guide</Link>{" "}
            and{" "}
            <Link href="/destination/la/la-female-solo-travel-guide">solo female travel guide</Link>.
          </p>
        </details>
      </section>

      <section className={styles.relatedLinks}>
        <h2 className={styles.sectionheading}>Plan the Rest of Your Trip</h2>
        <div className={styles.linkGrid}>
          <Link href="/destination/la/solo-trip-to-la" className={styles.relatedLink}>
            <h3>Solo Trip to LA Guide</h3>
            <p>Budget, where to stay, your first 24 hours, and what to avoid.</p>
          </Link>
          <Link href="/destination/la/best-areas-to-stay" className={styles.relatedLink}>
            <h3>Best Areas to Stay</h3>
            <p>Neighborhood comparison for solo travelers, with safety and transit scoring.</p>
          </Link>
          <Link href="/destination/la/food" className={styles.relatedLink}>
            <h3>Solo Dining in LA</h3>
            <p>Where solo travelers should actually eat, by neighborhood and meal.</p>
          </Link>
          <Link href="/destination/la/safety-guide" className={styles.relatedLink}>
            <h3>LA Safety Guide</h3>
            <p>Practical safety: neighborhoods, transit, scams, emergencies.</p>
          </Link>
        </div>
      </section>

      <BookingCTA variant="full" text="Get tickets to LA's top landmarks" href="/destination/la/bookings?tab=activities&from=landmark" label="See tickets" />
      <Footer />
    </>
  );
}
