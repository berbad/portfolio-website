import { Reveal } from "./Shared";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="site-shell hero-layout">
        <Reveal>
          <h1 className="display-title hero-title" id="hero-title" aria-label="Berdason Badel">
            Berdason Badel
          </h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="hero-subtitle">Software engineer</p>
          <p className="hero-copy">
            Software engineer with a background in network infrastructure.
          </p>
        </Reveal>

        <Reveal className="hero-portrait" delay={140}>
          <img
            className="portrait-image"
            src="/berdason-portrait.jpeg"
            alt="Berdason Badel"
          />
        </Reveal>
      </div>
    </section>
  );
}
