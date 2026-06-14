import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "The Strip & Bellagio Fountains", items: [
    "Morning: Check in, walk the Strip from your hotel south to Mandalay Bay (or north to the Stratosphere). Budget 3 hours.",
    "Afternoon: Free hotel lobbies — Bellagio conservatory, Venetian canals, Caesar's Forum. All free and worth 1–2 hours.",
    "Evening: Bellagio Fountains at night (free, every 15 min). Dinner on the Strip — Gordon Ramsay, Nobu, or Eiffel Tower restaurant if budget allows.",
    "Night: Book a show in advance. Cirque du Soleil O is the best; residency concerts sell out weeks ahead.",
  ]},
  { day: "Day 2", title: "Hoover Dam Day Trip", items: [
    "Morning: Leave by 8am to beat the heat. Hoover Dam is 30 min from the Strip via US-93.",
    "Midday: Self-guided tour of the dam ($10) or guided powerplant tour ($30). Lake Mead viewpoint is worth 20 min.",
    "Afternoon: Stop at Boulder City on the way back — a rare dry town in Nevada with good local lunch spots.",
    "Evening: Fremont Street Experience. Free light show starts at dusk. SlotZilla zipline if you want the rush ($35–$60).",
  ]},
  { day: "Day 3", title: "Museums & Red Rock Canyon", items: [
    "Morning: The Mob Museum in Downtown (allow 2–3 hrs). Get there at opening to beat tour groups.",
    "Midday: Red Rock Canyon Scenic Drive (30 min from the Strip, $15 vehicle entry). 13-mile loop with pull-offs for photos.",
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
        href="/destination/lasvegas/bookings"
        label="Book your trip"
      />
      <section className={styles.hero}>
        <h1>Las Vegas 3-Day Itinerary</h1>
        <p>A practical day-by-day plan covering the Strip, a Hoover Dam day trip, Fremont Street, and the best museums. Built around real logistics — not an aspirational list of everything Vegas has to offer.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.primaryCta}>Book tickets & tours</Link>
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
        ].map(({ q, a }) => (
          <details key={q} style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
            <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem' }}>{q}</summary>
            <p style={{ marginTop: '8px', color: '#444', fontSize: '0.9rem', lineHeight: 1.6 }}>{a}</p>
          </details>
        ))}
      </section>
      <BookingCTA
        variant="full"
        headline="Book your Las Vegas trip"
        text="Cheap flights to LAS, Strip hotels, and skip-the-line tickets — all in one place."
        href="/destination/lasvegas/bookings"
        label="Compare flights, hotels & tickets"
      />
      <Footer />
    </main>
  );
}
