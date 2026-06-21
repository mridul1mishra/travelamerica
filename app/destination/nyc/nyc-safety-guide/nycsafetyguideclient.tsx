"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "./nycsafetyguide.module.css";

const safetyDefaults = [
  {
    title: "Stay where the city is awake",
    text: "Most visitor problems happen when a route gets quiet. Favor lit avenues, open businesses, staffed stations, and hotel-heavy blocks.",
  },
  {
    title: "Choose simple transit at night",
    text: "Daytime subway is usually straightforward. Late at night, reduce transfers and switch to a cab or rideshare when the route feels thin.",
  },
  {
    title: "Treat safety as situational",
    text: "The same area can feel different at noon, after a show, or during a delayed train. Make the next safe move, not a perfect plan.",
  },
];

const neighborhoodCards = [
  {
    tag: "Strong first base",
    title: "Upper West Side / Upper East Side",
    text: "Residential, museum-friendly, and calmer without feeling isolated. Good for families, solo travelers, and first visits.",
  },
  {
    tag: "Convenient",
    title: "Midtown near major avenues",
    text: "Easy for Broadway, stations, and hotel access. Pick bright hotel blocks and avoid wandering quiet side streets late.",
  },
  {
    tag: "Good balance",
    title: "Chelsea / Flatiron",
    text: "Restaurants, transit, and walkable evenings with fewer tourist bottlenecks than Times Square.",
  },
  {
    tag: "Daytime anchor",
    title: "Lower Manhattan",
    text: "Great for ferries, 9/11 Memorial, and bridge routes. After dark, plan the exact station or rideshare pickup.",
  },
  {
    tag: "Calmer stay",
    title: "Brooklyn Heights / DUMBO",
    text: "Scenic and relaxed, but late returns work best when the subway route is direct or you use a cab.",
  },
  {
    tag: "Use timing",
    title: "Nightlife pockets",
    text: "LES, East Village, Williamsburg, and Hell's Kitchen can be fun, but stay on active streets and leave with a return plan.",
  },
];

const situationCards = [
  {
    label: "Subway",
    title: "The platform is almost empty",
    steps: ["Wait near staff, cameras, or other riders", "Skip the train car if it is empty", "Use rideshare if the transfer feels wrong"],
  },
  {
    label: "Street",
    title: "A block suddenly feels quiet",
    steps: ["Turn back to the avenue", "Enter a hotel, store, or restaurant", "Do not keep walking just to save two minutes"],
  },
  {
    label: "Tourist zone",
    title: "Someone is pushing a deal or photo",
    steps: ["Keep moving without debate", "Do not hand over your phone or wallet", "Step toward staff or a busy storefront"],
  },
  {
    label: "Late return",
    title: "Dinner or Broadway ends late",
    steps: ["Choose the simplest route before leaving", "Use a marked cab stand or app pickup", "Avoid park shortcuts and quiet service streets"],
  },
  {
    label: "Hotel",
    title: "You are checking in alone",
    steps: ["Ask staff to write the room number", "Check the lock, latch, and peephole", "Do not share your floor or room in public"],
  },
  {
    label: "Phone",
    title: "You need directions in public",
    steps: ["Step aside before checking the map", "Keep a firm grip near subway doors", "Download your route before going underground"],
  },
];

const sourceCards = [
  {
    title: "NYPD crime context",
    text: "Use official CompStat reporting for current citywide and precinct-level crime trends instead of relying on viral anecdotes.",
    href: "https://www.nyc.gov/site/nypd/stats/crime-statistics/compstat.page",
    label: "Open NYPD CompStat",
  },
  {
    title: "MTA transit safety",
    text: "Check MTA safety guidance for subway, bus, and station practices before planning late-night or unfamiliar routes.",
    href: "https://new.mta.info/safety-and-security",
    label: "Open MTA safety",
  },
];

const emergencyCards = [
  {
    title: "Emergency",
    number: "911",
    text: "Call for immediate danger, medical emergencies, fires, or a crime in progress.",
  },
  {
    title: "Non-emergency city help",
    number: "311",
    text: "Use for city services, lost property direction, noise issues, and non-urgent local help.",
  },
  {
    title: "Immediate reset move",
    number: "Step inside",
    text: "Enter a hotel lobby, store, restaurant, museum, or staffed station before making your next decision.",
  },
];

const faqs = [
  {
    question: "Is NYC safe for tourists?",
    answer: "Generally yes in the areas most visitors use, especially during the day and early evening. The practical rule is to stay around active streets, reliable transit, and staffed public spaces.",
  },
  {
    question: "Is the NYC subway safe?",
    answer: "It is useful and widely used, but late-night judgment matters. Avoid empty platforms and cars, reduce transfers, and use a cab or rideshare if the route feels too quiet.",
  },
  {
    question: "Where should first-time visitors stay?",
    answer: "Upper West Side, Upper East Side, Midtown, Chelsea, Flatiron, and Brooklyn Heights are strong choices because they pair hotel access with transit and food nearby.",
  },
  {
    question: "What areas should visitors avoid at night?",
    answer: "Avoid isolated parks, industrial edges, empty blocks, and unfamiliar stations with few people around. It is less about a single neighborhood name and more about lighting, foot traffic, and exit options.",
  },
  {
    question: "Are Times Square and Midtown safe?",
    answer: "They are busy and heavily visited, but crowded areas still require pickpocket awareness. Stay alert, keep bags closed, and do not engage with aggressive street sellers.",
  },
  {
    question: "What is the safest late-night ride?",
    answer: "A yellow cab, licensed car service, or verified rideshare is usually simplest after a late show, drinks, or a route that would require quiet subway transfers.",
  },
];

