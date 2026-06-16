import styles from "../booking.module.css";
import type { TabKey } from "./bookingTypes";

export default function BookingTabIcon({ type }: { type: TabKey }) {
  if (type === "flights") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 16.2 3.7 21l-.7-1.7 7.2-4.9-5.4-5.3.9-1.5 7.2 3.4 4.8-7.8c.6-1 1.9-1.3 2.8-.6.9.6 1.2 1.8.6 2.7l-4.8 7.8 5.4 2.1-.7 1Z" />
      </svg>
    );
  }

  if (type === "hotels") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V5.8C4 4.8 4.8 4 5.8 4h6.4c1 0 1.8.8 1.8 1.8V9h4.2c1 0 1.8.8 1.8 1.8V20h-2v-3H6v3H4Zm2-5h12v-3.8c0-.1-.1-.2-.2-.2H14v2h-2V6.2c0-.1-.1-.2-.2-.2H6.2c-.1 0-.2.1-.2.2V15Zm2-6h2V7H8v2Zm0 4h2v-2H8v2Z" />
      </svg>
    );
  }

  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 20v-7.2l-2-1.1V9.6l4 1.5 3.3-2.1L6.5 5.2l1.7-1.1 5 3.2 4.2-2.7c.8-.5 1.9-.3 2.4.5s.3 1.8-.5 2.3l-4.1 2.7 1 5.9-1.9.9-2.4-4.7-3.4 2.2V20H5Z" />
    </svg>
  );
}
