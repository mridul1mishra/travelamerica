import styles from './ArrivalTips.module.css';

const tips = [
  { num: '01', tip: 'Download Uber and Lyft before you fly.', detail: 'Surge pricing differs between the two — check both if cost matters. Also load your OMNY card (contactless credit card works) for the subway.' },
  { num: '02', tip: 'Hotels hold luggage before check-in.', detail: "Don't drag your suitcase around for your first few hours. Drop it and explore light — you'll have a much better first day." },
  { num: '03', tip: 'NJ Transit trains from Newark can be 30–45 min apart.', detail: 'Check the schedule before boarding so you\'re not stuck waiting on the platform. Off-peak service is less frequent.' },
  { num: '04', tip: 'Groups of 3+ often do better with rideshare.', detail: 'Once you split the cost, rideshare can be cheaper per person than the AirTrain + subway, and far more convenient with luggage.' },
  { num: '05', tip: 'Late-night at JFK? The A train runs 24/7.', detail: 'Take the AirTrain to Howard Beach, then the A train through Brooklyn into lower Manhattan. Runs all night, every night.' },
  { num: '06', tip: 'Peak traffic is brutal. Build in buffer time.', detail: 'Rush hour (7–9am, 5–8pm) and post-flight surge can turn a 40-minute ride into 75 minutes. If your connection matters, allow extra time.' },
];

export default function ArrivalTips() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pro Tips for a Smooth Arrival</h2>
        <p className={styles.subtitle}>Six things that make the difference between a frustrating arrival and an easy one.</p>
        <div className={styles.tipsGrid}>
          {tips.map((t) => (
            <div key={t.num} className={styles.tipCard}>
              <span className={styles.tipNum}>{t.num}</span>
              <h4 className={styles.tipTitle}>{t.tip}</h4>
              <p className={styles.tipDetail}>{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
