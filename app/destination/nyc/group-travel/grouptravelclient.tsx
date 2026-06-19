"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Footer from "./components/Footer/Footer";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import faqData from "@/content/destination/nyc/group-travel/faq/faqsection.json";
import styles from "./grouptravel.module.css";

const tripRules = [
  ["Stay central", "Midtown or Downtown Brooklyn keeps subway transfers simple."],
  ["Name the exit", "Meet at a specific corner or subway exit, not just the station."],
  ["Avoid rush hour", "Do not move the whole group through Times Square or Penn Station at peak commute."],
  ["Book one anchor", "Plan one fixed reservation or ticket per day, then keep the rest flexible."],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Midtown, Chelsea Market, Broadway",
    image: "/data/majorcities/newyork/assets/group/nyc-group-itinerary-day1-times-square-chelsea-market-broadway.png",
    alt: "NYC group itinerary with Times Square, Chelsea Market, High Line, and Broadway",
    morning: "Times Square photos, Rockefeller Center, Top of the Rock before midday crowds.",
    afternoon: "Chelsea Market lunch, then a flat High Line walk that lets people peel off easily.",
    evening: "Hell's Kitchen dinner for 6+ and Broadway seats booked as one block.",
  },
  {
    day: "Day 2",
    title: "Harlem, museums, East Village",
    image: "/data/majorcities/newyork/assets/group/nyc-group-itinerary-day2-harlem-museums-east-village.png",
    alt: "Group visiting a New York museum on a group itinerary",
    morning: "Start uptown at the Apollo or Central Park edge, then move south as a group.",
    afternoon: "Pick one museum, not three. MoMA, Natural History, or Tenement Museum all work.",
    evening: "East Village bars or live music, where nearby options keep the group together.",
  },
  {
    day: "Day 3",
    title: "Central Park, Upper East Side, skyline cruise",
    image: "/data/majorcities/newyork/assets/group/nyc-group-itinerary-day3-dinner-cruise-dancing-manhattan.png",
    alt: "Friends on a Hudson River dinner cruise with Manhattan skyline",
    morning: "The Met when it opens, then Central Park for a slower shared reset.",
    afternoon: "Guggenheim or Frick if people still want art; cafe break if they do not.",
    evening: "Hudson River dinner cruise for dinner, skyline, and a low-logistics finale.",
  },
];

const boroughCards = [
  {
    title: "Manhattan",
    image: "/data/majorcities/newyork/assets/group/group-travel-nyc-1280x853.jpg",
    alt: "Manhattan landmarks route for NYC group travel",
    best: "first-timers and iconic photos",
    copy: "Statue of Liberty and Ellis Island need a half day, while Times Square, Rockefeller Center, MoMA, and the High Line work well in compact group routes.",
  },
  {
    title: "Brooklyn",
    image: "/data/majorcities/newyork/assets/group/group-travel-nyc-brooklyn-1280x853.jpg",
    alt: "Friends on the Brooklyn waterfront with skyline views",
    best: "skyline walks and breweries",
    copy: "Walk the Brooklyn Bridge toward DUMBO, then use Williamsburg or Bushwick for breweries, pizza, and long shared tables.",
  },
  {
    title: "The Bronx",
    image: "/data/majorcities/newyork/assets/group/group-travel-nyc-small-bronx.webp",
    alt: "Group travel highlights in the Bronx",
    best: "ballgames and Arthur Avenue",
    copy: "Yankee Stadium, New York Botanical Garden, Wave Hill, and Arthur Avenue all suit groups that want a less obvious NYC day.",
  },
];

const diningMoves = [
  {
    title: "Koreatown BBQ",
    tag: "Best after Broadway",
    copy: "Large tables, shared grills, late hours, and easy Midtown access.",
  },
  {
    title: "Chinatown dim sum",
    tag: "Best for 8+",
    copy: "Fast turnover and round-table ordering without splitting every dish.",
  },
  {
    title: "Food halls",
    tag: "Best for split tastes",
    copy: "Chelsea Market, Essex Market, and Time Out Market solve picky-eater politics.",
  },
  {
    title: "Pizza",
    tag: "Best low-cost save",
    copy: "The fastest way to feed everyone between timed activities.",
  },
];

const broadwaySteps = [
  ["10+ people", "Most Broadway group sales start around 10 tickets, but show minimums vary."],
  ["Book as one block", "Do not piece seats together later if sitting together matters."],
  ["Use official channels", "Broadway Inbound and Broadway.org show pages list group contacts."],
];

