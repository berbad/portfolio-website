import { PageLink } from "./Shared";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="/berdason-studio.jpg"
        alt="Berdason Badel"
        width="1536"
        height="1024"
        fetchPriority="high"
      />
      <div className="site-shell hero-layout">
        <div className="hero-content">
          <h1 id="hero-title" aria-label="Berdason Badel">
            <span>Berdason</span>
            <span>Badel</span>
          </h1>
          <p className="hero-subtitle">Software engineer</p>
          <p className="hero-copy">
            Software engineer with a background in network infrastructure.
          </p>
          <div className="hero-actions">
            <PageLink className="button button-light" href="/projects">
              View projects
            </PageLink>
            <a className="button button-outline-light" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
