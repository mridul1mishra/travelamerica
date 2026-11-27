import Link from "next/link";
import styles from "./editorial.module.css";
import Byline from "@/app/components/Byline/Byline";

// Fact-checked 25 Nov 2026 against official pages (13 of 13 claims confirmed).
// Sources (viewed 25 Nov 2026):
// - Taxi and rideshare pickup: https://www.harryreidairport.com/taxi-and-ride-share
//   and https://www.harryreidairport.com/taxi-and-ride-share/ride-share
// - Inter-terminal shuttles and shuttle services: https://www.harryreidairport.com/busses-shuttles
// - RTC routes at the airport: https://www.harryreidairport.com/busses-shuttles/public-bus
// - Taxi rider information: https://www.taxi.nv.gov/passenger-info/
// - RTC change date (23 Aug 2026): https://rtcws.rtcsnv.com/routepdf/transitguide.pdf
// - RTC airport routes and service change (confirmed from owner screenshots, pages block automated fetches):
//   https://www.rtcsnv.com/ways-to-travel/transit-services/airport-transit-routes/
//   https://www.rtcsnv.com/news/service-starts-on-sunday-aug-23/
// - Airport options overview (Terminal 3 rideshare wording differs from the ride-share page):
//   https://www.harryreidairport.com/all-options-to-and-from
// No fares, times or distances are given on purpose.
export default function FlightGuide() {
  return (
    <section className={styles.wrap} aria-labelledby="lv-airport-heading">
      <h2 id="lv-airport-heading">Flying to Las Vegas: getting from the airport to your hotel</h2>
      <Byline updated="November 2026" />
      <p className={styles.lead}>
        Harry Reid International Airport (LAS) is the airport for Las Vegas. It has two terminals,
        Terminal 1 and Terminal 3, and courtesy shuttle buses carry passengers between them. Which
        way you get to your hotel depends on the terminal you land in and where you are staying, so
        check your airline or boarding pass for your terminal before you plan the transfer.
      </p>

      <div className={styles.cards}>
        <article className={styles.card}>
          <span className={styles.tag}>Taxi</span>
          <h3>Taxis</h3>
          <p>
            At Terminal 1, taxis wait outside baggage claim on the east side, near outside doors 1
            to 4. At Terminal 3, they wait on Level Zero, near door 52.
          </p>
          <p>
            Taxi fares are set by the Nevada Taxicab Authority. Ask for the estimated fare to your
            resort before you set off. The authority publishes{" "}
            <a href="https://www.taxi.nv.gov/passenger-info/" target="_blank" rel="noopener noreferrer">
              rider information
            </a>{" "}
            on its website.
          </p>
        </article>
        <article className={styles.card}>
          <span className={styles.tag}>Rideshare</span>
          <h3>Uber and Lyft</h3>
          <p>
            Uber and Lyft are authorized at the airport. Book through the app. Pickup is not at the
            curb. At Terminal 1 it is on Level 2 of the parking garage: take the elevator near Door
            2 to Level 2, cross the pedestrian bridge and turn right. At Terminal 3 it is on the
            Valet Level of the garage: from baggage claim, take the elevator near Door 52, 54 or 56
            to Level 1, cross the pedestrian bridge, then go down to the Valet Level. The
            airport&apos;s pages describe this route slightly differently, so follow the rideshare
            signs and the airport&apos;s current directions.
          </p>
          <p>
            Drop-off for departures is at the regular departures curbs at both terminals. Check the
            total fare in the app before you confirm the ride.
          </p>
        </article>
        <article className={styles.card}>
          <span className={styles.tag}>Public bus</span>
          <h3>RTC buses</h3>
          <p>
            The airport lists RTC Route 108 and the Red Line, which replaced Route 109, at a covered
            stop on Level Zero at Terminal 1. If you arrive at Terminal 3, you take the
            inter-terminal shuttle to reach that stop.
          </p>
          <p>
            RTC changed several routes on August 23, 2026, so check{" "}
            <a href="https://www.rtcsnv.com/ways-to-travel/transit-services/airport-transit-routes/" target="_blank" rel="noopener noreferrer">
              RTC&apos;s airport routes page
            </a>{" "}
            for current routes and fares before you rely on a bus, especially late at night.
          </p>
        </article>
      </div>

      <div className={styles.block}>
        <h3>Other ways to get to your hotel</h3>
        <ul className={styles.list}>
          <li>
            <strong>Shuttles:</strong> the airport lists inter-city shuttles to communities around
            Las Vegas, and shuttle services to select Strip hotels and other areas. Ask your hotel
            whether it offers a transfer, and what it costs.
          </li>
          <li>
            <strong>Your hotel decides the best option:</strong> the Strip, Downtown, Summerlin and
            Henderson are in different directions from the airport. Pick the transfer after you pick
            the area.
          </li>
        </ul>
      </div>

      <div className={styles.block}>
        <h3>Before you book</h3>
        <ul className={styles.list}>
          <li>
            Count the transfer in the cost of the trip, along with resort fees and parking, which
            vary by resort and can change which base is cheaper. See{" "}
            <Link href="/destination/lasvegas/best-areas-to-stay">
              what a Las Vegas stay costs beyond the room rate
            </Link>
            .
          </li>
          <li>
            Fares on this page are samples. Check the current price and the terms with the provider
            before you book.
          </li>
        </ul>
        <p className={styles.links}>
          Keep planning: <Link href="/destination/lasvegas/best-areas-to-stay">Best areas to stay</Link>{" "}
          · <Link href="/destination/lasvegas/itinerary">3-day itinerary</Link> ·{" "}
          <Link href="/destination/lasvegas/neighborhood-guide">Neighborhood guide</Link>
        </p>
      </div>
    </section>
  );
}
