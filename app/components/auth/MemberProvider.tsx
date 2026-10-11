"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import { memberSignInUrl } from "@/app/lib/member-access";

type Member = { email: string; name: string | null; phone: string | null; expiresAt: number };
type MemberContextValue = {
  member: boolean;
  pending: boolean;
  email: string | null;
  name: string | null;
  phone: string | null;
  signIn: (returnTo?: string, reason?: "rating" | "prices") => void;
  refresh: () => Promise<boolean>;
  invalidate: () => void;
};

const MemberContext = createContext<MemberContextValue>({
  member: false,
  pending: true,
  email: null,
  name: null,
  phone: null,
  signIn: (returnTo, reason) => {
    if (typeof window !== "undefined") window.location.assign(memberSignInUrl(returnTo, reason));
  },
  refresh: async () => { throw new Error("Sign in is unavailable"); },
  invalidate: () => {},
});

export default function MemberProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [current, setCurrent] = useState<Member | null>(null);
  const [pending, setPending] = useState(true);
  const requestId = useRef(0);

  const invalidate = useCallback(() => {
    requestId.current += 1;
    setCurrent(null);
    setPending(false);
  }, []);

  const refresh = useCallback(async () => {
    const id = ++requestId.current;
    setPending(true);
    try {
      const { data, error } = await authClient.getSession({
        query: { disableCookieCache: true },
        fetchOptions: { cache: "no-store" },
      });
      if (id !== requestId.current) return false;
      if (error) throw new Error("Sign in is unavailable");
      const expiresAt = data?.session.expiresAt ? new Date(data.session.expiresAt).getTime() : 0;
      const valid = data?.user.emailVerified === true && expiresAt > Date.now();
      setCurrent(valid ? {
        email: data.user.email,
        name: typeof data.user.name === "string" ? data.user.name : null,
        phone: typeof data.user.phone === "string" ? data.user.phone : null,
        expiresAt,
      } : null);
      return valid;
    } catch (error) {
      if (id === requestId.current) setCurrent(null);
      throw error;
    } finally {
      if (id === requestId.current) setPending(false);
    }
  }, []);

  useEffect(() => {
    const revalidate = () => { void refresh().catch(() => {}); };
    const visible = () => { if (document.visibilityState === "visible") revalidate(); };
    revalidate();
    window.addEventListener("focus", revalidate);
    document.addEventListener("visibilitychange", visible);
    return () => {
      requestId.current += 1;
      window.removeEventListener("focus", revalidate);
      document.removeEventListener("visibilitychange", visible);
    };
  }, [refresh]);

  useEffect(() => {
    if (!current) return;
    const remaining = current.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      if (Date.now() >= current.expiresAt) invalidate();
      else void refresh().catch(() => {});
    }, Math.min(Math.max(remaining, 0), 2_147_483_647));
    return () => clearTimeout(timeout);
  }, [current, invalidate, refresh]);

  const signIn = useCallback((returnTo?: string, reason?: "rating" | "prices") => {
    router.push(memberSignInUrl(returnTo, reason));
  }, [router]);

  return <MemberContext.Provider value={{
    member: !pending && current !== null,
    pending,
    email: !pending ? current?.email ?? null : null,
    name: !pending ? current?.name ?? null : null,
    phone: !pending ? current?.phone ?? null : null,
    signIn,
    refresh,
    invalidate,
  }}>{children}</MemberContext.Provider>;
}

export function useMember() {
  return useContext(MemberContext);
}
