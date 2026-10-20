"use client";

import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "./lametromap.module.css";

const metroMapPdf =
  "https://cdn.beta.metro.net/wp-content/uploads/2026/05/09224824/26-1362_map_GM_Master_DCR-2-copy.pdf";
const metroSchedules = "https://www.metro.net/riding/schedules/";
const metroFares = "https://www.metro.net/fares/";
const metroFareCapping = "https://www.metro.net/fares/fare-capping/";
const laxGuidance = "https://www.metro.net/destinations/lax/";

const cards = [
  {
    title: "How to Read the Map",
    description: "Identify line letters, stations and transfers before choosing your route.",
    href: "#how-to-read-map",
  },
  {
    title: "Metro Journeys for Visitors",
    description: "Explore useful journey ideas, then check the route from your own starting point.",
    href: "#visitor-journeys",
  },
  {
    title: "Getting to LAX",
    description: "Understand the connection between Metro rail and the airport terminals.",
    href: "#getting-to-lax",
  },
  {
    title: "Planning Routes & Paying Fares",
    description: "Check your journey, compare payment options and understand fare caps.",
    href: "#planning-and-fares",
  },
  {
    title: "Metro Tips for Solo Travelers",
    description: "Plan the whole journey, including station access and your return trip.",
    href: "#solo-travel-tips",
  },
];

const visitorRoutes = [
  {
    line: "B",
    name: "B Line",
    coverage: "Union Station to North Hollywood",
    guidance:
      "Use the official map and schedule to choose the station that fits your Hollywood or Valley destination and check any onward connection.",
  },
  {
    line: "E",
    name: "E Line",
    coverage: "East Los Angeles to Santa Monica",
    guidance:
      "For a downtown-to-Santa Monica journey, choose your nearest suitable station and check the walking route at the destination.",
  },
  {
    line: "A",
    name: "A Line",
    coverage: "Pomona to Long Beach",
    guidance:
      "Downtown-to-Long Beach is one possible visitor journey, not the full line; check the schedule for your segment.",
  },
  {
    line: "D",
    name: "D Line",
    coverage: "Union Station to Wilshire/La Cienega",
    guidance:
      "Check current schedules for the operating segment; Westwood/UCLA is not currently an operating D Line destination.",
  },
  {
    line: "C + K",
    name: "C and K Lines",
    coverage: "Both serve the LAX/Metro Transit Center",
    guidance:
      "The station is not an airline terminal. Continue to the terminal shuttle connection described below.",
  },
];

const mapSteps = [
  ["Read the line letter", "Use the letter shown on the map and station signs to identify your line. Match the letter as well as the color."],
  ["Find your stations", "Locate your starting station and destination, then follow the route between them."],
  ["Check the legend", "Use the map legend to understand transfer points and other symbols. Do not assume every LA-area transport service follows the same fare rules."],
  ["Confirm the direction", "Check the destination shown on the platform and arriving train before boarding."],
  ["Check current service", "A network map shows the system layout, not every closure, delay or temporary change. Review the current schedule for the line you intend to use."],
];

const soloTips = [
  ["Check the final walk", "Review the distance and route between your station and accommodation or attraction."],
  ["Plan your return journey", "Check service for the time you actually expect to travel, rather than assuming the outbound plan will also work later."],
  ["Account for luggage and accessibility", "Consider transfers, stairs and walking portions. Verify the accessibility information relevant to your route."],
  ["Keep important details handy", "Save your accommodation address and planned route before setting off."],
  ["Compare alternatives when needed", "If a transit journey does not suit your timing, luggage or comfort, compare taxi or rideshare options. No transport mode guarantees safety."],
  ["Stay flexible", "Recheck your plan if service changes or your itinerary shifts."],
];

