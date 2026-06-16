import styles from "../booking.module.css";
import type { Hotel } from "./bookingTypes";

export default function HotelsTab({ cityName, hotels }: { cityName: string; hotels: Hotel[] }) {
  return (
    <section className={styles.actSection}>
      <h2 className={styles.actHeading}>Book Hotels in {cityName}</h2>
      {hotels.length === 0 ? (
        <p className={styles.emptyState}>Live hotel prices are being updated - check back soon.</p>
      ) : (
        <div className={styles.actGrid}>
          {hotels.map((hotel) => (
            <a className={styles.actCard} key={hotel.url} href={hotel.url} target="_blank" rel="noopener noreferrer">
              <div className={styles.actImageWrap}>
                <img src={hotel.img} alt={hotel.title} className={styles.actImage} width={300} height={200} />
                <span className={styles.actCategory}>Hotel</span>
              </div>
              <div className={styles.actBody}>
                <h3 className={styles.actTitle}>{hotel.title}</h3>
                {hotel.area ? <p className={styles.actArea}>{hotel.area}</p> : null}
                <div className={styles.actMeta}>
                  {hotel.rating != null ? <span className={styles.actRating}>* {hotel.rating}</span> : null}
                  {hotel.reviews != null ? (
                    <span className={styles.actReviews}>{hotel.reviews.toLocaleString()} reviews</span>
                  ) : null}
                </div>
                <div className={styles.actFooter}>
                  <span className={styles.actPrice}>
                    {hotel.price}
                    <span className={styles.actPriceUnit}> / night</span>
                  </span>
                  <span className={styles.actCta}>View hotel</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
