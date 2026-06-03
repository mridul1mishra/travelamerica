import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const landmarks = [
  { title: "Hollywood Sign", blurb: "You cannot walk up to the sign itself — it is fenced off. The best views are from Griffith Observatory (free) or the Lake Hollywood Reservoir trail (free, 3.3-mile loop, popular early mornings). Drone photos require permits. Avoid the overpriced 'Hollywood Sign Tour' vans.", cost: "Free to view" },
  { title: "Griffith Observatory", blurb: "Free admission and LA's best panoramic view — the entire city basin from the ocean to downtown, with the Hollywood Sign behind you. Samuel Oschin Planetarium shows cost $7. Arrive before 10am or after 4pm to avoid crowds. Parking is limited — Uber or hike up from Los Feliz Blvd.", cost: "Free (parking $10, shows $7)" },
  { title: "Santa Monica Pier", blurb: "The classic end-of-Route-66 photo opportunity. Pacific Park amusement rides cost $6–$12 each. The Aquarium of the Pacific is $8 for kids. Best times: weekday mornings for low crowds, or sunset any day. The solar-powered Ferris wheel is the Instagram landmark.", cost: "Free entry (rides extra)" },
  { title: "The Getty Center", blurb: "World-class art collection — Monet, Rembrandt, Van Gogh — all free admission. The building and garden terraces are worth the visit alone. $20 parking but the tram ride up is part of the experience. Book timed parking in advance online.", cost: "Free (parking $20)" },
  { title: "Venice Beach Boardwalk", blurb: "A 2.5-mile oceanfront walk lined with street performers, skaters, vendors, and muscle beach gym. At its best on weekends. Best entry point is the north end near the canals for a quieter approach. Abbot Kinney Blvd is one block east and worth the detour for shops and food.", cost: "Free" },
  { title: "Rodeo Drive & Beverly Hills", blurb: "The luxury shopping street is free to walk and window-shop. Greystone Mansion (free, open to the public as a park) is two miles north and offers views over the city. The Beverly Hills sign at Canon Drive is the tourist photo. The Wallis Annenberg Center hosts free public events.", cost: "Free to walk" },
];

export default function LALandmarkClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>Los Angeles Landmarks</h1>
        <p>LA's most iconic sights — the Hollywood Sign, Griffith Observatory, the Getty, Santa Monica Pier, and more. What to expect at each, the honest cost breakdown, and how to avoid the tourist traps.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=activities" className={styles.primaryCta}>Book landmark tours</Link>
          <Link href="/destination/la/itinerary" className={styles.secondaryCta}>See 3-day itinerary</Link>
        </div>
      </section>
      <BookingCTA
        variant="slim"
        text="Book skip-the-line tickets and guided landmark tours →"
        href="/destination/la/bookings?tab=activities"
        label="Browse tours"
      />
      <section aria-labelledby="landmarks-la">
        <h2 id="landmarks-la">LA&apos;s Most Iconic Landmarks</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>Six landmarks every first-time visitor should know about — with the honest details.</p>
        <div className={styles.grid}>
          {landmarks.map(({ title, blurb, cost }) => (
            <article key={title} className={styles.card}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: "0 0 0.5rem" }}>{blurb}</p>
              <p style={{ color: "#555", fontSize: "0.85rem", margin: 0 }}>{cost}</p>
            </article>
          ))}
        </div>
      </section>
      <BookingCTA
        variant="full"
        headline="Book Los Angeles tours and experiences"
        text="Skip-the-line tickets and guided tours for LA&apos;s top sights."
        href="/destination/la/bookings?tab=activities"
        label="Browse LA activities"
      />
      <Footer />
    </main>
  );
}