function Resources({ links }: { links: { href: string; label: string }[] }) {
  return (
    <footer className={styles.resources}>
      <h3>Resources</h3>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default function LAMetroMapClient() {
  return (
    <>
      <Header />
      <main className={styles.laMetroPage} id="top">
        <div className={styles.pageInner}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>Los Angeles transit guide</p>
            <h1>LA Metro Map</h1>
            <p className={styles.heroIntro}>
              View the LA Metro map and learn how to plan journeys, make transfers and reach popular visitor destinations. Use the map for an overview, then check current schedules and service information before traveling.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={metroSchedules} target="_blank" rel="noreferrer">
                View Full Metro Map
              </a>
              <a className={styles.secondaryButton} href={metroMapPdf} target="_blank" rel="noreferrer">
                Open PDF Map
              </a>
            </div>
            <p className={styles.mapAttribution}>
              Independent guide. Content reviewed October 20, 2026. Map source: LA Metro; map revision: May 2026. The PDF does not include live service updates.
            </p>
          </header>

          <section className={styles.mapPreview} aria-labelledby="map-preview-heading">
            <div className={styles.mapPreviewMark} aria-hidden="true">
              <span className={styles.mapLineBlue} />
              <span className={styles.mapLineRed} />
              <span className={styles.mapLineGold} />
              <span className={styles.mapStationOne} />
              <span className={styles.mapStationTwo} />
              <span className={styles.mapStationThree} />
            </div>
            <div>
              <p className={styles.eyebrow}>Official system map</p>
              <h2 id="map-preview-heading">LA Metro Rail &amp; Busway Map</h2>
              <p>May 2026 revision · Subject to change. The graphic is decorative; open Metro&apos;s PDF for the actual map.</p>
              <a href={metroMapPdf} target="_blank" rel="noreferrer">Open the full-size map PDF ↗</a>
            </div>
          </section>

          <nav className={styles.guideCards} aria-label="LA Metro guide sections">
            {cards.map((card, index) => (
              <a className={styles.guideCard} href={card.href} key={card.href}>
                <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className={styles.cardArrow} aria-hidden="true">→</span>
              </a>
            ))}
          </nav>

          <section className={styles.guideSection} id="how-to-read-map" aria-labelledby="map-reading-heading">
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Map basics</p>
              <h2 id="map-reading-heading">How to Read the LA Metro Map</h2>
              <p>Start with your destination and the nearest useful station. Then trace the route back to your starting point, checking whether you need to change lines.</p>
            </header>
            <ol className={styles.stepList}>
              {mapSteps.map(([title, text], index) => (
                <li key={title}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ol>
            <Resources links={[{ href: metroSchedules, label: "Official Metro schedules and maps" }]} />
          </section>

          <section className={styles.guideSection} id="visitor-journeys" aria-labelledby="visitor-journeys-heading">
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Popular rail corridors</p>
              <h2 id="visitor-journeys-heading">Metro Journeys for First-Time Visitors</h2>
              <p>These are journey ideas, not complete directions from every hotel. Use your actual starting point, destination and departure time to plan. Route coverage reflects Metro’s current published schedules; check for changes before traveling.</p>
            </header>
            <div className={styles.routeGrid}>
              {visitorRoutes.map((route) => (
                <article className={styles.routeCard} key={route.name}>
                  <span className={styles.lineBadge}>{route.line}</span>
                  <h3>{route.name}</h3>
                  <p className={styles.routeCoverage}>{route.coverage}</p>
                  <p>{route.guidance}</p>
                </article>
              ))}
            </div>
            <Resources links={[{ href: metroSchedules, label: "Check Metro line routes and schedules" }]} />
          </section>

          <section className={styles.guideSection} id="getting-to-lax" aria-labelledby="lax-heading">
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Airport connection</p>
              <h2 id="lax-heading">Getting to LAX by Metro</h2>
              <p>Metro rail connects to the LAX/Metro Transit Center, where you transfer to airport-terminal transportation. The transit center is not the same place as your airline terminal.</p>
            </header>
            <ol className={styles.stepList}>
              <li><span className={styles.stepNumber}>1</span><div><h3>Plan your journey to the transit center</h3><p>Metro currently lists both the C and K lines as serving the LAX/Metro Transit Center.</p></div></li>
              <li><span className={styles.stepNumber}>2</span><div><h3>Follow terminal-connection signs</h3><p>Metro directs passengers to Bus Bays 1 and 2 for a free shuttle serving all LAX terminals.</p></div></li>
              <li><span className={styles.stepNumber}>3</span><div><h3>Allow time for the connection</h3><p>Include the transfer and terminal journey when planning when to leave. Check current airport access instructions before departure.</p></div></li>
            </ol>
            <aside className={styles.infoNote}>
              <p>Metro also lists FlyAway service from Union Station and Van Nuys as another way to reach LAX terminals. Check its separate fare and schedule; Metro fare caps do not automatically apply.</p>
            </aside>
            <Resources links={[{ href: laxGuidance, label: "Official Metro guidance for LAX" }]} />
          </section>

          <section className={styles.guideSection} id="planning-and-fares" aria-labelledby="fares-heading">
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Trip planning and payment</p>
              <h2 id="fares-heading">Planning Routes &amp; Paying Your Fare</h2>
            </header>
            <div className={styles.fareContent}>
              <article>
                <h3>Plan the complete journey</h3>
                <p>Enter your actual starting point and destination in a journey planner. Review walking portions, transfers and your return trip, then compare the result with Metro’s current line schedules and service information. A route that works well for one hotel may be less convenient from another.</p>
              </article>
              <article>
                <h3>Understand regular fares</h3>
                <p>Metro’s regular one-way fare is $1.75. When you tap to ride, Metro-to-Metro transfers are free within two hours; round trips are not included.</p>
                <p>Eligible regular-fare travel is capped at $5 per day and $18 within seven days. Use the same payment method consistently so eligible rides count toward your cap. Cash payments on buses do not qualify for fare caps.</p>
              </article>
              <article>
                <h3>Choose a payment option</h3>
                <ul>
                  <li>A physical credit or debit card, or a supported digital-wallet card.</li>
                  <li>A reusable TAP card with stored value.</li>
                  <li>A supported digital TAP option, including Apple Wallet or the TAP app.</li>
                  <li>Exact cash on buses only.</li>
                </ul>
                <p>Follow current station instructions for tapping at entry and, where required, exit. Check Metro’s payment guidance instead of relying on another city’s rules.</p>
              </article>
              <article>
                <h3>Check before you travel</h3>
                <p>Fares, payment options and service can change. Confirm current information with Metro, especially if your journey includes another operator or a separate airport service.</p>
              </article>
            </div>
            <Resources links={[
              { href: metroFares, label: "Metro fares and payment options" },
              { href: metroFareCapping, label: "Metro fare capping details" },
              { href: metroSchedules, label: "Metro schedules and maps" },
            ]} />
          </section>

          <section className={styles.guideSection} id="solo-travel-tips" aria-labelledby="solo-heading">
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Travel planning</p>
              <h2 id="solo-heading">Metro Tips for Solo Travelers</h2>
              <p>Plan around the complete journey, not just the train ride. These are planning suggestions, not a guarantee of personal safety.</p>
            </header>
            <ul className={styles.tipList}>
              {soloTips.map(([title, text]) => (
                <li key={title}><h3>{title}</h3><p>{text}</p></li>
              ))}
            </ul>
            <p className={styles.safetyLink}>For more transit planning context, read the <a href="/destination/la/metro-safety-guide">LA Metro Safety Guide</a>.</p>
            <Resources links={[{ href: metroSchedules, label: "Check Metro schedules before you go" }]} />
          </section>

          <div className={styles.backToTopWrap}>
            <a className={styles.backToTop} href="#top" aria-label="Back to top">
              <span className={styles.backToTopArrow} aria-hidden="true">↑</span>
              <span className={styles.backToTopLabel} aria-hidden="true">Back to top</span>
            </a>
          </div>
        </div>
      </main>
      <BookingCTA
        variant="full"
        headline="Choose a Hotel That Fits Your Journey"
        text="Compare your accommodation's location with the places you plan to visit, including station access and your evening return journey."
        href="/destination/la/hotel?from=la-metro-map"
        label="Browse Los Angeles Hotels"
      />
      <Footer />
    </>
  );
}
