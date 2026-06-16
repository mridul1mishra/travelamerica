import Link from "next/link";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const categories = [
  { title: "Walt Disney World (4 Parks)", blurb: "Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom. Plan 1 day per park minimum. Buy tickets weeks ahead â€” gate prices are highest. Park Hopper add-on worthwhile for 5+ day visits. Arrive at rope drop to beat 2-hour ride queues by noon.", href: "/destination/orlando/bookings?tab=activities" },
  { title: "Universal Orlando Resort", blurb: "Universal Studios + Islands of Adventure. Wizarding World of Harry Potter spans both parks â€” you need both for the full experience. Early Park Admission (1 hr before general opening) comes with on-site Loews hotels. Lightning Lane equivalent is Express Pass â€” expensive but effective.", href: "/destination/orlando/bookings?tab=activities" },
  { title: "Kennedy Space Center", blurb: "45 min east of Orlando. Real rockets, Apollo-era artifacts, and Astronaut Encounter presentations. Allow a full day. Schedule around launch viewing if possible â€” check NASA's launch calendar. IMAX films are included with admission ($75 adult).", href: "/destination/orlando/bookings?tab=activities" },
  { title: "Water Parks", blurb: "Disney's Typhoon Lagoon and Blizzard Beach, Universal's Volcano Bay, SeaWorld's Aquatica. Best in summer â€” arrive before 10am to get tubes/chairs. Weekday mornings have shortest lines. All are included in relevant park passes.", href: "/destination/orlando/bookings?tab=activities" },
  { title: "Natural Springs & Outdoors", blurb: "Florida's springs are a hidden gem. Wekiva Springs (40 min), Blue Spring State Park (1 hr, manatee season Novâ€“Mar), Silver Springs (1.5 hr). Crystal clear 72Â°F water year-round. Kayak and snorkel rentals on-site.", href: "/destination/orlando/bookings?tab=activities" },
  { title: "Day Trips", blurb: "St. Pete Beach (90 min â€” consistently rated top US beach). Tampa (90 min â€” Busch Gardens, Aquarium, Ybor City). Canaveral National Seashore (1 hr â€” remote beach near the space center). Miami (3.5 hr) for a longer overnight.", href: "/destination/orlando/bookings?tab=activities" },
];

export default function OrlandoThingsToDoClient() {
  return (
    <main>
      <Header links={[
        { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
        { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
        { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA
        variant="slim"
        text="Book theme park tickets, Kennedy Space Center and activity tours â†’"
        href="/destination/orlando/bookings?tab=activities"
        label="See tickets & tours"
      />
      <section className={styles.hero}>
        <h1>Things to Do in Orlando</h1>
        <p>Orlando is the most-visited city in the US for good reason â€” but what you do depends entirely on what kind of trip you want. This guide covers the six categories that shape most Orlando visits, with practical logistics for each.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/bookings?tab=activities" className={styles.primaryCta}>Book tickets & tours</Link>
          <Link href="/destination/orlando/itinerary" className={styles.secondaryCta}>See 5-day itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="categories-orl">
        <h2 id="categories-orl" className={styles.sectionTitle}>What to Do in Orlando</h2>
        <p className={styles.sectionIntro}>Six categories â€” theme parks, space, water, nature, and day trips â€” with the tips that save time and money.</p>
        <div className={styles.grid}>
          {categories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>
      <BookingCTA
        variant="full"
        headline="Book Orlando activities"
        text="Skip-the-line tickets for theme parks, Kennedy Space Center, and activity tours."
        href="/destination/orlando/bookings?tab=activities"
        label="Browse activities"
      />
      <Footer />
    </main>
  );
}
