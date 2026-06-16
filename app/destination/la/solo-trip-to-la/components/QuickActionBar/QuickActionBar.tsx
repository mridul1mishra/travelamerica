import styles from "./QuickActionBar.module.css";
import Link from "next/link";
import { FaShieldAlt, FaSubway, FaFemale, FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

export default function QuickActionBar() {
  return (
    <nav className={styles.quickBar}>
      <Link href="#safety" className={styles.action}>
        <FaShieldAlt className={styles.icon} /> Safety
      </Link>
      <Link href="#neighborhoods" className={styles.action}>
        <MdLocationCity className={styles.icon} /> Best Areas to Stay
      </Link>
      <Link href="#transport" className={styles.action}>
        <FaSubway className={styles.icon} /> Getting Around
      </Link>
      <Link href="#female-travel" className={styles.action}>
        <FaFemale className={styles.icon} /> Female Solo
      </Link>
      <Link href="#itinerary" className={styles.action}>
        <FaRegCalendarAlt className={styles.icon} /> 3‑Day Plan
      </Link>
    </nav>
  );
}
