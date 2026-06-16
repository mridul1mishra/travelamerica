import BookingTabIcon from "./BookingTabIcon";
import styles from "../booking.module.css";
import type { TabDef, TabKey } from "./bookingTypes";

type BookingTabsProps = {
  tabs: TabDef[];
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
};

export default function BookingTabs({ tabs, activeTab, onSelectTab }: BookingTabsProps) {
  return (
    <div className={styles.tabBar} role="tablist" aria-label="Booking options">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          role="tab"
          aria-selected={activeTab === tab.key}
          className={`${styles.tab} ${activeTab === tab.key ? styles.active : ""}`}
          onClick={() => onSelectTab(tab.key)}
          type="button"
        >
          <BookingTabIcon type={tab.key} />
          {tab.label}
        </button>
      ))}
    </div>
  );
}
