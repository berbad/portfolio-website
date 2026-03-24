import { useIsMobile, Reveal, SectionLabel } from "./Shared";

export default function About() {
  const mobile = useIsMobile();
  const tableRows = [
    { k: "Background", v: "Network / Telecom Engineering" },
    { k: "Stack", v: "React · JavaScript · Node.js" },
    { k: "Location", v: "United States" },
    { k: "Availability", v: "Available", accent: true },
  ];

  return (
    <section
      id="about"
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
          <SectionLabel n="03" label="Background" />
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(34px,5vw,52px)",
              color: "#fafafa",
              letterSpacing: "-0.025em",
              marginBottom: mobile ? 36 : 56,
            }}
          >
            About Me
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.1fr 0.9fr",
            gap: mobile ? 32 : 64,
            alignItems: "start",
          }}
        >
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.85 }}>
                I started out in network engineering — cell site migrations,
                router configs, backhaul infrastructure. That's where I learned
                how to think about systems: what breaks, why it breaks, and how
                to build things that don't.
              </p>
              <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.85 }}>
                Now I write software. I've shipped web apps, bots, and
                e-commerce platforms. I like working on problems that have real
                users on the other end, and I'm comfortable across the stack.
              </p>
              <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.85 }}>
                I hold a B.S. in Computer Science and I'm currently looking for
                my next role.
              </p>
            </div>
          </Reveal>

          <Reveal delay={mobile ? 0 : 140}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {tableRows.map(({ k, v, accent }) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 18px",
                    background: "#18181b",
                    border: "1px solid #27272a",
                    marginBottom: 2,
                    borderRadius: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      color: "#52525b",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {k.toUpperCase()}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: accent ? "#22c55e" : "#e4e4e7",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    {accent && (
                      <span
                        style={{
                          display: "inline-block",
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#22c55e",
                          boxShadow: "0 0 6px rgba(34,197,94,0.8)",
                        }}
                      />
                    )}
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
