import type { Metadata } from "next";

// Child layouts in the App Router MUST NOT render <html>, <head>, or <body>;
// that is the exclusive job of the root layout (app/layout.tsx). This used to
// render its own <html>/<head>/<body> AND re-emit the GA script, which caused:
//   - double GA pageview firing on /termsandcondition
//   - a hydration mismatch on the <script type="application/ld+json"> in <head>
// The WebPage schema previously injected here has been moved into page.tsx.
export const metadata: Metadata = {
  title: "Terms of Service | Travels Americas",
  description:
    "Travels Americas’s Terms: Site usage, U.S. jurisdiction, third‑party duties & user conduct. Protecting content, limiting liability & ensuring compliance.",
};

export default function TermsAndConditionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
