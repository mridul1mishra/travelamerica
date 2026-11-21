import Link from "next/link";
import styles from "./editorial.module.css";
import Byline from "@/app/components/Byline/Byline";

// REVIEW BEFORE DEPLOY: this copy was revised after an outside fact-check. Confirm against the
// official Port Authority, MTA, NJ Transit and NYC TLC pages before publishing: the LIRR time from
// Jamaica (about 20 minutes), the Q70 terminals (B and C), the M60 SBS terminals, the $70 JFK taxi
// base fare, the Newark taxi rules, and the current AirTrain status at JFK and Newark.
// Most fares are left out on purpose because they change; add them only if you will keep them current.
export default function FlightGuide() {
  return (
    <section className={styles.wrap} aria-labelledby="nyc-airports-heading">
      <h2 id="nyc-airports-heading">Flying to New York: which airport fits your trip</h2>
      <Byline updated="November 2026" />
      <p className={styles.lead}>
        New York&apos;s three principal airports, JFK, LaGuardia and Newark, serve different parts of
        the region well. The cheapest fare is not always the cheapest or easiest trip overall, so
        compare the flight with the time, cost and number of transfers between the airport and your
        hotel.
      </p>

      <div className={styles.cards}>
        <article className={styles.card}>
          <span className={styles.tag}>Queens</span>
          <h3>JFK</h3>
          <p>
            The region&apos;s largest international gateway, and often a strong choice for Lower
            Manhattan and many parts of Brooklyn. The AirTrain connects the terminals with Jamaica
            Station (Long Island Rail Road and subway) and Howard Beach–JFK Airport (A train). Travel
            between terminals is free.
          </p>
          <p>
            For Midtown, the LIRR is usually the fastest public option: the ride from Jamaica to Penn
            Station or Grand Central Madison takes about 20 minutes, plus the AirTrain and your
            transfer. The subway costs less but usually takes longer.
          </p>
          <p>
            Yellow taxis between JFK and Manhattan charge a flat base fare of $70, with surcharges,
            tolls and tip added. JFK is under major redevelopment, so check roadway and pickup
            advisories before you travel.
          </p>
        </article>
        <article className={styles.card}>
          <span className={styles.tag}>Queens</span>
          <h3>LaGuardia (LGA)</h3>
          <p>
            Often the most convenient airport for the Upper East Side, Midtown East, Astoria and parts
            of northern Manhattan, and it can work well for the Upper West Side. There is no direct
            rail station.
          </p>
          <p>
            The fare-free Q70 LaGuardia Link serves Terminals B and C and connects with the subway at
            Jackson Heights–Roosevelt Av, and with the 7 train and the Long Island Rail Road at
            Woodside. The M60 SBS bus serves all terminals and suits Astoria and Upper Manhattan.
          </p>
          <p>
            Taxi and rideshare times vary sharply with traffic, so avoid relying on a fixed estimate.
            Most flights are domestic.
          </p>
        </article>
        <article className={styles.card}>
          <span className={styles.tag}>New Jersey</span>
          <h3>Newark Liberty (EWR)</h3>
          <p>
            A strong option for Midtown West, especially around Penn Station. Take the AirTrain from
            your terminal to Newark Airport station, then NJ Transit to New York Penn Station, which
            typically takes about 25 to 30 minutes on the train. Selected Amtrak trains also stop at
            the airport station.
          </p>
          <p>
            Newark is rebuilding its AirTrain and modernizing the rail station, and shuttle buses have
            at times stood in, so check service alerts before you travel. The Newark Airport Express
            bus also serves Port Authority, Bryant Park and Grand Central; allow roughly an hour or
            more depending on traffic.
          </p>
          <p>
            PATH does not go to the airport. To use it, take NJ Transit one stop to Newark Penn
            Station and change there for PATH to the World Trade Center. That route suits Lower
            Manhattan; for Midtown, the direct NJ Transit train to Penn Station is simpler.
          </p>
          <p>
            Taxi pricing differs by direction. From Newark Airport, taxis use zoned fares to Manhattan
            plus tolls, fees and tip. A New York taxi heading to Newark uses the meter plus a Newark
            surcharge and tolls.
          </p>
        </article>
      </div>

      <div className={styles.block}>
        <h3>Matching the airport to your stay</h3>
        <ul className={styles.list}>
          <li>
            <strong>Midtown West, Penn Station and western Chelsea:</strong> compare Newark, with its
            direct NJ Transit ride to Penn, and JFK, with its fast LIRR connection through Jamaica.
          </li>
          <li>
            <strong>Midtown East, the Upper East Side and Astoria:</strong> LaGuardia is often the
            easiest.
          </li>
          <li>
            <strong>Upper West Side:</strong> LaGuardia is worth considering, particularly where the
            M60 connection works well.
          </li>
          <li>
            <strong>Lower Manhattan:</strong> JFK is often strong. Newark can be competitive depending
            on your hotel, including a PATH change at Newark Penn Station.
          </li>
          <li>
            <strong>Brooklyn:</strong> JFK works well for many neighborhoods, but LaGuardia can be
            competitive for northwestern Brooklyn.
          </li>
          <li>
            <strong>Long Island City:</strong> LaGuardia is often convenient, but check the nearest
            subway station to your hotel.
          </li>
        </ul>
        <p>
          These are rules of thumb, not absolutes. The nearest subway or rail station to your hotel
          can matter more than the borough name.
        </p>
        <p className={styles.links}>
          Not sure where to stay yet? See our <Link href="/destination/nyc/best-areas-to-stay">best areas to stay in NYC</Link>.
        </p>
      </div>

      <div className={styles.block}>
        <h3>Midtown&apos;s rail crossroads: the 34th Street area</h3>
        <p>
          Penn Station, between Seventh and Eighth Avenues around 32nd to 34th Streets, is where Long
          Island Rail Road and NJ Transit trains arrive, along with Amtrak, and it connects to several
          subway lines. PATH&apos;s 33rd Street station, which serves Hoboken and Journal Square, is on
          Sixth Avenue near Herald Square, a short walk east of Penn Station. They are separate
          stations, so expect a walk at street level rather than an indoor connection.
        </p>
        <p>
          That makes the area around 34th Street a convenient base if you arrive by train from JFK or
          Newark, or plan day trips to Hoboken and Jersey City.
        </p>
      </div>

      <aside className={styles.experience} aria-labelledby="nyc-experience-heading">
        <h3 id="nyc-experience-heading">Our experience: JFK to Midtown by AirTrain and LIRR</h3>
        <p>
          When we flew into JFK in July 2026, we took the AirTrain to Jamaica, the Long Island Rail Road
          from Jamaica to Penn Station, and then the subway on into Midtown. The whole trip took
          about an hour and cost $17 per person.
        </p>
        <ul className={styles.list}>
          <li>AirTrain, JFK to Jamaica: $8.75</li>
          <li>LIRR, Jamaica to Penn Station: $5.25 (off-peak weekend fare)</li>
          <li>Subway: $3</li>
        </ul>
        <p>Fares change, so check current prices before you go.</p>
        <p>
          The two trickiest parts were finding the AirTrain entrance at the airport and finding the
          right subway station once we reached Penn Station.
        </p>
        <p>
          <strong>Our tip:</strong> leave extra time to find your way, especially if it is your first
          visit to New York.
        </p>
      </aside>

      <div className={styles.block}>
        <h3>Booking and late-night tips</h3>
        <ul className={styles.list}>
          <li>
            When your flight-search site supports it, compare the whole New York metropolitan area
            rather than only one airport. Then add the transfer fare, time and number of changes
            before deciding.
          </li>
          <li>
            NYC subways and the Q70 operate overnight, generally less often than during the day.
            AirTrains normally run overnight too, but maintenance or construction can cause temporary
            suspensions or shuttle substitutions, so check the airport&apos;s service alert before a
            late arrival. After midnight a taxi may be simpler, and it is worth confirming your
            hotel&apos;s late check-in.
          </li>
          <li>
            Leave a buffer around your arrival and departure. Weather, congestion, construction and
            transit disruptions can all affect airport transfers, and JFK redevelopment and Newark
            AirTrain work are changing conditions now.
          </li>
        </ul>
        <p className={styles.links}>
          Once you land: <Link href="/destination/nyc/nyc-subway-map">NYC subway map</Link> ·{" "}
          <Link href="/destination/nyc/is-nyc-safe-at-night">Is NYC safe at night?</Link>
        </p>
      </div>
    </section>
  );
}
