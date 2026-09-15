import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { career } from "./data";
import { PageHeader, PageLink } from "./components/Shared";

function CareerPreview() {
  return (
    <section className="section story-section" aria-labelledby="story-title">
      <div className="site-shell">
        <div className="story-heading">
          <h2 id="story-title">
            Behind
            <br />
            the work.
          </h2>
          <div>
            <p className="story-intro">
              I work in network and telecom engineering, and software
              development has always been the part of the work I keep chasing
              deeper.
            </p>
            <PageLink className="text-link" href="/about">
              More about me
            </PageLink>
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

export function HomePage() {
  return (
    <>
      <Hero />
      <Projects preview />
      <CareerPreview />
      <Contact />
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects">
        Things I've built, from service-business software to community
        automation and commerce.
      </PageHeader>
      <Projects standalone />
      <Contact />
    </>
  );
}

export function MissionPage() {
  return (
    <>
      <PageHeader title="Make useful software feel obvious">
        My goal is to build software that feels direct, useful, and grounded in
        how people actually work.
      </PageHeader>
      <section
        className="section mission-section"
        aria-labelledby="mission-principles-title"
      >
        <div className="site-shell">
          <div className="mission-intro">
            <h2 id="mission-principles-title">
              What I<br />
              optimize for.
            </h2>
            <p>A few beliefs that show up in how I design, build, and debug.</p>
          </div>
          <div className="mission-list">
            {[
              [
                "Make it dependable",
                "Good software should be understandable, maintainable, and steady under real use.",
              ],
              [
                "Systems thinking",
                "The frontend, backend, data model, and deployment details all shape the user experience.",
              ],
              [
                "Real-world usefulness",
                "I like projects with actual workflows, actual constraints, and people depending on them.",
              ],
            ].map(([title, copy]) => (
              <article className="mission-item" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <PageLink className="button button-dark" href="/projects">
            Explore my work
          </PageLink>
        </div>
      </section>
      <Contact />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHeader title="Berdason Badel">
        I work in network and telecom engineering, and software development has
        always been the part of the work I keep chasing deeper.
      </PageHeader>
      <About />
      <Skills />
      <Contact />
    </>
  );
}
