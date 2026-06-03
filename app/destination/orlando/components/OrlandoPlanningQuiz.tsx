"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/destination/city-hub.module.css";

// Self-contained planning quiz for the Orlando hub. Selections drive the copy
// and links to real Orlando guide pages.
export default function OrlandoPlanningQuiz() {
  const [tripType, setTripType] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const toggle =
    (value: string, current: string | null, set: (v: string | null) => void) =>
    () => {
      set(current === value ? null : value);
      setShow(false);
    };

  const ready = tripType && duration && interest;

  const interestLabel =
    interest === "theme-parks" ? "theme parks"
    : interest === "water-parks" ? "water parks"
    : interest === "day-trips" ? "day trips & space"
    : "springs & outdoors";

  const thingsHref =
    interest === "day-trips" ? "/destination/orlando/landmark"
    : "/destination/orlando/things-to-do";

  return (
    <section id="planning" className={`${styles.section} ${styles.altBg}`} aria-labelledby="planning-orlando">
      <h2 id="planning-orlando" className={styles.sectionTitle}>Planning a trip to Orlando?</h2>
      <p className={styles.sectionIntro}>Answer three quick questions and we&apos;ll point you to the right guides.</p>

      <div className={styles.quizGroup}>
        <span className={styles.quizLabel}>Is this your first visit?</span>
        <div className={styles.quizOptions}>
          <button className={`${styles.quizOption} ${tripType === "first-time" ? styles.quizOptionSelected : ""}`} onClick={toggle("first-time", tripType, setTripType)}>First time</button>
          <button className={`${styles.quizOption} ${tripType === "returning" ? styles.quizOptionSelected : ""}`} onClick={toggle("returning", tripType, setTripType)}>Returning</button>
        </div>
      </div>

      <div className={styles.quizGroup}>
        <span className={styles.quizLabel}>How long is your trip?</span>
        <div className={styles.quizOptions}>
          <button className={`${styles.quizOption} ${duration === "3-4" ? styles.quizOptionSelected : ""}`} onClick={toggle("3-4", duration, setDuration)}>3-4 days</button>
          <button className={`${styles.quizOption} ${duration === "5-7" ? styles.quizOptionSelected : ""}`} onClick={toggle("5-7", duration, setDuration)}>5-7 days</button>
          <button className={`${styles.quizOption} ${duration === "7+" ? styles.quizOptionSelected : ""}`} onClick={toggle("7+", duration, setDuration)}>7+ days</button>
        </div>
      </div>

      <div className={styles.quizGroup}>
        <span className={styles.quizLabel}>What excites you most?</span>
        <div className={styles.quizOptions}>
          <button className={`${styles.quizOption} ${interest === "theme-parks" ? styles.quizOptionSelected : ""}`} onClick={toggle("theme-parks", interest, setInterest)}>Theme parks</button>
          <button className={`${styles.quizOption} ${interest === "water-parks" ? styles.quizOptionSelected : ""}`} onClick={toggle("water-parks", interest, setInterest)}>Water parks</button>
          <button className={`${styles.quizOption} ${interest === "day-trips" ? styles.quizOptionSelected : ""}`} onClick={toggle("day-trips", interest, setInterest)}>Day trips &amp; space</button>
          <button className={`${styles.quizOption} ${interest === "outdoors" ? styles.quizOptionSelected : ""}`} onClick={toggle("outdoors", interest, setInterest)}>Springs &amp; outdoors</button>
        </div>
      </div>

      {ready && !show && (
        <div className={styles.quizNext}>
          <button className={styles.primaryCta} onClick={() => setShow(true)}>See recommendations</button>
        </div>
      )}

      {ready && show && (
        <div>
          <p className={styles.sectionIntro} style={{ marginTop: "2rem" }}>
            Since you&apos;re a {tripType === "first-time" ? "first-time visitor" : "returning visitor"} on a {duration}-day trip focused on {interestLabel}, here&apos;s where to start.
          </p>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Where to stay</h3>
              <p className={styles.cardBody}>{tripType === "first-time" ? "Stay near Disney or on International Drive to minimize driving between parks." : "Try Downtown Orlando or a Kissimmee vacation home for more space and local character."}</p>
              <Link href="/destination/orlando/best-areas-to-stay" className={styles.recLink}>Best areas to stay →</Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>What you&apos;ll love</h3>
              <p className={styles.cardBody}>Top picks for {interestLabel} around Orlando.</p>
              <Link href={thingsHref} className={styles.recLink}>See things to do →</Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Suggested itinerary</h3>
              <p className={styles.cardBody}>A {duration}-day plan that paces the parks so you don&apos;t burn out.</p>
              <Link href="/destination/orlando/itinerary" className={styles.recLink}>View itineraries →</Link>
            </article>
          </div>
        </div>
      )}
    </section>
  );
}
