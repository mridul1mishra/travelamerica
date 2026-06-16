import styles from "../booking.module.css";
import type { CityBookingConfig } from "./bookingTypes";

export default function FlightsTab({ flights }: { flights: CityBookingConfig["flights"] }) {
  return (
    <section className="flight-section content-section">
      <h2>{flights.title}</h2>
      <div className="flight-layout">
        <div className="flight-table">
          <div className="flight-row header">
            {flights.header.map((head) => (
              <div key={head} className="cell">
                {head}
              </div>
            ))}
          </div>
          {flights.rows.length === 0 ? (
            <p className={styles.emptyState}>Live flight prices are being updated - check back soon.</p>
          ) : (
            flights.rows.map((row, index) => (
              <div key={`${row.airline.name}-${index}`} className={`flight-row ${row.highlight ? "highlight" : ""}`}>
                <div className="cell airline">
                  <img src={row.airline.logo} alt={row.airline.name} className="image" width={32} height={32} />
                </div>
                <div className="cell">
                  <div>{row.departure.time}</div>
                  <small>{row.departure.city}</small>
                  {row.departure.date ? <small className={styles.flightDate}>{row.departure.date}</small> : null}
                </div>
                <div className="cell">
                  <div>{row.arrival.time}</div>
                  <small>{row.arrival.city}</small>
                </div>
                <div className="cell">{row.duration}</div>
                <div className="cell price">{row.price}</div>
                <div className="cell">
                  <a href={row.buttonUrl} className="btn">
                    {row.buttonText}
                  </a>
                </div>
                <div className="cell mobile-flight-stack">
                  <div className="airline-row">
                    <img
                      src={row.airline.logo}
                      alt={row.airline.name}
                      className="airline-logo"
                      width={32}
                      height={32}
                    />
                    <span className="airline-name">{row.airline.name}</span>
                  </div>
                  <div className="time-city-row">
                    <div className="segment">
                      <div className="time">{row.departure.time}</div>
                      <small className="city">{row.departure.city}</small>
                      {row.departure.date ? <small className={styles.flightDate}>{row.departure.date}</small> : null}
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
                    <a href={row.buttonUrl} className="btn">
                      {row.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
