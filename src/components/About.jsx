import { ABOUT } from '../content.js';
import logo from '../assets/logo.svg';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <div className="section-head section-head-compact">
            <span className="eyebrow">
              <span className="dot" />
              {ABOUT.eyebrow}
            </span>
            <h2>{ABOUT.heading}</h2>
          </div>
          <div className="about-bio">
            {ABOUT.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-expertise">
            <div className="about-tags" aria-label="Areas of expertise">
              {ABOUT.tags.map((tag) => (
                <span className="about-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="stat-grid" aria-label="Professional summary">
          {ABOUT.stats.map((stat) => (
            <div className={stat.wide ? 'stat-card wide' : 'stat-card'} key={stat.label}>
              <div className={stat.wide ? 'num industries' : 'num'}>{stat.num}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <img className="about-phoenix-watermark" src={logo} alt="" aria-hidden="true" width="960" height="624" />
    </section>
  );
}
