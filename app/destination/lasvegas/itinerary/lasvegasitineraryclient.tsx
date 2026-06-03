// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
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
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.webp" bannerText="Las Vegas 3-Day Itinerary" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book flights, hotels and activity tickets for your Las Vegas trip →</span>
        <Link href="/destination/lasvegas/bookings" className={styles.slimCtaBtn}>Book your trip</Link>
      </div>
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
      <div className={styles.bookingStrip}>
        <h2>Book your Las Vegas trip</h2>
        <p>Cheap flights to LAS, Strip hotels, and skip-the-line tickets — all in one place.</p>
        <Link href="/destination/lasvegas/bookings" className={styles.bookingBtn}>Compare flights, hotels & tickets</Link>
      </div>
      <Footer />
    </main>
  );
}
