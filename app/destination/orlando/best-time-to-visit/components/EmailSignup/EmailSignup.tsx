'use client';
import { useState } from 'react';
import styles from './EmailSignup.module.css';
import { useMember } from '@/app/components/auth/MemberProvider';
import MemberGuideButton from '@/app/components/destination/EmailSignup/MemberGuideButton';

// Sign-ups happen on /register (the one signup form). The box passes on the email and the page
// it was on, so the form is pre-filled and the guide matches what the visitor was reading.
function registerLink(email: string, source: string): string {
  const params = new URLSearchParams({ email: email.trim(), source, next: window.location.pathname });
  return `/register?${params}`;
}


interface EmailSignupProps {
  source?: string;
  city?: string;
}

export default function EmailSignup({ source = 'unknown', city = 'NYC' }: EmailSignupProps) {
  const { member, email: memberEmail } = useMember();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'email_signup', { method: 'register_redirect', source });
    }
    window.location.assign(registerLink(email, source));
  }

  if (status === 'success') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.success}>
          <span className={styles.successIcon}>✓</span>
          <div>
            <p className={styles.successHeadline}>Check your inbox!</p>
            <p className={styles.successSub}>Your free {city} 3-day itinerary PDF is on its way.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.pdfIcon} aria-hidden="true">📄</div>
        <div className={styles.copy}>
          <p className={styles.headline}>Get your free {city} 3-day itinerary</p>
          <p className={styles.sub}>Day-by-day plan, packing list, and budget breakdown. Free with a Travels Americas account.</p>
        </div>
        {member && memberEmail ? (
          <MemberGuideButton source={source} email={memberEmail} city={city} buttonClassName={styles.button}
            errorClassName={styles.errorMsg} disclaimerClassName={styles.disclaimer} />
        ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            className={styles.input}
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
            aria-label="Email address"
            disabled={status === 'loading'}
            required
          />
          <button
            className={styles.button}
            type="submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Send it free'}
          </button>
        </form>
        )}
        {status === 'error' && <p className={styles.errorMsg}>{errorMsg}</p>}
        {!member && <p className={styles.disclaimer}>Next, create your free account. Once it&apos;s set up, we&apos;ll email you the Orlando travel guide, followed by a few more Orlando travel guide emails. Unsubscribe anytime. See our <a href="/termsandcondition">Terms</a> and <a href="/privacy">Privacy Policy</a>.</p>}
      </div>
    </div>
  );
}
