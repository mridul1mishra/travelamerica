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
  const tripTypeLabel = tripType === 'first-time' ? 'first-time visitor' : 'returning visitor';
  const interestLabel = interest.replaceAll('-', ' ');

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
        Start with these NYC planning guides
      </h2>

      <p className={styles.subheading}>
        Since you&apos;re a {tripTypeLabel} planning a {duration}-day trip with a focus on {interestLabel},
        these are the most useful next pages.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Best Neighborhoods</h3>
          <p>Compare safe, convenient areas before choosing a hotel base.</p>
          <Link href="/destination/nyc/neighborhood-guide" className={styles.link}>
            Explore neighborhoods →
          </Link>
        </div>

        <div className={styles.card}>
          <h3>Things You&apos;ll Love</h3>
          <p>Find experiences and attractions that match your main trip interest.</p>
          <Link href="/destination/nyc/things-to-do" className={styles.link}>
            See things to do →
          </Link>
        </div>

        <div className={styles.card}>
          <h3>Suggested Itinerary</h3>
          <p>Use a practical solo-friendly route as the base for your NYC plan.</p>
          <Link href="/destination/nyc/solo-itinerary" className={styles.link}>
            View the 3-day route →
          </Link>
        </div>
      </div>

      <div className={styles.nextStep}>
        <Link href="/destination/nyc/solo-itinerary" className={styles.primaryCta}>
          Open the 3-day NYC itinerary
        </Link>
      </div>
    </section>
  );
}
