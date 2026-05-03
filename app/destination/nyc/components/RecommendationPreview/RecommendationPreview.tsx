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

  // Scroll into view when shown
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
        Based on your NYC trip
      </h2>

      <p className={styles.subheading}>
        Since you&apos;re a {tripType === 'first-time' ? 'first‑time visitor ' : 'returning visitor '}
        with a {duration} day stay, here&apos;s where we&apos;d start.
      </p>

      <div className={styles.grid}>
        {/* Neighborhoods */}
        <div className={styles.card}>
          <h3>Best Neighborhoods</h3>
          <p>
            NYC areas that work well for your stay length and travel style.
          </p>
          <Link
            href="/destination/nyc/neighborhood-guide"
            className={styles.link}
          >
            Explore neighborhoods →
          </Link>
        </div>

        {/* Things to Do */}
        <div className={styles.card}>
          <h3>Things You&apos;ll Love</h3>
          <p>
            Top experiences focused on {interest}.
          </p>
          <Link
            href="/destination/nyc/things-to-do"
            className={styles.link}
          >
            See things to do →
          </Link>
        </div>

        {/* Itinerary */}
        <div className={styles.card}>
          <h3>Suggested Itinerary</h3>
          <p>
            A {duration}-day plan designed for your trip.
          </p>
          <Link
            href="/destination/nyc/itineraries"
            className={styles.link}
          >
            View itineraries →
          </Link>
        </div>
      </div>

      <div className={styles.nextStep}>
        <button className={styles.primaryCta}>
          Get a personalized NYC itinerary
        </button>
      </div>
    </section>
  );
}