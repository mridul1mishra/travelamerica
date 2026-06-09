'use client';
import { useState } from 'react';
import styles from './EmailSignup.module.css';

interface EmailSignupProps {
  source?: string;
}

export default function EmailSignup({ source = 'unknown' }: EmailSignupProps) {
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
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.success}>
          <span className={styles.successIcon}>✓</span>
          <div>
            <p className={styles.successHeadline}>Check your inbox!</p>
            <p className={styles.successSub}>Your free NYC 3-day itinerary PDF is on its way.</p>
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
          <p className={styles.headline}>Get your free NYC 3-day itinerary</p>
          <p className={styles.sub}>Day-by-day plan, packing list, and budget breakdown. Free PDF, sent instantly.</p>
        </div>
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
        {status === 'error' && <p className={styles.errorMsg}>{errorMsg}</p>}
        <p className={styles.disclaimer}>No spam. Unsubscribe any time.</p>
      </div>
    </div>
  );
}
