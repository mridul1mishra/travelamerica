"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "./page.module.css";

const hotelAreas = [
  {
    title: "Staffed arrival",
    area: "Choose a hotel with a 24-hour front desk",
    text: "For a first solo NYC trip, a staffed lobby matters more than a trendy block. It gives you a reset point after a late show, delayed train, or uncomfortable ride.",
  },
  {
    title: "Simple last walk",
    area: "Stay within a short, bright walk of transit",
    text: "Favor hotels near active avenues, direct subway lines, and open businesses so your final five minutes do not feel isolated.",
  },
  {
    title: "Women-specific review scan",
    area: "Read for lobby, entrance, and night-return details",
    text: "Look for reviews from solo women that mention the entrance, elevator access, street lighting, and whether staff handled late arrivals smoothly.",
  },
];

const confidenceCards = [
  {
    title: "Transit after dark",
    text: "Use busier stations, avoid empty cars, and ride near the conductor area when the platform feels quiet. For OMNY, maps, and route basics, use the subway guide.",
  },
  {
    title: "Walking alone",
    text: "Favor avenues over quiet side streets, especially after shows, late dinners, or when leaving bars.",
  },
  {
    title: "Hotel routine",
    text: "Ask staff to write room numbers, check locks on arrival, and keep one late-night return plan ready.",
  },
];

const scenarios = [
  {
    label: "Subway",
    title: "The platform feels too empty",
    steps: ["Wait near a staffed booth, Help Point, or conductor marker", "Move to a populated car or leave the station if your instinct says no"],
  },
  {
    label: "Attention",
    title: "Someone keeps engaging after you say no",
    steps: ["Use one clear line: 'No, I am leaving now'", "Move toward staff, a counter, a lobby, or other people without explaining"],
  },
  {
    label: "Street",
    title: "A block suddenly feels quiet",
    steps: ["Cross early to the brighter side", "Step into a hotel lobby, store, or restaurant to reset"],
  },
  {
    label: "Rideshare",
    title: "Your car arrives late at night",
    steps: ["Match plate, car model, and driver photo", "Share the trip and sit in the back seat"],
  },
  {
    label: "Dining",
    title: "You want dinner solo",
    steps: ["Choose counter seats or busy dining rooms", "Keep your bag in front of you, not behind your chair"],
  },
  {
    label: "Hotel",
    title: "You are checking in alone",
    steps: ["Ask for the room number to be written down", "Use the latch, deadbolt, and peephole every time"],
  },
  {
    label: "Nightlife",
    title: "You are leaving a bar or show",
    steps: ["Set the pickup before stepping outside", "Skip quiet shortcuts and wait inside or near staff until the ride arrives"],
  },
];

const packingItems = [
  "Crossbody zip bag",
  "Backup battery",
  "Comfortable shoes",
  "Digital ID copy",
  "Hotel address offline",
  "Small door wedge",
];

const faqs = [
  {
    question: "Is NYC safe for solo female travelers?",
    answer:
      "Yes, for most travelers who choose an active base, keep late-night routes simple, and change plans when a station, street, or interaction feels off.",
  },
  {
    question: "Where should a solo woman stay in NYC?",
    answer:
      "Start with practical hotel checks: a 24-hour front desk, active streets, short walks from transit, and recent reviews from solo women. Use the best-areas guide for full neighborhood comparisons.",
  },
  {
    question: "Should I use the subway at night?",
    answer:
      "Often yes on busy routes, but be selective. Use populated stations, avoid empty cars, ride near the conductor area when possible, and switch to a cab or rideshare if transfers feel too quiet.",
  },
  {
    question: "What should I avoid at night?",
    answer:
      "Avoid isolated side streets, empty parks, industrial edges, and long walks where you would have few open businesses or transit options nearby.",
  },
  {
    question: "What if someone makes me uncomfortable?",
    answer:
      "Do not debate or explain. Change direction, enter a public place, call someone, or ask staff/security for help. Call 911 if you feel threatened.",
  },
  {
    question: "Are rideshares safe late at night?",
    answer:
      "They are often the simplest option after late shows or drinks. Always match the plate and driver details, sit in the back, share your trip, and wait inside until the car arrives.",
  },
];

