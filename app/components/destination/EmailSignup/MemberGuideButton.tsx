'use client';
import { useState } from 'react';

// Signed-in members: one button, no email field. Sends this page's guide to the account email.
export default function MemberGuideButton({ source, email, city, buttonClassName, errorClassName, disclaimerClassName, buttonLabel = 'Email it to me' }: {
  source: string;
  email: string;
  city: string;
  buttonClassName?: string;
  errorClassName?: string;
  disclaimerClassName?: string;
  buttonLabel?: string;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function send() {
    setStatus('sending');
    setMessage('');
    try {
      const res = await fetch('/api/guide-request', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ source }),
      });
      const data = await res.json().catch(() => ({})) as { message?: string };
      if (!res.ok) { setStatus('error'); setMessage(data.message || 'Something went wrong. Please try again.'); return; }
      setStatus('sent');
      if (typeof window !== 'undefined' && typeof (window as { gtag?: (...a: unknown[]) => void }).gtag === 'function') {
        (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'guide_request', { method: 'member_button', source });
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
    {status === 'sent'
      ? <p role="status" style={{ margin: 0, fontWeight: 600 }}>✓ Sent to {email}. Check your inbox.</p>
      : <button type="button" className={buttonClassName} onClick={send} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : buttonLabel}
        </button>}
    {status === 'error' && <p role="alert" className={errorClassName}>{message}</p>}
    <p className={disclaimerClassName} style={{ margin: 0 }}>
      We&apos;ll email it to {email}. If you aren&apos;t already getting our {city} travel guide emails, this also signs you up
      for a few more. Unsubscribe anytime.
    </p>
  </div>;
}
