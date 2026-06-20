"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "./page.module.css";

const hotelAreas = [
  {
    title: "Best first base",
    area: "Upper West Side or Upper East Side",
    text: "Residential, well-connected, and calmer at night without feeling isolated.",
  },
  {
    title: "Most convenient",
    area: "Midtown near major avenues",
    text: "Easy transit and late foot traffic, but choose blocks that feel hotel-heavy and bright.",
  },
  {
    title: "Good after dinner",
    area: "Chelsea, Flatiron, or Brooklyn Heights",
    text: "Strong restaurant access and reliable ways back if you do not want a late subway transfer.",
  },
];

const confidenceCards = [
  {
    title: "Transit after dark",
    text: "Use busier stations, avoid empty cars, and stand near the conductor area when the platform feels quiet.",
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
    steps: ["Wait near a staffed booth or conductor marker", "Switch stations or take a rideshare if your instinct says no"],
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
    steps: ["Call the ride before stepping outside", "Avoid shortcuts through parks or quiet service streets"],
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
      "Yes, with normal city awareness. The safest trips usually stay close to active streets, reliable transit, and neighborhoods that still feel busy after dinner.",
  },
  {
    question: "Where should a solo woman stay in NYC?",
    answer:
      "Upper West Side, Upper East Side, Midtown, Chelsea, Flatiron, and Brooklyn Heights are strong starting points because they combine transit, hotel options, and steady foot traffic.",
  },
  {
    question: "Should I use the subway at night?",
    answer:
      "Often yes, but be selective. Use busy stations, avoid empty cars, and switch to a cab or rideshare if the route requires quiet transfers late at night.",
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
      "They are usually the simplest option after late shows or drinks. Always match the plate and driver details, sit in the back, and share your trip.",
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

            <p className={styles.eyebrow}>NYC solo travel safety</p>
            <h1>New York City for Solo Female Travelers</h1>
            <p className={styles.lede}>
              A practical NYC guide for choosing the right base, moving around after dark, and knowing what to do when a street, station, or situation changes.
            </p>

            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/destination/nyc/booking?tab=hotels&from=female-solo">
                See safe-area hotels
              </Link>
              <Link className={styles.secondaryButton} href="#scenarios">
                Review real situations
              </Link>
            </div>

            <div className={styles.trustRow} aria-label="Guide context">
              <span>Updated 2026</span>
              <span>Neighborhood-first advice</span>
              <span>NYPD + MTA context links below</span>
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
              <strong>Safe when you plan the base, route, and return</strong>
            </div>
          </div>
        </section>

        <section className={styles.sectionGrid} aria-labelledby="base-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Where to stay</p>
            <h2 id="base-heading">Pick the area before the hotel</h2>
            <p>
              Solo safety in New York is less about one perfect hotel and more about what surrounds it: subway choice, late food, open lobbies, and how simple your return route feels.
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
              These are not fear tactics. They are quick defaults for the few moments when confidence matters most.
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
            <Link className={styles.textLink} href="/destination/nyc/is-nyc-safe-at-night">
              Read the full NYC night safety guide
            </Link>
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
              Safety advice changes by time, route, and neighborhood. Check official city and transit resources when making late-night plans.
            </p>
            <div className={styles.sourceLinks}>
              <a href="https://www.nyc.gov/site/nypd/stats/crime-statistics/compstat.page" target="_blank" rel="noreferrer">
                NYPD CompStat
              </a>
              <a href="https://new.mta.info/safety-and-security" target="_blank" rel="noreferrer">
                MTA safety
              </a>
            </div>
          </article>
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
          <Link href="/destination/nyc/things-to-do">Things to do</Link>
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
