import styles from "../booking.module.css";
import type { RailConfig, TabKey } from "./bookingTypes";

type GuideRailProps = {
  rail: RailConfig;
  onSelectTab: (tab: TabKey) => void;
};

export default function GuideRail({ rail, onSelectTab }: GuideRailProps) {
  return (
    <div className={styles.railContainer}>
      <button className={styles.railNextStep} onClick={() => onSelectTab(rail.nextStep.toTab)} type="button">
        {rail.nextStep.label}
      </button>
      <p className={styles.railHeadline}>Helpful guides</p>
      <ul className={styles.railGuides}>
        {rail.guides.map((guide) => (
          <li key={guide.href}>
            <a href={guide.href}>{guide.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
