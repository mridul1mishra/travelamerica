import type { Metadata } from "next";
import NavigationHeader from "@/app/components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import { safeMemberReturnTo } from "@/app/lib/member-access";
import MemberAuthForm from "@/app/components/auth/MemberAuthForm";
import styles from "@/app/components/auth/MemberAuthForm.module.css";

export const metadata: Metadata = {
  title: "Sign In | Travels Americas",
  description: "Sign in to view New York City hotel ratings and check prices.",
  robots: { index: false, follow: false },
};

export default async function SignInPage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const next = safeMemberReturnTo(typeof params.next === "string" ? params.next : undefined);
  const action = params.action === "rating" || params.action === "prices" ? params.action : undefined;
  return <div className={styles.page}>
    <NavigationHeader prefetch={false} memberReturnTo={next} memberAction={action} />
    <main className={styles.main}>
      <section className={styles.card} aria-labelledby="signin-heading">
        <p className={styles.eyebrow}>Travels Americas members</p>
        <h1 id="signin-heading">Sign in</h1>
        <p className={styles.intro}>
          {action === "rating" ? "Sign in to view this hotel's Google rating and reviews."
            : action === "prices" ? "Sign in to check this hotel's prices and availability."
              : "Welcome back. Sign in to view NYC hotel ratings and check prices."}
        </p>
        <MemberAuthForm key={params.verified === "1" ? "verified" : "signin"} mode="signin" returnTo={next} action={action} verified={params.verified === "1"} />
      </section>
    </main>
    <Footer prefetch={false} />
  </div>;
}
