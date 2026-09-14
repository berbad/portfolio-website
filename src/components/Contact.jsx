import { Reveal, email } from "./Shared";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="site-shell">
        <Reveal>
          <h2 className="eyebrow contact-eyebrow" id="contact-title">
            Get in touch
          </h2>
          <div className="contact-panel">
            <p className="contact-copy">
              I'm actively looking for software engineering roles where I can bring together
              hands-on infrastructure experience, product-minded development, and a steady habit
              of shipping useful tools. The best way to reach me is via{" "}
              <a href="https://linkedin.com/in/berdason-badel-294324179" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
              or{" "}
              <a href={`mailto:${email}`}>
                email
              </a>
              .
            </p>

            <a className="email-text" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-footer-row" delay={120}>
          <p>Open to full-time software engineering roles and thoughtful collaborations.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${email}`}>
              Send an email
            </a>
            <a className="button" href="https://github.com/berbad" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="button" href="https://linkedin.com/in/berdason-badel-294324179" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
