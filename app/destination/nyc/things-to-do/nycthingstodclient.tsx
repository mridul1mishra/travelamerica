'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './nycthingstodoclient.module.css';
import Header from "@/app/components/destination/header/header";
import Footer from "../../../../app/components/Header/Footer/footer";

export default function NYCThingsToDoClient() {
  return (
    <>
    <Header />
    <main className={styles.container}>
      {/* Hero / Visual Header */}
      
      <section className={styles.banner}>
        <Image 
        src="/destination/nyc-things-to-do.jpg"
        alt="Experience and activities in NewYork City"
        fill
        priority
        className={styles.bannerImage}
        />
        </section>
      <section className={styles.hero}>
        <h1>Things to Do in New York City</h1>
        <p>
          New York City offers very different experiences depending on what you
          want to focus on. Understanding this helps you choose where to stay
          and how to plan your days.
        </p>
      </section>

      {/* Experience Buckets */}
      <section className={styles.grid}>
        <Link href="/destination/nyc/neighborhood-guide?interest=sightseeing" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Landmarks & Iconic Sights</h3>
          <p>
            Ideal for first‑time visitors who want to experience NYC’s most
            recognizable places with minimal travel between stops.
          </p>
        </Link>

        <Link href="/destination/nyc/neighborhood-guide?interest=culture" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Culture & Museums</h3>
          <p>
            Best for travelers who enjoy slower exploration, museums, galleries,
            and neighborhoods with strong cultural character.
          </p>
        </Link>

        <Link href="/destination/nyc/neighborhood-guide?interest=food" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Food & Local Experiences</h3>
          <p>
            Designed for travelers who want dining, neighborhoods, and everyday
            NYC life to be the focus of their trip.
          </p>
        </Link>

        <Link href="/destination/nyc/neighborhood-guide?interest=outdoors" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Outdoors & Walking</h3>
          <p>
            Works well for visitors who enjoy parks, long walks, and balancing
            busy areas with calmer spaces.
          </p>
        </Link>
      </section>

      {/* Decision Bridge */}
      <section className={styles.bridge}>
        <p>
          What you want to do in New York City directly affects where you should
          stay. Choosing the right area can save time, reduce travel fatigue,
          and make the trip feel smoother.
        </p>
      </section>

      {/* Assisted CTA */}
      <section className={styles.cta}>
        <h2>Not sure how to shape your NYC experience?</h2>
        <p>
          Tell us what you want to focus on, and we’ll help you plan where to
          stay and how to structure your visit.
        </p>

        <Link href="/destination/nyc#planning-intent" className={styles.primaryCta}>
          Get help planning my NYC trip
        </Link>
      </section>
      
    </main>
    <Footer />
    </>
  );
}