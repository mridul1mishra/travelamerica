import styles from "./whytrustthisguide.module.css";
import type { WhyTrustThisGuide as WhyTrustThisGuideType } from "../types-subwaySafetyGuide";

interface Props {
  data: WhyTrustThisGuideType;
}

export default function WhyTrustThisGuide({ data }: Props) {
  const {
    author_expertise,
    local_insights,
    safety_framework,
    data_sources,
    editorial_standards,
  } = data;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Why Trust This Guide</h2>
      
      <p className={styles.paragraph}>{author_expertise}</p>
      <p className={styles.paragraph}>{local_insights}</p>
      <p className={styles.paragraph}>{safety_framework}</p>

      <h3 className={styles.subheading}>Data Sources</h3>
      <ul className={styles.list}>
        {data_sources.map((source, index) => (
          <li key={index} className={styles.listItem}>
            {source}
          </li>
        ))}
      </ul>

      <p className={styles.paragraph}>{editorial_standards}</p>
    </section>
  );
}
