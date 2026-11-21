'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import styles from './ContactForm.module.css';

type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};

const TOPICS = ['Correction to a guide', 'Question about a guide', 'Account or privacy request', 'Partnership', 'Other'];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReady, setTurnstileReady] = useState(false);
  const formStartedAt = useRef(0);
  const turnstileElement = useRef<HTMLDivElement>(null);
  const turnstileWidget = useRef<string | null>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  useEffect(() => {
    const turnstile = (window as unknown as { turnstile?: Turnstile }).turnstile;
    if (!turnstileSiteKey || !turnstileReady || !turnstileElement.current || !turnstile) return;
    if (turnstileWidget.current) return;
    turnstileWidget.current = turnstile.render(turnstileElement.current, {
      sitekey: turnstileSiteKey,
      callback: (token: string) => setTurnstileToken(token),
      'expired-callback': () => setTurnstileToken(''),
      'error-callback': () => setTurnstileToken(''),
      appearance: 'interaction-only',
    });
    return () => {
      if (turnstileWidget.current) turnstile.remove(turnstileWidget.current);
      turnstileWidget.current = null;
    };
  }, [turnstileReady, turnstileSiteKey]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes('@') || message.trim().length < 10) {
      setErrorMsg('Please fill in your name, a valid email, and a message of at least 10 characters.');
      setStatus('error');
      return;
    }
    if (turnstileSiteKey && !turnstileToken) {
      setErrorMsg('Please complete the security verification and try again.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          topic,
          message,
          website: honeypot.current?.value ?? '',
          formStartedAt: formStartedAt.current,
          turnstileToken,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Network error. Please try again, or email info@travelsamericas.com.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successHeadline}>Thanks, your message was sent.</p>
        <p>We read every message and will reply to the email address you provided.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => setTurnstileReady(true)}
        />
      )}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label>Website<input ref={honeypot} name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Your name</span>
          <input type="text" value={name} onChange={(e) => { setName(e.target.value); setStatus('idle'); }} maxLength={100} autoComplete="name" required disabled={status === 'loading'} />
        </label>
        <label className={styles.field}>
          <span>Your email</span>
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }} maxLength={254} autoComplete="email" required disabled={status === 'loading'} />
        </label>
      </div>
      <label className={styles.field}>
        <span>Topic</span>
        <select value={topic} onChange={(e) => setTopic(e.target.value)} disabled={status === 'loading'}>
          {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </label>
      <label className={styles.field}>
        <span>Message</span>
        <textarea value={message} onChange={(e) => { setMessage(e.target.value); setStatus('idle'); }} rows={6} minLength={10} maxLength={2000} required disabled={status === 'loading'} />
      </label>
      {turnstileSiteKey && <div ref={turnstileElement} />}
      <button className={styles.button} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
      {status === 'error' && <p className={styles.error} role="alert">{errorMsg}</p>}
      <p className={styles.note}>
        We use your name and email only to reply to your message. See our <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  );
}
