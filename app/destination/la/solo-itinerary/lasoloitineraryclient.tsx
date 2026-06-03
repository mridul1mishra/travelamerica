import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "Griffith, Los Feliz & Silver Lake", items: [
    "Morning: Griffith Observatory. The hike up from the Greek Theatre parking area is 30 min — good way to start the trip and earn the view. Free entry. Arrive before 10am to beat tour groups.",
    "Afternoon: Walk down to Los Feliz Village. Coffee at Courage Bagels or Sqirl. Browse the independent shops on Vermont Ave. This is one of the most pleasant walking streets in LA for solo travelers.",
    "Evening: Dinner in Silver Lake. Try Bar Moruno on Sunset Blvd for wine and small plates, or Alimento for Italian. Both are solo-friendly at the bar. The Silver Lake Reservoir is a 30-min walk at dusk.",
    "Solo tip: The observatory and Los Feliz are both safe areas well-suited to solo walking — rare in LA. Plan this day first to ease into the city.",
  ]},
  { day: "Day 2", title: "Venice Beach & Santa Monica", items: [
    "Morning: Rent a bike in Santa Monica ($15–$25/hr) and cycle south to Venice Beach on the coastal path. The ride is flat and the ocean is on your right the whole way.",
    "Midday: Venice Boardwalk, then inland to Abbot Kinney Blvd for lunch. Gjusta bakery is excellent for solo dining at the counter. Esters Wine Shop is good for a mid-day glass.",
    "Afternoon: Back to Santa Monica. Third Street Promenade is pleasant in the afternoon. The Annenberg Community Beach House (free, public access) is a hidden gem for a quiet swim.",
    "Evening: Sunset from the Santa Monica Pier. Solo travelers eat well at the bar at Rustic Canyon (American, mid-range) or the counter at Bay Cities Italian Deli if you want something casual and cheap.",
  ]},
  { day: "Day 3", title: "The Getty & Downtown Arts District", items: [
    "Morning: The Getty Center. Free admission, $20 parking. Arrive at opening (10am) for the best light in the galleries and no queues. The garden terrace alone is worth the trip. Allow 2–3 hours.",
    "Midday: Drive to DTLA. Grand Central Market for lunch — eat at the bar of any stall. Perla is good for solo dining. Walk to The Broad after (book in advance, $18).",
    "Afternoon: Arts District walk. Start at Hauser & Wirth gallery (free). Continue east past the murals on Mateo St. Endorffeine coffee is a solo-traveler favourite in the district.",
    "Solo tip: DTLA is very safe in the Arts District and near Grand Ave. Stick to these corridors and avoid walking more than 3 blocks east of Main St after dark.",
  ]},
];

export default function LASoloItineraryClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>Solo Trip to Los Angeles: 3-Day Itinerary</h1>
        <p>LA is an excellent solo destination once you understand its geography. This itinerary prioritizes walkable areas, solo-friendly dining, and the sights that reward individual pacing over group logistics.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=activities" className={styles.primaryCta}>Book solo activities</Link>
          <Link href="/destination/la/safety-guide" className={styles.secondaryCta}>LA safety guide</Link>
        </div>
      </section>
      <BookingCTA
        variant="slim"
        text="Book solo travel activities and skip-the-line tickets →"
        href="/destination/la/bookings?tab=activities"
        label="Book activities"
      />
      {days.map(({ day, title, items }) => (
        <section key={day} aria-labelledby={`day-la-solo-${day}`}>
          <h2 id={`day-la-solo-${day}`}>{day}: {title}</h2>
          <div className={styles.grid}>
            {items.map((item, i) => (
              <article key={i} className={styles.card}>
                <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{item}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
      <BookingCTA
        variant="full"
        headline="Book your solo LA trip"
        text="Flights, solo-friendly hotels, and activity tickets for Los Angeles."
        href="/destination/la/bookings"
        label="Plan & book your trip"
      />
      <Footer />
    </main>
  );
}
