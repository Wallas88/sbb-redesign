import { IconCheck } from '../icons.jsx';
import { SERVICES } from '../content.js';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            {SERVICES.eyebrow}
          </span>
          <h2>{SERVICES.heading}</h2>
        </div>

        <div className="services-grid">
          {SERVICES.items.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  <ServiceIcon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.blurb}</p>
                <div className="service-list">
                  {service.items.map(([label, desc]) => (
                    <div className="service-list-item" key={label}>
                      <IconCheck aria-hidden="true" />
                      <span>
                        <b>{label}</b> — {desc}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
