import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { career } from "./data";
import { PageHeader, Reveal, SectionHeading } from "./components/Shared";

function CareerPreview() {
  return (
    <section className="section" aria-labelledby="career-title">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Career"
          titleId="career-title"
        ></SectionHeading>

        <div className="career-strip">
          {career.map((item, index) => (
            <Reveal
              as="article"
              className="career-item"
              delay={index * 80}
              key={item.year}
            >
              <p className="timeline-year">{item.year}</p>
              <h3 className="timeline-title">{item.role}</h3>
              <p className="timeline-copy">{item.detail}</p>
            </Reveal>
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
      <PageHeader eyebrow="Projects" title="Projects">
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
      <PageHeader eyebrow="Mission" title="Make useful software feel obvious">
        My goal is to build software that feels direct, useful, and grounded in
        how people actually work.
      </PageHeader>

      <section
        className="section mission-section"
        aria-labelledby="mission-principles-title"
      >
        <div className="site-shell">
          <SectionHeading
            eyebrow="Principles"
            title="What I optimize for"
            titleId="mission-principles-title"
          >
            A few beliefs that show up in how I design, build, and debug.
          </SectionHeading>

          <div className="mission-grid">
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
            ].map(([title, copy], index) => (
              <Reveal
                as="article"
                className="mission-item"
                delay={index * 80}
                key={title}
              >
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Berdason Badel">
        I work in network and telecom engineering, and software development has
        always been the part of the work I keep chasing deeper.
      </PageHeader>
      <About />
      <Skills />
      <Contact />
    </>
  );
}
