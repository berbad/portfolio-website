import { useState, useEffect } from "react";
import { useIsMobile } from "./Shared";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const mobile = useIsMobile();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(20px)",
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 60,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: mobile ? 280 : 480,
          height: mobile ? 280 : 480,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: mobile ? "0 20px" : "0 28px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={anim(140)}>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(42px,9vw,96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#fafafa",
            }}
          >
            Berdason
          </h1>
        </div>
        <div style={{ ...anim(220), marginBottom: mobile ? 28 : 40 }}>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(42px,9vw,96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px #27272a",
              }}
            >
              Badel
            </span>
            <span style={{ color: "#6366f1" }}>.</span>
          </h1>
        </div>

        <div style={{ ...anim(300), marginBottom: mobile ? 32 : 44 }}>
          <p
            style={{
              fontSize: mobile ? 15 : 17,
              color: "#71717a",
              lineHeight: 1.7,
              maxWidth: 420,
            }}
          >
            Software engineer with a background in network infrastructure.
          </p>
        </div>

        <div
          style={{
            ...anim(380),
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            flexDirection: mobile ? "column" : "row",
            maxWidth: mobile ? 280 : "none",
            alignItems: "flex-start",
          }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "12px 28px",
              background: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.01em",
              boxShadow:
                "0 0 0 1px rgba(99,102,241,0.3), 0 8px 24px rgba(99,102,241,0.2)",
              transition: "all 0.2s",
              width: mobile ? "100%" : "auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#4f46e5";
              e.currentTarget.style.boxShadow =
                "0 0 0 1px rgba(99,102,241,0.5), 0 12px 32px rgba(99,102,241,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#6366f1";
              e.currentTarget.style.boxShadow =
                "0 0 0 1px rgba(99,102,241,0.3), 0 8px 24px rgba(99,102,241,0.2)";
            }}
          >
            View my work
          </button>
          <a
            href="mailto:berdasonbadel@gmail.com"
            style={{
              padding: "12px 28px",
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
              width: mobile ? "100%" : "auto",
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
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 28px",
              background: "transparent",
              color: "#52525b",
              border: "1px solid #1c1c1e",
              borderRadius: 6,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "all 0.2s",
              width: mobile ? "100%" : "auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3f3f46";
              e.currentTarget.style.color = "#a1a1aa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1c1c1e";
              e.currentTarget.style.color = "#52525b";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1.5v7M3 6l3 2.5L9 6"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 10h9"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
