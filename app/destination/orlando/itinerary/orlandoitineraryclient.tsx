import Byline from "@/app/components/Byline/Byline";
import Link from "next/link";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "Magic Kingdom", items: [
    "Arrive at rope drop (park opens 30 min early for resort guests). Head straight for the headline rides before the queues build.",
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
    "Drive east to the coast. Aim to arrive for opening, and remember the ticket is tied to this specific date and cannot be moved if plans change.",
    "Morning: Space Shuttle Atlantis exhibit (the centrepiece — real shuttle, immersive presentation). Saturn V rocket in the Apollo Center.",
    "Afternoon: Astronaut Encounter talk (included in admission). IMAX film.",
    "Evening: Check NASA's launch calendar before visiting — watching a rocket launch from the KSC viewpoint is unmissable. Return to Orlando for dinner.",
  ]},
  { day: "Day 4", title: "EPCOT", items: [
    "Morning: Test Track and Guardians of the Galaxy — Cosmic Rewind (virtual queue from 7am on the My Disney Experience app).",
    "Afternoon: World Showcase opens at 11am — start at Canada and work clockwise. Budget $30–$50 for food and drink around the world.",
    "Evening: the nighttime show over World Showcase Lagoon. Disney changes these every few years, so check what is running on your dates. The France pavilion side is a popular viewing spot.",
  ]},
  { day: "Day 5", title: "Hollywood Studios or Water Park", items: [
    "Option A: Hollywood Studios for Slinky Dog Dash, Star Wars: Rise of the Resistance, and Tower of Terror.",
    "Option B: a water park for a relaxed final day. Typhoon Lagoon and Aquatica are open; Universal's Volcano Bay closed on 26 October 2026 with a planned reopening on or before 1 April 2027. Arrive early for the best spots.",
    "Either way: Book a table at a Disney Springs restaurant for your final night — The BOATHOUSE, Morimoto, or Wolfgang Puck.",
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
        text="Book flights to MCO, park-area hotels, and theme park tickets →"
        href="/destination/orlando/hotel"
        label="Book your trip"
      />
      <section className={styles.hero}>
        <h1>Orlando 5-Day Itinerary</h1>
        <Byline author="manisha" reviewer="mridul" updated="November 2026" />
        <p>A practical day-by-day plan built around real park logistics — rope drop times, where queues build, and how to pace a week without burning out by day 3.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/tours-and-tickets" className={styles.primaryCta}>Book tickets</Link>
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
      <section className={styles.section} aria-labelledby="orl-booking-windows">
        <h2 id="orl-booking-windows" className={styles.sectionTitle}>The booking windows that shape this plan</h2>
        <p className={styles.sectionIntro}>An Orlando itinerary lives or dies on what you reserved and when. These are the current rules, and a couple of them changed recently enough that older guides still have them wrong.</p>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Park reservations: mostly gone</h3>
            <p className={styles.cardBody}>Date-based 1-day and multi-day Walt Disney World tickets no longer need a separate theme park reservation. You pick your dates when you buy and turn up. Annual Passes and some non-dated tickets still do need one, and passholders can enter without a reservation only after 2pm, except at Magic Kingdom at weekends. If a guide tells you to book a Park Pass for an ordinary dated ticket, it is out of date.</p>
            <p className={styles.cardMeta}>Source: Walt Disney World park reservations page</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Dining opens 60 days out</h3>
            <p className={styles.cardBody}>Walt Disney World table-service reservations open 60 days in advance, and the popular ones go within minutes of the window opening. You do not need a park reservation to book a meal, but eating at a restaurant inside a park does require park admission for that same day &mdash; so a dinner booking is not a way around a ticket. Build the day around the reservation you managed to get, not the one you wanted.</p>
            <p className={styles.cardMeta}>Source: Walt Disney World dining guidance</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Kennedy Space Center is date-locked</h3>
            <p className={styles.cardBody}>KSC admission is tied to the date you book and cannot be moved to another day, which matters if you are hoping to line the visit up with a launch. There is no price advantage to booking ahead &mdash; online and gate prices are the same &mdash; so the only reason to book early is certainty. Add-ons such as Chat With An Astronaut and the Astronaut Training Experience are separate from admission and can sell out.</p>
            <p className={styles.cardMeta}>Source: Kennedy Space Center Visitor Complex</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Check which festival is running</h3>
            <p className={styles.cardBody}>EPCOT runs seasonal festivals that change what the park is like, and they are worth planning around. The International Festival of the Holidays runs 27 November to 30 December 2026, with Holiday Kitchens around World Showcase and the Candlelight Processional nightly at 4:45pm, 6:30pm and 8pm at the America Gardens Theatre. Festival dates shift each year, so confirm yours before you build a day around one.</p>
            <p className={styles.cardMeta}>Source: Walt Disney World events pages</p>
          </article>
        </div>
        <p className={styles.sectionIntro}>Reservation rules at Disney change more often than almost anything else in this guide. Confirm them on Disney&apos;s own pages close to your trip rather than relying on a plan written months earlier &mdash; including this one.</p>
      </section>
      <BookingCTA
        variant="full"
        headline="Book your Orlando trip"
        text="Cheap flights to MCO, park-area hotels, and skip-the-line tickets."
        href="/destination/orlando/hotel"
        label="Compare flights, hotels & tickets"
      />
      <Footer />
    </main>
  );
}