export default function NYCSafetyGuideClient() {
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
              <span>Safety Guide</span>
            </nav>

            <p className={styles.eyebrow}>NYC safety guide</p>
            <h1>Is New York City Safe to Visit in 2026?</h1>
            <p className={styles.lede}>
              Yes for most visitors, with smart routing. This guide shows where to stay, how to use transit, what changes after dark, and what to do when a situation feels off.
            </p>

            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/destination/nyc/booking?tab=hotels&from=nyc-safety-guide">
                See safe-area hotels
              </Link>
              <Link className={styles.secondaryButton} href="#situations">
                Review real situations
              </Link>
            </div>

            <div className={styles.contextLine}>
              <span>Updated June 2026</span>
              <span>No safety guarantee</span>
              <span>Official source links included</span>
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
            <div className={styles.verdict}>
              <span>Practical answer</span>
              <strong>Safe when you stay in active areas and plan late returns.</strong>
            </div>
          </div>
        </section>

        <section className={styles.quickAnswer} aria-labelledby="quick-answer-heading">
          <div>
            <p className={styles.eyebrow}>Traveler verdict</p>
            <h2 id="quick-answer-heading">The safer NYC trip is built around simple defaults</h2>
          </div>
          <div className={styles.defaultGrid}>
            {safetyDefaults.map((item) => (
              <article className={styles.defaultCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionStack} aria-labelledby="neighborhood-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Where it feels easiest</p>
            <h2 id="neighborhood-heading">Neighborhood guidance for visitors</h2>
            <p>
              A neighborhood is not automatically safe or unsafe all day. For visitors, the better question is whether the area gives you clear transit, food, lights, and backup options.
            </p>
          </div>
          <div className={styles.neighborhoodGrid}>
            {neighborhoodCards.map((card) => (
              <article className={styles.neighborhoodCard} key={card.title}>
                <span>{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="situations" className={styles.sectionStack} aria-labelledby="situations-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Real situations</p>
            <h2 id="situations-heading">What to do when the plan changes</h2>
            <p>
              Travelers do not need dramatic warnings. They need fast defaults for common moments: quiet platforms, late returns, pushy street interactions, and finding the right way back.
            </p>
          </div>
          <div className={styles.situationGrid}>
            {situationCards.map((card) => (
              <article className={styles.situationCard} key={card.title}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <ul>
                  {card.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.splitSection} aria-labelledby="night-heading">
          <div>
            <p className={styles.eyebrow}>After dark</p>
            <h2 id="night-heading">Night safety is mostly about the route home</h2>
            <p>
              NYC can feel energetic and safe late at night in the right places. The risk rises when a traveler is tired, on a quiet block, unsure of the station, or trying to save money with a complicated route.
            </p>
            <Link className={styles.textLink} href="/destination/nyc/is-nyc-safe-at-night">
              Read the dedicated NYC night safety guide
            </Link>
          </div>
          <div className={styles.rulePanel}>
            <h3>Late-night decision rule</h3>
            <p>
              If your route requires an empty platform, a long transfer, or a quiet walk after the station, spend the extra money on a cab or rideshare.
            </p>
          </div>
        </section>

        <section className={styles.sourceSection} aria-labelledby="source-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Trust cue</p>
            <h2 id="source-heading">Use official data for current conditions</h2>
            <p>
              Safety pages should not pretend one number captures an entire city. Use official sources for current context, then apply street-level judgment to your exact route.
            </p>
          </div>
          <div className={styles.sourceGrid}>
            {sourceCards.map((source) => (
              <article className={styles.sourceCard} key={source.title}>
                <h3>{source.title}</h3>
                <p>{source.text}</p>
                <a href={source.href} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.emergencySection} aria-labelledby="emergency-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>If something feels wrong</p>
            <h2 id="emergency-heading">Do this before you overthink it</h2>
          </div>
          <div className={styles.emergencyGrid}>
            {emergencyCards.map((card) => (
              <article className={styles.emergencyCard} key={card.title}>
                <span>{card.title}</span>
                <strong>{card.number}</strong>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Quick answers</p>
            <h2 id="faq-heading">NYC safety FAQ</h2>
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
          <Link href="/destination/nyc/nyc-female-solo-travel-guide">Female solo guide</Link>
          <Link href="/destination/nyc/solo-trip-to-nyc">Solo trip guide</Link>
          <Link href="/destination/nyc/neighborhood-guide">Neighborhood guide</Link>
        </section>
      </main>
      <BookingCTA
        variant="full"
        text="Choose a hotel in a practical NYC neighborhood"
        href="/destination/nyc/booking?tab=hotels&from=nyc-safety-guide"
        label="See NYC hotels"
      />
      <Footer />
    </>
  );
}
