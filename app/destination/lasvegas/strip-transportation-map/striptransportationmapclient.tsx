"use client";

import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "../components/BookingCTA/BookingCTA";
import styles from "./striptransportationmap.module.css";

const monorailMap = "https://www.lvmonorail.com/route-map/";
const stationsUrl = "https://www.lvmonorail.com/stations/";
const monorailAccess = "https://www.lvmonorail.com/getting-monorail/";
const monorailTickets = "https://www.lvmonorail.com/ticket-information/";
const rtcMaps = "https://www.rtcsnv.com/ways-to-travel/schedules-maps/";
const rtcFares = "https://www.rtcsnv.com/ways-to-travel/fares-passes/";
const rtcApp = "https://www.rtcsnv.com/ways-to-travel/how-to-ride/ridertc-app/";
const airportUrl = "https://www.rtcsnv.com/ways-to-travel/transit-services/airport-transit-routes/";

const guides = [
  ["Monorail Stations & Connections", "Find the station that fits your journey and check the walking route to its entrance.", "#monorail"],
  ["Using the Deuce Bus", "Choose the right stop, direction and RTC ticket for your Strip journey.", "#deuce"],
  ["Getting to Fremont Street", "Plan a downtown journey without assuming the Monorail reaches Fremont Street.", "#fremont-street"],
  ["Reaching Your Hotel", "Compare the complete journey, including station entrances and the final walk.", "#hotel-connections"],
  ["Airport Connections", "Find official airport bus information and plan a separate airport transfer.", "#airport"],
  ["Return Trips & Travel Tips", "Check operating times, service changes and the journey back to your accommodation.", "#travel-tips"],
];
const stations = ["MGM Grand", "Horseshoe / Paris", "Flamingo / Caesars Palace", "Harrah’s / The LINQ", "Boingo at LVCC", "Westgate", "SAHARA"];

function Resources({ items }: { items: [string, string][] }) {
  return <aside className={styles.resources}><h3>Resources</h3><ul>{items.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label} ↗</a></li>)}</ul></aside>;
}

