import Link from "next/link";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "Magic Kingdom", items: [
    "Arrive at rope drop (park opens 30 min early for resort guests). Head straight to Tron Lightcycle Run and TRON â€” the two hardest-to-get Lightning Lane attractions.",
    "Morning: Seven Dwarfs Mine Train, Peter Pan's Flight, Haunted Mansion before 11am crowds build.",
    "Afternoon: Take a 2-hour break at your hotel from 1â€“3pm. Heat peaks and queues are longest.",
    "Evening: Return for the parade at 8pm and Happily Ever After fireworks at 9pm. Worth staying for.",
  ]},
  { day: "Day 2", title: "Universal Studios + Islands of Adventure", items: [
    "Arrive 1 hour before general opening (Early Park Admission if staying on-site at Loews hotel).",
    "Morning: Forbidden Journey (Hogwarts Castle), Hagrid's Motorbike, and Escape from Gringotts before general opening ends.",
    "Afternoon: Velocicoaster (no height restrictions, the best coaster in Florida), Jurassic World.",
    "Evening: Diagon Alley at dusk â€” the atmosphere peaks after dark. Universal CityWalk for dinner.",
  ]},
  { day: "Day 3", title: "Kennedy Space Center", items: [
    "Drive east on SR-528 â€” 45 min from International Drive. Arrive at 9am opening.",
    "Morning: Space Shuttle Atlantis exhibit (the centrepiece â€” real shuttle, immersive presentation). Saturn V rocket in the Apollo Center.",
    "Afternoon: Astronaut Encounter talk (included in admission). IMAX film.",
    "Evening: Check NASA's launch calendar before visiting â€” watching a rocket launch from the KSC viewpoint is unmissable. Return to Orlando for dinner.",
  ]},
  { day: "Day 4", title: "EPCOT", items: [
    "Morning: Test Track and Guardians of the Galaxy â€” Cosmic Rewind (virtual queue from 7am on the My Disney Experience app).",
    "Afternoon: World Showcase opens at 11am â€” start at Canada and work clockwise. Budget $30â€“$50 for food and drink around the world.",
    "Evening: EPCOT's Harmonious nighttime spectacular from World Showcase Lagoon. France pavilion for the best viewing spot.",
  ]},
  { day: "Day 5", title: "Hollywood Studios or Water Park", items: [
    "Option A: Hollywood Studios for Slinky Dog Dash, Star Wars: Rise of the Resistance, and Tower of Terror.",
    "Option B: Typhoon Lagoon or Volcano Bay (Universal) for a relaxed final day. Arrive early for the best spots.",
    "Either way: Book a table at a Disney Springs restaurant for your final night â€” The BOATHOUSE, Morimoto, or Wolfgang Puck.",
  ]},
];

export default function OrlandoItineraryClient() {
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
        text="Book flights to MCO, park-area hotels, and theme park tickets â†’"
        href="/destination/orlando/bookings"
        label="Book your trip"
      />
      <section className={styles.hero}>
        <h1>Orlando 5-Day Itinerary</h1>
        <p>A practical day-by-day plan built around real park logistics â€” rope drop times, where queues build, and how to pace a week without burning out by day 3.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/bookings?tab=activities" className={styles.primaryCta}>Book tickets</Link>
          <Link href="/destination/orlando/best-areas-to-stay" className={styles.secondaryCta}>Where to stay</Link>
        </div>
      </section>
      {days.map(({ day, title, items }) => (
        <section key={day} className={styles.section} aria-labelledby={`day-orl-${day}`}>
          <h2 id={`day-orl-${day}`} className={styles.sectionTitle}>{day}: {title}</h2>
          <div className={styles.grid}>
            {items.map((item, i) => (
              <article key={i} className={styles.card}><p className={styles.cardBody}>{item}</p></article>
            ))}
          </div>
        </section>
      ))}
      <BookingCTA
        variant="full"
        headline="Book your Orlando trip"
        text="Cheap flights to MCO, park-area hotels, and skip-the-line tickets."
        href="/destination/orlando/bookings"
        label="Compare flights, hotels & tickets"
      />
      <Footer />
    </main>
  );
}
