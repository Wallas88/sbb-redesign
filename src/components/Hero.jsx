import { IconCheck } from '../icons.jsx';
import { SITE } from '../site.js';
import { HERO } from '../content.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <span className="eyebrow">
          <span className="dot" />
          {HERO.eyebrow}
        </span>

        <h1>
          {HERO.headline}
          <span className="accent-text">{HERO.headlineAccent}</span>
        </h1>

        <p className="hero-sub">{HERO.sub}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${SITE.email}`}>
            {HERO.primaryCta}
          </a>
          <a className="btn btn-secondary" href="#services">
            {HERO.secondaryCta}
          </a>
        </div>

        <div className="hero-checks" aria-label="Experience highlights">
          {HERO.checks.map((check) => (
            <span className="check-item" key={check}>
              <IconCheck aria-hidden="true" /> {check}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
