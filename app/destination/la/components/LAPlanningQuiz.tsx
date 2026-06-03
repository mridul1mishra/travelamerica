"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./laplanningquiz.module.css";

export default function LAPlanningQuiz() {
  const [tripType, setTripType] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

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
    <section id="planning" className={styles.section}>
      <h2 className={styles.heading}>Planning a trip to LA?</h2>
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
          <button className={`${styles.option} ${interest === "beaches" ? styles.selected : ""}`} onClick={() => setInterest(interest === "beaches" ? null : "beaches")}>Beaches &amp; outdoors</button>
          <button className={`${styles.option} ${interest === "film" ? styles.selected : ""}`} onClick={() => setInterest(interest === "film" ? null : "film")}>Film &amp; pop culture</button>
          <button className={`${styles.option} ${interest === "food" ? styles.selected : ""}`} onClick={() => setInterest(interest === "food" ? null : "food")}>Food &amp; neighborhoods</button>
          <button className={`${styles.option} ${interest === "museums" ? styles.selected : ""}`} onClick={() => setInterest(interest === "museums" ? null : "museums")}>Museums &amp; culture</button>
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
                  <p>{tripType === "first-time" ? "Santa Monica and the Westside keep things walkable and easy for a first trip." : "Branch out to Silver Lake, WeHo, or DTLA for a more local stay."}</p>
                  <Link href="/destination/la/best-areas-to-stay">Best areas to stay →</Link>
                </div>
                <div className={styles.recCard}>
                  <h3>What you&apos;ll love</h3>
                  <p>Top picks for {interestLabel} across the city.</p>
                  <Link href={thingsHref}>See things to do →</Link>
                </div>
                <div className={styles.recCard}>
                  <h3>Suggested itinerary</h3>
                  <p>A {duration}-day plan that accounts for LA&apos;s size and traffic.</p>
                  <Link href="/destination/la/itinerary">View itineraries →</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
