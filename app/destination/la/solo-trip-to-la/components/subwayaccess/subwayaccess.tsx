import data from "@/content/destination/la/solo-trip-to-la/subwayAccess.json";
import { SubwayAccessItem } from "@/app/models/destination/subwayprops";
import { SubwayRow } from "./subwayrows";
import styles from "./subwayaccess.module.css";

export function SubwayAccessSection() {
  const items = data as SubwayAccessItem[];

  return (
    <section className={styles["subway-section"]}>
      <div className={styles["subway-section__inner"]}>
        <h2 className={styles["subway-section__heading"]}>Metro Access for Solo Travelers</h2>

        <p className={styles["subway-section__intro"]}>
          LA is car-dependent, but a few Metro corridors are genuinely useful for solo travelers.
          This dashboard shows how each neighborhood connects to the rest of the city — with
          clarity, safety, and convenience in mind.
        </p>

        <div className={styles["subway-section__list"]}>
          {items.map((item, index) => (
            <SubwayRow key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
