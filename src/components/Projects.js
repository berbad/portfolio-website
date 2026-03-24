import { useState } from "react";
import { projects } from "../data";
import { useIsMobile, Reveal, SectionLabel, ExtLink, Tag } from "./Shared";

function WebAppContent({ project }) {
  return (
    <div style={{ display: "flex", gap: 10, height: "100%" }}>
      <div
        style={{ width: 48, display: "flex", flexDirection: "column", gap: 6 }}
      >
        <div
          style={{
            width: "100%",
            height: 8,
            borderRadius: 3,
            background: project.accent,
            opacity: 0.6,
          }}
        />
        {[80, 90, 70, 85].map((w, i) => (
          <div
            key={i}
            style={{
              width: `${w}%`,
              height: 6,
              borderRadius: 3,
              background: "#27272a",
            }}
          />
        ))}
      </div>
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              flex: 1,
              height: 28,
              borderRadius: 4,
              background: "#18181b",
              border: "1px solid #27272a",
            }}
          />
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 4,
              background: project.accent,
              opacity: 0.5,
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 6, flex: 1 }}>
          {[0.7, 0.5, 0.8].map((o, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                borderRadius: 4,
                background: "#18181b",
                border: "1px solid #1c1c1e",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: `${o * 100}%`,
                  background: `rgba(${project.accentRgb},0.12)`,
                  borderRadius: "0 0 4px 4px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BotContent({ project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: project.accent,
            opacity: 0.5,
            flexShrink: 0,
          }}
        />
        <div
          style={{
            background: "#18181b",
            border: "1px solid #27272a",
            borderRadius: "2px 8px 8px 8px",
            padding: "6px 10px",
            maxWidth: "75%",
          }}
        >
          <div
            style={{
              height: 5,
              width: 90,
              borderRadius: 2,
              background: "#3f3f46",
              marginBottom: 4,
            }}
          />
          <div
            style={{
              height: 5,
              width: 60,
              borderRadius: 2,
              background: "#27272a",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#27272a",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            background: `rgba(${project.accentRgb},0.1)`,
            border: `1px solid rgba(${project.accentRgb},0.2)`,
            borderRadius: "2px 8px 8px 8px",
            padding: "6px 10px",
          }}
        >
          {[70, 100, 50].map((w, i) => (
            <div
              key={i}
              style={{
                height: 5,
                width: w,
                borderRadius: 2,
                background: project.accent,
                opacity: 0.4 - i * 0.08,
                marginBottom: i < 2 ? 4 : 0,
              }}
            />
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {["1st", "2nd", "3rd"].map((p, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 18,
              borderRadius: 4,
              background: "#18181b",
              border: "1px solid #1c1c1e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 7,
                color: i === 0 ? project.accent : "#3f3f46",
              }}
            >
              {p}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcommerceContent({ project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 40,
            height: 6,
            borderRadius: 3,
            background: project.accent,
            opacity: 0.5,
          }}
        />
        <div style={{ display: "flex", gap: 10 }}>
          <div
            style={{
              width: 24,
              height: 5,
              borderRadius: 2,
              background: "#3f3f46",
            }}
          />
          <div
            style={{
              width: 24,
              height: 5,
              borderRadius: 2,
              background: "#3f3f46",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#27272a",
              border: "1px solid #3f3f46",
            }}
          />
        </div>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <div
              style={{
                height: 52,
                borderRadius: 4,
                background: `linear-gradient(${120 + i * 40}deg, rgba(${project.accentRgb},${0.08 + i * 0.04}), #18181b)`,
                border: "1px solid #1c1c1e",
              }}
            />
            <div
              style={{
                height: 4,
                width: "70%",
                borderRadius: 2,
                background: "#27272a",
              }}
            />
            <div
              style={{
                height: 4,
                width: "40%",
                borderRadius: 2,
                background: project.accent,
                opacity: 0.35,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function BrowserMockup({ project, hov }) {
  return (
    <div
      style={{
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #27272a",
        background: "#09090b",
        transform: hov ? "scale(1.01)" : "scale(1)",
        transition: "transform 0.3s ease",
        width: "100%",
      }}
    >
      <div
        style={{
          height: 28,
          background: "#141416",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: 6,
          borderBottom: "1px solid #1c1c1e",
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#3f3f46",
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#3f3f46",
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#3f3f46",
          }}
        />
        <div
          style={{
            flex: 1,
            height: 14,
            background: "#1c1c1e",
            borderRadius: 4,
            marginLeft: 8,
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 8,
              color: "#3f3f46",
              letterSpacing: "0.02em",
            }}
          >
            {project.mockupType === "bot"
              ? "discord.com"
              : project.mockupType === "ecommerce"
                ? "eternalbotanic.com"
                : "citytireshop.com"}
          </span>
        </div>
      </div>
      <div
        style={{
          height: 140,
          background: `linear-gradient(135deg, rgba(${project.accentRgb},0.06) 0%, #09090b 50%, rgba(${project.accentRgb},0.03) 100%)`,
          overflow: "hidden",
          padding: "14px 16px",
        }}
      >
        {project.mockupType === "webapp" && <WebAppContent project={project} />}
        {project.mockupType === "bot" && <BotContent project={project} />}
        {project.mockupType === "ecommerce" && (
          <EcommerceContent project={project} />
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, featured = false }) {
  const [hov, setHov] = useState(false);
  const mobile = useIsMobile();

  if (featured && !mobile) {
    return (
      <Reveal>
        <div
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            background: "#18181b",
            border: `1px solid ${hov ? `rgba(${project.accentRgb},0.22)` : "#27272a"}`,
            borderRadius: 12,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            position: "relative",
            overflow: "hidden",
            marginBottom: 20,
            transform: hov ? "translateY(-3px)" : "translateY(0)",
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            boxShadow: hov
              ? `0 20px 50px rgba(${project.accentRgb},0.08)`
              : "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: hov
                ? `linear-gradient(90deg, transparent, ${project.accent}, transparent)`
                : "transparent",
              transition: "opacity 0.3s",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 280,
              height: 280,
              background: `radial-gradient(circle at top right, rgba(${project.accentRgb},0.06), transparent 60%)`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              display: "flex",
              gap: 16,
              zIndex: 2,
            }}
          >
            <ExtLink
              href={project.github}
              label="GitHub"
              color={project.accent}
            />
            {project.live && (
              <ExtLink
                href={project.live}
                label="Live Site"
                color={project.accent}
              />
            )}
          </div>
          <div
            style={{
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: "#3f3f46",
                letterSpacing: "0.1em",
                marginBottom: 8,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 24,
                color: "#fafafa",
                margin: "0 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                color: "#71717a",
                fontSize: 14,
                lineHeight: 1.75,
                margin: "0 0 24px",
              }}
            >
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
          <div
            style={{
              padding: "32px 32px 32px 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BrowserMockup project={project} hov={hov} />
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 90}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: "#18181b",
          border: `1px solid ${hov ? `rgba(${project.accentRgb},0.22)` : "#27272a"}`,
          borderRadius: 10,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          transform: hov ? "translateY(-2px)" : "translateY(0)",
          transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: hov
            ? `0 16px 40px rgba(${project.accentRgb},0.07)`
            : "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: hov
              ? `linear-gradient(90deg, transparent, ${project.accent}, transparent)`
              : "transparent",
            transition: "opacity 0.3s",
          }}
        />
        <div style={{ padding: "20px 20px 0" }}>
          <BrowserMockup project={project} hov={hov} />
        </div>
        <div
          style={{
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 12,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: "#3f3f46",
                  letterSpacing: "0.1em",
                  marginBottom: 4,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  color: "#fafafa",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {project.title}
              </h3>
            </div>
            <div style={{ display: "flex", gap: 14, paddingTop: 4 }}>
              <ExtLink
                href={project.github}
                label="GitHub"
                color={project.accent}
              />
              {project.live && (
                <ExtLink
                  href={project.live}
                  label="Live"
                  color={project.accent}
                />
              )}
            </div>
          </div>
          <p
            style={{
              color: "#71717a",
              fontSize: 14,
              lineHeight: 1.75,
              margin: "0 0 20px",
              flex: 1,
            }}
          >
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const mobile = useIsMobile();
  return (
    <section
      id="projects"
      style={{
        padding: mobile ? "80px 0 60px" : "120px 0 100px",
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
          <SectionLabel n="01" label="Selected work" />
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
            Projects
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
            A few things I've built and shipped.
          </p>
        </Reveal>
        {!mobile && <ProjectCard project={projects[0]} index={0} featured />}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
            gap: 20,
          }}
        >
          {(mobile ? projects : projects.slice(1)).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={mobile ? i : i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
