"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./is-nyc-safe-at-night.json";
import styles from "./isnycsafeatnightclient.module.css";

const verdictCards = [
  {
    label: "Best after dark",
    title: "Stay where the city is still moving",
    copy: "Midtown, the Upper West Side, DUMBO, and busy Village streets feel easiest because there is light, transit, and steady foot traffic.",
  },
  {
    label: "Use caution",
    title: "Nightlife blocks change after midnight",
    copy: "East Village and the Lower East Side can be fun, but crowds get less predictable. Know your route home before the night starts.",
  },
  {
    label: "Skip late",
    title: "Do not turn quiet areas into adventures",
    copy: "Avoid isolated parks, empty industrial blocks, and low-foot-traffic neighborhoods after dark, especially when traveling alone.",
  },
];

const safetyRules = [
  "Use main avenues instead of quiet side streets.",
  "Wait near other riders or the conductor on subway platforms.",
  "Leave nightlife areas before you feel tired or disoriented.",
  "Use rideshare for late, low-transit, or unfamiliar transfers.",
];

const safeNeighborhoods = data.neighborhoodSafetyGrid.filter((item) => item.safetyLevel === "Safe").slice(0, 5);
const mixedNeighborhoods = data.neighborhoodSafetyGrid.filter((item) => item.safetyLevel === "Mixed").slice(0, 4);
const avoidNeighborhoods = data.neighborhoodSafetyGrid.filter((item) => item.safetyLevel === "Avoid Late").slice(0, 3);

function riskClass(level: string) {
  const value = level.toLowerCase();
  if (value.includes("low") || value.includes("safe")) return styles.safe;
  if (value.includes("mixed") || value.includes("moderate")) return styles.mixed;
  return styles.avoid;
}

export default function Page() {
  const meter = data.safetyMeter;
  const mainScenarios = data.scenarioCards.slice(0, 4);

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
              <span className={styles.current}>Night Safety</span>
            </nav>
            <p className={styles.eyebrow}>NYC night safety guide</p>
            <h1>Is NYC Safe at Night for Solo Travelers?</h1>
            <p>
              Yes, in the right places. The practical answer is to stay on bright, active streets,
              use transit with intention, and avoid quiet blocks that remove your backup options.
            </p>
            <div className={styles.heroActions}>
              <Link href="/destination/nyc/booking?tab=hotels&from=is-nyc-safe-at-night" className={styles.primaryButton}>
                See safe-area hotels
              </Link>
              <a href="#neighborhoods" className={styles.secondaryButton}>
                Check neighborhoods
              </a>
            </div>
            <div className={styles.trustRow} aria-label="Safety guide trust signals">
              <span>NYPD + MTA context</span>
              <span>Solo-traveler scenarios</span>
              <span>Neighborhood-based advice</span>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image
              src={data.heroSafety.heroImage}
              alt="New York City skyline and streets at night"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.heroImage}
            />
            <div className={styles.verdictBadge}>
              <span>{meter.meterScore}/10</span>
              <strong>{meter.overallRating}</strong>
            </div>
          </div>
        </section>

        <section className={styles.verdictGrid} aria-label="NYC night safety verdict">
          {verdictCards.map((card) => (
            <article key={card.label}>
              <span>{card.label}</span>
              <strong>{card.title}</strong>
              <p>{card.copy}</p>
            </article>
          ))}
        </section>

        <section className={styles.answerBand}>
          <div>
            <p className={styles.eyebrow}>The short answer</p>
            <h2>{meter.overallRating}</h2>
            <p>
              NYC's busiest areas remain active and well-patrolled at night. Risks increase in
              quieter neighborhoods and during late-night transit.
            </p>
          </div>
          <ul>
            {safetyRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </section>

        <section id="neighborhoods" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Where it feels easiest</p>
            <h2>Choose areas by nighttime conditions, not reputation alone</h2>
            <p>
              Safety at night is less about borough stereotypes and more about lighting, active
              storefronts, transit options, and how many people are around when you leave.
            </p>
          </div>
          <div className={styles.neighborhoodGrid}>
            <div className={styles.zoneColumn}>
              <h3>Comfortable late</h3>
              {safeNeighborhoods.map((item) => (
                <article key={item.name}>
                  <span className={`${styles.riskTag} ${riskClass(item.safetyLevel)}`}>{item.safetyLevel}</span>
                  <strong>{item.name}</strong>
                  <p>{item.why}</p>
                </article>
              ))}
            </div>
            <div className={styles.zoneColumn}>
              <h3>Good with timing</h3>
              {mixedNeighborhoods.map((item) => (
                <article key={item.name}>
                  <span className={`${styles.riskTag} ${riskClass(item.safetyLevel)}`}>{item.safetyLevel}</span>
                  <strong>{item.name}</strong>
                  <p>{item.why} {item.avoidAfter ? `Aim to leave by ${item.avoidAfter}.` : ""}</p>
                </article>
              ))}
            </div>
            <div className={styles.zoneColumn}>
              <h3>Skip late solo</h3>
              {avoidNeighborhoods.map((item) => (
                <article key={item.name}>
                  <span className={`${styles.riskTag} ${riskClass(item.safetyLevel)}`}>{item.safetyLevel}</span>
                  <strong>{item.name}</strong>
                  <p>{item.why}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Real situations</p>
            <h2>What to do in the moments travelers actually worry about</h2>
            <p>
              The goal is not to feel fearless. It is to have simple defaults when the street,
              station, or crowd changes around you.
            </p>
          </div>
          <div className={styles.scenarioGrid}>
            {mainScenarios.map((scenario) => (
              <article key={scenario.title} className={styles.scenarioCard}>
                <span className={`${styles.riskTag} ${riskClass(scenario.riskLevel)}`}>{scenario.riskLevel}</span>
                <h3>{scenario.title}</h3>
                <p>{scenario.whatToExpect}</p>
                <ul>
                  {scenario.howToStaySafe.slice(0, 3).map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.transitSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Getting back safely</p>
            <h2>Late-night transit should feel deliberate</h2>
          </div>
          <div className={styles.transitGrid}>
            {Object.entries(data.transitSafety).map(([mode, info]) => (
              <article key={mode}>
                <span className={`${styles.riskTag} ${riskClass(info.riskLevel)}`}>{info.riskLevel}</span>
                <h3>{mode === "rideshare" ? "Rideshare" : mode[0].toUpperCase() + mode.slice(1)}</h3>
                <p><strong>Best:</strong> {info.bestHours || "Depends on route"}</p>
                <p><strong>Watch:</strong> {info.avoidHours || "No major restriction"}</p>
                <ul>
                  {info.tips.slice(0, 2).map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
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
            <h2>Common NYC night safety questions</h2>
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

        <section className={styles.resourceLinks}>
          <Link href="/destination/nyc/nyc-safety-guide">Full NYC safety guide</Link>
          <Link href="/destination/nyc/subway-safety-guide">Subway safety</Link>
          <Link href="/destination/nyc/best-areas-to-stay">Best areas to stay</Link>
          <Link href="/destination/nyc/solo-trip-to-nyc">Solo NYC guide</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
