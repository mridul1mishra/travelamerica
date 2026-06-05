'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './recommendationpreview.module.css';

type RecommendationsPreviewProps = {
  tripType: string;
  duration: string;
  interest: string;
  visible: boolean;
};

export default function RecommendationsPreview({
  tripType,
  duration,
  interest,
  visible,
}: RecommendationsPreviewProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="recommendations-heading"
    >
      <h2 id="recommendations-heading" className={styles.heading}>
        Based on your Orlando trip
      </h2>

      <p className={styles.subheading}>
        Since you&apos;re a {tripType === 'first-time' ? 'first‑time visitor ' : 'returning visitor '}
        with a {duration} day stay, here&apos;s where we&apos;d start.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Best Areas to Stay</h3>
          <p>
            Orlando park zones that work well for your stay length and travel style.
          </p>
          <Link href="/destination/orlando/neighborhood-guide" className={styles.link}>
            Explore areas →
          </Link>
        </div>

        <div className={styles.card}>
          <h3>Things You&apos;ll Love</h3>
          <p>
            Top experiences focused on {interest}.
          </p>
          <Link href="/destination/orlando/things-to-do" className={styles.link}>
            See things to do →
          </Link>
        </div>

        <div className={styles.card}>
          <h3>Suggested Itinerary</h3>
          <p>
            A {duration}-day plan designed for your trip.
          </p>
          <Link href="/destination/orlando/itinerary" className={styles.link}>
            View itineraries →
          </Link>
        </div>
      </div>

      <div className={styles.nextStep}>
        <button className={styles.primaryCta}>
          Get a personalized Orlando itinerary
        </button>
      </div>
    </section>
  );
}
