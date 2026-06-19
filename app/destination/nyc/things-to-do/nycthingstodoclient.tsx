'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './nycthingstodoclient.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const quickChoices = [
  {
    label: 'First NYC trip',
    title: 'Pick icons that stack together',
    copy: 'Statue ferry, Brooklyn Bridge, Top of the Rock, Central Park, and one Broadway night cover the classic memories without zigzagging.',
  },
  {
    label: 'Free day',
    title: 'Build around walks and views',
    copy: 'Staten Island Ferry, Grand Central, the High Line, Little Island, and Brooklyn Bridge can make a full day with almost no ticket spend.',
  },
  {
    label: 'Culture day',
    title: 'Choose one museum zone',
    copy: 'Do the Met with Central Park, MoMA with Midtown, or the Tenement Museum with the Lower East Side. One anchor is enough.',
  },
  {
    label: 'Food-led trip',
    title: 'Let neighborhoods drive the plan',
    copy: 'Chelsea Market, Chinatown, Koreatown, Williamsburg, and the East Village work best when food is the reason for being there.',
  },
];

const mustDoCards = [
  {
    number: '01',
    title: 'Walk Brooklyn Bridge into DUMBO',
    meta: 'Free | 45-75 minutes',
    copy: 'Start on the Manhattan side and end with skyline photos, coffee, and waterfront time in Brooklyn Bridge Park.',
  },
  {
    number: '02',
    title: 'Pick one observation deck',
    meta: 'Ticketed | sunset or late night',
    copy: 'Top of the Rock is the best skyline photo. SUMMIT is the most theatrical. Do one well instead of buying three similar views.',
  },
  {
    number: '03',
    title: 'Use Central Park as a reset',
    meta: 'Free | half day friendly',
    copy: 'Bethesda Terrace, Bow Bridge, the Mall, and the Reservoir are the easiest way to slow the trip without leaving Manhattan.',
  },
  {
    number: '04',
    title: 'Pair Broadway with Midtown dinner',
    meta: 'Ticketed | evening anchor',
    copy: 'Book the show first, then choose dinner in Hell\'s Kitchen, Koreatown, or the Theater District so the night stays simple.',
  },
  {
    number: '05',
    title: 'Do one serious museum',
    meta: 'Ticketed | 2-4 hours',
    copy: 'The Met, MoMA, Natural History, and the Tenement Museum all deserve real time. Treat one as the main event, not a filler stop.',
  },
  {
    number: '06',
    title: 'Take the free harbor view',
    meta: 'Free | 60-90 minutes',
    copy: 'The Staten Island Ferry gives you skyline and Statue of Liberty views without turning the day into a full island visit.',
  },
];

const neighborhoodRoutes = [
  ['Lower Manhattan + DUMBO', 'Statue ferry, 9/11 Memorial plaza, Brooklyn Bridge, DUMBO waterfront.'],
  ['Midtown + Theater District', 'Top of the Rock, Grand Central, NYPL, Bryant Park, Broadway.'],
  ['Chelsea + West Side', 'High Line, Chelsea Market, galleries, Little Island, Hudson Yards.'],
  ['Upper East Side + Central Park', 'The Met, Guggenheim, Frick, Bethesda Terrace, Reservoir loop.'],
  ['Brooklyn day', 'Prospect Park, Brooklyn Botanic Garden, Williamsburg food, Brooklyn Heights Promenade.'],
];

const mapSummaryRoutes = neighborhoodRoutes.slice(0, 2);
const detailRoutes = neighborhoodRoutes.slice(2);

const budgetMoves = [
  'Do one paid skyline view and make the rest free walks.',
  'Use food halls, slice shops, bagels, and bakeries between big activities.',
  'Avoid crossing town for single stops. Cluster each day by neighborhood.',
  'Check current museum free hours before building the day around them.',
];

const faqItems = [
  {
    question: 'How many things should I plan per day?',
    answer: 'Two major anchors plus one flexible neighborhood walk is the sweet spot. More than that usually turns the day into transit management.',
  },
  {
    question: 'What is the best free thing to do in NYC?',
    answer: 'For first-timers, the Brooklyn Bridge walk or Staten Island Ferry gives the biggest NYC feeling for no ticket cost.',
  },
  {
    question: 'Which observation deck should I choose?',
    answer: 'Top of the Rock is the safest recommendation for skyline photos. SUMMIT One Vanderbilt is better if you want a more immersive experience.',
  },
  {
    question: 'Should I buy attraction passes?',
    answer: 'Only if you are genuinely doing several paid attractions in a short window. Otherwise, individual tickets plus free walks usually feel less forced.',
  },
];

