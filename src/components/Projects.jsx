import { projects } from "../data";
import { PageLink, SectionHeading } from "./Shared";

function ProjectTile({ project }) {
  const titleId = `project-tile-${project.id}`;

  return (
    <article className="project-tile" aria-labelledby={titleId}>
      <h3 id={titleId}>
        <a
          className="project-tile-link"
          href={project.live || project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby={`project-summary-${project.id}`}
        >
          {project.logo && (
            <img
              className={`project-tile-logo ${project.logoTreatment === "silhouette" ? "project-tile-logo--silhouette" : ""}`}
              src={project.logo}
              alt=""
              width="64"
              height="64"
              loading="lazy"
            />
          )}
          <span>{project.title}</span>
        </a>
      </h3>
      <div className="project-tile-summary">
        <p id={`project-summary-${project.id}`}>{project.description}</p>
      </div>
      <a
        className="project-tile-github"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`GitHub for ${project.title}`}
      >
        GitHub
      </a>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a
        className="project-image-link"
        href={project.live || project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Explore ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1440"
          height="1000"
          loading="lazy"
        />
      </a>
      <div className="project-info">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>
            {project.year} / {project.status}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-tech">{project.tags.join(" / ")}</p>
        <div className="project-actions">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ preview = false, standalone = false }) {
  return (
    <section
      className={`section projects-section ${standalone ? "projects-standalone" : ""} ${preview ? "projects-preview" : ""}`}
      id="projects"
      aria-labelledby="projects-title"
    >
      {preview && (
        <svg className="project-logo-filters" aria-hidden="true" focusable="false">
          <defs>
            <filter id="project-logo-silhouette" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -1 -1 -1 1 0"
              />
            </filter>
          </defs>
        </svg>
      )}
      <div className="site-shell">
        {!standalone ? (
          <SectionHeading title="My work" titleId="projects-title">
            Shipped projects across local business software, community
            automation, and e-commerce.
          </SectionHeading>
        ) : (
          <h2 id="projects-title" className="visually-hidden">
            Project list
          </h2>
        )}
        <div className={preview ? "project-tiles" : "work-grid"}>
          {projects.map((project) =>
            preview ? (
              <ProjectTile key={project.id} project={project} />
            ) : (
              <ProjectCard key={project.id} project={project} />
            ),
          )}
        </div>
        {preview && (
          <div className="section-link-row">
            <PageLink className="button button-dark" href="/projects">
              View all projects
            </PageLink>
          </div>
        )}
      </div>
    </section>
  );
}
