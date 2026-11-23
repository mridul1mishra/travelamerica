import styles from "@/app/destination/city-hub.module.css";

// Schedules and fares from LAWA (flylax.com), Big Blue Bus and LA Metro.
// Note: service at LAX changes when the Automated People Mover opens.
export default function AirportLogistics() {
  return (
    <section className={styles.section} aria-labelledby="la-airport-logistics">
      <h2 id="la-airport-logistics" className={styles.sectionTitle}>
        Getting in from LAX, and getting around once you are here
      </h2>
      <p className={styles.sectionIntro}>
        Most people assume Los Angeles is impossible without a car. For an itinerary built around
        Downtown, Hollywood and Santa Monica that is less true than it used to be, and the airport
        connections in particular have improved. These are the current schedules and fares.
      </p>
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>FlyAway to Union Station</h3>
          <p className={styles.cardBody}>
            The direct coach from LAX to Downtown runs every 30 minutes from 5:40am to 1:10am, every
            day. Coming back, buses leave Union Station at 3am and 4am, then every 30 minutes from
            5am to 11:30pm. It arrives at Bus Stop 1 in the Patsaouras Transit Plaza on the east
            side of Union Station, with the ticket kiosk at the south end near Bay 1. If you are
            driving to it, parking in the garage under the plaza is $8 a day with a 30-day limit,
            entered from Vignes Street.
          </p>
          <p className={styles.cardMeta}>Source: flylax.com</p>
        </article>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Bus to Santa Monica</h3>
          <p className={styles.cardBody}>
            Big Blue Bus Route 3 runs seven days a week between downtown Santa Monica and the
            LAX/Metro Transit Center. From the Transit Center the free LAX Shuttle to all terminals
            leaves from Bays 1 and 2, roughly every 10 minutes. A Big Blue Bus fare is $1.25 with a
            TAP card or mobile ticket, or $1.50 in cash &mdash; so the whole trip from the beach to
            the terminal costs little more than a coffee.
          </p>
          <p className={styles.cardMeta}>Source: bigbluebus.com</p>
        </article>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Metro fares cap themselves</h3>
          <p className={styles.cardBody}>
            A one-way Metro ride is $1.75, and transfers are free within two hours. The useful part
            is the cap: after three paid rides in a day you ride free, so you never pay more than $5
            in a day or $18 over seven days. The catch is that capping only works when you tap a
            card or device. Paying cash on the bus needs exact change and does not count toward the
            cap, so a TAP card is worth getting on arrival.
          </p>
          <p className={styles.cardMeta}>Source: metro.net</p>
        </article>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>The LAX/Metro Transit Center</h3>
          <p className={styles.cardBody}>
            The hub is served by the Metro C and K Lines, along with Beach Cities Transit, Culver
            CityBus and Torrance Transit. It replaced the old scattered pick-up arrangements with
            one interchange, and the free terminal shuttle runs from there. Service at LAX will
            change again when the Automated People Mover opens, so check before you rely on a
            specific connection.
          </p>
          <p className={styles.cardMeta}>Source: bigbluebus.com route guide</p>
        </article>
      </div>
      <p className={styles.sectionIntro}>
        For the days in this itinerary that reach Griffith Observatory or the Getty, a car still
        saves time. For Downtown, Hollywood and the beach, transit and the fare cap will usually
        beat parking charges.
      </p>
    </section>
  );
}