export default function NYCThingsToDoClient() {
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
              <span className={styles.current}>Things to Do</span>
            </nav>
            <p className={styles.eyebrow}>NYC things to do</p>
            <h1>The Best Things to Do in New York City</h1>
            <p>
              New York gets easier when you stop treating it like a checklist. Pick one big anchor,
              cluster nearby neighborhoods around it, and leave room for the city to surprise you.
            </p>
            <div className={styles.heroActions}>
              <Link href="/destination/nyc/booking?tab=activities&from=things-to-do" className={styles.primaryButton}>
                See tickets and tours
              </Link>
              <a href="#planner" className={styles.secondaryButton}>Browse by trip style</a>
            </div>
            <div className={styles.trustRow} aria-label="Activity planning highlights">
              <span><strong>Curated</strong> trip anchors</span>
              <span><strong>Free + paid</strong> options</span>
              <span><strong>Neighborhood</strong> routing</span>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image
              src="/destination/nyc-things-to-do-brooklyn-bridge.jpg"
              alt="People walking the Brooklyn Bridge promenade toward the Manhattan skyline"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.heroImage}
            />
          </div>
        </section>

        <section id="planner" className={styles.quickPanel} aria-label="Choose your NYC activity style">
          {quickChoices.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>

        <section className={styles.editorialSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>What is worth your time</p>
            <h2>Start with six moves that make most NYC trips work</h2>
            <p>
              These are not just famous attractions. They are reliable trip anchors: easy to explain,
              easy to route around, and strong enough to carry a day.
            </p>
          </div>
          <div className={styles.mustDoGrid}>
            {mustDoCards.map((card) => (
              <article key={card.title} className={styles.mustDoCard}>
                <span>{card.number}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p className={styles.meta}>{card.meta}</p>
                  <p>{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.routeMap} aria-label="Suggested NYC activity clusters by area">
            <div className={styles.mapPanel}>
              <span className={styles.mapLabel}>NYC activity clusters</span>
              <div className={styles.mapImageWrap}>
                <Image
                  src="/destination/nyc-activity-cluster-map.svg"
                  alt="Map-style NYC activity clusters numbered across Manhattan and Brooklyn"
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  className={styles.mapImage}
                />
              </div>
              <div className={styles.mapSummary}>
                {mapSummaryRoutes.map(([title, copy], index) => (
                  <article key={title}>
                    <span>{index + 1}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Route like a local</p>
            <h2>Group your days by area, not by popularity</h2>
            <p>
              The fastest way to make NYC feel hard is to bounce between boroughs for isolated stops.
              Better days have one neighborhood spine, one ticketed anchor, and a backup food plan.
            </p>
            <div className={styles.routeList}>
              {detailRoutes.map(([title, copy], index) => (
                <div key={title}>
                  <span>{index + 3}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/destination/nyc/neighborhood-guide" className={styles.inlineLink}>
              Open the NYC neighborhood guide
            </Link>
          </div>
        </section>

        <section className={styles.splitSection}>
          <div className={styles.advicePanel}>
            <p className={styles.eyebrow}>Budget logic</p>
            <h2>Spend where the ticket changes the day</h2>
            <ul>
              {budgetMoves.map((move) => (
                <li key={move}>{move}</li>
              ))}
            </ul>
          </div>
          <div className={styles.yearPanel}>
            <span>2026 planning note</span>
            <p>
              Big-event periods can make hotel prices, observation deck slots, ferries, and Broadway
              seats move faster. If your dates overlap holidays, sports, or major city events, book
              the fixed pieces early and keep the rest flexible.
            </p>
          </div>
        </section>

        <section className={styles.experienceSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Pick your lens</p>
            <h2>Choose the version of New York you came for</h2>
          </div>
          <div className={styles.experienceGrid}>
            <Link href="/destination/nyc/neighborhood-guide?interest=sightseeing" className={styles.experienceCard}>
              <span>Landmarks</span>
              <h3>Big sights without a frantic route</h3>
              <p>Use Lower Manhattan, Midtown, and DUMBO as your main sightseeing zones.</p>
            </Link>
            <Link href="/destination/nyc/neighborhood-guide?interest=culture" className={styles.experienceCard}>
              <span>Culture</span>
              <h3>Museums, galleries, and performance</h3>
              <p>Build around the Met, MoMA, Broadway, or the Lower East Side instead of stacking everything.</p>
            </Link>
            <Link href="/destination/nyc/neighborhood-guide?interest=food" className={styles.experienceCard}>
              <span>Food</span>
              <h3>Neighborhoods you can taste</h3>
              <p>Chinatown, Koreatown, Chelsea, Williamsburg, and the East Village all work as food-led routes.</p>
            </Link>
            <Link href="/destination/nyc/neighborhood-guide?interest=outdoors" className={styles.experienceCard}>
              <span>Outdoors</span>
              <h3>Walks, parks, bridges, and skyline air</h3>
              <p>Central Park, the High Line, Brooklyn Bridge, and the waterfront balance the busy parts of town.</p>
            </Link>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Fast answers</p>
            <h2>Common NYC activity questions</h2>
          </div>
          <div className={styles.faqGrid}>
            {faqItems.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bookingBand}>
          <div>
            <p className={styles.eyebrow}>Plan the fixed pieces</p>
            <h2>Book the activities that anchor the trip</h2>
            <p>
              Observation decks, Broadway nights, ferry windows, and guided tours are the pieces worth
              reserving early. Keep neighborhood wandering flexible around them.
            </p>
          </div>
          <Link href="/destination/nyc/booking?tab=activities&from=things-to-do" className={styles.bookingButton}>
            See tickets and tours
          </Link>
        </section>

        <section className={styles.resourceLinks}>
          <Link href="/destination/nyc/nyc-subway-map">NYC subway map</Link>
          <Link href="/destination/nyc/food">Food guide</Link>
          <Link href="/destination/nyc/landmark">Landmarks guide</Link>
          <Link href="/destination/nyc/group-travel">Group travel guide</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
