import { useState } from "react";
import { useIsMobile } from "./Shared";

function FooterLink({ label, href }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "monospace",
        fontSize: 11,
        color: hov ? "#a1a1aa" : "#3f3f46",
        textDecoration: "none",
        transition: "color 0.2s",
        letterSpacing: "0.06em",
      }}
    >
      {label.toUpperCase()}
    </a>
  );
}

export default function Footer() {
  const mobile = useIsMobile();
  return (
    <footer style={{ borderTop: "1px solid #18181b", padding: "24px 0" }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: mobile ? "0 20px" : "0 28px",
          display: "flex",
          justifyContent: mobile ? "center" : "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: mobile ? 16 : 12,
          flexDirection: mobile ? "column" : "row",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 15,
            color: "#fafafa",
          }}
        >
          Berdason<span style={{ color: "#6366f1" }}>.</span>
        </span>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            color: "#3f3f46",
            letterSpacing: "0.06em",
          }}
        >
          © {new Date().getFullYear()} BERDASON BADEL
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            ["GitHub", "https://github.com/berbad"],
            ["LinkedIn", "https://linkedin.com/in/berdason-badel-294324179"],
            ["Email", "mailto:berdasonbadel@gmail.com"],
          ].map(([l, h]) => (
            <FooterLink key={l} label={l} href={h} />
          ))}
        </div>
      </div>
    </footer>
  );
}
