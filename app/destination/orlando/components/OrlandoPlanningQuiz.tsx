"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./orlandoplanningquiz.module.css";

export default function OrlandoPlanningQuiz() {
  const [tripType, setTripType] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const interestLabel =
    interest === "theme-parks" ? "theme parks"
    : interest === "water-parks" ? "water parks"
    : interest === "day-trips" ? "day trips & space"
    : "springs & outdoors";

  const thingsHref =
    interest === "day-trips" ? "/destination/orlando/landmark"
    : "/destination/orlando/things-to-do";

  return (
    <section id="planning" className={styles.section}>
      <h2 className={styles.heading}>Planning a trip to Orlando?</h2>
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
          <button className={`${styles.option} ${duration === "3-4" ? styles.selected : ""}`} onClick={() => setDuration(duration === "3-4" ? null : "3-4")}>3-4 days</button>
          <button className={`${styles.option} ${duration === "5-7" ? styles.selected : ""}`} onClick={() => setDuration(duration === "5-7" ? null : "5-7")}>5-7 days</button>
          <button className={`${styles.option} ${duration === "7+" ? styles.selected : ""}`} onClick={() => setDuration(duration === "7+" ? null : "7+")}>7+ days</button>
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.label}>What excites you most?</span>
        <div className={styles.options}>
          <button className={`${styles.option} ${interest === "theme-parks" ? styles.selected : ""}`} onClick={() => setInterest(interest === "theme-parks" ? null : "theme-parks")}>Theme parks</button>
          <button className={`${styles.option} ${interest === "water-parks" ? styles.selected : ""}`} onClick={() => setInterest(interest === "water-parks" ? null : "water-parks")}>Water parks</button>
          <button className={`${styles.option} ${interest === "day-trips" ? styles.selected : ""}`} onClick={() => setInterest(interest === "day-trips" ? null : "day-trips")}>Day trips &amp; space</button>
          <button className={`${styles.option} ${interest === "outdoors" ? styles.selected : ""}`} onClick={() => setInterest(interest === "outdoors" ? null : "outdoors")}>Springs &amp; outdoors</button>
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
                  <p>{tripType === "first-time" ? "Stay near Disney or on International Drive to minimize driving between parks." : "Try Downtown Orlando or a Kissimmee vacation home for more space and local character."}</p>
                  <Link href="/destination/orlando/best-areas-to-stay">Best areas to stay →</Link>
                </div>
                <div className={styles.recCard}>
                  <h3>What you&apos;ll love</h3>
                  <p>Top picks for {interestLabel} around Orlando.</p>
                  <Link href={thingsHref}>See things to do →</Link>
                </div>
                <div className={styles.recCard}>
                  <h3>Suggested itinerary</h3>
                  <p>A {duration}-day plan that paces the parks so you don&apos;t burn out.</p>
                  <Link href="/destination/orlando/itinerary">View itineraries →</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
