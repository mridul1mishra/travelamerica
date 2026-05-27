import Footer from "../components/Header/Footer/footer";
import SimpleHeader from "../components/Header/SimpleHeader";
import styles from "./company.module.css";

// AboutPage + Person schemas. The Person schema specifically helps Google
// associate this site with a real author (E-E-A-T signal), and is what
// Booking.com / Awin reviewers look for during affiliate applications.
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.travelsamericas.com/companydetails#aboutpage",
      "name": "About Travels Americas",
      "url": "https://www.travelsamericas.com/companydetails",
      "description":
        "About Travels Americas — our mission, editorial standards, and the team behind practical, scenario-based US travel guides for solo, group, and first-time travelers.",
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://www.travelsamericas.com/#organization",
        "name": "Travels Americas",
        "url": "https://www.travelsamericas.com",
        "logo": "https://www.travelsamericas.com/data/logo.png",
        "foundingDate": "2023",
        "founder": {
          "@type": "Person",
          "@id": "https://www.travelsamericas.com/#founder",
          "name": "Mridul",
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Editorial",
          "email": "info@travelsamericas.com",
        },
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.travelsamericas.com/#founder",
      "name": "Mridul",
      "jobTitle": "Founder & Editor",
      "worksFor": { "@id": "https://www.travelsamericas.com/#organization" },
    },
  ],
};

export default function CompanyDetailsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <SimpleHeader pageTitle="About Travels Americas" />

      <main className={styles.container}>

        <section className={styles.banner} aria-hidden="true">
          <div className={styles.bannerInner}>
            <h2 style={{ position: "absolute", left: "-9999px", top: "auto" }}>About Travels Americas</h2>
            <img className={styles.imagebanner} src="/data/aboutus.jpeg" alt="About Travels Americas" />
          </div>
        </section>

        <article className={`prose ${styles.prose}`} aria-label="About Travels Americas">

          <div className={styles.list}>
            <h2>What we do</h2>
            <p>
              Travels Americas publishes practical, scenario-based travel guides
              for major US cities &mdash; starting with New York and expanding
              from there. Our focus is the situations travelers actually face:
              choosing where to stay, navigating the subway after dark, finding
              somewhere to eat alone, deciding which landmarks are worth the
              ticket price, and what to do when something feels off.
            </p>
          </div>

          <div className={styles.list}>
            <h2>Why this site exists</h2>
            <p>
              I started Travels Americas after my first trip to New York City,
              because the travel content I found while planning was either
              generic enough to be useless or fear-based enough to be misleading.
              The good information existed &mdash; spread across Reddit threads,
              old blog posts, and locals&apos; word of mouth &mdash; but nobody
              had pulled it together in a way that helped a first-time visitor
              make decisions confidently.
            </p>
            <p>
              That gap has only widened since AI-generated travel content
              flooded the internet. Travels Americas is my attempt to keep
              practical, human travel writing alive for US destinations &mdash;
              with real specifics (addresses, hours, ticket prices, subway lines)
              instead of paragraphs of marketing fluff.
            </p>
          </div>

          <div className={styles.list}>
            <h2>About the editor</h2>
            <p>
              <strong>Mridul</strong> is the founder and editor of Travels
              Americas. NYC was the first major US city I traveled to alone, and
              the experience of figuring it out the hard way shaped everything
              about how this site approaches travel content. Every guide is
              written from the perspective of someone planning a real trip and
              wanting answers, not someone selling a fantasy.
            </p>
          </div>

          <div className={styles.list}>
            <h2>How we work (editorial standards)</h2>
            <ul>
              <li>
                <strong>Affiliate independence.</strong> Travels Americas may earn
                commissions from qualifying bookings made through links on this
                site, but affiliate relationships do not influence our editorial
                recommendations. We only recommend hotels, tours, and services we
                believe are useful to our readers.
              </li>
              <li>
                <strong>No paid editorial placements.</strong> We do not accept
                payment in exchange for inclusion, ranking, or coverage in our
                guides. If a venue or service appears in our content, it&apos;s
                because we think it earns the mention.
              </li>
              <li>
                <strong>Active updates.</strong> Our guides are reviewed and
                updated based on real visits, reader feedback, and changes to
                attractions, transit, and city conditions. Stale information
                gets fixed or removed.
              </li>
              <li>
                <strong>Practical over poetic.</strong> We pick specificity over
                style. Addresses, subway lines, hours, and price ranges &mdash;
                not adjectives. If we can&apos;t say something useful in a
                sentence, we don&apos;t pad it into a paragraph.
              </li>
            </ul>
          </div>

          <div className={styles.list}>
            <h2>Get in touch</h2>
            <p>
              Spotted something out of date? Have a correction, a question, or
              an experience to share? Email{" "}
              <a href="mailto:info@travelsamericas.com">info@travelsamericas.com</a>{" "}
              and we&apos;ll get back to you. Reader corrections are how the
              guides stay accurate &mdash; they&apos;re always welcome.
            </p>
          </div>

        </article>
      </main>

      <Footer />
    </>
  );
}
