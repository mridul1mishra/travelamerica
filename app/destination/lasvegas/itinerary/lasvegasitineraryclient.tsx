import Byline from "@/app/components/Byline/Byline";
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "The Strip & Bellagio Fountains", items: [
    "Morning: Check in, walk the Strip from your hotel south to Mandalay Bay (or north to the Stratosphere). Budget 3 hours.",
    "Afternoon: Free hotel lobbies — Bellagio conservatory, Venetian canals, Caesar's Forum. All free and worth 1–2 hours.",
    "Evening: The Bellagio fountains run free to watch through the evening; check the resort for the current schedule. Dinner on the Strip — Gordon Ramsay, Nobu, or Eiffel Tower restaurant if budget allows.",
    "Night: Book a show in advance. Cirque du Soleil O is the best; residency concerts sell out weeks ahead.",
  ]},
  { day: "Day 2", title: "Hoover Dam Day Trip", items: [
    "Morning: Leave by 8am to beat the heat. Hoover Dam is 30 miles southeast of Las Vegas via US-93; allow longer than the distance suggests at busy times.",
    "Midday: Tour the dam. Self-guided and guided powerplant tours are sold at the visitor centre at different prices, and guided tours can sell out, so check the Bureau of Reclamation site for current times and costs. The Lake Mead viewpoint is worth 20 min.",
    "Afternoon: Stop at Boulder City on the way back — a rare dry town in Nevada with good local lunch spots.",
    "Evening: Fremont Street Experience. Free light show starts at dusk. SlotZilla zipline if you want the rush ($35–$60).",
  ]},
  { day: "Day 3", title: "Museums & Red Rock Canyon", items: [
    "Morning: The Mob Museum in Downtown (allow 2–3 hrs). Get there at opening to beat tour groups.",
    "Midday: Red Rock Canyon Scenic Drive, 17 miles west of the Strip on Charleston Boulevard. Entry is $20 per vehicle, and from 1 October to 31 May a timed-entry reservation is required to enter between 8am and 5pm \u2014 book it before you set off. The 13-mile loop has pull-offs for photos.",
    "Afternoon: High Roller Observation Wheel (book sunset slot, $30–$40). Best views over the entire valley.",
    "Evening: AREA15 or a comedy club for the final night. Pack your bags ready for morning checkout.",
  ]},
];

