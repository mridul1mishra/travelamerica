"use client";
import Link from "next/link";
import data from "../../data/common/popularplaces.json";
import styles from "../../components/popularplaces/popularstyles.module.css";

export default function SideBar(){
    const { heading, links } = data;
    return(
        <aside className={styles.sidebar}>
      <h2 className={styles.heading}>{heading}</h2>
      <ul className={styles.list}>
        {links.map((l) => (
          <li key={l.label}>
            {<Link href={l.href} className={styles.link}>
                {l.label}
              </Link>
            }
          </li>
        ))}
      </ul>
    </aside>

    );
}

