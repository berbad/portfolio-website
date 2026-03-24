import { useState } from "react";
import { skillCategories } from "../data";
import { useIsMobile, Reveal, SectionLabel } from "./Shared";

function SkillChip({ label }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: 13,
        padding: "6px 12px",
        border: `1px solid ${hov ? "rgba(99,102,241,0.28)" : "#27272a"}`,
        borderRadius: 5,
        color: hov ? "#818cf8" : "#a1a1aa",
        background: hov ? "rgba(99,102,241,0.06)" : "#18181b",
        transition: "all 0.18s ease",
        cursor: "default",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  const mobile = useIsMobile();
  return (
    <section
      id="skills"
      style={{
        padding: mobile ? "70px 0" : "100px 0",
        borderTop: "1px solid #18181b",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: mobile ? "0 20px" : "0 28px",
        }}
      >
        <Reveal>
          <SectionLabel n="02" label="Technologies" />
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(34px,5vw,52px)",
              color: "#fafafa",
              letterSpacing: "-0.025em",
              marginBottom: 14,
            }}
          >
            Skills
          </h2>
          <p
            style={{
              color: "#71717a",
              fontSize: 15,
              maxWidth: 440,
              lineHeight: 1.7,
              marginBottom: mobile ? 36 : 56,
            }}
          >
            What I work with day to day.
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile
              ? "1fr 1fr"
              : "repeat(auto-fill, minmax(230px, 1fr))",
            gap: mobile ? 8 : 4,
          }}
        >
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 70}>
              <div
                style={{
                  padding: mobile ? "20px 16px 18px" : "28px 24px 24px",
                  border: "1px solid #1c1c1e",
                  borderRadius: 8,
                  background: "#0d0d0f",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "#6366f1",
                    letterSpacing: "0.12em",
                    fontWeight: 500,
                    marginBottom: 18,
                  }}
                >
                  {cat.category.toUpperCase()}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {cat.skills.map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
