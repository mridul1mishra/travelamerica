"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMember } from "@/app/components/auth/MemberProvider";
import { memberSignInUrl } from "@/app/lib/member-access";
import { authClient } from "@/app/lib/auth-client";
import sharedStyles from "@/app/components/auth/MemberAuthForm.module.css";
import styles from "./profile.module.css";

export default function ProfileClient() {
  const { member, pending, name, email, phone } = useMember();
  const router = useRouter();
  const signInUrl = memberSignInUrl("/profile");
  const confirmation = useRef<HTMLDialogElement>(null);
  const deleting = useRef(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function deleteAccount() {
    if (deleting.current) return;
    deleting.current = true;
    setBusy(true);
    setError("");
    try {
      const result = await authClient.deleteUser({});
      if (result.error?.code === "SESSION_EXPIRED" || result.error?.status === 401) {
        setError("Sign out and sign back in, then return to your profile to delete your account.");
      } else if (result.error) {
        setError("We couldn't delete your account. Please try again.");
      } else {
        window.location.replace("/");
        return;
      }
    } catch {
      setError("We couldn't confirm the deletion. Reload your profile to check your account.");
    }
    deleting.current = false;
    setBusy(false);
  }

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
    <div className={styles.accountActions}>
      <button type="button" className={styles.deleteButton} onClick={() => {
        setError("");
        confirmation.current?.showModal();
      }}>Delete account</button>
    </div>
    <dialog ref={confirmation} className={styles.confirmation} aria-labelledby="delete-account-title"
      aria-describedby="delete-account-description" onCancel={event => { if (deleting.current) event.preventDefault(); }}>
      <h2 id="delete-account-title">Delete your account?</h2>
      <p id="delete-account-description">This permanently deletes your member profile and signs you out on all devices.</p>
      {error && <p className={styles.deleteError} role="alert">{error}</p>}
      <div className={styles.confirmationActions}>
        <button type="button" autoFocus disabled={busy} onClick={() => confirmation.current?.close()}>Cancel</button>
        <button type="button" className={styles.deleteButton} disabled={busy} onClick={deleteAccount}>
          {busy ? "Deleting…" : "Permanently delete account"}
        </button>
      </div>
    </dialog>
  </>;
}
