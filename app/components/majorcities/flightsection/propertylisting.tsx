"use client"
import React, { useRef, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./propertylisting.css";
import PropertyListingModel from "../../../models/propertylisting";
import {Cruise} from "../../../models/propertylisting";

type SectionsProps = {
  active: number | null;
  content: PropertyListingModel['sections'];
};
const Propertylisting: React.FC<SectionsProps> = ({content, active}) =>{
const params = useParams();
const cityParam = params?.city;
const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;

  const [hotels, setHotels] = useState<Cruise[]>([]);
  const [cruises, setCruise] = useState<Cruise[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!city) return;

    const fetchHotels = async () => {
      try {
        setLoading(true);
        const [hotelRes, cruiseRes] = await Promise.all([
          fetch(`/data/majorcities/${city}/hotels.json`),
          fetch(`/data/majorcities/${city}/cruises.json`)
        ]);
        const [hotelData, cruiseData]: [Cruise[], Cruise[]] = await Promise.all([
          hotelRes.json(),
          cruiseRes.json()
        ]);
        setHotels(hotelData);
        setCruise(cruiseData);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [city]);
  const section = content.find(s => s.id === active);
  const trackRef = useRef<HTMLDivElement | null>(null);
    const scroll = (direction: "left" | "right") => {
      if (trackRef.current) {
        const card = trackRef.current.querySelector<HTMLDivElement>(".cruise-card");
        if (!card) return;
        const cardWidth = card.offsetWidth + 16; // add gap if you have margin/gap
        trackRef.current.scrollBy({
          left: direction === "right" ? cardWidth : -cardWidth,
          behavior: "smooth",
        });
      }
    };
  if (!section) return null;
  if (!city) return <div>Loading place visit data...</div>;;
  if (section.id === 1)
  {
    return(
      <section className={`${section.className} content-section`}>
      <h2>{section.title}</h2>
      <div className="flight-layout">
        <div className="flight-table">
          {/* Header */}
          <div className="flight-row header">
            {section.header.map((head, idx) => (
              <div key={idx} className="cell">{head}</div>
            ))}
          </div>

          {/* Rows */}
          {section.rows.map((row, idx) => (
            <div key={idx} className={`flight-row ${row.highlight ? "highlight" : ""}`}>
              {/* Desktop layout */}
              <div className="cell airline">
                <img src={row.airline.logo} alt={row.airline.name} className="image" />
                
              </div>
              <div className="cell">
                <div>{row.departure.time}</div>
                <small>{row.departure.city}</small>
              </div>
              <div className="cell">
                <div>{row.arrival.time}</div>
                <small>{row.arrival.city}</small>
              </div>
              <div className="cell">{row.duration}</div>
              <div className="cell price">{row.price}</div>
              <div className="cell">
                <a href={row.buttonUrl} className="btn">{row.buttonText}</a>
              </div>
              {/* Mobile-only stacked layout */}
              <div className="cell mobile-flight-stack">
                <div className="airline-row">
                  <img src={row.airline.logo} alt={row.airline.name} className="airline-logo" />
                  <span className="airline-name">{row.airline.name}</span>
                </div>

                <div className="time-city-row">
                  <div className="segment">
                    <div className="time">{row.departure.time}</div>
                    <small className="city">{row.departure.city}</small>
                  </div>
                  <div className="segment">
                    <div className="time">{row.arrival.time}</div>
                    <small className="city">{row.arrival.city}</small>
                  </div>
                </div>

                <div className="duration-price-row">
                  <div>{row.duration}</div>
                  <div className="price">{row.price}</div>
                </div>

                <div className="button-row">
                  <a href={row.buttonUrl} className="btn">{row.buttonText}</a>
                </div>
              </div>
            </div>
            
          ))}
        </div>
        <aside className="travel-smart-sidebar">
              <h3>Travel Smart</h3>
              <ul>
                <li>
                  <a href="/majorcities/newyork/solo-travel" style={{ cursor: "pointer" }}><span className="icon">🔐</span> Safety Tips</a>
                </li>
                <li>
                  <a href="/majorcities/newyork/landmark" style={{ cursor: "pointer" }}><span className="icon">🧳</span> Solo Travel Advice</a>
                </li>
                <li>
                  <a href="/majorcities/newyork/food" style={{ cursor: "pointer" }}><span className="icon">🍽️</span> NYC Food Guide: Bagels, Bites & Beyond</a>
                </li>
              </ul>
        </aside>
      </div>
    </section>
    

    );
  }
  if(section.id === 2)
  {
    
    return(
      <section className="cruise-carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Book Hotels in {capitalizeWords(city)}</h2>
        <div className="nav-buttons">
          <button className="nav-btn top" onClick={() => scroll("left")}>❮</button>
          <button className="nav-btn top" onClick={() => scroll("right")}>❯</button>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {hotels.map((c, i) => (
            <div className="cruise-card" key={i}>
              <div className="card-image">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="card-content">
                <h3>{c.title}</h3>
                <p className="route">{c.route}</p>
                <p className="duration">Rating {c.duration}</p>
                <div className="card-footer">
                <p className="price">
                  <span className="amount">{c.price.split(" ")[0]}</span>{" "}<br />
                  <span className="per-person">{c.price.split(" ").slice(1).join(" ")}</span>
                </p>
                <p className="price"><button className="details-btn">View Details</button></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  }
  
  
    return(
      <section className="cruise-carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Book Cruises to {capitalizeWords(city)}</h2>
        <div className="nav-buttons">
          <button className="nav-btn top" onClick={() => scroll("left")}>❮</button>
          <button className="nav-btn top" onClick={() => scroll("right")}>❯</button>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {cruises.map((c, i) => (
            <div className="cruise-card" key={i}>
              <div className="card-image">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="card-content">
                <h3>{c.title}</h3>
                <p className="route">{c.route}</p>
                <p className="duration">{c.duration}</p>
                <div className="card-footer">
                <p className="price">
                  <span className="amount">{c.price.split(" ")[0]}</span>{" "}<br />
                  <span className="per-person">{c.price.split(" ").slice(1).join(" ")}</span>
                </p>
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                <p className="price"><button className="details-btn">View Details</button></p>
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );

  
    
};
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
export default Propertylisting;