export default function FemaleSoloTravelGuide() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.headerSpacer} />

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/destination/nyc">New York City</Link>
              <span>/</span>
              <span>Female Solo Travel</span>
            </nav>

            <p className={styles.eyebrow}>NYC solo female safety</p>
            <h1>Is NYC Safe for Solo Female Travelers?</h1>
            <p className={styles.lede}>
              Yes, for most first-time solo women who choose an active base, keep late-night routes simple, and trust the moment when a street, station, or interaction starts to feel off.
            </p>
            <p className={styles.byline}>
              By <Link href="/about#manisha-shukla">Manisha Shukla</Link> · Updated June 2026 · Fact-checked against NYPD &amp; MTA data
            </p>

            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/destination/nyc/booking?tab=hotels&from=female-solo">
                See safe-area hotels
              </Link>
              <Link className={styles.secondaryButton} href="/destination/nyc/subway-safety-guide">
                Check subway safety
              </Link>
            </div>

            <div className={styles.trustRow} aria-label="Guide context">
              <span><strong>Updated 2026</strong></span>
              <span><strong>Sources:</strong> NYPD + MTA</span>
              <span><strong>Verdict:</strong> safe with street smarts, not a guarantee</span>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <Image
              src="/data/metadataimage/nyc-night-hero.webp"
              alt="Lower Manhattan skyline lit at night across the water"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className={styles.verdictCard}>
              <span>Practical verdict</span>
              <strong>Safe when your base, route, and return plan stay simple</strong>
            </div>
          </div>
        </section>

        <section className={styles.sourceBox} aria-labelledby="source-box-heading">
          <div>
            <p className={styles.eyebrow}>Source-backed context</p>
            <h2 id="source-box-heading">Use data for reassurance, and scenarios for decisions</h2>
            <p>
              NYPD reported citywide major crime down 6.2% year-to-date through May 2026. NYPD and MTA also reported 2025 as the safest subway year since 2009, excluding pandemic years, with major subway crime down 4%. Those numbers are helpful context, but your best solo choices still depend on the exact block, station, hour, and route.
            </p>
          </div>
          <div className={styles.sourceActions}>
            <a href="https://www.nyc.gov/site/nypd/stats/crime-statistics/compstat.page" target="_blank" rel="noreferrer">
              NYPD CompStat
            </a>
            <a href="https://new.mta.info/safety-and-security" target="_blank" rel="noreferrer">
              MTA safety guidance
            </a>
            <Link href="/destination/nyc/nyc-safety-guide">
              General NYC safety guide
            </Link>
          </div>
        </section>

        <section id="choosing-where-to-stay" className={styles.sectionGrid} aria-labelledby="base-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Where to stay</p>
            <h2 id="base-heading">Use stay heuristics, not fixed safety rankings</h2>
            <p>
              Safety varies block by block, so do not treat any neighborhood list as a guarantee. Pick a base by the routines it supports: staffed arrival, a short final walk, food nearby, and a simple way back after dark.
              {" "}
              <Link href="/destination/nyc/best-areas-to-stay" className={styles.inlineLink}>Compare full NYC stay areas here.</Link>
            </p>
          </div>
          <div className={styles.cardGrid}>
            {hotelAreas.map((item) => (
              <article className={styles.infoCard} key={item.title}>
                <span>{item.title}</span>
                <h3>{item.area}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.band} aria-labelledby="confidence-heading">
          <div className={styles.bandHeader}>
            <p className={styles.eyebrow}>Simple defaults</p>
            <h2 id="confidence-heading">Make the safe choice easy before you need it</h2>
            <p className={styles.bandIntro}>
              This page owns the women-specific decisions. For broader subway logistics, hotel lists, and itinerary planning, use the dedicated NYC guides linked below.
            </p>
          </div>
          <div className={styles.threeCards}>
            {confidenceCards.map((card) => (
              <article className={styles.ruleCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="scenarios" className={styles.sectionStack} aria-labelledby="scenario-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Real situations</p>
            <h2 id="scenario-heading">What to do in the moments travelers actually worry about</h2>
            <p>
              These are not fear tactics. They are quick defaults for the few moments when confidence matters most, written for a first-time solo traveler who wants calm options ready before she needs them.
            </p>
          </div>
          <div className={styles.scenarioGrid}>
            {scenarios.map((scenario) => (
              <article className={styles.scenarioCard} key={scenario.title}>
                <span>{scenario.label}</span>
                <h3>{scenario.title}</h3>
                <ul>
                  {scenario.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.splitSection} aria-labelledby="night-heading">
          <div>
            <p className={styles.eyebrow}>Night plan</p>
            <h2 id="night-heading">NYC at night works best with a return plan</h2>
            <p>
              Broadway, dinner, rooftops, and late walks can all be part of a solo trip. The key is deciding your return before you are tired, distracted, or on a quiet block.
            </p>
            <div className={styles.linkStack}>
              <Link className={styles.textLink} href="/destination/nyc/is-nyc-safe-at-night">
                Read the full NYC night safety guide
              </Link>
              <Link className={styles.textLink} href="/destination/nyc/solo-trip-to-nyc">
                Use the broader solo trip guide for dining, Broadway, budget, and itinerary planning
              </Link>
            </div>
          </div>
          <div className={styles.checkPanel}>
            <h3>Before you go out</h3>
            <ul>
              <li>Save the hotel address offline</li>
              <li>Check the final subway transfer</li>
              <li>Know the rideshare pickup corner</li>
              <li>Keep battery above 30 percent</li>
            </ul>
          </div>
        </section>

        <section className={styles.utilityGrid} aria-label="Packing and official context">
          <article className={styles.utilityPanel}>
            <p className={styles.eyebrow}>Pack light, stay ready</p>
            <h2>Six things that pull real weight</h2>
            <div className={styles.itemGrid}>
              {packingItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
          <article className={styles.utilityPanel}>
            <p className={styles.eyebrow}>Context, not guarantees</p>
            <h2>Use official sources for current conditions</h2>
            <p>
              Safety advice changes by time, route, and neighborhood. Check official city and transit resources when making late-night plans, and use the dedicated subway guide for route logistics.
            </p>
            <div className={styles.sourceLinks}>
              <a href="https://www.nyc.gov/site/nypd/stats/crime-statistics/compstat.page" target="_blank" rel="noreferrer">
                NYPD CompStat
              </a>
              <a href="https://new.mta.info/safety-and-security" target="_blank" rel="noreferrer">
                MTA safety
              </a>
              <Link href="/destination/nyc/subway-safety-guide">
                Subway safety guide
              </Link>
            </div>
          </article>
        </section>

        <section className={styles.authorBox} aria-label="About the author">
          <p>
            <strong>About the author.</strong>{" "}
            <Link href="/about#manisha-shukla">Manisha Shukla</Link> writes and reviews travel guidance for Travels Americas with a focus on clear, calm decision-making for visitors. She holds a PhD in English Literature from Banaras Hindu University.
          </p>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Quick answers</p>
            <h2 id="faq-heading">Solo female travel FAQ</h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <article className={styles.faqCard} key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.nextSteps} aria-label="Related NYC planning guides">
          <Link href="/destination/nyc/best-areas-to-stay">Best areas to stay</Link>
          <Link href="/destination/nyc/solo-trip-to-nyc">Solo trip guide</Link>
          <Link href="/destination/nyc/subway-safety-guide">Subway safety</Link>
          <Link href="/destination/nyc/is-nyc-safe-at-night">Night safety</Link>
        </section>
      </main>
      <BookingCTA
        variant="full"
        text="Book a central NYC hotel for a solo-friendly base"
        href="/destination/nyc/booking?tab=hotels&from=female-solo"
        label="See NYC hotels"
      />
      <Footer />
    </>
  );
}
