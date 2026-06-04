import data from "@/content/destination/solotriptonyc/subwayAccess.json";
import { SubwayAccessItem } from "@/app/models/destination/subwayprops";
import { SubwayRow } from "./subwayrows";
import styles from "./subwayaccess.module.css";

export function SubwayAccessSection() {
  const items = data as SubwayAccessItem[];

  return (
    <section className={styles["subway-section"]}>
      <div className={styles["subway-section__inner"]}>
        <h2 className={styles["subway-section__heading"]}>Subway Access for Solo Travelers</h2>

        <p className={styles["subway-section__intro"]}>
          Not all subway lines feel the same at night. This dashboard shows how each neighborhood
          connects to the rest of NYC — with clarity, safety, and convenience in mind.
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
