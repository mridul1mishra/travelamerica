import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "Hollywood & Griffith Observatory", items: [
    "Morning: Hollywood Walk of Fame (free). TCL Chinese Theatre — free to view the footprints outside. Grab breakfast at one of the cafes on Hollywood Blvd.",
    "Midday: Drive up to Griffith Observatory (free entry, $10 parking). Best panoramic view of the Hollywood Sign and the entire LA basin. Allow 2 hours.",
    "Afternoon: Head to Los Feliz for lunch — Sqirl, Cafe Zinc, or any spot on Vermont Ave. Walk Barnsdall Art Park for an elevated garden view of the city.",
    "Evening: Sunset on the Hollywood Hills via Mulholland Drive. Dinner in West Hollywood — Sunset Strip has dozens of options from $20 tacos to $100 tasting menus.",
  ]},
  { day: "Day 2", title: "Santa Monica, Venice Beach & the Coast", items: [
    "Morning: Santa Monica Pier (free). Bike rental from one of the shops along Ocean Ave — $15–$25/hr. Cycle south toward Venice Beach on the flat coastal path.",
    "Midday: Venice Beach Boardwalk. Street performers, muscle beach, and the eclectic boardwalk market. Lunch at one of the beachside spots — Abbot Kinney Blvd is one block east and worth the detour.",
    "Afternoon: Continue cycling to Manhattan Beach or turn back. The coastal route is 22 miles total — go as far as you like. Sunset from the Santa Monica Pier is spectacular.",
    "Evening: Dinner in Santa Monica. Third Street Promenade is the tourist strip — go one block east to 2nd or 4th Street for better options with fewer crowds.",
  ]},
  { day: "Day 3", title: "The Getty & Downtown LA", items: [
    "Morning: The Getty Center (free admission, $20 parking — arrive by 10am before it fills). Allow 2–3 hours for the collection and the garden terrace views over the city.",
    "Midday: Drive to Downtown LA. Grand Central Market for lunch ($10–$15). Walk to The Broad (book ahead, $18) or MOCA if contemporary art is your interest.",
    "Afternoon: Arts District walk — Hauser & Wirth gallery (free), street murals, specialty coffee. Angel's Flight funicular ($1 per ride) from Hill St up to Bunker Hill.",
    "Evening: Last dinner in DTLA — Bestia in the Arts District is excellent if you book ahead. Or Tacos 1986 for $5 tacos and a line worth waiting in.",
  ]},
];

export default function LAItineraryClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>Los Angeles 3-Day Itinerary</h1>
        <p>A practical day-by-day plan covering Hollywood, Griffith Observatory, Venice Beach, the Getty, and Downtown LA. Built around real travel logistics — driving times, parking costs, and what actually fits in a day.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=activities" className={styles.primaryCta}>Book tickets & tours</Link>
          <Link href="/destination/la/best-areas-to-stay" className={styles.secondaryCta}>Where to stay</Link>
        </div>
      </section>
      <BookingCTA
        variant="slim"
        text="Book flights, hotels and activity tickets for your LA trip →"
        href="/destination/la/bookings"
        label="Book your trip"
      />
      {days.map(({ day, title, items }) => (
        <section key={day} aria-labelledby={`day-la-${day}`}>
          <h2 id={`day-la-${day}`}>{day}: {title}</h2>
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
        headline="Book your Los Angeles trip"
        text="Cheap flights to LAX, LA hotels, and skip-the-line tickets — all in one place."
        href="/destination/la/bookings"
        label="Compare flights, hotels & tickets"
      />
      <Footer />
    </main>
  );
}
