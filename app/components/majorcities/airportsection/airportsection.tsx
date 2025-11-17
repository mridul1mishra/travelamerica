"use client";
import React, { useState } from "react";
import "./airportsection.css";
import Cities from "../../../models/majorcities";

type Props = {
  onSelect: (section: number) => void;
  content: Cities;
};

const Airportsection: React.FC<Props> = ({ content, onSelect }) => {
  const [active, setActive] = useState(1);
  const handleClick = (id: number) => {
    setActive(id);
    onSelect(id);
  };

  if (!content) {
    return <div>No airport data available</div>;
  }

  const city = content;

  return (
    <section className="airport-section">
      <div className="container">
        <div className="intro-and-sidebar">
          <div className="intro">
            <h1>{city.title}</h1>
            <p>{city.description}</p>

            <div className="tab-container">
              {city.tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={active === tab.id ? "tab active" : "tab"}
                  onClick={() => handleClick(tab.id)}
                  data-section={tab.section}
                >
                  <img src={tab.img} alt={tab.alt} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="cta-button-wrapper">
            <a href="/majorcities/newyork/solo-travel"><button className="plan-button">Plan Your NYC Trip →</button></a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Airportsection;
