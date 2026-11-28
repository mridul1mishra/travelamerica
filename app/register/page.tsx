import type { Metadata } from "next";
import { redirect } from "next/navigation";
import NavigationHeader from "@/app/components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import { memberSignInUrl, safeMemberReturnTo } from "@/app/lib/member-access";
import MemberAuthForm from "@/app/components/auth/MemberAuthForm";
import styles from "@/app/components/auth/MemberAuthForm.module.css";

export const metadata: Metadata = {
  title: "Create Account | Travels Americas",
  description: "Create your free account to view hotel ratings and prices.",
  robots: { index: false, follow: false },
};

export default async function RegisterPage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const next = safeMemberReturnTo(typeof params.next === "string" ? params.next : undefined);
  const action = params.action === "rating" || params.action === "prices" ? params.action : undefined;
  if (params.mode === "signin") redirect(memberSignInUrl(next, action));
  // Coming from a guide signup box: pre-fill the email and say which guide they'll get.
  // (The guide itself is chosen from ?source= in app/lib/auth.ts.)
  const initialEmail = typeof params.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(params.email.trim())
    ? params.email.trim().slice(0, 254) : "";
  const fromGuide = typeof params.source === "string" && params.source.length > 0;
  return <div className={styles.page}>
    <NavigationHeader prefetch={false} memberReturnTo={next} memberAction={action} />
    <main className={styles.main}>
      <section className={styles.card} aria-labelledby="register-heading">
        <p className={styles.eyebrow}>Travels Americas members</p>
        <h1 id="register-heading">Create account</h1>
        <p className={styles.intro}>
          {fromGuide ? "Create your free account and we'll email you the travel guide."
            : action === "rating" ? "Create your free account to view this hotel's Google rating and reviews."
            : action === "prices" ? "Create your free account to check this hotel's prices and availability."
              : "Create your free account to view hotel ratings and check prices."}
        </p>
        <MemberAuthForm mode="register" returnTo={next} action={action} initialEmail={initialEmail} />
      </section>
    </main>
    <Footer prefetch={false} />
  </div>;
}
