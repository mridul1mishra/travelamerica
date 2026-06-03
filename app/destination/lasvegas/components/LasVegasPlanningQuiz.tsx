"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/destination/city-hub.module.css";

// Self-contained planning quiz for the Las Vegas hub. Selections drive the copy
// and links to real Las Vegas guide pages.
export default function LasVegasPlanningQuiz() {
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
    interest === "shows" ? "shows & entertainment"
    : interest === "casinos" ? "casinos & gaming"
    : interest === "day-trips" ? "day trips & nature"
    : "food & nightlife";

  const thingsHref =
    interest === "day-trips" ? "/destination/lasvegas/landmark"
    : interest === "food" ? "/destination/lasvegas/food"
    : "/destination/lasvegas/things-to-do";

  const stayReco =
    tripType === "first-time"
      ? "Stay mid-Strip for your first visit — walkability beats the savings you'd get off-Strip."
      : "Returning visitors often prefer Downtown for lower rates and a more local atmosphere.";

  const itinHref =
    tripType === "first-time" ? "/destination/lasvegas/itinerary" : "/destination/lasvegas/solo-itinerary";

  return (
    <section id="planning" className={`${styles.section} ${styles.altBg}`} aria-labelledby="planning-lv">
      <h2 id="planning-lv" className={styles.sectionTitle}>Planning a trip to Las Vegas?</h2>
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
          <button className={`${styles.quizOption} ${duration === "2-3" ? styles.quizOptionSelected : ""}`} onClick={toggle("2-3", duration, setDuration)}>2–3 days</button>
          <button className={`${styles.quizOption} ${duration === "4-5" ? styles.quizOptionSelected : ""}`} onClick={toggle("4-5", duration, setDuration)}>4–5 days</button>
          <button className={`${styles.quizOption} ${duration === "6+" ? styles.quizOptionSelected : ""}`} onClick={toggle("6+", duration, setDuration)}>6+ days</button>
        </div>
      </div>

      <div className={styles.quizGroup}>
        <span className={styles.quizLabel}>What excites you most?</span>
        <div className={styles.quizOptions}>
          <button className={`${styles.quizOption} ${interest === "shows" ? styles.quizOptionSelected : ""}`} onClick={toggle("shows", interest, setInterest)}>Shows &amp; entertainment</button>
          <button className={`${styles.quizOption} ${interest === "casinos" ? styles.quizOptionSelected : ""}`} onClick={toggle("casinos", interest, setInterest)}>Casinos &amp; gaming</button>
          <button className={`${styles.quizOption} ${interest === "day-trips" ? styles.quizOptionSelected : ""}`} onClick={toggle("day-trips", interest, setInterest)}>Day trips &amp; nature</button>
          <button className={`${styles.quizOption} ${interest === "food" ? styles.quizOptionSelected : ""}`} onClick={toggle("food", interest, setInterest)}>Food &amp; nightlife</button>
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
              <p className={styles.cardBody}>{stayReco}</p>
              <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.recLink}>Best areas to stay →</Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>What you&apos;ll love</h3>
              <p className={styles.cardBody}>Top picks for {interestLabel} in Las Vegas.</p>
              <Link href={thingsHref} className={styles.recLink}>See things to do →</Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Suggested itinerary</h3>
              <p className={styles.cardBody}>A {duration}-day plan built around the Vegas highlights that actually matter.</p>
              <Link href={itinHref} className={styles.recLink}>View itineraries →</Link>
            </article>
          </div>
        </div>
      )}
    </section>
  );
}
