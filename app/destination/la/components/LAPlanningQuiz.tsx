"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/destination/city-hub.module.css";

// Self-contained planning quiz for the LA hub. No external recommendation
// component — selections drive the copy and links to real LA guide pages.
export default function LAPlanningQuiz() {
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
    interest === "beaches" ? "beaches & outdoors"
    : interest === "film" ? "film & pop culture"
    : interest === "food" ? "food & neighborhoods"
    : "museums & culture";

  const thingsHref =
    interest === "food" ? "/destination/la/food"
    : interest === "museums" ? "/destination/la/landmark"
    : "/destination/la/things-to-do";

  return (
    <section id="planning" className={`${styles.section} ${styles.altBg}`} aria-labelledby="planning-la">
      <h2 id="planning-la" className={styles.sectionTitle}>Planning a trip to LA?</h2>
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
          <button className={`${styles.quizOption} ${interest === "beaches" ? styles.quizOptionSelected : ""}`} onClick={toggle("beaches", interest, setInterest)}>Beaches &amp; outdoors</button>
          <button className={`${styles.quizOption} ${interest === "film" ? styles.quizOptionSelected : ""}`} onClick={toggle("film", interest, setInterest)}>Film &amp; pop culture</button>
          <button className={`${styles.quizOption} ${interest === "food" ? styles.quizOptionSelected : ""}`} onClick={toggle("food", interest, setInterest)}>Food &amp; neighborhoods</button>
          <button className={`${styles.quizOption} ${interest === "museums" ? styles.quizOptionSelected : ""}`} onClick={toggle("museums", interest, setInterest)}>Museums &amp; culture</button>
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
              <p className={styles.cardBody}>{tripType === "first-time" ? "Santa Monica and the Westside keep things walkable and easy for a first trip." : "Branch out to Silver Lake, WeHo, or DTLA for a more local stay."}</p>
              <Link href="/destination/la/best-areas-to-stay" className={styles.recLink}>Best areas to stay →</Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>What you&apos;ll love</h3>
              <p className={styles.cardBody}>Top picks for {interestLabel} across the city.</p>
              <Link href={thingsHref} className={styles.recLink}>See things to do →</Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Suggested itinerary</h3>
              <p className={styles.cardBody}>A {duration}-day plan that accounts for LA&apos;s size and traffic.</p>
              <Link href="/destination/la/itinerary" className={styles.recLink}>View itineraries →</Link>
            </article>
          </div>
        </div>
      )}
    </section>
  );
}
