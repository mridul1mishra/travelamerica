import styles from "./WhyTrustThisGuide.module.css";

interface WhyTrustItemData {
  title: string;
  lead: string;
  text: string;
}

interface WhyTrustData {
  heading: string;
  intro: string;
  items: WhyTrustItemData[];
  footer: string;
}

interface Props {
  data: WhyTrustData;
}

function WhyTrustItem({ title, lead, text }: WhyTrustItemData) {
  return (
    <div className={styles.whytrustItem}>
      <h3 className={styles.whytrustItemTitle}>{title}</h3>
      <p className={styles.whytrustItemText}>
        <span className={styles.whytrustItemLead}>{lead}</span> {text}
      </p>
    </div>
  );
}

export function WhyTrustThisGuide({ data }: Props) {
  return (
    <section className={styles.whytrust}>
      <div className={styles.whytrustInner}>
        <h2 className={styles.whytrustHeading}>{data.heading}</h2>
        <p className={styles.whytrustIntro}>{data.intro}</p>
        <div className={styles.whytrustGrid}>
          {data.items.map((item, index) => (
            <WhyTrustItem key={index} title={item.title} lead={item.lead} text={item.text} />
          ))}
        </div>
        <p className={styles.whytrustFooter}>{data.footer}</p>
      </div>
    </section>
  );
}
