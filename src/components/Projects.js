import { projects } from "../data";
import { ButtonLink, Reveal, SectionHeading } from "./Shared";

function ProjectCard({ project, index }) {
  return (
    <Reveal as="article" className="project-card" delay={index * 90}>
      <div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-tech">{project.tags.join(" / ")}</p>
        <div className="project-actions">
          {project.live && (
            <ButtonLink className="button-small" href={project.live} target="_blank" rel="noopener noreferrer">
              Website
            </ButtonLink>
          )}
          <ButtonLink className="button-small" href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </ButtonLink>
        </div>
      </div>

      <div className="project-meta">
        <span className="project-number">{project.year}</span>
        <span>{project.tags[0]}</span>
        <span className="status-pill">{project.status}</span>
      </div>
    </Reveal>
  );
}

export default function Projects({ preview = false, standalone = false }) {
  const shownProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="site-shell">
        {!standalone && (
          <SectionHeading title="Some of my work" titleId="projects-title">
            Shipped projects across local business software, community automation, and responsive commerce.
          </SectionHeading>
        )}
        {standalone && (
          <h2 className="visually-hidden" id="projects-title">
            Project list
          </h2>
        )}
        <div className="work-grid">
          {shownProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
        {preview && (
          <div className="section-link-row">
            <ButtonLink href="/projects">View all projects</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
