'use client';
import { useState } from 'react';
import styles from './AirportTabs.module.css';

const airports = [
  {
    id: 'mco',
    code: 'MCO',
    name: 'Orlando International',
    distance: '~20–25 min to Disney World',
    tagline: 'Main hub serving all major theme park areas',
    options: [
      {
        icon: '🚗',
        name: 'Rental Car',
        cost: 'Varies — book in advance',
        time: '20–25 min to Disney',
        bestFor: 'Families, groups, flexibility',
        badge: 'Most Popular',
        badgeColor: 'green',
        description:
          'The majority of Orlando visitors rent a car. All major rental companies operate from Terminal B and the Terminal C Rental Car Center. A car gives you flexibility for grocery stops, dining, and day trips beyond the resort areas.',
      },
      {
        icon: '📱',
        name: 'Rideshare (Uber/Lyft)',
        cost: '$30–60 to Disney area',
        time: '20–30 min',
        bestFor: 'Solo travelers, couples',
        badge: '',
        badgeColor: '',
        description:
          'Follow signs to Ride App Pickup on Level 1 of Terminal B or Terminal C. Cost varies significantly by destination and time of day. Check both apps before confirming — pricing can differ.',
      },
      {
        icon: '🚌',
        name: 'Mears Connect Shuttle',
        cost: '~$39–45 / person (shared)',
        time: '45–75 min (shared)',
        bestFor: 'Disney resort guests',
        badge: 'Official Disney Service',
        badgeColor: 'blue',
        description:
          'Mears Connect is the official replacement for Disney\'s discontinued Magical Express. Shared shuttles serve Disney resort hotels. Private transfers also available for groups. Book in advance at mearstransportation.com. Prices may change — verify before travel.',
      },
      {
        icon: '🏨',
        name: 'Hotel Shuttle',
        cost: 'Free (selected hotels)',
        time: 'Varies',
        bestFor: 'On-site resort guests',
        badge: 'Free',
        badgeColor: 'green',
        description:
          'Many on-property hotels at Disney, Universal, and I-Drive offer complimentary airport shuttles. Confirm availability when booking your hotel — schedules and eligibility vary.',
      },
      {
        icon: '🚌',
        name: 'Lynx Bus (Public Transit)',
        cost: '$2 / person',
        time: '90–120+ min',
        bestFor: 'Downtown Orlando, not resorts',
        badge: '',
        badgeColor: '',
        description:
          'Lynx operates public bus service from MCO into downtown Orlando. It is not practical for reaching the theme park corridor directly. Consider only if your destination is downtown or the surrounding area.',
      },
    ],
  },
  {
    id: 'sfb',
    code: 'SFB',
    name: 'Orlando Sanford',
    distance: '~45 miles north of Disney World',
    tagline: 'Low-cost hub — plan your ground transfer carefully',
    options: [
      {
        icon: '🚗',
        name: 'Rental Car',
        cost: 'Varies — book in advance',
        time: '50–60 min to Disney',
        bestFor: 'Essential — few alternatives',
        badge: 'Recommended',
        badgeColor: 'green',
        description:
          'A rental car is effectively required from SFB. On-site rental facilities are available from most major companies. The drive south to Walt Disney World is about 50 minutes on FL-417 — a toll road.',
      },
      {
        icon: '📱',
        name: 'Rideshare (Uber/Lyft)',
        cost: '$80–120+ to Disney area',
        time: '50–70 min',
        bestFor: 'Last resort if car unavailable',
        badge: '',
        badgeColor: '',
        description:
          'Rideshare from SFB to the Disney/Universal area is significantly more expensive than from MCO due to the extra distance. Availability can also be limited at SFB compared to a major airport.',
      },
      {
        icon: '🚌',
        name: 'Pre-booked Shuttle',
        cost: 'Varies — book in advance',
        time: '60–90 min',
        bestFor: 'Groups without a rental car',
        badge: '',
        badgeColor: '',
        description:
          'Several private shuttle companies serve SFB to resort areas. These must be booked in advance — there is no equivalent of Mears Connect at Sanford. Search "Sanford airport shuttle to Disney" for current providers and pricing.',
      },
      {
        icon: '⚠️',
        name: 'No Hotel or Disney Shuttles',
        cost: 'N/A',
        time: 'N/A',
        bestFor: 'Awareness',
        badge: 'Note',
        badgeColor: 'yellow',
        description:
          'Disney\'s resort shuttles and most hotel transfer services only operate from MCO. If your flight arrives at SFB, you must arrange your own transport. Factor ground transfer costs into your total trip budget when comparing SFB vs MCO fares.',
      },
    ],
  },
  {
    id: 'brightline',
    code: 'BRT',
    name: 'Brightline Train',
    distance: 'Station inside MCO Terminal C',
    tagline: 'Higher-speed rail from South Florida to MCO',
    options: [
      {
        icon: '🚆',
        name: 'Brightline from South Florida',
        cost: 'Varies — book at brightline.com',
        time: '3h from Miami, ~2h from Fort Lauderdale',
        bestFor: 'South Florida visitors avoiding the drive',
        badge: 'Train Option',
        badgeColor: 'blue',
        description:
          'Brightline connects Miami, Aventura, Fort Lauderdale, Boca Raton, and West Palm Beach directly to a station inside MCO\'s Terminal C. A good alternative to the I-4/Florida Turnpike drive for South Florida visitors. Check brightline.com for current schedules and pricing — subject to change.',
      },
      {
        icon: '🚗',
        name: 'Rental Car from MCO (after Brightline)',
        cost: 'Varies',
        time: '20–25 min to Disney',
        bestFor: 'Flexibility after arriving by train',
        badge: 'Most Popular',
        badgeColor: 'green',
        description:
          'After arriving on Brightline at MCO Terminal C, head to the Terminal C Rental Car Center or the rental car shuttle to Terminal B facilities. This is the most flexible option for theme park visitors.',
      },
      {
        icon: '📱',
        name: 'Rideshare from MCO',
        cost: '$30–60 to Disney area',
        time: '20–30 min',
        bestFor: 'Couples, light packers',
        badge: '',
        badgeColor: '',
        description:
          'After arriving on Brightline, take the MCO connector to the main terminal and follow Ride App Pickup signs to the rideshare zones. Same cost and timing as a regular MCO arrival.',
      },
      {
        icon: '🚌',
        name: 'Mears Connect from MCO',
        cost: '~$39–45 / person (shared)',
        time: '45–75 min (shared)',
        bestFor: 'Disney resort guests',
        badge: '',
        badgeColor: '',
        description:
          'After arriving on Brightline at MCO, you can use Mears Connect for Disney resort transfers. Book in advance at mearstransportation.com. The Brightline station is connected to MCO\'s main terminal.',
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
        <h2 className={styles.sectionTitle}>Choose Your Arrival Method</h2>
        <p className={styles.sectionSubtitle}>
          Select your arrival point to see every transport option to the Orlando theme park areas.
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
