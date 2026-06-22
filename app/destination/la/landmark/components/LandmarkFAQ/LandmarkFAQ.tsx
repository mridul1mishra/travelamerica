import Link from 'next/link';
import styles from '../../lalandmark.module.css';

export default function LandmarkFAQ() {
  return (
    <section className={styles.faqSection} id="landmarks-faq">
      <h2 className={styles.sectionheading}>Practical Questions</h2>

      <details className={styles.faqItem} open>
        <summary>How far in advance should I book Getty parking or The Broad&apos;s timed entry?</summary>
        <p>
          The Getty Center: admission is free, but reserve parking online a few days
          ahead for weekends (weekdays are usually fine same-day). The Broad: free
          general admission requires a timed reservation that often books out 1-2 weeks
          in advance, especially weekends; the Yayoi Kusama Infinity Mirror Rooms are a
          separate, faster-selling ticket.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary>Is a city pass (Go Los Angeles, CityPASS) worth it?</summary>
        <p>
          Only if you plan to use several paid attractions like Universal Studios, the
          Aquarium of the Pacific, Warner Bros. Studio Tour, or harbor cruises within a
          few days. Many of LA&apos;s marquee landmarks (Griffith Observatory, the Getty, The
          Broad, the beaches) are already free, so for a landmark-focused trip a pass
          often isn&apos;t worth it. Run the math against your actual planned itinerary.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary>Can I see most landmarks in 3 days?</summary>
        <p>
          Yes, if you cluster by region to beat traffic. Day 1 - Griffith Observatory +
          Hollywood Walk of Fame + Hollywood Sign view. Day 2 - the Getty + Santa Monica
          Pier + Venice Beach. Day 3 - downtown: The Broad + Walt Disney Concert Hall +
          Union Station + Olvera Street, with LACMA on Museum Row. That covers all 9
          landmarks in this guide.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary>What time of year has the best landmark experience?</summary>
        <p>
          LA is a year-round destination, but spring (March-May) and fall
          (September-November) offer warm, clear days with thinner crowds. Summer brings
          heat inland and packed beaches; mornings often start under the coastal &apos;May
          Gray / June Gloom&apos; marine layer that can hide the Hollywood Sign until midday.
          Winter is mild but the rainiest stretch.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary>Is it safe to visit these landmarks alone?</summary>
        <p>
          Yes &mdash; every landmark in this guide is in a well-trafficked area during
          normal visiting hours. Hollywood Blvd and the Venice boardwalk are best done in
          daylight, and Griffith Park trails should be hiked before dark. For more on
          solo travel safety in LA, see our{" "}
          <Link href="/destination/la/safety-guide">LA safety guide</Link>{" "}
          and{" "}
          <Link href="/destination/la/la-female-solo-travel-guide">solo female travel guide</Link>.
        </p>
      </details>
    </section>
  );
}
