import styles from "./QuickActionBar.module.css";
import Link from "next/link";

// Icons
import { FaShieldAlt } from "react-icons/fa";
import { MdLocationCity, MdWarningAmber } from "react-icons/md";
import { FaSubway } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa"

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

      {/* FRAME 8 */}
      <Link href="#female-travel" className={styles.action}>
        <FaFemale className={styles.icon} />
        Female Solo
      </Link>

      {/* FRAME 9 */}
      <Link href="#itinerary" className={styles.action}>
        <FaRegCalendarAlt className={styles.icon} />
        3‑Day Plan
      </Link>
    </nav>
  );
}