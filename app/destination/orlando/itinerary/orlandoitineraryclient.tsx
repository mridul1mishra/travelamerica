"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "Magic Kingdom", items: [
    "Arrive at rope drop (park opens 30 min early for resort guests). Head straight to Tron Lightcycle Run and TRON — the two hardest-to-get Lightning Lane attractions.",
    "Morning: Seven Dwarfs Mine Train, Peter Pan's Flight, Haunted Mansion before 11am crowds build.",
    "Afternoon: Take a 2-hour break at your hotel from 1–3pm. Heat peaks and queues are longest.",
    "Evening: Return for the parade at 8pm and Happily Ever After fireworks at 9pm. Worth staying for.",
  ]},
  { day: "Day 2", title: "Universal Studios + Islands of Adventure", items: [
    "Arrive 1 hour before general opening (Early Park Admission if staying on-site at Loews hotel).",
    "Morning: Forbidden Journey (Hogwarts Castle), Hagrid's Motorbike, and Escape from Gringotts before general opening ends.",
    "Afternoon: Velocicoaster (no height restrictions, the best coaster in Florida), Jurassic World.",
    "Evening: Diagon Alley at dusk — the atmosphere peaks after dark. Universal CityWalk for dinner.",
  ]},
  { day: "Day 3", title: "Kennedy Space Center", items: [
    "Drive east on SR-528 — 45 min from International Drive. Arrive at 9am opening.",
    "Morning: Space Shuttle Atlantis exhibit (the centrepiece — real shuttle, immersive presentation). Saturn V rocket in the Apollo Center.",
    "Afternoon: Astronaut Encounter talk (included in admission). IMAX film.",
    "Evening: Check NASA's launch calendar before visiting — watching a rocket launch from the KSC viewpoint is unmissable. Return to Orlando for dinner.",
  ]},
  { day: "Day 4", title: "EPCOT", items: [
    "Morning: Test Track and Guardians of the Galaxy — Cosmic Rewind (virtual queue from 7am on the My Disney Experience app).",
    "Afternoon: World Showcase opens at 11am — start at Canada and work clockwise. Budget $30–$50 for food and drink around the world.",
    "Evening: EPCOT's Harmonious nighttime spectacular from World Showcase Lagoon. France pavilion for the best viewing spot.",
  ]},
  { day: "Day 5", title: "Hollywood Studios or Water Park", items: [
    "Option A: Hollywood Studios for Slinky Dog Dash, Star Wars: Rise of the Resistance, and Tower of Terror.",
    "Option B: Typhoon Lagoon or Volcano Bay (Universal) for a relaxed final day. Arrive early for the best spots.",
    "Either way: Book a table at a Disney Springs restaurant for your final night — The BOATHOUSE, Morimoto, or Wolfgang Puck.",
  ]},
];

export default function OrlandoItineraryClient() {
  return (
    <main>
      <Header image="/data/majorcities/orlando/assets/orlando.jpeg" bannerText="Orlando 5-Day Itinerary" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book flights to MCO, park-area hotels, and theme park tickets →</span>
        <Link href="/destination/orlando/bookings" className={styles.slimCtaBtn}>Book your trip</Link>
      </div>
      <section className={styles.hero}>
        <h1>Orlando 5-Day Itinerary</h1>
        <p>A practical day-by-day plan built around real park logistics — rope drop times, where queues build, and how to pace a week without burning out by day 3.</p>
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
      <div className={styles.bookingStrip}>
        <h2>Book your Orlando trip</h2>
        <p>Cheap flights to MCO, park-area hotels, and skip-the-line tickets.</p>
        <Link href="/destination/orlando/bookings" className={styles.bookingBtn}>Compare flights, hotels & tickets</Link>
      </div>
      <Footer />
    </main>
  );
}
