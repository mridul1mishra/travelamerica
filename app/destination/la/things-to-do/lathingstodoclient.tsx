import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const categories = [
  { title: "Hollywood & Entertainment", blurb: "Walk the Hollywood Walk of Fame (free), tour Paramount Studios ($75+), visit the TCL Chinese Theatre. Griffith Observatory is free and has the best panoramic view of the city and the Hollywood Sign. Allow a half-day for the hill.", href: "/destination/la/bookings?tab=activities" },
  { title: "Beaches", blurb: "Santa Monica Pier is the classic — free entry, paid rides and aquarium. Venice Beach Boardwalk has street performers and the famous muscle beach (free, any time). Malibu beaches require a car but offer seclusion. Best swimming: Manhattan Beach.", href: "/destination/la/bookings?tab=activities" },
  { title: "Museums & Culture", blurb: "The Getty Center (free admission, pay for parking) is world-class — allow 3 hours. LACMA has rotating major exhibitions ($25). The Broad in DTLA ($18, book ahead). The Natural History Museum and La Brea Tar Pits are in the same Exposition Park cluster.", href: "/destination/la/bookings?tab=activities" },
  { title: "Food & Markets", blurb: "Grand Central Market in Downtown is the best food hall in the city — open daily, $10–$20 per person. Smorgasburg LA runs Sunday mornings in DTLA. Farmers markets at Hollywood (Sunday) and Santa Monica (Wednesday & Saturday) are excellent for grazing.", href: "/destination/la/food" },
  { title: "Day Trips", blurb: "Santa Barbara is 1.5 hrs north — wine country, Spanish architecture, harbor. Joshua Tree National Park is 2.5 hrs — otherworldly rock formations and star gazing. Disneyland is 45 min from DTLA. Malibu canyon drives are scenic and free.", href: "/destination/la/bookings?tab=activities" },
  { title: "Outdoor Activities", blurb: "Runyon Canyon (free, 30-min hike with city views). Topanga State Park for serious hiking without crowds. Kayaking at Marina del Rey ($20–$30/hr). Cycling the Marvin Braude coastal trail from Santa Monica to Malibu — 22 miles, flat, spectacular.", href: "/destination/la/bookings?tab=activities" },
];

export default function LAThingsToDoClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>Things to Do in Los Angeles</h1>
        <p>LA rewards the prepared traveler. This guide covers what to prioritize across six categories — from free beach days and hilltop hikes to world-class museums — with realistic time estimates and the tips that actually matter.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=activities" className={styles.primaryCta}>Book tickets & tours</Link>
          <Link href="/destination/la/itinerary" className={styles.secondaryCta}>See 3-day itinerary</Link>
        </div>
      </section>
      <BookingCTA
        variant="slim"
        text="Book skip-the-line tickets, tours and activity passes →"
        href="/destination/la/bookings?tab=activities"
        label="See tickets & tours"
      />
      <section aria-labelledby="categories-la">
        <h2 id="categories-la">What to Do in Los Angeles</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>Six categories that cover the full range of what LA offers — prioritize by what matters most to you.</p>
        <div className={styles.grid}>
          {categories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>
      <BookingCTA
        variant="full"
        headline="Ready to book Los Angeles activities?"
        text="Skip-the-line tickets, guided tours, and activity passes — compare prices and book in advance."
        href="/destination/la/bookings?tab=activities"
        label="Browse activities"
      />
      <Footer />
    </main>
  );
}
