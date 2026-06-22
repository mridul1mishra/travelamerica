"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./is-nyc-safe-at-night.json";
import styles from "./isnycsafeatnightclient.module.css";

const sourceStats = [
  {
    label: "NYPD Q1 2026",
    stat: "Major crime down 5.3%; Q1 murders at the fewest ever recorded.",
    url: "https://www.nyc.gov/site/nypd/news/PR006/nypd-fewest-murders-shooting-incidents-recorded-history-first-three-months-the",
  },
  {
    label: "NYPD subway 2025",
    stat: "Major subway crime down 4%; safest subway year since 2009, excluding pandemic years.",
    url: "https://www.nyc.gov/site/nypd/news/PR001/nypd-safest-year-ever-gun-violence-fewest-shooting-incidents-shooting",
  },
  {
    label: "MTA Fall 2025",
    stat: "63% of riders felt safe on trains; 59% felt safe in stations.",
    url: "https://www.mta.info/article/mta-customers-count-fall-2025-survey-results",
  },
];

const visitingRules = [
  "Use busy tourist corridors and main avenues as your default route.",
  "Treat quiet blocks, empty cars, and late transfers as the moments to slow down.",
  "Keep your phone, wallet, and bag controlled in crowded tourist spots.",
  "Use a rideshare when the safer route is no longer obvious.",
];

const scamCards = [
  {
    title: "Times Square characters",
    copy: "A photo can become a payment demand. Agree on price first or keep walking.",
  },
  {
    title: "CD or bracelet hustle",
    copy: "Do not take anything handed to you unless you want to buy it.",
  },
  {
    title: "Fake badge or helpful stranger",
    copy: "Use official staff, hotel desks, or clearly marked transit help points for help.",
  },
  {
    title: "Subway pickpockets",
    copy: "Crowded platforms and train doors are the moments to secure your phone and bag.",
  },
];

const soloCards = [
  {
    title: "Solo travelers",
    copy: "NYC is one of the easier U.S. cities to be alone in because eating, walking, museums, shows, and transit all work solo.",
  },
  {
    title: "Female travelers",
    copy: "Stay in active hotel zones, use staffed stations where possible, and switch to rideshare when a route feels too empty.",
  },
  {
    title: "Nightlife",
    copy: "Pick the route home before you go out. The risk is usually not the venue; it is the tired walk or transfer after.",
  },
];

const afterDarkCards = [
  {
    title: "Before midnight",
    copy: "Subway and walking are usually workable on busy lines and main streets.",
  },
  {
    title: "After midnight",
    copy: "Prioritize direct routes, staffed stations, other riders, and short rideshare hops when transfers get awkward.",
  },
  {
    title: "After bars close",
    copy: "Leave with a plan, avoid isolated side streets, and do not wait outside alone for long pickups.",
  },
];

const internalLinks = [
  { href: "/destination/nyc/best-areas-to-stay", label: "Best areas to stay" },
  { href: "/destination/nyc/neighborhood-guide", label: "Neighborhood guide" },
  { href: "/destination/nyc/nyc-subway-map", label: "NYC subway map" },
  { href: "/destination/nyc/nyc-safety-guide", label: "Full NYC safety guide" },
  { href: "/destination/nyc/solo-trip-to-nyc", label: "Solo NYC guide" },
  { href: "/destination/nyc/nyc-female-solo-travel-guide", label: "Female solo guide" },
];

const grid = data.neighborhoodSafetyGrid as Array<{
  name: string;
  safetyLevel: string;
  why: string;
  bestTimeToVisit?: string;
  avoidAfter: string | null;
  notes: string | null;
  sourceUrl?: string;
  sourceLabel?: string;
}>;
const safeNeighborhoods = grid
  .filter((item) => item.safetyLevel === "Safe")
  .slice(0, 5);
const cautionNeighborhoods = grid
  .filter((item) => item.safetyLevel !== "Safe")
  .slice(0, 8);

function riskClass(level: string) {
  const value = level.toLowerCase();
  if (value.includes("low") || value.includes("safe")) return styles.safe;
  if (value.includes("mixed") || value.includes("moderate")) return styles.mixed;
  return styles.avoid;
}

