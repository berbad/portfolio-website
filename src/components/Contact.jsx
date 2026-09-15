import { email } from "./Shared";

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="site-shell">
        <div className="contact-top">
          <h2 id="contact-title">
            Get in
            <br />
            touch.
          </h2>
          <div className="contact-body">
            <p>
              I'm actively looking for software engineering roles where I can
              bring together hands-on infrastructure experience, product-minded
              development, and a steady habit of shipping useful tools.
            </p>
            <p>
              The best way to reach me is via{" "}
              <a
                href="https://linkedin.com/in/berdason-badel-294324179"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or <a href={`mailto:${email}`}>email</a>.
            </p>
            <a className="button button-light" href={`mailto:${email}`}>
              Send an email
            </a>
          </div>
        </div>
        <div className="contact-bottom">
          <a className="email-text" href={`mailto:${email}`}>
            {email}
          </a>
          <p>
            Open to full-time software engineering roles
            <br />
            and thoughtful collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
