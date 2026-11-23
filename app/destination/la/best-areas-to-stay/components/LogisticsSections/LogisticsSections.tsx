import styles from "../../bestareatostay.module.css";

// Facts below come from a sourced research report (official transit agencies,
// city sites and hotel pages), checked 22 Nov 2026. Fares, schedules, taxes and
// hotel fees all change, so keep the "as published" wording and re-check
// before updating dateModified.

const transit = [
  {
    name: "Santa Monica",
    text: "The Metro E Line ends at Downtown Santa Monica Station, which Metro describes as about a 10-minute walk from Santa Monica Pier. Big Blue Bus Rapid 10 links Downtown Santa Monica with Downtown LA, including the Union Station area, but its timetable (effective April 5, 2026) lists three weekday morning departures toward Downtown LA and three weekday afternoon or evening returns, with no weekend service. A single Big Blue Bus ride is listed at $1.50 cash or $1.25 with TAP or contactless payment.",
  },
  {
    name: "West Hollywood",
    text: "The City of West Hollywood runs CityLine Commuter and CityLine Local, free fixed-route buses (not rail). The city lists CityLine Commuter as running along Santa Monica Boulevard to and from the Hollywood/Highland Metro B Line station, weekdays 7 to 9 a.m. and Monday to Saturday 5 to 8 p.m. CityLine Local runs Monday to Saturday, 9 a.m. to 5:30 p.m., about every 30 minutes. Two city pages disagree on the Commuter interval (every 20 minutes on one, every 15 on another), and the city lists holidays, including Thanksgiving and the day after, when CityLine does not run, so check the city's current timetable before you rely on it.",
  },
  {
    name: "Hollywood",
    text: "The Metro B Line (formerly the Red Line) stops at Hollywood/Western, Hollywood/Vine and Hollywood/Highland, and connects North Hollywood with Union Station. LADOT's DASH Hollywood bus runs daily except listed holidays, with a published weekday interval of every 30 minutes.",
  },
  {
    name: "Downtown LA",
    text: "Metro lists 7th St/Metro Center as connecting the A, B, D and E rail lines. Union Station connects the A, B and D lines with Amtrak and Metrolink. The J Line is a busway, not a rail line. On LADOT's DASH Downtown, Route D (Union Station to South Park) is published at every 7 minutes on weekdays, 10 on Saturdays and 15 on Sundays, and Route E links Westlake/MacArthur Park with the Fashion District.",
  },
  {
    name: "Beverly Hills",
    text: "Metro opened the first section of the D Line extension on May 8, 2026, with stations at Wilshire/La Brea, Wilshire/Fairfax and Wilshire/La Cienega. The City of Beverly Hills lists the La Cienega station as serving the city; the next section is still under construction. The city also publishes a free weekend trolley between Civic Center and Rodeo Drive, Saturdays and Sundays from 11 a.m. to 4:30 p.m. except listed holidays.",
  },
  {
    name: "From LAX",
    text: "The LAX FlyAway bus serves the airport terminals, Van Nuys and Union Station. LAWA lists the one-way fare as $15 from November 19, 2026. Metro lists a free shuttle from the LAX terminals to the LAX/Metro Transit Center, which the C Line and K Line serve. From there, Culver CityBus Line 6 runs along Sepulveda Boulevard to UCLA, and Rapid 6 runs on weekdays from 6 a.m. to 8 p.m.; Culver CityBus lists a $1.00 adult base fare. We have not confirmed official public-transit directions from the airport to every area on this page, so check flylax.com and Metro for current options.",
  },
];

const costs = [
  {
    name: "Hotel taxes by city",
    text: "The City of Santa Monica lists a 15% hotel tax (transient occupancy tax). West Hollywood lists 12.5%. The City of Los Angeles, which includes Hollywood and Downtown LA, lists 14%, and Beverly Hills lists 14%. Hotels add these to the room rate, so compare totals, not just the nightly price.",
  },
  {
    name: "District assessments",
    text: "Some hotels also pass on district assessments. Santa Monica's 2026 tax form lists a Tourism Marketing District assessment of $2.30, $6.25 or $7.25 per room-night, depending on the hotel's average daily rate. The City of Los Angeles reported a 2% assessment for hotels with 50 or more rooms in its Tourism Marketing District. West Hollywood's pages disagree on its Tourism Improvement District rate (3% on one page, 4% on another), so confirm it with the hotel. Whether an assessment applies depends on the individual hotel.",
  },
  {
    name: "Parking: examples hotels publish",
    text: "Each hotel sets its own parking charges. As listed on their official sites, Courtyard by Marriott Santa Monica shows self-parking and valet at $70 a day; Andaz West Hollywood's policies page lists overnight valet with in-and-out privileges and self-parking at up to $75 per day; Loews Hollywood shows self-parking at $25 plus tax a day (no in-and-out) and valet at $65 plus tax a night; JW Marriott Los Angeles L.A. LIVE shows valet at $71.50 a day; Silver Lake Pool & Inn lists overnight valet at $35 per vehicle per day plus tax; and Waldorf Astoria Beverly Hills lists valet at $68 without saying whether that is per night or per day, and says self-parking is not available. These are examples of what hotels publish, not recommendations, and they will not match every hotel in the area.",
  },
  {
    name: "Destination fees: examples",
    text: "Loews Hollywood lists a daily destination fee of $30 plus tax, and JW Marriott Los Angeles L.A. LIVE lists $50 a day before tax, which it says includes a $25 daily food and beverage credit. Courtyard by Marriott Santa Monica says on its property page that it has no resort fee. Check the fee and what it includes on your own booking.",
  },
];

export default function LogisticsSections() {
  return (
    <>
      <section aria-labelledby="transit-la" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Getting around</p>
          <h2 id="transit-la">Transit and shuttles from each base</h2>
          <p className={styles.sectionIntro}>
            These are the services the operators and cities publish, as we checked them in November
            2026. Fares and schedules change, so confirm them before you plan around one.
          </p>
        </div>
        <div className={styles.grid}>
          {transit.map(({ name, text }) => (
            <article key={name} className={styles.card}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardText}>{text}</p>
            </article>
          ))}
        </div>
        <p className={styles.sectionIntro}>
          Fares: Metro lists a $1.75 one-way fare and a $5 daily cap, which applies to TAP and
          contactless payment but not to cash on buses. Big Blue Bus lists a $4.50 day pass, which
          is a separate product from Metro&apos;s cap.
        </p>
      </section>
      <section aria-labelledby="costs-la" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>The full price</p>
          <h2 id="costs-la">What a Los Angeles hotel costs beyond the room rate</h2>
          <p className={styles.sectionIntro}>
            Taxes, district assessments, destination fees and parking are separate charges. Compare
            the all-in nightly cost for your dates.
          </p>
        </div>
        <div className={styles.grid}>
          {costs.map(({ name, text }) => (
            <article key={name} className={styles.card}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardText}>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
