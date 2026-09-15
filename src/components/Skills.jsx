import { skillCategories } from "../data";
import { SectionHeading } from "./Shared";

export default function Skills() {
  return (
    <section className="section skills-section" aria-labelledby="skills-title">
      <div className="site-shell">
        <SectionHeading title="What I work with" titleId="skills-title">
          I work across the browser, APIs, databases, and deployment details
          that make software useful.
        </SectionHeading>
        <div className="skill-grid">
          {skillCategories.map((category) => (
            <div className="skill-group" key={category.category}>
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="working-note">
          <h3>How I tend to work</h3>
          <p>
            I like clear interfaces, readable systems, and practical decisions
            that make the product easier to use and easier to maintain.
          </p>
        </div>
      </div>
    </section>
  );
}
