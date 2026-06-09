'use client';
import { useState } from 'react';
import styles from './AirportTabs.module.css';

const airports = [
  {
    id: 'jfk',
    code: 'JFK',
    name: 'John F. Kennedy',
    distance: '~16 miles from Midtown',
    tagline: 'Best public transit link of any NYC airport',
    options: [
      {
        icon: '🚇',
        name: 'AirTrain + Subway',
        cost: '$10.40 / person',
        time: '50–70 min',
        bestFor: 'Solo travelers, budget trips',
        badge: 'Best Value',
        badgeColor: 'green',
        description:
          'Take the AirTrain monorail to Jamaica (E/J/Z) or Howard Beach (A). From Jamaica, the E train reaches Midtown in under 30 min. Tap OMNY or buy AirTrain ticket at machines.',
      },
      {
        icon: '🚌',
        name: 'Uber Shuttle',
        cost: '$25 / person (fixed)',
        time: '45–60 min',
        bestFor: 'Good value, no surge',
        badge: 'No Surge',
        badgeColor: 'blue',
        description:
          'Route 1: Terminals 4 & 5 → Grand Central → Port Authority (42nd St). Route 2: Terminals 4 & 5 → Atlantic Terminal, Brooklyn → Chinatown. Book in advance via Uber app.',
      },
      {
        icon: '📱',
        name: 'Rideshare (Uber/Lyft)',
        cost: '$70–$100+',
        time: '30–60 min',
        bestFor: 'Groups, heavy luggage',
        badge: '',
        badgeColor: '',
        description:
          'Follow airport signs to the designated rideshare pickup zones. Never accept rides from people approaching you in the terminal. Watch for surge pricing at peak hours.',
      },
      {
        icon: '🚕',
        name: 'Yellow Taxi',
        cost: '~$90–100 total',
        time: '40–70 min',
        bestFor: 'Simple, predictable pricing',
        badge: 'Flat Rate',
        badgeColor: 'yellow',
        description:
          '$70 flat rate to Manhattan + tolls (~$10) + 15–20% tip. Always use the official yellow cab taxi stand outside baggage claim.',
      },
      {
        icon: '🚗',
        name: 'Private Car',
        cost: '$100–$250',
        time: '30–60 min',
        bestFor: 'Business, late-night arrivals',
        badge: '',
        badgeColor: '',
        description:
          'Book in advance for guaranteed vehicle, fixed price, and meet-and-greet. Carmel Limo, Dial 7, and Blacklane are reliable options.',
      },
    ],
  },
  {
    id: 'lga',
    code: 'LGA',
    name: 'LaGuardia',
    distance: '~8 miles from Midtown',
    tagline: 'Closest airport, but no direct subway',
    options: [
      {
        icon: '🚌',
        name: 'Q70 Bus + Subway',
        cost: '$2.90 / person',
        time: '40–60 min',
        bestFor: 'Budget travelers',
        badge: 'Cheapest',
        badgeColor: 'green',
        description:
          'Take the free Q70 LaGuardia Link bus to Jackson Heights–Roosevelt Ave station. Five subway lines connect to Manhattan. Pickup is outside each terminal\'s baggage claim.',
      },
      {
        icon: '🚌',
        name: 'Uber Shuttle',
        cost: '$20 / person (fixed)',
        time: '35–55 min',
        bestFor: 'Best value, 4 routes',
        badge: 'No Surge',
        badgeColor: 'blue',
        description:
          '4 routes: Grand Central, Penn Station, Downtown Brooklyn, and Harlem (125th St). All depart from Terminals B & C baggage claim. Book via Uber app.',
      },
      {
        icon: '🚌',
        name: 'M60 Bus',
        cost: '$2.90 / person',
        time: '45–65 min',
        bestFor: 'Upper West Side / Harlem stays',
        badge: '',
        badgeColor: '',
        description:
          'Runs from LaGuardia to 125th Street and Broadway, connecting to the 1/2/3 and A/B/C/D subway lines. Good if you\'re staying on the Upper West Side or Harlem.',
      },
      {
        icon: '📱',
        name: 'Rideshare (Uber/Lyft)',
        cost: '$30–$90',
        time: '20–40 min',
        bestFor: 'Off-peak arrivals, luggage',
        badge: '',
        badgeColor: '',
        description:
          'Rideshare pickups are outside the terminals. Cost swings widely depending on demand — check both apps before confirming.',
      },
      {
        icon: '🚕',
        name: 'Yellow Taxi',
        cost: '$40–$60',
        time: '20–40 min',
        bestFor: 'Simple, metered option',
        badge: '',
        badgeColor: '',
        description:
          'Metered fare (not flat rate like JFK). Follow overhead signs to the official taxi line — don\'t take rides from anyone approaching you inside.',
      },
    ],
  },
  {
    id: 'ewr',
    code: 'EWR',
    name: 'Newark Liberty',
    distance: '~16 miles (New Jersey)',
    tagline: 'Best train connection of any NYC airport',
    options: [
      {
        icon: '🚆',
        name: 'NJ Transit + AirTrain',
        cost: '~$17.85 / person',
        time: '45–60 min',
        bestFor: 'Most travelers',
        badge: 'Most Reliable',
        badgeColor: 'green',
        description:
          'One ticket covers both legs. AirTrain to Newark Airport Station, then NJ Transit to Penn Station (34th St, Midtown). Don\'t board Amtrak — it also stops here but costs significantly more.',
      },
      {
        icon: '🚌',
        name: 'Newark Airport Express Bus',
        cost: '~$19 / person',
        time: '45–60 min',
        bestFor: 'No subway, direct to Midtown',
        badge: 'No Transfer',
        badgeColor: 'blue',
        description:
          'Direct coach service to Port Authority (42nd St), Bryant Park (6th Ave & 41st), and Grand Central (42nd & Park). No need to navigate the subway immediately on arrival.',
      },
      {
        icon: '📱',
        name: 'Rideshare (Uber/Lyft)',
        cost: '$85–$120',
        time: '30–60 min',
        bestFor: 'Late-night, heavy luggage',
        badge: '',
        badgeColor: '',
        description:
          'Follow Ground Transportation / Ride App Pickup signs. Includes NJ Turnpike tolls. Good for late-night arrivals when train frequency drops.',
      },
      {
        icon: '🚕',
        name: 'Yellow Taxi',
        cost: '$85–$110',
        time: '40–70 min',
        bestFor: 'Simple, door-to-door',
        badge: '',
        badgeColor: '',
        description:
          'Metered plus NJ Turnpike and Lincoln/Holland Tunnel tolls. Tip extra (15–20%). Use official taxi stands only.',
      },
      {
        icon: '🚗',
        name: 'Private Car',
        cost: '$90–$140',
        time: '30–60 min',
        bestFor: 'Business, guaranteed vehicle',
        badge: '',
        badgeColor: '',
        description:
          'Book in advance for fixed price and meet-and-greet. Best for business travelers or anyone needing certainty about arrival time.',
      },
    ],
  },
];

