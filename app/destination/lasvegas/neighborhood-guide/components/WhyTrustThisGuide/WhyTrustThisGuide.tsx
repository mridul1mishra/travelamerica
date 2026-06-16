import "@/app/components/destination/whytrustitem/whytrustitem.css";

interface WhyTrustData {
  heading: string;
  intro: string;
  items: { title: string; lead: string; text: string }[];
  footer: string;
}

interface Props {
  data: WhyTrustData;
}

function WhyTrustItem({ title, lead, text }: { title: string; lead: string; text: string }) {
  return (
    <div className="whytrust-item">
      <h3 className="whytrust-item__title">{title}</h3>
      <p className="whytrust-item__text">
        <span className="whytrust-item__lead">{lead}</span> {text}
      </p>
    </div>
  );
}

export function WhyTrustThisGuide({ data }: Props) {
  return (
    <section className="whytrust">
      <div className="whytrust__inner">
        <h2 className="whytrust__heading">{data.heading}</h2>
        <p className="whytrust__intro">{data.intro}</p>
        <div className="whytrust__grid">
          {data.items.map((item, index) => (
            <WhyTrustItem key={index} title={item.title} lead={item.lead} text={item.text} />
          ))}
        </div>
        <p className="whytrust__footer">{data.footer}</p>
      </div>
    </section>
  );
}
