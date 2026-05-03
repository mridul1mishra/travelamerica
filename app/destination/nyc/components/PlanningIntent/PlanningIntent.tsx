"use client";

import { useState } from "react";
import styles from "./planintent.module.css";
import RecommendationPreview from "../RecommendationPreview/RecommendationPreview"

export default function PlanningIntent() {
  const [tripType, setTripType] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false)
  

  return (
    <section id="planning-intent" className={styles.section}>
      <h2 className={styles.heading}>Planning a trip to NYC?</h2>
      <p className={styles.subheading}>Answer a few quick questions to get personalised recommendations.</p>

      <div className={styles.group}>
        <span className={styles.label}>Is this your first visit?</span>
        <div className={styles.options}>
          <button className={`${styles.option} ${tripType === 'first-time' ? styles.selected : ''}`} 
          onClick={() => setTripType(tripType === 'first-time' ? null : 'first-time')}>
            First time
          </button>

          <button className={`${styles.option} ${tripType === 'Returning' ? styles.selected : ''}`}
          onClick={() => setTripType(tripType === 'Returning' ? null : 'Returning')} >
            Returning
          </button>
        </div>
      </div>
      <div className={styles.group}>
        <span className={styles.label}>How long is your trip?</span>
        <div className={styles.options}>
          <button className={`${styles.option} ${duration === '3-4' ? styles.selected : ''}`} 
          onClick={() => setDuration(duration === '3-4' ? null : '3-4')}>
            3-4 days
          </button>

          <button className={`${styles.option} ${duration === '5-7' ? styles.selected : ''}`}
          onClick={() => setDuration(duration === '5-7' ? null : '5-7')} >
            5-7 days
          </button>
          <button className={`${styles.option} ${duration === '7+' ? styles.selected : ''}`}
          onClick={() => setDuration(duration === '7+' ? null : '7+')} >
            7+ days
          </button>
        </div>
      </div>
      {/* Interests */}
      <div className={styles.group}>
        <span className={styles.label}>What excites you most ?</span>
        <div className={styles.options}>
          <button className={`${styles.option} ${interest === 'sightseeing' ? styles.selected : ''}`}
          onClick={() => setInterest(interest === 'sightseeing' ? null : 'sightseeing')}>
            Sight Seeing
          </button>

          <button className={`${styles.option} ${interest === 'foodanddining' ? styles.selected : ''}`}
          onClick={() => setInterest(interest === "foodanddining" ? null : "foodanddining")} >
            Food and Dining
          </button>
          <button className={`${styles.option} ${interest === 'shows' ? styles.selected : ''}`}
          onClick={() => setInterest(interest === "shows" ? null : "shows")} >
            Shows & Culture
          </button>
          <button className={`${styles.option} ${interest === 'Family' ? styles.selected : ''}`}
          onClick={() => setInterest(interest === "Family" ? null : "Family")} >
            Family-Friendly
          </button>
        </div>
      </div>
      {/* Gentle Next Steps */}
      {tripType && duration && interest && (
        <div className={styles.nextStep}>
          <button className={styles.primaryCta} onClick={() => setShowRecommendations(true)}>
            See Recommendations
          </button>
          <RecommendationPreview
          tripType = {tripType}
          duration = {duration}
          interest = {interest}
          visible = {showRecommendations}
          />
        </div>
      )}
    </section>
  );
}
