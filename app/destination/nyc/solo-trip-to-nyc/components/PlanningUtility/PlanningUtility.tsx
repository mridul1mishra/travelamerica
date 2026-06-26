import Link from "next/link";
import styles from "./PlanningUtility.module.css";

const airportRows = [
  {
    airport: "JFK",
    route: "AirTrain to Jamaica, then subway or LIRR",
    cost: "$11.75 by subway; about $14-$16 by LIRR",
    timing: "50-75 min by subway; faster by LIRR",
    bestFor: "Budget arrivals, daytime solo trips, and travelers staying near Midtown or lower Manhattan."
  },
  {
    airport: "LaGuardia",
    route: "Free Q70 bus to subway connections",
    cost: "Q70 is free; subway fare applies after transfer",
    timing: "45-70 min depending on destination",
    bestFor: "Light packers, daytime arrivals, and Queens or Midtown stays."
  },
  {
    airport: "Newark",
    route: "AirTrain plus NJ TRANSIT to New York Penn Station",
    cost: "About $17.25 with AirTrain included",
    timing: "About 30 min train time to Penn Station",
    bestFor: "Solo travelers staying near Midtown, Chelsea, or direct subway lines from Penn."
  }
];

const linkCards = [
  {
    href: "/destination/nyc/best-areas-to-stay",
    title: "Best areas to stay in NYC",
    text: "Compare neighborhoods by safety feel, subway access, budget, and first-time convenience."
  },
  {
    href: "/destination/nyc/nyc-female-solo-travel-guide",
    title: "Solo female travel in NYC",
    text: "Deeper safety nuance for nightlife, hotels, subway habits, and solo confidence."
  },
  {
    href: "/destination/nyc/subway-safety-guide",
    title: "NYC subway safety guide",
    text: "Platform habits, late-night riding, Help Points, and what to do if a train feels uncomfortable."
  },
  {
    href: "/destination/nyc/solo-itinerary",
    title: "NYC solo itinerary",
    text: "A day-by-day route you can follow without group logistics or awkward backtracking."
  },
  {
    href: "/destination/nyc/food",
    title: "Where to eat solo in NYC",
    text: "Counter seating, food halls, quick bites, and restaurants where eating alone feels natural."
  }
];

export function ScamWarningBox() {
  return (
    <section id="what-to-avoid" className={styles.warningSection}>
      <div className={styles.warningInner}>
        <p className={styles.eyebrow}>What to avoid</p>
        <h2>NYC tourist scams solo travelers should know</h2>
        <p>
          In high-traffic visitor zones, slow down before accepting a ride, pedicab quote, or attraction ticket from someone approaching you on the street. The biggest rule is simple: use official taxi stands, confirm pedicab pricing before you sit down, and buy ferry or attraction tickets from official channels.
        </p>
        <ul>
          <li>Skip unlicensed taxi or rideshare solicitations inside airport terminals.</li>
          <li>Confirm pedicab prices in writing, especially around Midtown and Central Park.</li>
          <li>Avoid unofficial Statue of Liberty or ferry-ticket sellers around Battery Park.</li>
          <li>When unsure, step away and book through the official site or a staffed counter.</li>
        </ul>
      </div>
    </section>
  );
}

export function AirportTransferMatrix() {
  return (
    <section id="airport-transfer" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Arrival logistics</p>
        <h2>Airport transfer matrix for solo travelers</h2>
        <p className={styles.intro}>
          Choose the route that keeps your first hour simple. Public transit is usually fine in daylight with manageable luggage; rideshare or a taxi is worth considering after a long flight, late at night, or when your hotel is not near a direct train.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Airport</th>
                <th>Best public route</th>
                <th>Typical cost</th>
                <th>Time</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              {airportRows.map((row) => (
                <tr key={row.airport}>
                  <td>{row.airport}</td>
                  <td>{row.route}</td>
                  <td>{row.cost}</td>
                  <td>{row.timing}</td>
                  <td>{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function SoloModePlanner() {
  return (
    <section id="solo-mode" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Choose your solo mode</p>
        <h2>Meet people or keep it quiet</h2>
        <div className={styles.splitGrid}>
          <article>
            <h3>Social solo NYC</h3>
            <p>Build your days around guided walks, food tours, museum events, Broadway lotteries, bar seating, and hostel or hotel common spaces. NYC makes low-pressure conversation easy because the activity does the work.</p>
            <Link href="/destination/nyc/things-to-do">Find solo-friendly things to do</Link>
          </article>
          <article>
            <h3>Quiet solo NYC</h3>
            <p>Use Central Park mornings, museum blocks, bookstores, ferry rides, food halls, and neighborhood walks when you want the city without forced social energy. Stay near a simple subway line so evenings stay low-friction.</p>
            <Link href="/destination/nyc/solo-itinerary">Use the quiet itinerary path</Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export function SeasonalSavings() {
  return (
    <section id="seasonal-planning" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Budget timing</p>
        <h2>Seasonal solo-planning modules</h2>
        <div className={styles.cardGrid}>
          <article>
            <h3>January and July value weeks</h3>
            <p>Watch for citywide dining and theater promotions like Restaurant Week and Broadway Week. They are useful solo-trip anchors because one ticket or one reservation is easy to book.</p>
          </article>
          <article>
            <h3>Winter reset trip</h3>
            <p>Expect colder walks but better hotel pricing outside the holiday peak. Use museums, matinees, cafes, and shorter neighborhood loops.</p>
          </article>
          <article>
            <h3>Summer solo trip</h3>
            <p>Plan earlier starts, shaded parks, ferries, evening shows, and air-conditioned museum blocks. Keep one flexible indoor backup per day.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function InternalLinkHub() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Plan the rest</p>
        <h2>NYC solo travel guides to read next</h2>
        <div className={styles.linkGrid}>
          {linkCards.map((card) => (
            <Link key={card.href} href={card.href} className={styles.linkCard}>
              <span>{card.title}</span>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
