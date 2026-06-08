import data from "@/content/destination/orlando/solo-trip-to-orlando/transitAccess.json";
import { SubwayAccessItem } from "@/app/models/destination/subwayprops";
import { TransitRow } from "./TransitRow";
import styles from "./transitaccess.module.css";

export function TransitAccessSection() {
  const items = data as SubwayAccessItem[];

  return (
    <section className={styles["subway-section"]}>
      <div className={styles["subway-section__inner"]}>
        <h2 className={styles["subway-section__heading"]}>Transit Access for Solo Travellers</h2>

        <p className={styles["subway-section__intro"]}>
          Orlando is car-dependent by default, but each major tourism zone has practical
          transit or on-site transport options. This guide shows how each area connects —
          so you can plan around what works for your base.
        </p>

        <div className={styles["subway-section__list"]}>
          {items.map((item, index) => (
            <TransitRow key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
