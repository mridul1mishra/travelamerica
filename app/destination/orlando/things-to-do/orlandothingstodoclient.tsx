import Link from "next/link";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const categories = [
  { title: "Walt Disney World (4 Parks)", blurb: "Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom. Plan 1 day per park minimum. Disney uses date-based pricing, so the same ticket costs different amounts depending on the day you pick and the cheapest dates sell out first. Date-based tickets no longer need a separate park reservation. Park Hopper add-on worthwhile for 5+ day visits. Arrive at rope drop to beat 2-hour ride queues by noon.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Universal Orlando Resort", blurb: "Universal Studios + Islands of Adventure. Wizarding World of Harry Potter spans both parks — you need both for the full experience. Early Park Admission (1 hr before general opening) comes with on-site Loews hotels. Lightning Lane equivalent is Express Pass — expensive but effective.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Kennedy Space Center", blurb: "45 min east of Orlando. Real rockets, Apollo-era artifacts, and Astronaut Encounter presentations. Allow a full day. Schedule around launch viewing if possible — check NASA's launch calendar. IMAX films are included with admission, which is $77 for ages 12 and over and $67 for ages 3–11. The price is the same online or at the gate, but tickets are tied to one date and cannot be moved.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Water Parks", blurb: "Disney's Typhoon Lagoon and Blizzard Beach and SeaWorld's Aquatica. Universal's Volcano Bay closed for maintenance on 26 October 2026, with a planned reopening on or before 1 April 2027, so check before you count on it. Best in summer — arrive before 10am to get tubes/chairs. Weekday mornings have shortest lines. All are included in relevant park passes.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Natural Springs & Outdoors", blurb: "Florida's springs are a hidden gem. Wekiwa Springs, Blue Spring State Park (manatee season Nov–Mar) and Silver Springs. Wekiwa now needs an advance day-use reservation for the specific date you visit, booked online before you set off; entry is $6 per vehicle carrying up to eight people. Crystal clear 72°F water year-round. Kayak and snorkel rentals on-site.", href: "/destination/orlando/tours-and-tickets" },
  { title: "Day Trips", blurb: "St. Pete Beach (90 min — consistently rated top US beach). Tampa (90 min — Busch Gardens, Aquarium, Ybor City). Canaveral National Seashore (1 hr — remote beach near the space center). Miami (3.5 hr) for a longer overnight.", href: "/destination/orlando/tours-and-tickets" },
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
        text="Book theme park tickets, Kennedy Space Center and activity tours →"
        href="/destination/orlando/tours-and-tickets"
        label="See tickets & tours"
      />
      <section className={styles.hero}>
        <h1>Things to Do in Orlando</h1>
        <p>Orlando is the most-visited city in the US for good reason — but what you do depends entirely on what kind of trip you want. This guide covers the six categories that shape most Orlando visits, with practical logistics for each.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/tours-and-tickets" className={styles.primaryCta}>Book tickets & tours</Link>
          <Link href="/destination/orlando/itinerary" className={styles.secondaryCta}>See 5-day itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="categories-orl">
        <h2 id="categories-orl" className={styles.sectionTitle}>What to Do in Orlando</h2>
        <p className={styles.sectionIntro}>Six categories — theme parks, space, water, nature, and day trips — with the tips that save time and money.</p>
        <div className={styles.grid}>
          {categories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="orl-transit">
        <h2 id="orl-transit" className={styles.sectionTitle}>Getting around without a car</h2>
        <p className={styles.sectionIntro}>Most visitors hire a car, and for the springs and the coast you will need one. For the tourist corridor itself there are two public options, and both have a catch worth knowing before you plan around them.</p>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>LYNX buses</h3>
            <p className={styles.cardBody}>A single ride is $2.00. An All-Day Pass is $4.50, but it can only be bought from the driver, and you have to say so before any money goes into the fare box &mdash; once it is in, it cannot be changed. Longer passes are easier: a 7-Day Pass is $16 and a 30-Day Pass is $50, sold at LYNX Central Station, through partner vendors, online and in the LYNX Paw Pass app. For two or more trips in a day the All-Day Pass pays for itself, so have the conversation with the driver as you board.</p>
            <p className={styles.cardMeta}>Source: LYNX schedule book</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>SunRail does not run at weekends</h3>
            <p className={styles.cardBody}>This is the one that catches people out. SunRail, the commuter rail line through central Orlando, runs Monday to Friday only, with no regular weekend service at all. If your plan involves the train on a Saturday, it does not work. Fares are by county: $2.00 one-way within one county, rising to $5.00 across four. Paper one-way and return tickets are only valid on the day you buy them and are not refundable.</p>
            <p className={styles.cardMeta}>Source: SunRail</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Train to the airport</h3>
            <p className={styles.cardBody}>There is no direct rail link to Orlando International, but LYNX routes 311, 11 and 42 connect SunRail&apos;s Sand Lake Road station with the airport roughly every 15 minutes, Monday to Friday. A SunRail fare includes a free transfer to LYNX within the same county, so the connection does not cost extra. On a weekend, none of this applies.</p>
            <p className={styles.cardMeta}>Source: SunRail, Train to Plane</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>What still needs a car</h3>
            <p className={styles.cardBody}>Wekiwa Springs, Blue Spring and the other springs have no useful transit link, and the same goes for the coast and the Tampa day trips. Factor the hire car and parking into those days rather than assuming you can reach them on a bus. Kennedy Space Center charges for parking separately from admission.</p>
            <p className={styles.cardMeta}>Based on operator route maps</p>
          </article>
        </div>
        <p className={styles.sectionIntro}>Fares and timetables change. Check LYNX and SunRail before travelling, particularly if a connection has to work.</p>
      </section>
      <BookingCTA
        variant="full"
        headline="Book Orlando activities"
        text="Skip-the-line tickets for theme parks, Kennedy Space Center, and activity tours."
        href="/destination/orlando/tours-and-tickets"
        label="Browse activities"
      />
      <Footer />
    </main>
  );
}
