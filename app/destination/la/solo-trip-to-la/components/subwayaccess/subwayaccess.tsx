import data from "@/content/destination/la/solo-trip-to-la/subwayAccess.json";
import { SubwayAccessItem } from "@/app/models/destination/subwayprops";
import { SubwayRow } from "./subwayrows";
import "./subwayaccess.css";

export function SubwayAccessSection() {
  const items = data as SubwayAccessItem[];

  return (
    <section className="subway-section">
      <div className="subway-section__inner">
        <h2 className="subway-section__heading">Metro Access for Solo Travelers</h2>

        <p className="subway-section__intro">
          LA is car-dependent, but a few Metro corridors are genuinely useful for solo travelers.
          This dashboard shows how each neighborhood connects to the rest of the city — with
          clarity, safety, and convenience in mind.
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
