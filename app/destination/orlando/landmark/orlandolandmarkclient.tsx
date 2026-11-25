import Byline from "@/app/components/Byline/Byline";
import Link from "next/link";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

// Prices and rules below are sourced from the operators themselves. See the
// "Before you go" section for the citations. Re-check the volatile ones
// (ticket prices, seasonal closures) before each update.
const landmarks = [
  { title: "Walt Disney World", blurb: "Four parks (Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom) plus two water parks on 25,000 acres. Disney uses date-based pricing, so the same ticket costs different amounts on different days and the cheapest dates go first. Date-based 1-day and multi-day tickets no longer need a separate theme park reservation, though Annual Passes and some non-dated tickets still do. Magic Kingdom is the usual first-visit choice; EPCOT's World Showcase suits adults.", cost: "Date-based pricing \u2014 check Disney for your dates" },
  { title: "Universal Orlando Resort", blurb: "Universal Studios Florida and Islands of Adventure, plus Epic Universe. The Wizarding World of Harry Potter spans the two original parks, so seeing all of it needs a Park-to-Park ticket. Note that Volcano Bay, Universal's water park, closed for maintenance on 26 October 2026, with a planned reopening on or before 1 April 2027 \u2014 check Universal's hours page before you count on it.", cost: "Volcano Bay closed until spring 2027" },
  { title: "Kennedy Space Center", blurb: "On the Atlantic coast east of Orlando. One-day admission is $77 for ages 12 and over and $67 for ages 3\u201311, and a two-day ticket is $91 and $81. Admission covers Space Shuttle Atlantis, the Apollo/Saturn V Center by bus, Gateway, Heroes & Legends, the IMAX films, Journey to Mars, Planet Play, Astronaut Encounter and the Rocket Garden. Chat With An Astronaut, the KSC Explore Tour and the Astronaut Training Experience cost extra. Tickets are tied to one date and cannot be moved, and the price is the same online or at the gate.", cost: "$77 adult / $67 child (1 day)" },
  { title: "ICON Park (I-Drive)", blurb: "Entertainment complex on International Drive built around a 400-foot observation wheel, now called The Orlando Eye again after a spell as The Wheel at ICON Park. A ride takes about 20 minutes. SEA LIFE Aquarium and Madame Tussauds are on the same site, along with restaurants and bars, and combination tickets are sold. Check current prices on ICON Park's own site before booking.", cost: "Check ICON Park for current prices" },
  { title: "Wekiwa Springs State Park", blurb: "A natural freshwater spring north of Orlando, with swimming, kayaking and paddleboarding. Entry is $6 per vehicle carrying up to eight people, $4 for a single-occupant vehicle or motorcycle, and $2 per pedestrian or cyclist. Every day-use visitor now needs an advance reservation for that specific date, annual passholders included \u2014 you cannot simply turn up. The park is open 8am until sundown, every day of the year.", cost: "$6 per vehicle \u2014 reservation required" },
  { title: "Winter Park & the Morse Museum", blurb: "North of I-Drive, Winter Park has the Charles Hosmer Morse Museum of American Art, home to a large collection of Louis Comfort Tiffany work. Admission is $8 for adults, $7 for over-60s, $3 for students with ID and free for under-12s. It opens Tuesday to Saturday 9:30am\u20134pm and Sunday 1\u20134pm, closed Mondays, and stays open to 8pm on Fridays from November to April \u2014 when entry is free from 4pm. Park Avenue is a walkable shopping street.", cost: "$8 adult / free under 12" },
];

export default function OrlandoLandmarkClient() {
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
        text="Book skip-the-line tickets and guided Orlando tours →"
        href="/destination/orlando/tours-and-tickets"
        label="Browse tickets"
      />
      <section className={styles.hero}>
        <h1>Orlando Landmarks & Attractions</h1>
        <Byline author="manisha" reviewer="mridul" updated="November 2026" />
        <p>Orlando has the world&apos;s highest concentration of major theme parks — but also some genuinely overlooked gems. This guide covers the full range with honest costs and the tips that change each experience.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/tours-and-tickets" className={styles.primaryCta}>Book attraction tickets</Link>
          <Link href="/destination/orlando/itinerary" className={styles.secondaryCta}>See 3-day itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="landmarks-or">
        <h2 id="landmarks-or" className={styles.sectionTitle}>Orlando&apos;s Most Iconic Attractions</h2>
        <p className={styles.sectionIntro}>Six landmarks every visitor should know — with honest costs and the tips that matter.</p>
        <div className={styles.grid}>
          {landmarks.map(({ title, blurb, cost }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
              <p className={styles.cardMeta}>{cost}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="orl-before-you-go">
        <h2 id="orl-before-you-go" className={styles.sectionTitle}>Before you go: the rules that catch people out</h2>
        <p className={styles.sectionIntro}>Four things worth knowing before you build a day around any of these. All of them come from the operators&apos; own pages, and all of them have changed within the last couple of years.</p>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Wekiwa Springs now needs a reservation</h3>
            <p className={styles.cardBody}>Since 2 September 2025, every day-use visitor to Wekiwa Springs State Park needs a reservation for the specific date of their visit, booked in advance online. That applies to annual passholders too, and each day needs its own booking. The entry fee is paid when you book and the booking itself costs nothing extra. The park fills on warm weekends, so this is not a formality — turning up without one means being turned away at the gate.</p>
            <p className={styles.cardMeta}>Source: Florida State Parks, day-use entry reservation information</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Kennedy Space Center tickets are locked to a date</h3>
            <p className={styles.cardBody}>Admission is tied to the specific date you book and cannot be moved to another day, so a launch scrub or a change of plan does not transfer. The price is the same whether you book online or pay at the gate, which means there is no saving to chase but also no penalty for deciding late. Parking is charged separately. If you want to see everything, the visitor complex itself suggests two days rather than one.</p>
            <p className={styles.cardMeta}>Source: Kennedy Space Center Visitor Complex</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>What is and is not included at KSC</h3>
            <p className={styles.cardBody}>Daily admission covers more than people expect: Space Shuttle Atlantis, the bus to the Apollo/Saturn V Center, Gateway, Heroes &amp; Legends, the IMAX films, Journey to Mars, Planet Play, Astronaut Encounter and the Rocket Garden. What it does not cover is Chat With An Astronaut, the KSC Explore Tour and the Astronaut Training Experience, which are sold as add-ons and can sell out ahead. Astronaut Encounter and Chat With An Astronaut are different things, and it is an easy mistake to make.</p>
            <p className={styles.cardMeta}>Source: Kennedy Space Center Visitor Complex FAQ</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>The Morse Museum has a free evening</h3>
            <p className={styles.cardBody}>From November to April the Morse stays open until 8pm on Fridays, and admission is free from 4pm. Outside that window it closes at 4pm and charges $8 for adults, $7 for over-60s and $3 for students with ID; under-12s are always free. It is closed on Mondays and most major holidays. Winter Park is a different proposition from the theme park corridor, and the museum is small enough to pair with an afternoon on Park Avenue.</p>
            <p className={styles.cardMeta}>Source: Morse Museum, plan your visit</p>
          </article>
        </div>
        <p className={styles.sectionIntro}>Prices and opening hours change. Where a figure matters to your budget, check the operator&apos;s own page before you book — we have linked the sources above for exactly that reason.</p>
      </section>
      <BookingCTA
        variant="full"
        headline="Book Orlando attraction tickets"
        text="Disney, Universal, Kennedy Space Center and more — compare prices and book in advance."
        href="/destination/orlando/tours-and-tickets"
        label="Browse Orlando activities"
      />
      <Footer />
    </main>
  );
}
