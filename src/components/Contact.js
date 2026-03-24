import { useState } from "react";
import { useIsMobile, Reveal, SectionLabel } from "./Shared";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const mobile = useIsMobile();
  const email = "berdasonbadel@gmail.com";

  const copy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: mobile ? "70px 0 60px" : "100px 0 80px",
        borderTop: "1px solid #18181b",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: mobile ? 300 : 600,
          height: mobile ? 200 : 400,
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: mobile ? "0 20px" : "0 28px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <SectionLabel n="04" label="Get in touch" />
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px,6vw,72px)",
              color: "#fafafa",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              marginBottom: 20,
            }}
          >
            Let's work
            <br />
            <span style={{ color: "#6366f1" }}>together.</span>
          </h2>
          <p
            style={{
              color: "#71717a",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 460,
              marginBottom: mobile ? 32 : 48,
            }}
          >
            I'm actively looking for software engineering roles.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: mobile ? 32 : 48,
              flexDirection: mobile ? "column" : "row",
              maxWidth: mobile ? 280 : "none",
            }}
          >
            <a
              href={`mailto:${email}`}
              style={{
                padding: "13px 30px",
                background: "#6366f1",
                color: "#fff",
                borderRadius: 6,
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(99,102,241,0.25)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#4f46e5";
                e.currentTarget.style.boxShadow =
                  "0 6px 28px rgba(99,102,241,0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#6366f1";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(99,102,241,0.25)";
              }}
            >
              Send an email
            </a>
            {[
              ["GitHub ↗", "https://github.com/berbad"],
              [
                "LinkedIn ↗",
                "https://linkedin.com/in/berdason-badel-294324179",
              ],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "13px 30px",
                  background: "transparent",
                  color: "#a1a1aa",
                  border: "1px solid #27272a",
                  borderRadius: 6,
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3f3f46";
                  e.currentTarget.style.color = "#fafafa";
                  e.currentTarget.style.background = "#18181b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272a";
                  e.currentTarget.style.color = "#a1a1aa";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {label}
              </a>
            ))}
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 18px",
              border: "1px solid #27272a",
              borderRadius: 6,
              background: "#18181b",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: mobile ? 12 : 13,
                color: "#71717a",
              }}
            >
              {email}
            </span>
            <button
              onClick={copy}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "monospace",
                fontSize: 11,
                color: copied ? "#22c55e" : "#52525b",
                transition: "color 0.2s",
                padding: 0,
                letterSpacing: "0.06em",
              }}
              onMouseEnter={(e) => {
                if (!copied) e.currentTarget.style.color = "#a1a1aa";
              }}
              onMouseLeave={(e) => {
                if (!copied) e.currentTarget.style.color = "#52525b";
              }}
            >
              {copied ? "COPIED ✓" : "COPY"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
