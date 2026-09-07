import { IconMail } from '../icons.jsx';
import { SITE } from '../site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {SITE.name} · {SITE.owner}</p>
        <a className="footer-email" href={`mailto:${SITE.email}`}>
          <IconMail aria-hidden="true" /> {SITE.email}
        </a>
      </div>
    </footer>
  );
}
