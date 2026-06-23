"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Footer from "./components/Footer/Footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import EmailSignup from "@/app/components/destination/EmailSignup/EmailSignup";
import styles from "./SoloItinerary.module.css";

interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

interface SoloItineraryClientProps {
  grouped: Record<string, FaqItem[]>;
}

const tripBasics = [
  { label: "Best pace", value: "One anchor per day" },
  { label: "Transit style", value: "Subway + walks" },
  { label: "Evenings", value: "Lively, easy returns" },
];

const itineraryDays = [
  {
    day: "Day 1",
    title: "Central Park, museums, and skyline views",
    zone: "Uptown to Midtown",
    image: "/data/majorcities/newyork/assets/daysolonew.png",
    alt: "Illustrated solo NYC route through Central Park and Midtown",
    summary:
      "Start with places that are easy to enjoy alone: open park paths, major museums, and a sunset view that gives you the city without complicated routing.",
    stops: [
      { time: "Morning", title: "Central Park loop", detail: "Bethesda Terrace, Bow Bridge, and Strawberry Fields." },
      { time: "Midday", title: "Choose one museum", detail: "The Met for depth, MoMA for a tighter Midtown day." },
      { time: "Afternoon", title: "Rockefeller Center", detail: "Top of the Rock or a low-key Bryant Park break." },
      { time: "Evening", title: "Solo dinner nearby", detail: "Eataly Flatiron, Urbanspace, or a counter seat near your hotel." },
    ],
    soloNote: "This day is forgiving: plenty of benches, bathrooms, transit, and easy exit points.",
    link: "/destination/nyc/landmark",
    linkText: "Compare landmark stops",
  },
  {
    day: "Day 2",
    title: "Village, SoHo, High Line, and Broadway",
    zone: "Downtown to Theater District",
    image: "/data/majorcities/newyork/assets/day2solo.png",
    alt: "Solo traveler itinerary artwork for West Village, SoHo, Chelsea, and Broadway",
    summary:
      "Use neighborhoods as the structure. You get cafes, shops, galleries, and food halls without bouncing across the city for isolated attractions.",
    stops: [
      { time: "Morning", title: "West Village coffee", detail: "Start slow with a bagel or cafe before streets get crowded." },
      { time: "Midday", title: "SoHo and Nolita", detail: "Browse shops, galleries, and casual lunch counters." },
      { time: "Afternoon", title: "High Line to Chelsea Market", detail: "Good solo flow, snacks, bathrooms, and indoor backup." },
      { time: "Evening", title: "Broadway or jazz", detail: "Book one night anchor, then choose a simple return route." },
    ],
    soloNote: "This day works best when you keep the evening near a subway line or your hotel.",
    link: "/destination/nyc/food",
    linkText: "Find solo food stops",
  },
  {
    day: "Day 3",
    title: "Brooklyn Bridge, DUMBO, and local views",
    zone: "Lower Manhattan + Brooklyn",
    image: "/destination/nyc-things-to-do-brooklyn-bridge.jpg",
    alt: "People walking across the Brooklyn Bridge toward the Manhattan skyline",
    summary:
      "End with the most cinematic day: harbor views, the Brooklyn Bridge, DUMBO, and a calmer Brooklyn afternoon before a planned ride back.",
    stops: [
      { time: "Morning", title: "Staten Island Ferry", detail: "Free Statue of Liberty views with very little solo friction." },
      { time: "Midday", title: "Brooklyn Bridge walk", detail: "Start from Manhattan, then continue into DUMBO." },
      { time: "Afternoon", title: "Brooklyn Heights or Prospect Park", detail: "Pick one; do not overbuild the day." },
      { time: "Evening", title: "Skyline drink or early dinner", detail: "Westlight, Time Out Market, or a simple ferry/subway return." },
    ],
    soloNote: "Do the bridge in daylight and decide your late return before dinner.",
    link: "/destination/nyc/things-to-do",
    linkText: "Browse things to do",
  },
];

const plannerCards = [
  {
    title: "Stay central, not scattered",
    text: "Midtown, Chelsea, Flatiron, Upper West Side, and Brooklyn Heights keep this itinerary easy without constant cross-city rides.",
  },
  {
    title: "Protect the evening",
    text: "Each day has one night anchor. That is enough. The best solo nights are memorable, not overpacked.",
  },
  {
    title: "Leave a weather swap",
    text: "Use museums, Chelsea Market, Grand Central, and food halls as built-in rainy-day backups.",
  },
];