export default function Page() {
  const meter = data.safetyMeter;
  const subway = data.transitSafety.subway;

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/destination/nyc">New York City</Link>
              <span aria-hidden="true">/</span>
              <span className={styles.current}>NYC Safety</span>
            </nav>
            <p className={styles.eyebrow}>Updated 2026 - NYC safety after dark</p>
            <h1>Is New York Safe at Night? A Neighborhood-by-Neighborhood 2026 Guide</h1>
            <p>
              Mostly yes - in 2026 New York is safe at night in busy, well-lit areas of Manhattan
              and the main Brooklyn visitor zones like DUMBO and Battery Park. It is not risk-free:
              subway platforms get quieter late, some neighborhoods change after dark, and side
              streets feel different after midnight. Below is a neighborhood-by-neighborhood read.
            </p>
            <p style={{ fontSize: "0.85rem", color: "#475569", margin: "0.4rem 0 0" }}>
              By <a href="/about" style={{ color: "#1d4ed8", fontWeight: 600, textDecoration: "none" }}>Mridul Mishra</a> · Updated June 2026 · Fact-checked against NYPD &amp; MTA data
            </p>
            <div className={styles.heroActions}>
              <Link href="/destination/nyc/booking?tab=hotels&from=is-nyc-safe-at-night" className={styles.primaryButton}>
                See safe-area hotels
              </Link>
              <a href="#subway-safety" className={styles.secondaryButton}>
                Check subway safety
              </a>
            </div>
            <div className={styles.trustRow} aria-label="Safety guide trust signals">
              <span><strong>Updated 2026</strong></span>
              <span><strong>Sources:</strong> NYPD + MTA</span>
              <span><strong>Verdict:</strong> safe with street smarts, not a guarantee</span>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image
              src={data.heroSafety.heroImage}
              alt="New York City skyline at night viewed from across the water"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.heroImage}
            />
            <div className={styles.verdictBadge}>
              <span>{meter.meterScore}/10</span>
              <strong>{meter.overallRating}</strong>
              <p>
                Method: caution score based on verified NYPD citywide crime, NYPD subway crime,
                MTA rider-safety survey data, and traveler conditions like lighting, foot traffic,
                and late-night transit options. Updated 2026.
              </p>
              <div className={styles.sourceLinks}>
                {sourceStats.map((source) => (
                  <a key={source.label} href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.answerBand}>
          <div>
            <p className={styles.eyebrow}>General visiting safety</p>
            <h2>Is NYC safe to visit right now?</h2>
            <p>
              Yes, with normal big-city awareness. The official data in this brief points in the
              right direction: Q1 2026 major crime was down, 2025 subway major crime was down, and
              MTA riders reported stronger safety satisfaction than the fear-heavy headlines imply.
            </p>
            <p>
              Planning daytime sightseeing too? See our{" "}
              <Link href="/destination/nyc/nyc-safety-guide">complete NYC safety guide</Link>{" "}
              for overall neighborhood and transit safety.
            </p>
          </div>
          <ul>
            {visitingRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </section>

        <section className={styles.statsBand} aria-label="Safety score sources">
          {sourceStats.map((source) => (
            <article key={source.label}>
              <span>{source.label}</span>
              <p>{source.stat}</p>
              <a href={source.url} target="_blank" rel="noreferrer">Source</a>
            </article>
          ))}
        </section>

        <section id="neighborhoods" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Safest neighborhoods at night</p>
            <h2>Safest NYC neighborhoods after dark</h2>
            <p>
              The safest-feeling stays are usually close to active streets, subway options, hotels,
              restaurants, and other people. Reputation matters less than the route you will actually
              walk at night.
            </p>
            <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "0.5rem" }}>
              These are general traveler-experience ratings based on lighting, foot traffic, late-night
              activity, and official NYPD precinct crime data — not official safety scores. Conditions
              vary block by block.
            </p>
          </div>
          <div className={styles.neighborhoodGrid}>
            {safeNeighborhoods.map((item) => (
              <article key={item.name} className={styles.zoneCard}>
                <span className={`${styles.riskTag} ${riskClass(item.safetyLevel)}`}>{item.safetyLevel}</span>
                <h3>{item.name}</h3>
                <p>{item.why}</p>
                {item.notes ? <p>{item.notes}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Use caution</p>
            <h2>Areas to be cautious after dark</h2>
            <p>
              This is not a borough blacklist. It is a planning filter: quieter blocks, sparse
              lighting, long transfers, and late-night crowd behavior are the things I would avoid
              when traveling solo.
            </p>
          </div>
          <div className={styles.neighborhoodGrid}>
            {cautionNeighborhoods.map((item) => (
              <article key={item.name} className={styles.zoneCard}>
                <span className={`${styles.riskTag} ${riskClass(item.safetyLevel)}`}>{item.safetyLevel}</span>
                <h3>{item.name}</h3>
                <p>{item.why}</p>
                {item.avoidAfter ? <p><strong>Better before:</strong> {item.avoidAfter}</p> : null}
                {item.sourceUrl ? <p><a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceLabel}</a></p> : null}
              </article>
            ))}
          </div>
        </section>

        <section id="subway-safety" className={styles.transitSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Subway safety</p>
            <h2>Is the NYC subway safe for visitors?</h2>
            <p>
              Generally yes, especially on busy lines and staffed stations. The brief's verified
              NYPD data says 2025 was the safest subway year since 2009, excluding pandemic years:
              major subway crime fell 4%, and transit robberies hit the lowest level ever recorded.
              The MTA's Fall 2025 survey also found 63% of riders felt safe on trains.
            </p>
          </div>
          <div className={styles.transitGrid}>
            <article>
              <span className={`${styles.riskTag} ${riskClass(subway.riskLevel)}`}>{subway.riskLevel}</span>
              <h3>Subway after dark</h3>
              <p><strong>Best:</strong> {subway.bestHours}</p>
              <p><strong>Watch:</strong> {subway.avoidHours}</p>
              <ul>
                {subway.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </article>
            <article>
              <span className={`${styles.riskTag} ${styles.safe}`}>Low</span>
              <h3>Bus or taxi backup</h3>
              <p>Use buses, yellow cabs, or rideshare when subway waits get long or the transfer feels too empty.</p>
              <ul>
                <li>Sit near the front on buses.</li>
                <li>Verify rideshare plates before entering.</li>
                <li>Share your trip when traveling late.</li>
              </ul>
            </article>
            <article>
              <span className={`${styles.riskTag} ${styles.mixed}`}>Street smart</span>
              <h3>Platform habits</h3>
              <p>The small choices matter more than fear: where you wait, which car you enter, and whether you pivot when a platform feels wrong.</p>
              <ul>
                <li>Wait near other riders.</li>
                <li>Avoid empty train cars.</li>
                <li>Keep phones and bags controlled at doors.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Common NYC scams</p>
            <h2>Scams tourists should watch for</h2>
            <p>
              The common scams are annoying more than dangerous, but they can make a first trip feel
              chaotic. The cleanest response is usually a polite no and continued walking.
            </p>
          </div>
          <div className={styles.scenarioGrid}>
            {scamCards.map((card) => (
              <article key={card.title} className={styles.scenarioCard}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Solo and female travelers</p>
            <h2>Safe solo travel is about defaults, not fear</h2>
            <p>
              The brief's solo-travel sources agree on the same practical pattern: NYC works well
              alone when you stay in busy zones, keep a route home, and switch transport when a
              street or station feels too empty.
            </p>
          </div>
          <div className={styles.scenarioGrid}>
            {soloCards.map((card) => (
              <article key={card.title} className={styles.scenarioCard}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Night-specific tips</p>
            <h2>After dark, choose the route with backup</h2>
            <p>
              At night, I would rather be on a slightly longer route with light, people, and transit
              choices than on a shortcut with no one around.
            </p>
          </div>
          <div className={styles.scenarioGrid}>
            {afterDarkCards.map((card) => (
              <article key={card.title} className={styles.scenarioCard}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.emergencyBand}>
          <div>
            <p className={styles.eyebrow}>If something feels wrong</p>
            <h2>Change the environment first</h2>
            <p>
              Move toward light, people, staff, storefronts, hotel lobbies, staffed stations, or a
              rideshare pickup spot. You do not need to justify changing direction.
            </p>
          </div>
          <div className={styles.emergencyCards}>
            <article>
              <strong>911</strong>
              <p>{data.emergencyBlock.call911}</p>
            </article>
            <article>
              <strong>311</strong>
              <p>{data.emergencyBlock.call311}</p>
            </article>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Fast answers</p>
            <h2>Common NYC safety questions</h2>
          </div>
          <div className={styles.faqGrid}>
            {data.faq.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bookingBand}>
          <div>
            <p className={styles.eyebrow}>Sleep somewhere easy</p>
            <h2>Pick a hotel zone that makes nights simpler</h2>
            <p>
              A well-connected hotel near busy avenues matters more than a slightly cheaper stay that
              forces long late-night transfers.
            </p>
          </div>
          <Link href="/destination/nyc/booking?tab=hotels&from=is-nyc-safe-at-night" className={styles.bookingButton}>
            See safe-area hotels
          </Link>
        </section>

        <section aria-label="About the author" style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto", padding: "1.25rem", border: "1px solid #e5e7eb", borderRadius: "8px", background: "#ffffff" }}>
          <p style={{ margin: 0, color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
            <strong style={{ color: "#111827" }}>About the author.</strong> <a href="/about" style={{ color: "#1d4ed8", textDecoration: "none" }}>Mridul Mishra</a> has visited New York City and writes the NYC travel guides for Travels Americas. Every safety claim here is checked against primary sources — current NYPD crime data and MTA rider surveys — not online rumor or recycled blog posts.
          </p>
        </section>

        <section className={styles.resourceLinks} aria-label="Related NYC planning guides">
          {internalLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
