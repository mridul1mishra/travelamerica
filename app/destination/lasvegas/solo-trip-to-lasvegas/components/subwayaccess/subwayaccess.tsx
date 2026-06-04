import data from "@/content/destination/lasvegas/solo-trip-to-lasvegas/subwayAccess.json";
import { SubwayAccessItem } from "@/app/models/destination/subwayprops";
import { SubwayRow } from "./subwayrows";
import "./subwayaccess.css";

export function SubwayAccessSection() {
  const items = data as SubwayAccessItem[];

  return (
    <section className="subway-section">
      <div className="subway-section__inner">
        <h2 className="subway-section__heading">Getting Around for Solo Travelers</h2>

        <p className="subway-section__intro">
          There is no subway in Las Vegas — but you rarely need one. The Strip is walkable end to end,
          and the Monorail, the 24-hour Deuce bus, and rideshare cover everything else. This dashboard
          shows how each area connects, with clarity, safety, and convenience in mind.
        </p>

        <div className="subway-section__list">
          {items.map((item, index) => (
            <SubwayRow key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
