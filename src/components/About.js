import { Reveal, SectionHeading } from "./Shared";

const facts = [
  ["Background", "Network / Telecom Engineering"],
  ["Stack", "React / JavaScript / Node.js"],
  ["Location", "United States"],
  ["Availability", "Available"],
];

const timeline = [
  {
    year: "Then",
    title: "Network engineering",
    copy:
      "Cell site migrations, router configs, and backhaul infrastructure shaped how I think about reliability and operational tradeoffs.",
  },
  {
    year: "Current",
    title: "Network / telecom engineering",
    copy:
      "I still work close to infrastructure, while building software, automation, and web products alongside that work.",
  },
  {
    year: "Next",
    title: "Useful products at scale",
    copy:
      "Looking for a role where product instincts, full-stack delivery, and infrastructure judgment can meet in one place.",
  },
];

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="site-shell">
        <SectionHeading eyebrow="Background" title="Systems thinking, now aimed at software." titleId="about-title">
          My path runs through network and telecom engineering, with software development as the thread I've kept pulling the whole way.
        </SectionHeading>

        <div className="about-grid">
          <Reveal className="about-story">
            <p className="body-copy">
              I started out in network engineering: cell site migrations, router configs, and backhaul infrastructure. That's where I learned how to think about systems: what breaks, why it breaks, and how to build things that don't.
            </p>
            <p className="body-copy">
              Software has always been the part I gravitate toward. Alongside network engineering, I've shipped web apps, bots, and e-commerce platforms, and I keep coming back to tools that solve concrete problems for real users.
            </p>
            <p className="body-copy">
              I hold a B.S. in Computer Science and I'm currently looking for my next role.
            </p>
          </Reveal>

          <Reveal className="about-card" delay={120}>
            <h3>At a glance</h3>
            <p className="body-copy">
              Developer with field-tested infrastructure context and a bias for useful, shipped products.
            </p>
            <dl className="fact-list">
              {facts.map(([key, value]) => (
                <div className="fact-row" key={key}>
                  <dt className="fact-key">{key}</dt>
              <dd className={`fact-value ${key === "Availability" ? "available" : ""}`}>{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="timeline" delay={180}>
          {timeline.map((item) => (
            <article className="timeline-row" key={item.year}>
              <p className="timeline-year">{item.year}</p>
              <div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-copy">{item.copy}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
