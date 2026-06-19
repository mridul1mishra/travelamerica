import styles from "./linkhubgrid.module.css";
import LinkHubCard from "./LinkHubCard";
import linkHubData from "./linkHubData";

export default function LinkHubGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>More NYC Resources</h2>
        <p className={styles.subtitle}>
          Explore related guides to help you plan a safer, smoother NYC trip.
        </p>

        <div className={styles.grid}>
          {linkHubData.map((item) => (
            <LinkHubCard
              key={item.id}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