export default function LasVegasStripTransportationMapClient() {
  return <>
    <Header links={[
      { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
      { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
      { href: "/destination/lasvegas/is-lasvegas-safe-at-night", label: "Night Safety" },
    ]} />
    <main className={styles.page} id="top"><div className={styles.inner}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Las Vegas visitor guide</p>
        <h1>Las Vegas Strip Transportation Map</h1>
        <p className={styles.intro}>Find official Las Vegas Monorail and Deuce bus maps, compare their coverage, and plan journeys between your hotel and the places you want to visit.</p>
        <div className={styles.actions}><a className={styles.primary} href={monorailMap} target="_blank" rel="noreferrer">View Monorail Map ↗</a><a className={styles.secondary} href={rtcMaps} target="_blank" rel="noreferrer">View Deuce Bus Map ↗</a></div>
        <p className={styles.ticketNote}>These services use separate tickets. Check each operator’s current routes, fares and service information before traveling.</p>
        <p className={styles.sourceNote}>Independent visitor guide · Reviewed October 20, 2026<br />Check operator links for current maps and service updates.</p>
      </header>

      <section className={styles.mapSection} aria-labelledby="choose-map-heading">
        <header className={styles.mapIntro}><h2 id="choose-map-heading">Choose Your Map</h2></header>
        <div className={styles.mapGrid}>
        <article className={styles.mapPanel}><p className={styles.eyebrow}>Monorail route overview</p><h2>Las Vegas Monorail Route Overview</h2><p>The Monorail route runs from MGM Grand to SAHARA and serves seven stations. Check station access and current hours before your trip.</p>
          <p className={styles.routeDirection}>Station order · south to north</p><ol className={styles.stationLine} aria-label="Monorail station sequence from south to north">{stations.map((name) => <li key={name}>{name}</li>)}</ol>
          <a className={styles.textLink} href={monorailMap} target="_blank" rel="noreferrer">Open Official Monorail Map ↗</a><p className={styles.panelNote}>This sequence is an original text orientation aid, not an official map or a geographic scale.</p>
        </article>
        <article className={styles.mapPanel}><p className={styles.eyebrow}>Deuce service overview</p><h2>Deuce Bus Service Overview</h2><p>The Deuce serves the Strip and downtown Las Vegas. Use RTC’s current route map and schedule to identify the stop, direction and service changes for your journey.</p>
          <div className={styles.busRoute} aria-label="Deuce service area summary"><span>Las Vegas Strip</span><span aria-hidden="true">↕</span><span>Downtown Las Vegas</span></div>
          <a className={styles.textLink} href={rtcMaps} target="_blank" rel="noreferrer">Open Current RTC Maps ↗</a><p className={styles.panelNote}>This is a service-area summary, not an RTC route map. Confirm the current route with RTC.</p>
        </article>
        </div>
      </section>

      <nav className={styles.guideCards} aria-label="Las Vegas transportation guide sections">{guides.map(([title, description, href], i) => <a className={styles.card} href={href} key={href}><span className={styles.cardIcon} aria-hidden="true">{["🚝", "🚌", "🌆", "🏨", "✈️", "🕒"][i]}</span><span className={styles.cardTitle}>{title}</span><span className={styles.cardDescription}>{description}</span><span className={styles.cardAction}>Read guide →</span></a>)}</nav>

      <section className={styles.section} id="monorail"><p className={styles.eyebrow}>01 · Rail</p><h2>Monorail Stations &amp; Connections</h2>
        <p>The Las Vegas Monorail runs between MGM Grand and SAHARA, with seven stations along its route. It can be useful when both ends of your journey are convenient to its stations. Check station-access directions rather than judging the walk only by the nearest hotel name.</p>
        <ol><li><strong>Locate both stations.</strong> Use the official route map to identify where you will board and leave the train.</li><li><strong>Check station access.</strong> Consult the operator’s station guide for entrance directions and the connection to your destination.</li><li><strong>Compare the whole journey.</strong> Include the walk to the station and from your arrival station, not just time aboard the train.</li><li><strong>Plan your return.</strong> Check the operating hours for your travel day before buying tickets.</li></ol>
        <p>The Monorail does not operate around the clock. It currently lists service beginning at 7 a.m., with closing times varying by day. Check current hours before an early or late journey.</p>
        <Resources items={[["Official Monorail route map", monorailMap], ["Monorail station guide", stationsUrl], ["Monorail access directions and hours", monorailAccess], ["Monorail ticket information", monorailTickets]]} />
      </section>

      <section className={styles.section} id="deuce"><p className={styles.eyebrow}>02 · Bus</p><h2>Using the Deuce Bus</h2>
        <p>The Deuce serves the Strip and downtown Las Vegas. Use RTC’s current map and schedule to find the correct boarding stop and direction. Review service alerts before setting off, particularly during major events.</p>
        <ol><li><strong>Find the destination and stop.</strong> Check the current route map instead of assuming a stop is beside every hotel entrance.</li><li><strong>Confirm your direction.</strong> Use destination and stop information to avoid boarding on the wrong side of your journey.</li><li><strong>Choose the correct fare.</strong> RTC says visitors must use Strip &amp; All Access fares on the Deuce.</li><li><strong>Check the return journey.</strong> Confirm the appropriate return stop and current service before leaving your destination.</li></ol>
        <h3>RTC Visitor Fares</h3><p>RTC currently lists these regular Strip &amp; All Access fares:</p>
        <div className={styles.tableWrap}><table><thead><tr><th scope="col">Ticket</th><th scope="col">Regular fare</th></tr></thead><tbody><tr><th scope="row">Single ride</th><td>$4</td></tr><tr><th scope="row">2-hour pass</th><td>$6</td></tr><tr><th scope="row">24-hour pass</th><td>$8</td></tr><tr><th scope="row">3-day pass</th><td>$20</td></tr></tbody></table></div>
        <p>Purchase methods differ by ticket type. Check RTC’s fare page for current rules, payment options and reduced-fare eligibility. RTC passes are separate from Monorail tickets; RTC mobile passes cannot be used on the Las Vegas Monorail.</p>
        <Resources items={[["RTC schedules and maps", rtcMaps], ["RTC fares and passes", rtcFares], ["rideRTC app information", rtcApp]]} />
      </section>

      <section className={styles.section} id="fremont-street"><p className={styles.eyebrow}>03 · Downtown</p><h2>Getting to Fremont Street</h2>
        <p>For a Strip-to-downtown journey, check the Deuce route and RTC trip-planning resources. The Monorail’s published route ends at SAHARA in the north; it does not provide a direct ride to Fremont Street.</p>
        <p>Plan from your exact starting point to your exact destination. Find the appropriate downtown stop on the current map and check the walk from that stop to the place you want to visit. Plan the return stop and direction as well.</p>
        <p><a className={styles.textLink} href={rtcMaps} target="_blank" rel="noreferrer">Check RTC Routes to Downtown ↗</a></p>
      </section>

      <section className={styles.section} id="hotel-connections"><p className={styles.eyebrow}>04 · Door to door</p><h2>Reaching Your Hotel</h2>
        <p>A nearby line on a map does not tell you the complete door-to-door journey. Compare the route from your actual hotel entrance to the boarding point, then from your arrival stop to your destination.</p>
        <ul><li><strong>Start with the correct entrance.</strong> Use your accommodation’s confirmed access information and the operator’s station or stop directions.</li><li><strong>Account for the final walk.</strong> Review the walking connection instead of relying only on a straight-line distance.</li><li><strong>Consider luggage and accessibility.</strong> Check relevant station or stop information and service notices.</li><li><strong>Compare alternatives.</strong> Walking, bus, Monorail, taxi or rideshare may suit different journeys. Choose for the specific trip rather than assuming one option is always best.</li></ul>
        <Resources items={[["Monorail station access information", stationsUrl], ["Browse Las Vegas hotels", "/destination/lasvegas/hotel"]]} />
      </section>

      <section className={styles.section} id="airport"><p className={styles.eyebrow}>05 · Airport</p><h2>Airport Connections</h2>
        <p>The Monorail’s published route connects MGM Grand and SAHARA, not Harry Reid International Airport. Plan the airport portion separately and check the terminal used by your airline.</p>
        <p>RTC’s current airport guidance lists Route 108 and the RED LINE at Terminal 1, Ground Level Zero. For travel between Terminal 3 and Terminal 1, RTC directs travelers to use the airport inter-terminal shuttle. Check RTC’s airport page for current routes, boarding locations and payment information. The South Strip Transit Terminal is a transit hub, not an airport terminal.</p>
        <p>Include transfers, luggage and your airline’s recommended arrival time when planning. Do not assume that every airport route serves every terminal.</p>
        <p><a className={styles.textLink} href={airportUrl} target="_blank" rel="noreferrer">Check Official Airport Bus Connections ↗</a></p><Resources items={[["RTC schedules and maps", rtcMaps]]} />
      </section>

      <section className={styles.section} id="travel-tips"><p className={styles.eyebrow}>06 · Before you go</p><h2>Return Trips &amp; Travel Tips</h2>
        <p>Before you leave, make sure the return journey works at the time you expect to travel.</p>
        <ul><li><strong>Check day-specific Monorail hours.</strong> Do not assume trains operate all night.</li><li><strong>Review current service information.</strong> Event-related diversions can change the journey shown on a standard map.</li><li><strong>Keep ticket systems separate.</strong> An RTC pass is not a Monorail ticket.</li><li><strong>Save your destination details.</strong> Keep your accommodation address and planned station or stop handy.</li><li><strong>Plan for your own needs.</strong> Consider walking distance, luggage, accessibility and personal comfort when comparing options.</li></ul>
        <p>No route or travel tip guarantees personal safety. If your plans change, reassess the complete journey rather than relying on the outbound route alone. Read the <a href="/destination/lasvegas/is-lasvegas-safe-at-night">Las Vegas night safety guide</a> for additional planning context.</p>
        <Resources items={[["RTC current schedules, maps and detours", rtcMaps], ["Current Monorail hours and station guide", stationsUrl]]} />
      </section>

      <section className={styles.faq}><p className={styles.eyebrow}>Quick answers</p><h2>Frequently Asked Questions</h2>
        <h3>Does the Monorail go to Fremont Street?</h3><p>No. Its published route runs between MGM Grand and SAHARA. Check RTC’s downtown services for a journey to Fremont Street.</p>
        <h3>Can I use an RTC pass on the Monorail?</h3><p>No. RTC mobile passes cannot be used on the Las Vegas Monorail. Buy the appropriate ticket for the service you use.</p>
        <h3>Does the Monorail go to the airport?</h3><p>Its published route does not reach the airport. Plan a separate airport connection using current airport transportation guidance.</p>
        <h3>Can I download a map for offline reference?</h3><p>If an operator provides a current downloadable map, save it before traveling. Downloaded maps do not include live service updates or every temporary diversion.</p>
      </section>
    </div></main>
    <BookingCTA variant="full" headline="Find a Hotel That Fits Your Las Vegas Plans" text="Compare your accommodation's location with the places you want to visit, including walking routes and access to your preferred transport." href="/destination/lasvegas/hotel?from=strip-transportation-map" label="Browse Las Vegas Hotels" />
    <Footer destination="lasvegas" />
  </>;
}
