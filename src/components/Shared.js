import { useState, useEffect, useRef } from "react";

export function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return mobile;
}

export function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export function Reveal({ children, delay = 0, style = {} }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ n, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          color: "#6366f1",
          letterSpacing: "0.12em",
          fontWeight: 500,
        }}
      >
        {n}
      </span>
      <div
        style={{
          height: "1px",
          width: 28,
          background: "rgba(99,102,241,0.35)",
        }}
      />
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          color: "#3f3f46",
          letterSpacing: "0.1em",
        }}
      >
        {label.toUpperCase()}
      </span>
    </div>
  );
}

export function ExtLink({ href, label, color }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "monospace",
        fontSize: 11,
        color: hov ? color : "#52525b",
        textDecoration: "none",
        letterSpacing: "0.06em",
        transition: "color 0.2s",
      }}
    >
      {label} ↗
    </a>
  );
}

export function Tag({ children }) {
  return (
    <span
      style={{
        fontFamily: "monospace",
        fontSize: 11,
        padding: "3px 9px",
        border: "1px solid #27272a",
        borderRadius: 4,
        color: "#52525b",
        background: "#09090b",
      }}
    >
      {children}
    </span>
  );
}