export default function AirportTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const airport = airports[activeTab];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Choose Your Airport</h2>
        <p className={styles.sectionSubtitle}>
          Select your arrival airport to see every transport option with current 2026 pricing.
        </p>

        {/* Tab buttons */}
        <div className={styles.tabs}>
          {airports.map((ap, i) => (
            <button
              key={ap.id}
              id={ap.id}
              className={`${styles.tab} ${i === activeTab ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.tabCode}>{ap.code}</span>
              <span className={styles.tabName}>{ap.name}</span>
            </button>
          ))}
        </div>

        {/* Airport header */}
        <div className={styles.airportHeader}>
          <div>
            <h3 className={styles.airportName}>{airport.code} — {airport.name}</h3>
            <p className={styles.airportMeta}>📍 {airport.distance} &nbsp;·&nbsp; {airport.tagline}</p>
          </div>
        </div>

        {/* Options grid */}
        <div className={styles.optionsGrid}>
          {airport.options.map((opt) => (
            <div key={opt.name} className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <span className={styles.optionIcon}>{opt.icon}</span>
                <div>
                  <div className={styles.optionName}>
                    {opt.name}
                    {opt.badge && (
                      <span className={`${styles.badge} ${styles[opt.badgeColor]}`}>
                        {opt.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.optionMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Cost</span>
                  <span className={styles.metaValue}>{opt.cost}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Time</span>
                  <span className={styles.metaValue}>{opt.time}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Best for</span>
                  <span className={styles.metaValue}>{opt.bestFor}</span>
                </div>
              </div>
              <p className={styles.optionDesc}>{opt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
