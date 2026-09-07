export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <div className="section-head section-head-compact">
            <span className="eyebrow">
              <span className="dot" />
              ABOUT
            </span>
            <h2>Salome Becker.</h2>
          </div>
          <div className="about-bio">
            <p>
              I'm a software engineer with a BSc degree in Computer Science and over 30 years of experience
              building software for major banks, logistics companies, and steel producers.
            </p>
            <p>
              I specialize in cloud integrations and workflow automation — delivering robust, scalable solutions
              that streamline operations and cut out manual work.
            </p>
          </div>
          <div className="about-expertise">
            <div className="about-tags" aria-label="Areas of expertise">
              <span className="about-tag">Cloud &amp; serverless (AWS)</span>
              <span className="about-tag">Workflow automation</span>
              <span className="about-tag">Financial systems</span>
              <span className="about-tag">API integration</span>
            </div>
          </div>
        </div>

        <div className="stat-grid" aria-label="Professional summary">
          <div className="stat-card">
            <div className="num">30+</div>
            <div className="label">Years of experience</div>
          </div>
          <div className="stat-card">
            <div className="num">BSc</div>
            <div className="label">Computer Science</div>
          </div>
          <div className="stat-card wide">
            <div className="num industries">Banks · Logistics · Steel</div>
            <div className="label">Industries served</div>
          </div>
        </div>
      </div>

      <img
        className="about-phoenix-watermark"
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        width="960"
        height="624"
      />
    </section>
  );
}
