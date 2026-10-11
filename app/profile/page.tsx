import type { Metadata } from "next";
import NavigationHeader from "@/app/components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import sharedStyles from "@/app/components/auth/MemberAuthForm.module.css";
import ProfileClient from "./ProfileClient";

export const metadata: Metadata = {
  title: "Your Profile | Travels Americas",
  description: "View your Travels Americas member details.",
  robots: { index: false, follow: false },
};

export default function ProfilePage() {
  return <div className={sharedStyles.page}>
    <NavigationHeader prefetch={false} memberReturnTo="/profile" />
    <main className={sharedStyles.main}>
      <section className={sharedStyles.card} aria-labelledby="profile-heading">
        <p className={sharedStyles.eyebrow}>Travels Americas members</p>
        <h1 id="profile-heading">Your profile</h1>
        <ProfileClient />
      </section>
    </main>
    <Footer prefetch={false} />
  </div>;
}
