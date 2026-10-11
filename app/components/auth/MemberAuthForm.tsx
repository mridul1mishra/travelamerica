"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { authClient } from "@/app/lib/auth-client";
import { memberRegisterUrl, memberSignInUrl, safeMemberReturnTo } from "@/app/lib/member-access";
import { useMember } from "@/app/components/auth/MemberProvider";
import styles from "./MemberAuthForm.module.css";

type Mode = "register" | "signin";
type Stage = "details" | "verify-email" | "verify-signin" | "reset-request" | "reset-confirm";
type CodePurpose = "email-verification" | "sign-in" | "forget-password";

function PasswordField({ id, label = "Password", value, onChange, disabled, newPassword = false }: {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  newPassword?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  return <>
    <label htmlFor={id}>{label}</label>
    <div className={styles.passwordField}>
      <input id={id} name={id} type={visible ? "text" : "password"} autoComplete={newPassword ? "new-password" : "current-password"}
        required minLength={newPassword ? 8 : undefined} maxLength={128} value={value} disabled={disabled}
        onChange={event => onChange(event.target.value)} aria-describedby={`${newPassword ? "member-password-note " : ""}member-form-error`} />
      <button type="button" disabled={disabled} onClick={() => setVisible(current => !current)}
        aria-label={`${visible ? "Hide" : "Show"} ${label.toLowerCase()}`} aria-pressed={visible}>
        {visible ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
      </button>
    </div>
    {newPassword && <p id="member-password-note" className={styles.helper}>Use 8 to 128 characters.</p>}
  </>;
}

export default function MemberAuthForm({ returnTo, mode, action, verified = false }: {
  returnTo: string;
  mode: Mode;
  action?: "rating" | "prices";
  verified?: boolean;
}) {
  const { member, pending, email: memberEmail, refresh, invalidate } = useMember();
  const [method, setMethod] = useState<"password" | "code">("password");
  const [stage, setStage] = useState<Stage>("details");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [sentTo, setSentTo] = useState("");
  const [otp, setOtp] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState(verified && mode === "signin"
    ? "Your email is verified. Sign in with your password or an email code to continue." : "");
  const [resendAt, setResendAt] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const lastCode = useRef<{ email: string; purpose: CodePurpose; deadline: number } | null>(null);
  const otpInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const target = safeMemberReturnTo(returnTo);
  const verifying = stage === "verify-email" || stage === "verify-signin" || stage === "reset-confirm";

  useEffect(() => {
    if (!resendAt) return;
    const update = () => setRemaining(Math.max(0, Math.ceil((resendAt - Date.now()) / 1000)));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [resendAt]);

  useEffect(() => {
    if (verifying) otpInput.current?.focus();
  }, [verifying, stage]);

  const clearFeedback = () => { setError(""); setNotice(""); };
  const backToSignIn = () => {
    setStage("details");
    setPassword("");
    setNewPassword("");
    setOtp("");
    setSentTo("");
    clearFeedback();
  };
  const chooseMethod = (next: "password" | "code") => {
    setMethod(next);
    setPassword("");
    setOtp("");
    clearFeedback();
  };
  const rememberCode = (address: string, purpose: CodePurpose) => {
    const deadline = Date.now() + 60_000;
    lastCode.current = { email: address, purpose, deadline };
    setResendAt(deadline);
    setRemaining(60);
    setSentTo(address);
    setOtp("");
  };
  const completeSignIn = async () => {
    if (!await refresh()) throw new Error("Sign in unavailable");
    setPassword("");
    setNewPassword("");
    setPhone("");
    window.location.assign(target);
  };

  const sendCode = async (purpose: CodePurpose, address: string, nextStage: Stage) => {
    if (busy || pending) return;
    const previous = lastCode.current;
    if (previous?.email === address && previous.purpose === purpose && previous.deadline > Date.now()) {
      setError("Please wait a moment before requesting another code.");
      return;
    }
    setBusy(true);
    clearFeedback();
    try {
      const response = purpose === "forget-password"
        ? await authClient.emailOtp.requestPasswordReset({ email: address })
        : await authClient.emailOtp.sendVerificationOtp({ email: address, type: purpose });
      if (response.error) throw new Error("Code unavailable");
      rememberCode(address, purpose);
      setStage(nextStage);
      setNotice(purpose === "forget-password"
        ? "If an account uses this email, a reset code is on its way. Check your inbox and spam folder."
        : purpose === "sign-in"
          ? "Sign-in codes are sent only to registered, verified accounts. Check your inbox and spam folder."
          : "A verification code is on its way. Check your inbox and spam folder.");
      otpInput.current?.focus();
    } catch {
      setError("We couldn't send a code. Please try again in a moment.");
    } finally {
      setBusy(false);
    }
  };

  const register = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy || pending) return;
    const fullName = name.trim();
    const address = email.trim().toLowerCase();
    const phoneNumber = phone.trim().replace(/[\s().-]/g, "");
    clearFeedback();
    if (!fullName || fullName.length > 100 || /[\u0000-\u001f\u007f]/.test(fullName)) {
      setError("Enter your full name, using up to 100 characters.");
      return;
    }
    if (phoneNumber && !/^\+[1-9]\d{7,14}$/.test(phoneNumber)) {
      setError("Enter a phone number with its country code, such as +1 212 555 0123, or leave it blank.");
      return;
    }
    setBusy(true);
    try {
      const response = await authClient.signUp.email({ name: fullName, email: address, password, ...(phoneNumber ? { phone: phoneNumber } : {}) });
      if (response.error) throw new Error("Registration unavailable");
      rememberCode(address, "email-verification");
      setStage("verify-email");
      setNotice("Check your inbox and spam folder for a verification code to finish signing up.");
    } catch {
      setError("We couldn't create your account. Please try again, or sign in if you're already registered.");
    } finally {
      setBusy(false);
    }
  };

  const signInWithPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy || pending) return;
    const address = email.trim().toLowerCase();
    setBusy(true);
    clearFeedback();
    try {
      const response = await authClient.signIn.email({ email: address, password });
      if (response.error?.code === "EMAIL_NOT_VERIFIED") {
        const verification = await authClient.emailOtp.sendVerificationOtp({ email: address, type: "email-verification" });
        if (verification.error) throw new Error("Verification unavailable");
        rememberCode(address, "email-verification");
        setStage("verify-email");
        setNotice("Verify your email with the code in your inbox to finish signing in.");
        setBusy(false);
        return;
      }
      if (response.error) throw new Error("Sign in unavailable");
      await completeSignIn();
    } catch {
      setError("We couldn't sign you in. Check your email and password, or reset your password.");
      setBusy(false);
    }
  };

  const verifyCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy || pending || !/^\d{6}$/.test(otp)) return;
    setBusy(true);
    clearFeedback();
    let emailVerified = false;
    try {
      if (stage === "reset-confirm") {
        const response = await authClient.emailOtp.resetPassword({ email: sentTo, otp, password: newPassword });
        if (response.error) throw new Error("Reset unavailable");
        invalidate();
        setEmail(sentTo);
        setPassword("");
        setNewPassword("");
        setOtp("");
        setSentTo("");
        setStage("details");
        setMethod("password");
        setNotice("Your password has been reset. Sign in with your new password.");
        setBusy(false);
        return;
      }
      if (stage === "verify-email") {
        const verification = await authClient.emailOtp.verifyEmail({ email: sentTo, otp });
        if (verification.error) throw new Error("Verification unavailable");
        emailVerified = true;
        const response = await authClient.signIn.email({ email: sentTo, password });
        if (response.error) throw new Error("Sign in unavailable");
      } else {
        const response = await authClient.signIn.emailOtp({ email: sentTo, otp });
        if (response.error) throw new Error("Code invalid");
      }
      await completeSignIn();
    } catch {
      if (emailVerified) {
        setEmail("");
        setName("");
        setPhone("");
        setPassword("");
        setNewPassword("");
        setOtp("");
        setSentTo("");
        window.location.assign(`${memberSignInUrl(target, action)}&verified=1`);
        return;
      } else {
        setError(stage === "reset-confirm"
          ? "We couldn't reset your password. Check the code and try again, or request a new code."
          : "We couldn't verify that code. Check it and try again, or request a new code.");
      }
      setBusy(false);
    }
  };

  const resend = () => {
    const purpose = stage === "verify-email" ? "email-verification" : stage === "reset-confirm" ? "forget-password" : "sign-in";
    void sendCode(purpose, sentTo, stage);
  };
  const editEmail = () => {
    setStage(stage === "reset-confirm" ? "reset-request" : "details");
    setSentTo("");
    setOtp("");
    setPassword("");
    setNewPassword("");
    clearFeedback();
    window.requestAnimationFrame(() => emailInput.current?.focus());
  };
  const forgotPassword = () => {
    setStage("reset-request");
    setPassword("");
    setOtp("");
    clearFeedback();
  };
  const emailField = <>
    <label htmlFor="member-email">Email address</label>
    <input ref={emailInput} id="member-email" name="email" type="email" autoComplete="email"
      inputMode="email" required maxLength={254} value={email} disabled={busy}
      onChange={event => setEmail(event.target.value)} aria-describedby="member-form-error" />
  </>;

  if (member) return <div className={styles.form}>
    <p className={styles.signedIn}>You&apos;re signed in as <strong>{memberEmail}</strong>.</p>
    <a className={styles.primaryButton} href={target}>Continue</a>
  </div>;

  return <>
    {stage === "details" && mode === "register" && <form className={styles.form} onSubmit={register} aria-busy={busy}>
      <label htmlFor="member-name">Full name</label>
      <input id="member-name" name="name" type="text" autoComplete="name" required maxLength={100}
        value={name} disabled={busy} onChange={event => setName(event.target.value)} aria-describedby="member-form-error" />
      {emailField}
      <label htmlFor="member-phone">Phone number (optional)</label>
      <input id="member-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={30}
        value={phone} disabled={busy} onChange={event => setPhone(event.target.value)} aria-describedby="member-phone-note member-form-error" />
      <p id="member-phone-note" className={styles.helper}>Include your country code, for example +1 212 555 0123.</p>
      <PasswordField id="member-password" value={password} onChange={setPassword} disabled={busy} newPassword />
      <p className={styles.helper}>Verify your email next to finish your free registration.</p>
      <button className={styles.primaryButton} type="submit" disabled={busy || pending}>{busy ? "Creating account…" : pending ? "Please wait…" : "Create account"}</button>
    </form>}

    {stage === "details" && mode === "signin" && <>
      <div className={styles.methodTabs} role="tablist" aria-label="Sign-in method">
        <button type="button" role="tab" aria-selected={method === "password"} disabled={busy} onClick={() => chooseMethod("password")}>Password</button>
        <button type="button" role="tab" aria-selected={method === "code"} disabled={busy} onClick={() => chooseMethod("code")}>Email code</button>
      </div>
      <form className={styles.form} onSubmit={method === "password" ? signInWithPassword : event => {
        event.preventDefault();
        void sendCode("sign-in", email.trim().toLowerCase(), "verify-signin");
      }} aria-busy={busy}>
        {emailField}
        {method === "password" ? <>
          <PasswordField id="member-password" value={password} onChange={setPassword} disabled={busy} />
          <button className={styles.primaryButton} type="submit" disabled={busy || pending}>{busy || pending ? "Please wait…" : "Sign in"}</button>
          <div className={styles.secondaryActions}>
            <button type="button" disabled={busy} onClick={forgotPassword}>Forgot password?</button>
          </div>
          <p className={styles.helper}>Used an email code before? You can also set a password through Forgot password.</p>
        </> : <>
          <p className={styles.helper}>After verifying your account, you can sign in with a six-digit email code. New here? Register first.</p>
          <button className={styles.primaryButton} type="submit" disabled={busy || pending}>{busy ? "Sending code…" : pending ? "Please wait…" : "Email me a code"}</button>
        </>}
      </form>
    </>}

    {stage === "reset-request" && <form className={styles.form} onSubmit={event => {
      event.preventDefault();
      void sendCode("forget-password", email.trim().toLowerCase(), "reset-confirm");
    }} aria-busy={busy}>
      <h2 className={styles.formHeading}>Set or reset your password</h2>
      <p className={styles.helper}>Enter your account email. We&apos;ll send a code so you can choose a new password.</p>
      {emailField}
      <button className={styles.primaryButton} type="submit" disabled={busy || pending}>{busy ? "Sending code…" : pending ? "Please wait…" : "Send reset code"}</button>
      <div className={styles.secondaryActions}><button type="button" disabled={busy} onClick={backToSignIn}>Back to sign in</button></div>
    </form>}

    {verifying && <form className={styles.form} onSubmit={verifyCode} aria-busy={busy}>
      {stage === "reset-confirm" && <h2 className={styles.formHeading}>Choose your new password</h2>}
      <p className={styles.sentTo}>
        {stage === "verify-signin"
          ? <>If you&apos;ve registered and verified <strong>{sentTo}</strong>, check your inbox for a sign-in code.</>
          : stage === "reset-confirm"
            ? <>If <strong>{sentTo}</strong> belongs to an account, check its inbox for a password reset code.</>
            : <>Check the inbox for <strong>{sentTo}</strong> for an email verification code.</>}
      </p>
      {stage === "verify-signin" && <p className={styles.crossLink}>
        New here? <Link prefetch={false} href={memberRegisterUrl(target, action)}>Create account</Link> first, then verify your email.
      </p>}
      <label htmlFor="member-code">Six-digit code</label>
      <input ref={otpInput} id="member-code" name="otp" type="text" inputMode="numeric" autoComplete="one-time-code"
        required pattern="[0-9]{6}" maxLength={6} value={otp} disabled={busy}
        onChange={event => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))}
        aria-describedby="member-form-error" className={styles.codeInput} />
      {stage === "reset-confirm" && <PasswordField id="member-new-password" label="New password" value={newPassword} onChange={setNewPassword} disabled={busy} newPassword />}
      <button className={styles.primaryButton} type="submit" disabled={busy || pending || otp.length !== 6}>
        {busy || pending ? "Please wait…" : stage === "reset-confirm" ? "Reset password" : "Verify and continue"}
      </button>
      <div className={styles.secondaryActions}>
        <button type="button" disabled={busy || remaining > 0} onClick={resend}>{remaining > 0 ? `Resend code in ${remaining}s` : "Resend code"}</button>
        <button type="button" disabled={busy} onClick={editEmail}>Change email</button>
      </div>
    </form>}

    <div className={styles.feedback} aria-live="polite">
      <p id="member-form-error" className={styles.error} role={error ? "alert" : undefined}>{error}</p>
      {notice && <p>{notice}</p>}
    </div>
    {stage !== "verify-signin" && <p className={styles.crossLink}>
      {mode === "register" ? <>Already have an account? <Link prefetch={false} href={memberSignInUrl(target, action)}>Sign in</Link>.</>
        : <>New here? <Link prefetch={false} href={memberRegisterUrl(target, action)}>Create account</Link>.</>}
    </p>}
    <p className={styles.legal}>By continuing, you agree to our <Link href="/termsandcondition">Terms</Link> and <Link href="/privacy">Privacy Policy</Link>.</p>
  </>;
}
