import { skillCategories } from "../data";
import { Reveal, SectionHeading, Tag } from "./Shared";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="site-shell">
        <SectionHeading eyebrow="Capabilities" title="Stack and habits" titleId="skills-title">
          I work across the browser, APIs, databases, and deployment details that make software useful.
        </SectionHeading>

        <div className="skills-layout">
          <Reveal className="capability-panel">
            <h3>How I tend to work</h3>
            <p className="body-copy">
              I like clear interfaces, readable systems, and practical decisions that make the product easier to use and easier to maintain.
            </p>
          </Reveal>

          <div className="skill-grid">
            {skillCategories.map((category, index) => (
              <Reveal as="article" className="skill-card" delay={index * 70} key={category.category}>
                <h3>{category.category}</h3>
                <div className="tag-list">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
