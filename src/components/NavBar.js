import { useState, useEffect } from "react";
import { useIsMobile } from "./Shared";

function NavLink({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 13,
        fontWeight: 500,
        color: hov ? "#fafafa" : "#71717a",
        transition: "color 0.2s",
        padding: 0,
      }}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobile = useIsMobile();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      50,
    );
  };

  const links = [
    ["Work", "projects"],
    ["Skills", "skills"],
    ["About", "about"],
    ["Contact", "contact"],
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 60,
        background: scrolled || menuOpen ? "rgba(9,9,11,0.92)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #27272a" : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: mobile ? "0 20px" : "0 28px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            position: "relative",
            zIndex: 110,
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 17,
              color: "#fafafa",
              letterSpacing: "-0.01em",
            }}
          >
            Berdason<span style={{ color: "#6366f1" }}>.</span>
          </span>
        </button>

        {mobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              position: "relative",
              zIndex: 110,
            }}
          >
            <div
              style={{
                width: 22,
                height: 14,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: 2,
                  width: 22,
                  background: "#fafafa",
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? "rotate(45deg) translate(4px, 4px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: 2,
                  width: 16,
                  background: "#fafafa",
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: 2,
                  width: 22,
                  background: "#fafafa",
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                }}
              />
            </div>
          </button>
        ) : (
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {links.map(([label, id]) => (
              <NavLink key={id} onClick={() => go(id)}>
                {label}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "7px 16px",
                background: "transparent",
                border: "1px solid #27272a",
                borderRadius: 5,
                fontFamily: "monospace",
                fontSize: 11,
                color: "#52525b",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#6366f1";
                e.currentTarget.style.color = "#818cf8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#27272a";
                e.currentTarget.style.color = "#52525b";
              }}
            >
              RESUME
            </a>
          </div>
        )}
      </div>

      {mobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 105,
            background: "rgba(15,15,20,1)",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 0,
            paddingTop: 50,
          }}
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 32,
                color: "#fafafa",
                padding: "10px 0",
                letterSpacing: "-0.02em",
              }}
            >
              {label}
            </button>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 16,
              padding: "10px 24px",
              border: "1px solid #27272a",
              borderRadius: 6,
              fontFamily: "monospace",
              fontSize: 12,
              color: "#6366f1",
              textDecoration: "none",
              letterSpacing: "0.08em",
            }}
          >
            DOWNLOAD RESUME ↓
          </a>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              gap: 24,
            }}
          >
            {[
              ["GitHub", "https://github.com/berbad"],
              ["LinkedIn", "https://linkedin.com/in/berdason-badel-294324179"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: "#52525b",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                }}
              >
                {l.toUpperCase()} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
