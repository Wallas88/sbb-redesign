import { IconBriefcase, IconCloud, IconWorkflow, IconCheck } from '../icons.jsx';

const SERVICES = [
  {
    icon: IconBriefcase,
    title: 'Freelance Contract Work',
    blurb: 'Project-based work for teams and businesses.',
    items: [
      ['Flexible timelines', 'Adapt to your schedule'],
      ['Full ownership', 'Take control of your project'],
      ['Clear deliverables', "Know what you're getting"],
    ],
  },
  {
    icon: IconCloud,
    title: 'Cloud Integrations',
    blurb: 'Serverless APIs and event-driven pipelines on AWS.',
    items: [
      ['Lambda', 'Serverless compute functions'],
      ['EventBridge', 'Event routing and processing'],
      ['Observability', 'Monitoring, logs, and alerts'],
    ],
  },
  {
    icon: IconWorkflow,
    title: 'Accounting Automation',
    blurb: 'OAuth flows and automation for finance systems.',
    items: [
      ['OAuth', 'Secure authentication flows'],
      ['Document workflows', 'Automated file handling'],
      ['Production-ready', 'Built to scale and handle failures'],
    ],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            WHAT I DO
          </span>
          <h2>Pick one, or mix them — most work is a blend.</h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => {
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
