'use client';

import { useState } from 'react';
import styles from './EmailSignup.module.css';

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

interface EmailSignupProps {
  source?: string;
  city?: string;
  headline?: string;
  subheadline?: string;
  buttonLabel?: string;
  offerName?: string;
  successMessage?: string;
}

export default function EmailSignup({
  source = 'unknown',
  city = 'NYC',
  headline,
  subheadline,
  buttonLabel,
  offerName,
  successMessage,
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  function track(eventName: 'email_signup_start' | 'email_signup' | 'email_signup_error') {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        method: 'drip_form',
        source,
        city,
        offer_name: offerName || headline || `${city} 3-day itinerary`,
      });
    }
  }

  function handleEmailChange(value: string) {
    setEmail(value);
    setStatus('idle');
    if (!hasStarted && value.length > 0) {
      setHasStarted(true);
      track('email_signup_start');
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      track('email_signup_error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
        track('email_signup_error');
      } else {
        setStatus('success');
        track('email_signup');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
      track('email_signup_error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.success}>
          <span className={styles.successIcon}>✓</span>
          <div>
            <p className={styles.successHeadline}>Check your inbox!</p>
            <p className={styles.successSub}>
              {successMessage || `Your free ${city} 3-day itinerary PDF is on its way.`}
            </p>
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
          <p className={styles.headline}>{headline || `Get your free ${city} 3-day itinerary`}</p>
          <p className={styles.sub}>
            {subheadline || 'Day-by-day plan, packing list, and budget breakdown. Free PDF, sent instantly.'}
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            className={styles.input}
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            aria-label="Email address"
            disabled={status === 'loading'}
            required
          />
          <button
            className={styles.button}
            type="submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : buttonLabel || 'Send it free'}
          </button>
        </form>
        {status === 'error' && <p className={styles.errorMsg}>{errorMsg}</p>}
        <p className={styles.disclaimer}>No spam. Unsubscribe any time.</p>
      </div>
    </div>
  );
}
