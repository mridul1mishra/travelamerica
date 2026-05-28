import React from "react";
import "./placevisit.css";
import type { PlaceVisitSection } from "../../../models/placevisit";

// Previously fetched /data/majorcities/${city}/placevisit.json on the client.
// The JSON now lives in content/ and is loaded server-side; this component
// just renders whatever it's given.
type PlacevisitProps = {
  content: PlaceVisitSection;
};

const Placevisit: React.FC<PlacevisitProps> = ({ content }) => {
  if (!content) {
    return <div>Loading...</div>;
  }
  return (
    <section className="plan-trip-section">
      <div className="container">
        <h2>{content.title}</h2>
        {content.places.map((row, rowIndex) => (
          <div key={rowIndex} className="place-visit">
            {row.map((place, index) => (
              <div key={index} className="fixed-width-div">
                <span><img src={place.icon} alt={place.name}/></span>
                <span className="place-name">{place.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Placevisit;
