import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Header/Footer/footer";
import SimpleHeader from "../components/Header/SimpleHeader";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Travels Americas",
  description:
    "Contact Travels Americas with questions, corrections, or feedback about our US city travel guides.",
  alternates: { canonical: "https://www.travelsamericas.com/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Travels Americas",
  url: "https://www.travelsamericas.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Travels Americas",
    url: "https://www.travelsamericas.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Editorial",
      email: "info@travelsamericas.com",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <SimpleHeader />
      <main className={styles.page}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.lead}>
          Spotted something out of date, or have a question about one of our guides? Send us a
          message and we will get back to you.
        </p>
        <div className={styles.grid}>
          <div className={styles.info}>
            <section aria-labelledby="contact-email">
              <h2 id="contact-email">Email</h2>
              <p>
                Prefer email? Write to us at{" "}
                <a href="mailto:info@travelsamericas.com">info@travelsamericas.com</a>.
              </p>
            </section>
            <section aria-labelledby="contact-topics">
              <h2 id="contact-topics">What to write to us about</h2>
              <ul>
                <li>
                  <strong>Corrections.</strong> If an address, hours, price, or transit detail in
                  one of our guides is out of date or wrong, tell us which page and what changed.
                </li>
                <li>
                  <strong>Questions about a guide.</strong> Planning a trip and need clarification
                  on something we cover? Send us a note.
                </li>
                <li>
                  <strong>Account or privacy requests.</strong> See our{" "}
                  <Link href="/privacy">Privacy Policy</Link> for how we handle your data.
                </li>
                <li>
                  <strong>Partnerships.</strong> We do not accept payment for inclusion or ranking
                  in our guides. Read our <Link href="/about">editorial standards</Link> first.
                </li>
              </ul>
            </section>
          </div>
          <section className={styles.formCard} aria-labelledby="contact-form">
            <h2 id="contact-form">Send us a message</h2>
            <ContactForm />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
