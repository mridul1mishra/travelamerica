"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./lasvegasplanningquiz.module.css";

export default function LasVegasPlanningQuiz() {
  const [tripType, setTripType] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

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
    <section id="planning" className={styles.section}>
      <h2 className={styles.heading}>Planning a trip to Las Vegas?</h2>
      <p className={styles.subheading}>Answer three quick questions and we&apos;ll point you to the right guides.</p>

      <div className={styles.group}>
        <span className={styles.label}>Is this your first visit?</span>
        <div className={styles.options}>
          <button className={`${styles.option} ${tripType === "first-time" ? styles.selected : ""}`} onClick={() => setTripType(tripType === "first-time" ? null : "first-time")}>First time</button>
          <button className={`${styles.option} ${tripType === "returning" ? styles.selected : ""}`} onClick={() => setTripType(tripType === "returning" ? null : "returning")}>Returning</button>
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.label}>How long is your trip?</span>
        <div className={styles.options}>
          <button className={`${styles.option} ${duration === "2-3" ? styles.selected : ""}`} onClick={() => setDuration(duration === "2-3" ? null : "2-3")}>2–3 days</button>
          <button className={`${styles.option} ${duration === "4-5" ? styles.selected : ""}`} onClick={() => setDuration(duration === "4-5" ? null : "4-5")}>4–5 days</button>
          <button className={`${styles.option} ${duration === "6+" ? styles.selected : ""}`} onClick={() => setDuration(duration === "6+" ? null : "6+")}>6+ days</button>
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.label}>What excites you most?</span>
        <div className={styles.options}>
          <button className={`${styles.option} ${interest === "shows" ? styles.selected : ""}`} onClick={() => setInterest(interest === "shows" ? null : "shows")}>Shows &amp; entertainment</button>
          <button className={`${styles.option} ${interest === "casinos" ? styles.selected : ""}`} onClick={() => setInterest(interest === "casinos" ? null : "casinos")}>Casinos &amp; gaming</button>
          <button className={`${styles.option} ${interest === "day-trips" ? styles.selected : ""}`} onClick={() => setInterest(interest === "day-trips" ? null : "day-trips")}>Day trips &amp; nature</button>
          <button className={`${styles.option} ${interest === "food" ? styles.selected : ""}`} onClick={() => setInterest(interest === "food" ? null : "food")}>Food &amp; nightlife</button>
        </div>
      </div>

      {tripType && duration && interest && (
        <div className={styles.nextStep}>
          <button className={styles.primaryCta} onClick={() => setShowRecommendations(true)}>
            See Recommendations
          </button>
          {showRecommendations && (
            <div className={styles.recommendations}>
              <p style={{ color: "#555", marginBottom: "1.5rem" }}>
                Since you&apos;re a {tripType === "first-time" ? "first-time visitor" : "returning visitor"} on a {duration}-day trip focused on {interestLabel}, here&apos;s where to start.
              </p>
              <div className={styles.recGrid}>
                <div className={styles.recCard}>
                  <h3>Where to stay</h3>
                  <p>{stayReco}</p>
                  <Link href="/destination/lasvegas/best-areas-to-stay">Best areas to stay →</Link>
                </div>
                <div className={styles.recCard}>
                  <h3>What you&apos;ll love</h3>
                  <p>Top picks for {interestLabel} in Las Vegas.</p>
                  <Link href={thingsHref}>See things to do →</Link>
                </div>
                <div className={styles.recCard}>
                  <h3>Suggested itinerary</h3>
                  <p>A {duration}-day plan built around the Vegas highlights that actually matter.</p>
                  <Link href={itinHref}>View itineraries →</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