const faqs = [
  {
    question: "Is 3 days enough for a solo NYC trip?",
    answer: "Yes, if you group the city by area. Three days is enough for one landmarks day, one neighborhood day, and one Brooklyn or harbor day.",
  },
  {
    question: "Where should I stay for this itinerary?",
    answer: "Midtown, Chelsea, Flatiron, Upper West Side, and Brooklyn Heights work well because they keep transit simple and evenings easier.",
  },
  {
    question: "Is this itinerary safe at night?",
    answer: "It is designed around busy evening areas and simple returns. Avoid quiet shortcuts, check the final subway transfer, and use a cab or rideshare when tired.",
  },
  {
    question: "Should I book attractions ahead?",
    answer: "Book observation decks, Broadway, and major museums ahead if timing matters. Keep cafes, parks, and neighborhoods flexible.",
  },
  {
    question: "Can I do this without taxis?",
    answer: "Mostly yes. The subway handles the core route, but budget for one late-night cab or rideshare if the return feels too complicated.",
  },
  {
    question: "What should I skip?",
    answer: "Skip anything that forces a long backtrack for one photo. Solo NYC feels better when the day has a clear neighborhood spine.",
  },
];

export default function SoloItineraryClient({ grouped }: SoloItineraryClientProps) {
  const groupedCount = Object.values(grouped || {}).flat().length;

  return (
    <>
      <NavigationHeader />
      <main className={styles.page}>
        <div className={styles.headerSpacer} />

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/destination/nyc">New York City</Link>
              <span>/</span>
              <span>Solo Itinerary</span>
            </nav>

            <p className={styles.eyebrow}>3-day solo NYC plan</p>
            <h1>New York City Solo Itinerary That Actually Flows</h1>
            <p className={styles.lede}>
              A practical 3-day route for solo travelers: one city anchor each day, neighborhood-friendly pacing, easy food stops, and evenings that do not leave you stranded.
            </p>

            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/destination/nyc/booking?tab=hotels&from=solo-itinerary">
                Find hotels near the route
              </Link>
              <Link className={styles.secondaryButton} href="#day-plan">
                See the 3-day plan
              </Link>
            </div>

            <div className={styles.statsRow} aria-label="Trip basics">
              {tripBasics.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroMedia}>
            <Image
              src="/data/majorcities/newyork/assets/solo-travel-itinerary.webp"
              alt="Solo traveler looking over the New York City skyline at sunset"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </section>

        <section className={styles.plannerBand} aria-labelledby="planner-heading">
          <div className={styles.bandIntro}>
            <p className={styles.eyebrow}>How to use this itinerary</p>
            <h2 id="planner-heading">Solo travel works best when each day has a spine</h2>
          </div>
          <div className={styles.plannerGrid}>
            {plannerCards.map((card) => (
              <article className={styles.plannerCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <EmailSignup source="solo-itinerary" city="NYC" />

        <section id="day-plan" className={styles.daySection} aria-labelledby="days-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>The route</p>
            <h2 id="days-heading">Three days, three clean NYC zones</h2>
            <p>
              This plan avoids the classic first-timer mistake: crossing the city repeatedly for disconnected stops.
            </p>
          </div>

          <div className={styles.dayList}>
            {itineraryDays.map((day) => (
              <article className={styles.dayCard} key={day.day}>
                <div className={styles.dayImage}>
                  <Image src={day.image} alt={day.alt} fill sizes="(max-width: 900px) 100vw, 42vw" />
                </div>
                <div className={styles.dayContent}>
                  <div className={styles.dayMeta}>
                    <span>{day.day}</span>
                    <span>{day.zone}</span>
                  </div>
                  <h3>{day.title}</h3>
                  <p>{day.summary}</p>

                  <div className={styles.stopGrid}>
                    {day.stops.map((stop) => (
                      <div className={styles.stopCard} key={`${day.day}-${stop.time}`}>
                        <span>{stop.time}</span>
                        <strong>{stop.title}</strong>
                        <p>{stop.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className={styles.noteRow}>
                    <p>{day.soloNote}</p>
                    <Link href={day.link}>{day.linkText}</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.routePanel} aria-labelledby="route-heading">
          <div>
            <p className={styles.eyebrow}>Advisor note</p>
            <h2 id="route-heading">Do not chase every icon on one trip</h2>
            <p>
              The expert move is to pick a strong base, keep each day geographically tight, and save one flexible block. You will enjoy New York more when you are not constantly recovering from your own route.
            </p>
          </div>
          <div className={styles.routeList}>
            <span>Day 1: Uptown to Midtown</span>
            <span>Day 2: Village to Broadway</span>
            <span>Day 3: Harbor to Brooklyn</span>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Quick answers</p>
            <h2 id="faq-heading">Solo itinerary FAQ</h2>
            {groupedCount > 0 ? <p>Includes the key planning questions travelers ask before building a solo NYC route.</p> : null}
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
          <Link href="/destination/nyc/food">Solo food guide</Link>
          <Link href="/destination/nyc/nyc-safety-guide">Safety guide</Link>
        </section>
      </main>

      <BookingCTA
        variant="full"
        text="Book a central NYC stay for this solo itinerary"
        href="/destination/nyc/booking?tab=hotels&from=solo-itinerary"
        label="See NYC hotels"
      />
      <Footer />
    </>
  );
}
