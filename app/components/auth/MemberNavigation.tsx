"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { authClient } from "@/app/lib/auth-client";
import { memberRegisterUrl, memberSignInUrl } from "@/app/lib/member-access";
import { useMember } from "./MemberProvider";
import styles from "./MemberNavigation.module.css";

export default function MemberNavigation({ onNavigate, returnTo, action }: {
  onNavigate?: () => void;
  returnTo?: string;
  action?: "rating" | "prices";
}) {
  const { member, pending, name, email, invalidate, refresh } = useMember();
  const [signingOut, setSigningOut] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLLIElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const firstFocus = useRef<"first" | "last">("first");
  const menuId = useId();
  const words = name?.trim().split(/\s+/).filter(Boolean) ?? [];
  const initials = words.length
    ? `${Array.from(words[0])[0]}${words.length > 1 ? Array.from(words[words.length - 1])[0] : ""}`.toUpperCase()
    : (Array.from(email?.trim() ?? "")[0] ?? "").toUpperCase();

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => {
      const items = menu.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not(:disabled)');
      if (items?.length) items[firstFocus.current === "last" ? items.length - 1 : 0].focus();
    });
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, [open, pending, member]);

  const navigate = () => { setOpen(false); onNavigate?.(); };
  const closeWithFocus = () => { setOpen(false); trigger.current?.focus(); };
  const triggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      firstFocus.current = event.key === "ArrowUp" ? "last" : "first";
      setOpen(true);
    } else if (event.key === "Escape") closeWithFocus();
  };
  const menuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closeWithFocus();
      return;
    }
    if (event.key === "Tab") { setOpen(false); return; }
    const items = Array.from(menu.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not(:disabled)') ?? []);
    if (!items.length || !["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const current = items.indexOf(document.activeElement as HTMLElement);
    const next = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1
      : (current + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    items[next].focus();
  };

  const signOut = async () => {
    if (signingOut) return;
    setSigningOut(true);
    setError("");
    setOpen(false);
    invalidate();
    try {
      const response = await authClient.signOut();
      if (response.error) throw new Error("Sign out unavailable");
      invalidate();
      navigate();
    } catch {
      setError("We couldn't sign you out. Please try again.");
      await refresh().catch(() => {});
      setOpen(true);
    } finally {
      setSigningOut(false);
    }
  };

  return <li ref={container} className={styles.memberNavigation} aria-busy={pending || signingOut}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button ref={trigger} type="button" className={styles.avatar} aria-label="Account menu"
      aria-haspopup="menu" aria-expanded={open} aria-controls={menuId} disabled={pending || signingOut}
      onKeyDown={triggerKeyDown} onClick={() => { firstFocus.current = "first"; setOpen(current => !current); }}>
      {member && initials ? <span aria-hidden="true">{initials}</span> : <UserRound size={20} aria-hidden="true" />}
    </button>
    {open && <div ref={menu} id={menuId} className={styles.accountMenu} role="menu" aria-label="Account" onKeyDown={menuKeyDown}>
      {member ? <>
        <Link className={styles.menuItem} role="menuitem" href="/profile" prefetch={false} onClick={navigate}>Profile</Link>
        <button className={styles.menuItem} role="menuitem" type="button" onClick={signOut} disabled={signingOut}>Sign out</button>
      </> : <>
        <Link className={styles.menuItem} role="menuitem" href={returnTo ? memberSignInUrl(returnTo, action) : "/signin"} prefetch={false} onClick={navigate}>Sign in</Link>
        <Link className={styles.menuItem} role="menuitem" href={returnTo ? memberRegisterUrl(returnTo, action) : "/register"} prefetch={false} onClick={navigate}>Create account</Link>
      </>}
      {error && <p className={styles.error} role="alert">{error}</p>}
    </div>}
  </li>;
}
