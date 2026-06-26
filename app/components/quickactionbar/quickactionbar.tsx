import Link from "next/link";
import { FaRegCalendarAlt, FaShieldAlt, FaSubway } from "react-icons/fa";
import { MdFlightLand, MdLocationCity } from "react-icons/md";
import styles from "./QuickActionBar.module.css";

export default function QuickActionBar() {
  return (
    <nav className={styles.quickBar}>
      <Link href="#safety" className={styles.action}>
        <FaShieldAlt className={styles.icon} />
        Safety
      </Link>

      <Link href="#neighborhoods" className={styles.action}>
        <MdLocationCity className={styles.icon} />
        Best Areas to Stay
      </Link>

      <Link href="#transport" className={styles.action}>
        <FaSubway className={styles.icon} />
        Getting Around
      </Link>

      <Link href="#airport-transfer" className={styles.action}>
        <MdFlightLand className={styles.icon} />
        Airport Transfer
      </Link>

      <Link href="#itinerary" className={styles.action}>
        <FaRegCalendarAlt className={styles.icon} />
        3-Day Plan
      </Link>
    </nav>
  );
}
