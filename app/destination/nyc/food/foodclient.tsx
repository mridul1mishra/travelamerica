"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Footer from "./components/Footer/Footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import faqData from "@/content/destination/nyc/food/faq/faqsection.json";
import styles from "./food.module.css";

const mustEats = [
  {
    dish: "Classic slice",
    where: "Joe's, L'Industrie, Mama's Too",
    note: "Fast, cheap, and best eaten standing up.",
  },
  {
    dish: "Hand-rolled bagel",
    where: "Murray's, Ess-a-Bagel, Absolute",
    note: "Order with a schmear; skip the toast request.",
  },
  {
    dish: "Pastrami on rye",
    where: "Katz's Delicatessen",
    note: "Lower East Side institution. Keep your ticket.",
  },
  {
    dish: "Dim sum or dumplings",
    where: "Chinatown, Flushing",
    note: "Best value when you want variety without a reservation.",
  },
];

const neighborhoodRoutes = [
  {
    area: "Lower East Side + Chinatown",
    bestFor: "classics in one walk",
    stops: "Katz's, Nom Wah, dumpling counters, Essex Market",
    timing: "Late morning to early dinner",
  },
  {
    area: "West Village",
    bestFor: "date-night energy",
    stops: "Semma, Carbone, Via Carota, Joe's Pizza",
    timing: "Book dinner, wander before",
  },
  {
    area: "Williamsburg",
    bestFor: "pizza + bars",
    stops: "Lilia, Peter Luger, L'Industrie, waterfront drinks",
    timing: "Afternoon slice, evening table",
  },
  {
    area: "Flushing",
    bestFor: "serious food value",
    stops: "food courts, noodles, dumplings, bakeries",
    timing: "Lunch crawl, cash handy",
  },
];

const reservationRules = [
  ["Book 28 days out", "Carbone, 4 Charles, Atomix, Tatiana-style hard tables."],
  ["Walk in early", "Pizza counters, food halls, Chinatown, bar seats."],
  ["Use the bar", "The Modern, Estela, Cafe Sabarsky, many hotel restaurants."],
  ["Group of 6+", "Choose Koreatown, Chinatown dim sum, or food halls first."],
];

const pizzaPicks = [
  "Mama's Too - creative squares and the cacio e pepe slice",
  "L'Industrie - Williamsburg and LES slices with cult-level lines",
  "Joe's Pizza - the reliable classic Village slice",
  "Una Pizza Napoletana - destination Neapolitan on the Lower East Side",
  "Lucali - Carroll Gardens whole-pie night if you want the ritual",
];

const soloStops = [
  {
    title: "Counter-safe",
    copy: "Ichiran, Mimi Cheng's, Shake Shack, and food halls let you eat well without negotiating a table for one.",
  },
  {
    title: "Bar-seat better",
    copy: "At serious restaurants, the bar is often warmer, faster, and less awkward than a two-top.",
  },
  {
    title: "Theater-adjacent",
    copy: "Grand Central Oyster Bar, Joe Allen, and quick bagel stops work before or after a show.",
  },
];

const foodHalls = [
  ["Chelsea Market", "Best one-stop crowd pleaser. Go before noon or after 2 PM."],
  ["Time Out Market", "DUMBO views, rooftop energy, easy for first-timers."],
  ["Grand Central Dining Concourse", "Useful around trains, Midtown plans, and rainy days."],
  ["Essex Market", "Lower East Side history with stalls that still feel local."],
];

