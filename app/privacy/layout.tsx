import type { Metadata } from "next";

// Child layouts in the App Router MUST NOT render <html>, <head>, or <body>;
// that is the exclusive job of the root layout (app/layout.tsx). This used to
// render its own <html>/<head>/<body> AND re-emit the GA script, which caused:
//   - double GA pageview firing on /privacy
//   - a hydration mismatch on the <script type="application/ld+json"> in <head>
// The WebPage schema previously injected here has been moved into page.tsx.
export const metadata: Metadata = {
  title: "Privacy Policy | Travels Americas",
  description:
    "Travels Americas Privacy Policy: How we collect, use & protect data, cookies, third‑party services, and your user rights.",
};

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
