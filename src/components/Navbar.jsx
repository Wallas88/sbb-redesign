import { useEffect, useState } from 'react';
import { IconMenu, IconClose } from '../icons.jsx';
import { SITE } from '../site.js';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 861px)');
    const onBreakpointChange = (event) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpointChange);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpointChange);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={close} aria-label={`${SITE.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" width="240" height="156" />
          </span>
          <span className="brand-copy">
            <span className="brand-text-name">{SITE.name}</span>
            <span className="brand-text-tag">{SITE.tagline}</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose aria-hidden="true" /> : <IconMenu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-menu ${open ? 'open' : ''}`}>
        <nav className="container mobile-menu-inner" aria-label="Mobile navigation">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary btn-block" href={`mailto:${SITE.email}`} onClick={close}>
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}
