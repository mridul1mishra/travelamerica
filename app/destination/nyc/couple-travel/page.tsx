import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NavigationHeader from '@/app/components/Header/NavigationHeader';
import Footer from '@/app/components/Header/Footer/footer';
import styles from '../solo-itinerary/SoloItinerary.module.css';
import { days, faqs } from './content';

const url = 'https://www.travelsamericas.com/destination/nyc/couple-travel';
const title = 'NYC Couple Travel: A 3-Day Itinerary for Time Together';
const description = 'Plan three days in NYC together with scenic walks, art, shared food discoveries, skyline views, and Broadway or jazz, plus optional Chelsea and Queens experiences.';
const image = '/data/majorcities/newyork/assets/newyork.webp';

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title, description, url, type: 'article', siteName: 'Travels Americas', images: [{ url: `https://www.travelsamericas.com${image}`, alt: 'New York City' }] },
  twitter: { card: 'summary_large_image', title, description, images: [`https://www.travelsamericas.com${image}`] },
};

export default function CoupleTravelPage() {
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'TouristTrip', name: title, description, url, touristType: 'Couples', itinerary: { '@type': 'ItemList', itemListElement: days.map((day, index) => ({ '@type': 'ListItem', position: index + 1, name: `${day.day}: ${day.title}`, description: day.summary })) } },
      { '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [ ['Home', 'https://www.travelsamericas.com/'], ['New York City', 'https://www.travelsamericas.com/destination/nyc'], ['Couple Travel', url] ].map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item })) },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <NavigationHeader />
    <div className={styles.headerSpacer} aria-hidden="true" />
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="couple-heading">
        <div className={styles.heroCopy}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/destination/nyc">New York City</Link><span>/</span><span aria-current="page">Couple Travel</span></nav>
          <p className={styles.eyebrow}>Three days in NYC together</p>
          <h1 id="couple-heading">New York City, Made for Time Together</h1>
          <p className={styles.lede}>Scenic walks, food worth sharing, art that starts a conversation, and an evening you will remember. Build your three-day NYC getaway around experiences for two—not a checklist.</p>
          <div className={styles.actions}><Link className={styles.primaryButton} href="#day-plan">Explore the 3-day route</Link><Link className={styles.secondaryButton} href="#optional-experiences">Make it your own</Link></div>
          <div className={styles.statsRow} aria-label="Trip highlights">{[['Views', 'Park + skyline'], ['Discoveries', 'Food + culture'], ['Evenings', 'Dinner + a show']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        </div>
        <div className={styles.heroMedia}><Image src={image} alt="New York City" fill priority sizes="(max-width: 1060px) 100vw, 48vw" /></div>
      </section>

      <section className={styles.plannerBand} aria-labelledby="experience-heading">
        <div><p className={styles.eyebrow}>Your kind of getaway</p><h2 id="experience-heading">Choose what feels special to both of you</h2></div>
        <div className={styles.plannerGrid}>{[
          ['A view to share', 'A skyline deck can be the highlight. A park bench or waterfront walk can be just as much a moment for two.'],
          ['A taste of the city', 'Pair a special dinner with coffee, market browsing, and casual food discoveries. Not every meal needs an occasion.'],
          ['An evening together', 'Choose Broadway, jazz, or dinner as the focus. Make the choice together and plan the surrounding route around it.'],
        ].map(([heading, text]) => <article className={styles.plannerCard} key={heading}><h3>{heading}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="day-plan" className={styles.daySection} aria-labelledby="days-heading">
        <div className={styles.sectionHeader}><p className={styles.eyebrow}>The three-day route</p><h2 id="days-heading">Three different ways to enjoy the city together</h2><p>Use these days as a starting point. Choose your museum and evening experiences before booking, and swap outdoor stops when the weather calls for it.</p></div>
        <div className={styles.dayList}>{days.map(day => <article className={styles.dayCard} style={{ gridTemplateColumns: '1fr' }} key={day.day}>
          <div className={styles.dayContent}><div className={styles.dayMeta}><span>{day.day}</span><span>{day.zone}</span></div><h3>{day.title}</h3><p>{day.summary}</p>
            <div className={styles.stopGrid}>{day.stops.map(([time, heading, text]) => <div className={styles.stopCard} key={time}><span>{time}</span><strong>{heading}</strong><p>{text}</p></div>)}</div>
            <div className={styles.noteRow}><p>{day.note}</p></div>
          </div>
        </article>)}</div>
      </section>

      <section id="optional-experiences" className={styles.routePanel} aria-labelledby="optional-heading">
        <div><p className={styles.eyebrow}>Optional experiences</p><h2 id="optional-heading">Add a different kind of shared moment</h2><p>Choose a replacement for part of your day, rather than trying to squeeze both into the full itinerary.</p></div>
        <div className={styles.routeList}>
          <article className={styles.plannerCard}><h3>ARTE Museum · Chelsea</h3><p>An immersive digital-art experience at 61 Chelsea Piers, Manhattan. Consider it on Day 2 in place of part of the outdoor Chelsea plan. Check current admission and visitor guidance directly.</p><p><a href="https://newyork.artemuseum.com/visit">Official ARTE Museum visitor information</a></p></article>
          <article className={styles.plannerCard}><h3>Gantry Plaza State Park · Queens</h3><p>Waterfront walks and Midtown skyline views at 4-44 47th Road, Long Island City. Use it as an alternative waterfront afternoon, with a separate journey to Queens—not as a walk from DUMBO.</p><p><a href="https://parks.ny.gov/visit/state-parks/gantry-plaza-state-park">Official Gantry Plaza park information</a></p></article>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-heading"><div className={styles.sectionHeader}><p className={styles.eyebrow}>Before you go</p><h2 id="faq-heading">Planning your NYC trip together</h2></div><div className={styles.faqGrid}>{faqs.map(faq => <article key={faq.question} className={styles.faqCard}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></section>
      <section className={styles.nextSteps} aria-label="Related NYC planning guides"><Link href="/destination/nyc/best-areas-to-stay">Choose your neighborhood</Link><Link href="/destination/nyc/things-to-do">Explore shared experiences</Link><Link href="/destination/nyc/getting-to-nyc">Plan your arrival</Link><Link href="/destination/nyc/booking?tab=hotels&from=couple-travel">Compare NYC stays</Link></section>
    </main>
    <Footer />
  </>;
}
