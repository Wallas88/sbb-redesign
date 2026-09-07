import { useEffect, useRef, useState } from 'react';
import { IconMail, IconCopy, IconPin } from '../icons.jsx';
import { SITE } from '../site.js';

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(textarea);
  return copied;
}

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const statusTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(statusTimer.current), []);

  const copyEmail = async () => {
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(SITE.email);
        copied = true;
      } else {
        copied = fallbackCopy(SITE.email);
      }
    } catch {
      copied = fallbackCopy(SITE.email);
    }

    setCopyStatus(copied ? 'Copied to clipboard' : 'Copy failed — use the email link');
    window.clearTimeout(statusTimer.current);
    statusTimer.current = window.setTimeout(() => setCopyStatus(''), 2400);
  };

  const copied = copyStatus === 'Copied to clipboard';

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div>
            <h2>Let's build something.</h2>
            <div className="contact-meta">
              <span className="contact-meta-item">
                <IconMail aria-hidden="true" /> <span>{SITE.email}</span>
              </span>
              <span className="contact-meta-item">
                <IconPin aria-hidden="true" /> <span>{SITE.location}</span>
              </span>
            </div>
          </div>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${SITE.email}`}>
              <IconMail aria-hidden="true" /> Email me
            </a>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={copyEmail}
              aria-describedby="copy-email-status"
            >
              <IconCopy aria-hidden="true" /> {copied ? 'Copied!' : 'Copy email'}
            </button>
            <div id="copy-email-status" className="copy-feedback" aria-live="polite">
              {copyStatus}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