export default function FoodClientPage() {
  return (
    <>
      <NavigationHeader />
      <BookingCTA
        variant="slim"
        text="Book your New York trip"
        href="/destination/nyc/booking?tab=activities&from=food"
        label="See food tours"
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <Image
              src="/data/majorcities/newyork/assets/nyc-solo-dining.webp"
              alt="New York City dining table with skyline views"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>NYC food guide</p>
            <h1>Where to Eat in New York City</h1>
            <p>
              New York rewards a good plan. Use this guide to pick the right food neighborhood,
              decide what needs a reservation, and avoid wasting meals on generic Midtown traps.
            </p>
            <div className={styles.heroActions}>
              <a href="#first-meals" className={styles.primaryButton}>Start with the classics</a>
              <a href="#neighborhoods" className={styles.secondaryButton}>Choose a food area</a>
            </div>
          </div>
        </section>

        <section className={styles.quickPanel} aria-label="Quick NYC dining planner">
          <div>
            <span className={styles.metric}>First meal</span>
            <strong>Slice + neighborhood walk</strong>
          </div>
          <div>
            <span className={styles.metric}>Best group move</span>
            <strong>Chelsea Market or Koreatown</strong>
          </div>
          <div>
            <span className={styles.metric}>Solo-friendly</span>
            <strong>Food halls, counters, bar seats</strong>
          </div>
          <div>
            <span className={styles.metric}>Reserve early</span>
            <strong>Splurge dinners and tiny rooms</strong>
          </div>
        </section>

        <section id="first-meals" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Eat these first</p>
            <h2>The NYC dishes worth planning around</h2>
            <p>
              Do one classic, one neighborhood crawl, and one flexible food hall. That gives a first-timer
              the real range of New York without turning the trip into reservation homework.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {mustEats.map((item) => (
              <article className={styles.foodCard} key={item.dish}>
                <span>{item.dish}</span>
                <h3>{item.where}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="neighborhoods" className={styles.featureSection}>
          <div className={styles.featureImage}>
            <Image
              src="/data/majorcities/newyork/assets/nyc-bagel-collage-murrays-blackseed-solo-dining.png"
              alt="New York bagels and neighborhood food scenes"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Choose by neighborhood</p>
            <h2>Where to eat based on your route</h2>
            <div className={styles.routeList}>
              {neighborhoodRoutes.map((route) => (
                <article key={route.area}>
                  <div>
                    <h3>{route.area}</h3>
                    <p>{route.stops}</p>
                  </div>
                  <span>{route.bestFor}</span>
                  <small>{route.timing}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Reservations</p>
            <h2>How to avoid the NYC restaurant scramble</h2>
            <p>
              The best New York food days are a mix: one booked table, one spontaneous slice, and one
              fallback you can reach by subway without crossing the city twice.
            </p>
          </div>
          <div className={styles.ruleGrid}>
            {reservationRules.map(([title, copy]) => (
              <div className={styles.ruleCard} key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.featureSectionAlt}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Pizza strategy</p>
            <h2>Best pizza in NYC, without turning it into a debate</h2>
            <p>
              Pick the style first: a fast slice, a creative square, or a whole-pie destination.
              Then choose the shop that fits your day instead of chasing one borough-to-borough ranking.
            </p>
            <ul className={styles.cleanList}>
              {pizzaPicks.map((pick) => (
                <li key={pick}>{pick}</li>
              ))}
            </ul>
          </div>
          <div className={styles.featureImage}>
            <Image
              src="/data/majorcities/newyork/assets/asian-food-rainy-day-solo-dining-new-york-city.png"
              alt="Cozy New York dining table by a window"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Solo dining</p>
            <h2>Where eating alone feels normal</h2>
            <p>
              New York is one of the easiest cities in the world to dine solo. Aim for counters,
              bars, markets, and restaurants where turnover is part of the rhythm.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {soloStops.map((stop) => (
              <article className={styles.foodCard} key={stop.title}>
                <span>{stop.title}</span>
                <p>{stop.copy}</p>
              </article>
            ))}
          </div>
          <div className={styles.inlineCta}>
            <Link href="/destination/nyc/solo-trip-to-nyc">Plan the solo NYC day around meals</Link>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureImage}>
            <Image
              src="/data/majorcities/newyork/assets/nyc-asian-food-hall-solo-dining-rainy-day-dumbo-chelsea.png"
              alt="NYC food hall dishes for solo travelers and groups"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>Food halls</p>
            <h2>The flexible choice for groups, rain, and indecision</h2>
            <div className={styles.foodHallList}>
              {foodHalls.map(([name, copy]) => (
                <div key={name}>
                  <strong>{name}</strong>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.budgetSection}>
          <div>
            <p className={styles.eyebrow}>Budget check</p>
            <h2>What meals cost in NYC</h2>
          </div>
          <div className={styles.budgetGrid}>
            <div><strong>Under $15</strong><span>slice, bagel, dumplings, falafel, quick counter meals</span></div>
            <div><strong>$25-$60</strong><span>most neighborhood dinners, brunch, casual sit-down restaurants</span></div>
            <div><strong>$100+</strong><span>tasting menus, steakhouses, famous tables, cocktail-heavy nights</span></div>
          </div>
        </section>

        <BookingCTA
          variant="full"
          text="Book a guided NYC food tour"
          href="/destination/nyc/booking?tab=activities&from=food"
          label="See food tours"
        />
        <FAQAccordion faqs={faqData} />
      </main>

      <Footer />
    </>
  );
}
