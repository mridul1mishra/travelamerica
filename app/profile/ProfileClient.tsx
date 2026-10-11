"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMember } from "@/app/components/auth/MemberProvider";
import { memberSignInUrl } from "@/app/lib/member-access";
import sharedStyles from "@/app/components/auth/MemberAuthForm.module.css";
import styles from "./profile.module.css";

export default function ProfileClient() {
  const { member, pending, name, email, phone } = useMember();
  const router = useRouter();
  const signInUrl = memberSignInUrl("/profile");

  useEffect(() => {
    if (!pending && !member) router.replace(signInUrl);
  }, [member, pending, router, signInUrl]);

  if (pending) return <p className={sharedStyles.intro} role="status">Loading your profile…</p>;

  if (!member) return <>
    <p className={sharedStyles.intro} role="status">Sign in to view your profile.</p>
    <Link prefetch={false} href={signInUrl} className={sharedStyles.primaryButton}>Sign in</Link>
  </>;

  return <>
    <dl className={styles.details}>
      <div>
        <dt>Full name</dt>
        <dd>{name?.trim() || "Not provided"}</dd>
      </div>
      <div>
        <dt>Email address</dt>
        <dd>{email || "Not provided"}</dd>
      </div>
      <div>
        <dt>Phone number</dt>
        <dd>{phone || "Not provided"}</dd>
      </div>
    </dl>
    <Link prefetch={false} href="/destination/nyc/hotel" className={sharedStyles.primaryButton}>Explore NYC hotels</Link>
  </>;
}