export default function LasVegasItineraryClient() {
  return (
    <main>
      <Header links={[
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
        { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA
        variant="slim"
        text="Book flights, hotels and activity tickets for your Las Vegas trip →"
        href="/destination/lasvegas/hotel"
        label="Book your trip"
      />
      <section className={styles.hero}>
        <h1>Las Vegas 3-Day Itinerary</h1>
        <Byline updated="November 2026" />
        <p>A practical day-by-day plan covering the Strip, a Hoover Dam day trip, Fremont Street, and the best museums. Built around real logistics — not an aspirational list of everything Vegas has to offer.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/tours-and-tickets" className={styles.primaryCta}>Book tickets & tours</Link>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.secondaryCta}>Where to stay</Link>
        </div>
      </section>
      {days.map(({ day, title, items }) => (
        <section key={day} className={styles.section} aria-labelledby={`day-lv-${day}`}>
          <h2 id={`day-lv-${day}`} className={styles.sectionTitle}>{day}: {title}</h2>
          <div className={styles.grid}>
            {items.map((item, i) => (
              <article key={i} className={styles.card}>
                <p className={styles.cardBody}>{item}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section aria-labelledby="lv-itinerary-faq" style={{ maxWidth: '800px', margin: '48px auto', padding: '0 16px' }}>
        <h2 id="lv-itinerary-faq" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px' }}>Las Vegas Itinerary — Frequently Asked Questions</h2>
        {[
          { q: "Is 3 days enough for Las Vegas?", a: "Three days is the sweet spot for Las Vegas — enough to cover the Strip, a day trip, and Fremont Street without overdoing it. Vegas gets repetitive after 4–5 days for most visitors." },
          { q: "How much does this 3-day Las Vegas trip cost?", a: "Budget: $180–250/day (off-Strip hotel $70–90/night, $30 gambling budget, cheap eats). Mid-range: $300–450/day (mid-Strip hotel $180–250/night, one show $80–120, moderate dining). Add resort fees ($35–55/night) to whatever room rate you see — they're mandatory at most Strip hotels." },
          { q: "What is the Hoover Dam like as a day trip?", a: "30 minutes from the Strip via US-93. Self-guided exterior viewing is free. The dam tour is $10, the powerplant tour is $30 and worth it for the engineering. Go early (before 10am) to beat the heat in summer. Combine with Boulder City lunch on the return." },
          { q: "Is Las Vegas safe to visit alone?", a: "Yes — the Strip and Fremont Street are among the most surveilled public spaces in America. Stay on the main corridors, use rideshare after midnight, and set a firm gambling budget before you arrive. The specific risks are drink tampering in clubs and unlicensed taxis outside venues." },
        ].map(({ q, a }, index) => (
          <details key={q} open={index === 0} style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
            <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem' }}>{q}</summary>
            <p style={{ marginTop: '8px', color: '#444', fontSize: '0.9rem', lineHeight: 1.6 }}>{a}</p>
          </details>
        ))}
      </section>
      <section className={styles.section} aria-labelledby="lv-logistics">
        <h2 id="lv-logistics" className={styles.sectionTitle}>Getting between the stops</h2>
        <p className={styles.sectionIntro}>The Strip is longer than it looks from a map, and walking it end to end takes most of a morning. These are the current options, with fares from the operators themselves.</p>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>The Monorail</h3>
            <p className={styles.cardBody}>Runs 3.9 miles along the east side of the Strip from MGM Grand to SAHARA, with seven stations. End to end takes about 15 minutes and trains come every 4 to 8 minutes. It runs 7am to midnight on Mondays, 7am to 2am Tuesday to Thursday, and 7am to 3am Friday to Sunday. Buying online is cheaper than buying at the station: a single ride is $5.75 online against $6.25 on paper, and a 24-hour pass is $13.95 against $15.50. Worth knowing that the stations sit at the back of the resorts, so the walk from the platform to the Boulevard can be long.</p>
            <p className={styles.cardMeta}>Source: Las Vegas Monorail</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>The Deuce bus</h3>
            <p className={styles.cardBody}>The double-decker Deuce runs 24 hours a day along Las Vegas Boulevard between the South Strip Transit Terminal and the Fremont Street Experience downtown, stopping at the Bonneville Transit Center on the way. Buses come roughly every 10 to 15 minutes from 7am to 1am, and about every 20 minutes overnight. It is the simplest way to reach downtown without a car, and unlike the Monorail it stops on the Boulevard itself.</p>
            <p className={styles.cardMeta}>Source: RTC Southern Nevada route timetable</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>What RTC fares cost</h3>
            <p className={styles.cardBody}>Strip and All Access fares are $4 for a single ride, $6 for two hours, $8 for 24 hours and $20 for three days. Residential routes away from the Strip are cheaper at $2 single and $5 for 24 hours, but the Deuce is a Strip route, so budget for the higher fare. For two or more trips in a day the 24-hour pass pays for itself.</p>
            <p className={styles.cardMeta}>Source: RTC Southern Nevada, fares and passes</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Red Rock Canyon needs planning</h3>
            <p className={styles.cardBody}>The Scenic Drive is 17 miles west of the Strip on Charleston Boulevard. From 1 October to 31 May you need a timed-entry reservation to enter between 8am and 5pm, booked through Recreation.gov or by phone. Entry is $20 per private vehicle, $10 per motorcycle, $8 per bicycle and $5 on foot. From November to February the Scenic Drive itself is open 6am to 5pm, so a late-afternoon visit does not work in winter. There is no public transport, so this is a car or tour day.</p>
            <p className={styles.cardMeta}>Source: Bureau of Land Management</p>
          </article>
        </div>
        <p className={styles.sectionIntro}>Fares and seasonal hours change, and the Monorail closes early on some event days. Check the operator before you build a tight connection around any of these.</p>
      </section>
      <BookingCTA
        variant="full"
        headline="Book your Las Vegas trip"
        text="Cheap flights to LAS, Strip hotels, and skip-the-line tickets — all in one place."
        href="/destination/lasvegas/hotel"
        label="Compare flights, hotels & tickets"
      />
      <Footer />
    </main>
  );
}
