import styles from "../booking.module.css";
import type { Activity } from "./bookingTypes";

export default function ActivitiesTab({ cityName, activities }: { cityName: string; activities: Activity[] }) {
  return (
    <section className={styles.actSection}>
      <h2 className={styles.actHeading}>Things to Do in {cityName}</h2>
      {activities.length === 0 ? (
        <p className={styles.emptyState}>Activities are being updated - check back soon.</p>
      ) : (
        <div className={styles.actGrid}>
          {activities.map((activity) => (
            <a
              className={styles.actCard}
              key={activity.url}
              href={activity.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.actImageWrap}>
                <img src={activity.img} alt={activity.title} className={styles.actImage} width={300} height={200} />
                {activity.category ? <span className={styles.actCategory}>{activity.category}</span> : null}
              </div>
              <div className={styles.actBody}>
                <h3 className={styles.actTitle}>{activity.title}</h3>
                <div className={styles.actMeta}>
                  {activity.rating != null ? <span className={styles.actRating}>* {activity.rating}</span> : null}
                  {activity.reviews != null ? (
                    <span className={styles.actReviews}>{activity.reviews.toLocaleString()} reviews</span>
                  ) : null}
                </div>
                {activity.ranking ? <p className={styles.actRanking}>{activity.ranking}</p> : null}
                {activity.description ? <p className={styles.actDesc}>{activity.description}</p> : null}
                <div className={styles.actFooter}>
                  <span className={styles.actPrice}>{activity.priceLevel || "See prices"}</span>
                  <span className={styles.actCta}>View tour</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