export default function GroupTravelPage() {
  return (
    <>
      <NavigationHeader />
      <div className={styles.headerSpacer} aria-hidden="true" />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>NYC group travel guide</p>
            <h1>New York City Group Travel Guide</h1>
            <p>
              A practical 3-day plan for keeping your group close to good food, easy subway routes,
              Broadway, and the landmarks people actually want to see.
            </p>
            <div className={styles.heroActions}>
              <Link href="/destination/nyc/booking?tab=hotels&from=group-travel" className={styles.primaryButton}>
                Compare group stays
              </Link>
              <a href="#itinerary" className={styles.secondaryButton}>Use the 3-day plan</a>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image
              src="/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.webp"
              alt="NYC group travel essentials including backpack, sneakers, metro card, and city map"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              className={styles.heroImage}
            />
          </div>
        </section>

        <section className={styles.quickPanel} aria-label="NYC group trip rules">
          {tripRules.map(([title, copy]) => (
            <div key={title}>
              <span>{title}</span>
              <strong>{copy}</strong>
            </div>
          ))}
        </section>

        <section id="itinerary" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Three-day route</p>
            <h2>A group itinerary that avoids cross-town chaos</h2>
            <p>
              Each day has one anchor activity, one flexible food stop, and one easy evening. That
              gives the organizer structure without turning the trip into a forced march.
            </p>
          </div>
          <div className={styles.dayGrid}>
            {itinerary.map((day) => (
              <article className={styles.dayCard} key={day.day}>
                <div className={styles.cardImage}>
                  <Image src={day.image} alt={day.alt} fill sizes="(max-width: 900px) 100vw, 33vw" className={styles.image} />
                </div>
                <div className={styles.dayBody}>
                  <span>{day.day}</span>
                  <h3>{day.title}</h3>
                  <dl>
                    <div><dt>Morning</dt><dd>{day.morning}</dd></div>
                    <div><dt>Afternoon</dt><dd>{day.afternoon}</dd></div>
                    <div><dt>Evening</dt><dd>{day.evening}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="landmarks" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Borough strategy</p>
            <h2>Pick one area per half-day</h2>
            <p>
              The mistake groups make in NYC is jumping boroughs too often. Choose one cluster, give
              people a clear meeting point, and save the next borough for another block of the day.
            </p>
          </div>
          <div className={styles.boroughGrid}>
            {boroughCards.map((card) => (
              <article className={styles.boroughCard} key={card.title}>
                <div className={styles.cardImage}>
                  <Image src={card.image} alt={card.alt} fill sizes="(max-width: 900px) 100vw, 33vw" className={styles.image} />
                </div>
                <div>
                  <span>{card.best}</span>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="dining" className={styles.featureSection}>
          <div className={styles.diningMediaColumn}>
            <div className={styles.featureImage}>
              <Image
                src="/data/majorcities/newyork/assets/group/food/nyc-group-food.png"
                alt="NYC group dining table with shared plates"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.image}
              />
            </div>
            <aside className={styles.diningNote}>
              <span>Planner rule</span>
              <p>
                For groups of six or more, reserve one fixed dinner and keep the other meals flexible.
                New York works best when the food plan can absorb late trains, split interests, and tired walkers.
              </p>
            </aside>
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Group dining</p>
            <h2>Where to eat when everyone wants something different</h2>
            <p>
              Big groups need restaurants built for shared plates, fast turnover, or flexible ordering.
              Save tiny small-plate rooms for couples; send groups toward formats that actually fit.
            </p>
            <div className={styles.diningGrid}>
              {diningMoves.map((move) => (
                <article key={move.title} className={styles.diningCard}>
                  <span>{move.tag}</span>
                  <strong>{move.title}</strong>
                  <p>{move.copy}</p>
                </article>
              ))}
            </div>
            <Link href="/destination/nyc/food" className={styles.inlineLink}>Open the full NYC food guide</Link>
          </div>
        </section>

        <section className={styles.featureSectionAlt}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Keep people together</p>
            <h2>The logistics that matter more than another attraction</h2>
            <ul className={styles.cleanList}>
              <li>Put everyone on OMNY with their own card or phone.</li>
              <li>Use the same app, ideally Citymapper or the MTA app, so directions match.</li>
              <li>Choose exact meetups: "NW corner of 42nd and 7th," not "near Times Square."</li>
              <li>Expect 5-7 miles of walking per day, even with good subway planning.</li>
              <li>Split for optional stops, then regroup at a timed food or ticket anchor.</li>
            </ul>
          </div>
          <div className={styles.featureImage}>
            <Image
              src="/data/majorcities/newyork/assets/group/food/nyc-group-mocktail.png"
              alt="Group enjoying drinks at a New York City bar"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />
          </div>
        </section>

        <section id="broadway" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Broadway</p>
            <h2>Book the group night as one block</h2>
            <p>
              Broadway is the easiest shared memory of the trip, but seat planning gets messy fast.
              Treat it like the fixed anchor of the day and build dinner around the theater district.
              Use TKTS only as a backup when the group can split into pairs.
            </p>
          </div>
          <div className={styles.stepGrid}>
            {broadwaySteps.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bookingBand}>
          <div className={styles.bookingCopy}>
            <p className={styles.eyebrow}>Organizer shortcut</p>
            <h2>Keep the group on one easy route</h2>
            <p>
              Pick a hotel zone near express trains, then book the fixed moments first: Broadway,
              skyline views, Statue of Liberty ferries, and one food experience.
            </p>
          </div>
          <div className={styles.bookingPanel}>
            <span>Before you book</span>
            <ul>
              <li>Choose one hotel base for the whole group</li>
              <li>Hold Broadway or ferry tickets early</li>
              <li>Keep dinner within 15 minutes of the anchor plan</li>
            </ul>
            <Link href="/destination/nyc/booking?tab=hotels&from=group-travel" className={styles.bookingButton}>
              Compare group stays
            </Link>
          </div>
        </section>

        <FAQAccordion faqs={faqData} />
      </main>

      <Footer />
    </>
  );
}
