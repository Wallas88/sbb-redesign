import { IconCheck } from '../icons.jsx';
import { SITE } from '../site.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <span className="eyebrow">
          <span className="dot" />
          30+ YEARS BUILDING SOFTWARE
        </span>

        <h1>
          Software solutions built to <span className="accent-text">just work.</span>
        </h1>

        <p className="hero-sub">
          Freelance software engineering for teams who need cloud integrations, workflow automation, and
          production-ready systems — without the overhead of a full agency.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${SITE.email}`}>
            Email me →
          </a>
          <a className="btn btn-secondary" href="#services">
            See services
          </a>
        </div>

        <div className="hero-checks" aria-label="Experience highlights">
          <span className="check-item">
            <IconCheck aria-hidden="true" /> 30+ years experience
          </span>
          <span className="check-item">
            <IconCheck aria-hidden="true" /> Banks, logistics &amp; steel industries
          </span>
          <span className="check-item">
            <IconCheck aria-hidden="true" /> BSc Computer Science
          </span>
        </div>
      </div>
    </section>
  );
}
