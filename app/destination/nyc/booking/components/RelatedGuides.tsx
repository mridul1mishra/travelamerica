import styles from "../booking.module.css";
import type { RelatedGroup } from "./bookingTypes";

type RelatedGuidesProps = {
  cityName: string;
  groups: RelatedGroup[];
};

export default function RelatedGuides({ cityName, groups }: RelatedGuidesProps) {
  return (
    <section className={styles.relatedFooter} aria-label="Related guides">
      <div className={styles.relatedFooterInner}>
        <h2 className={styles.relatedHeading}>Plan your {cityName} trip</h2>
        <div className={styles.relatedGroups}>
          {groups.map((group) => (
            <div className={styles.relatedGroup} key={group.heading}>
              <h3 className={styles.relatedGroupTitle}>{group.heading}</h3>
              <ul className={styles.relatedLinks}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a className={styles.relatedLink} href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
