import { career } from "../data";

export default function About() {
  return (
    <section className="section about-section" aria-labelledby="about-title">
      <div className="site-shell">
        <div className="about-grid">
          <div className="about-photo">
            <img
              src="/berdason-portrait.jpeg"
              alt="Berdason Badel"
              width="886"
              height="886"
              loading="lazy"
            />
            <p>Software development. Network engineering.</p>
          </div>
          <div className="about-story">
            <h2 id="about-title">My background</h2>
            <p>
              I started out in network engineering: cell site migrations, router
              configs, and backhaul infrastructure. That's where I learned how
              to think about systems: what breaks, why it breaks, and how to
              build things that don't.
            </p>
            <p>
              Software has always been the part I gravitate toward. Alongside
              network engineering, I've shipped web apps, bots, and e-commerce
              platforms, and I keep coming back to tools that solve concrete
              problems for real users.
            </p>
            <p>
              I hold a B.S. in Computer Science and I'm currently looking for my
              next role.
            </p>
            <a
              className="button button-dark"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume
            </a>
          </div>
        </div>
        <div className="career-strip">
          {career.map((item) => (
            <article className="career-item" key={item.year}>
              <p className="timeline-year">{item.year}</p>
              <h3>{item.role}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
