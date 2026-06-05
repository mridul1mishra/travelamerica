import styles from "./emergencycontactblock.module.css";
import EmergencyContactCard from "./EmergencyContactCard";
import emergencyContacts from "./emergencyContactsData";

export default function EmergencyContactBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Emergency Contacts</h2>
        <p className={styles.subtitle}>
          Quick access numbers and resources you may need while traveling in NYC.
        </p>

        <div className={styles.grid}>
          {emergencyContacts.map((item) => (
            <EmergencyContactCard
              key={item.id}
              label={item.label}
              number={item.number}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
