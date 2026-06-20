"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Footer from "./components/Footer/Footer";
import styles from "./landmark.module.css";
import { LANDMARKS } from "./landmarks-data";

const priorityPicks = [
  {
    label: "First trip",
    title: "Statue ferry, Brooklyn Bridge, one skyline deck",
    copy: "This gives you harbor, walking, and the skyline without turning the day into a museum of lines.",
  },
  {
    label: "Best paid view",
    title: "Top of the Rock beats stacking decks",
    copy: "You get the Empire State Building in the frame, which is why it is the safer first-timer pick.",
  },
  {
    label: "Best free route",
    title: "Ferry, memorial plaza, bridge, Times Square",
    copy: "A strong landmark day can cost almost nothing if you use walks and transit intelligently.",
  },
];

const landmarkRoutes = [
  {
    title: "Classic first-timer day",
    tag: "Paid + free",
    steps: [
      "Statue of Liberty first ferry",
      "9/11 Memorial plaza",
      "Brooklyn Bridge into DUMBO",
      "Late Empire State or Top of the Rock",
    ],
  },
  {
    title: "Relaxed museum + skyline day",
    tag: "Lower stress",
    steps: [
      "Met Museum for 2-3 hours",
      "Central Park southbound walk",
      "Early dinner near Midtown West",
      "Sunset Top of the Rock",
    ],
  },
  {
    title: "Free landmark day",
    tag: "$0 attractions",
    steps: [
      "Staten Island Ferry",
      "Brooklyn Bridge",
      "NY Public Library + Bryant Park",
      "High Line and Times Square after dark",
    ],
  },
];

const faqs = [
  [
    "How far ahead should I book landmark tickets?",
    "Book Statue pedestal or crown access as early as possible. For observation decks, standard tickets are usually fine a few days out, but sunset slots need more lead time.",
  ],
  [
    "Are city passes worth it?",
    "Only if you will actually use four or more included attractions. For two or three landmarks, individual tickets are usually simpler and often cheaper.",
  ],
  [
    "Can I see most landmarks in three days?",
    "Yes, but it is better to group by area: Lower Manhattan and DUMBO, Central Park and Museum Mile, then Midtown and the West Side.",
  ],
  [
    "Which landmark is best for solo travelers?",
    "The Met, Brooklyn Bridge, High Line, and Top of the Rock are especially easy solo because they are self-paced and busy enough to feel comfortable.",
  ],
];

export default function LandmarkPage() {
  return (
    <>
      <NavigationHeader />
      <div className={styles.headerSpacer} aria-hidden="true" />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/destination/nyc">New York City</Link>
              <span aria-hidden="true">/</span>
              <span className={styles.current}>Landmarks</span>
            </nav>
            <p className={styles.eyebrow}>NYC landmarks guide</p>
            <h1>New York City Landmarks Guide</h1>
            <p>
              The best NYC landmark days are not about seeing everything. They are about choosing
              the right anchors, booking the tickets that matter, and grouping sights so the city
              feels exciting instead of exhausting.
            </p>
            <div className={styles.heroActions}>
              <Link href="/destination/nyc/booking?tab=activities&from=landmark" className={styles.primaryButton}>
                See landmark tickets
              </Link>
              <a href="#landmarks" className={styles.secondaryButton}>Compare landmarks</a>
            </div>
            <div className={styles.metaLine}>
              <span><strong>9</strong> major landmarks</span>
              <span><strong>Updated</strong> June 2026</span>
              <span><strong>Routes</strong> by area</span>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image
              src="/data/majorcities/newyork/assets/statue-of-liberty.jpg"
              alt="Statue of Liberty, New York skyline, bridges, and harbor view"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.heroImage}
            />
          </div>
        </section>

        <section className={styles.priorityGrid} aria-label="NYC landmark planning priorities">
          {priorityPicks.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>

        <section id="landmarks" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>What is worth planning around</p>
            <h2>Compare the landmark before you buy the ticket</h2>
            <p>
              Some landmarks need timed entry and half a day. Others are better as a walk-by,
              a photo stop, or a free route anchor.
            </p>
          </div>
          <div className={styles.landmarkGrid}>
            {LANDMARKS.map((landmark, index) => (
              <article key={landmark.id} id={landmark.id} className={styles.landmarkCard}>
                <div className={styles.cardHeader}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{landmark.name}</h3>
                    <p>{landmark.neighborhood}</p>
                  </div>
                </div>
                <dl className={styles.factGrid}>
                  <div>
                    <dt>Time</dt>
                    <dd>{landmark.timeNeeded}</dd>
                  </div>
                  <div>
                    <dt>Ticket</dt>
                    <dd>{landmark.ticket}</dd>
                  </div>
                  <div>
                    <dt>Best time</dt>
                    <dd>{landmark.bestTime}</dd>
                  </div>
                  <div>
                    <dt>Subway</dt>
                    <dd>{landmark.subway}</dd>
                  </div>
                </dl>
                <div className={styles.landmarkAdvice}>
                  <strong>What to do</strong>
                  <p>{landmark.whatToDo}</p>
                  <strong>Insider tip</strong>
                  <p>{landmark.soloTip}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="routes" className={styles.routeSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Build a real day</p>
            <h2>Use routes instead of a landmark checklist</h2>
          </div>
          <div className={styles.routeGrid}>
            {landmarkRoutes.map((route) => (
              <article key={route.title} className={styles.routeCard}>
                <span>{route.tag}</span>
                <h3>{route.title}</h3>
                <ol>
                  {route.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Practical answers</p>
            <h2>Landmark planning questions</h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map(([question, answer]) => (
              <article key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bookingBand}>
          <div>
            <p className={styles.eyebrow}>Book the fixed pieces</p>
            <h2>Reserve the landmarks where timing matters</h2>
            <p>
              Statue access, sunset observation decks, and museum-heavy days are the places to book
              ahead. Keep bridge walks, parks, and plazas flexible.
            </p>
          </div>
          <Link href="/destination/nyc/booking?tab=activities&from=landmark" className={styles.bookingButton}>
            See landmark tickets
          </Link>
        </section>

        <section className={styles.resourceLinks}>
          <Link href="/destination/nyc/things-to-do">Things to do</Link>
          <Link href="/destination/nyc/nyc-subway-map">NYC subway map</Link>
          <Link href="/destination/nyc/food">Food guide</Link>
          <Link href="/destination/nyc/best-areas-to-stay">Best areas to stay</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
