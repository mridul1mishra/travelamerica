import nycData from "@/content/destination/solotriptonyc/whyTrustItems.json";
import { WhyTrustItem } from "./whytrustitem";
import "./whytrustitem.css";

interface WhyTrustData {
  heading: string;
  intro: string;
  items: { title: string; lead: string; text: string }[];
  footer: string;
}

interface Props {
  data?: WhyTrustData;
}

export function WhyTrustThisGuide({ data = nycData }: Props) {
  return (
    <section className="whytrust">
      <div className="whytrust__inner">
        <h2 className="whytrust__heading">{data.heading}</h2>
        <p className="whytrust__intro">{data.intro}</p>
        <div className="whytrust__grid">
          {data.items.map((item, index) => (
            <WhyTrustItem
              key={index}
              title={item.title}
              lead={item.lead}
              text={item.text}
            />
          ))}
        </div>
        <p className="whytrust__footer">{data.footer}</p>
      </div>
    </section>
  );
}
