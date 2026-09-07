import { useEffect, useRef, useState } from "react";

export const email = "berbad21@gmail.com";

export const navItems = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Mission", "/mission"],
  ["About", "/about"],
];

export function navigateTo(path) {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("popstate"));
}

export function PageLink({ href, children, className = "", onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!href.startsWith("/")) return;

    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a className={className} href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -56px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function Reveal({
  as: Component = "div",
  children,
  delay = 0,
  className = "",
  style,
  ...props
}) {
  const { ref, visible } = useInView();

  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({ eyebrow, title, titleId, children }) {
  return (
    <Reveal className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title" id={titleId}>
          {title}
        </h2>
      </div>
      {children && <p className="section-copy">{children}</p>}
    </Reveal>
  );
}

export function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="page-header" aria-labelledby="page-title">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title" id="page-title">
            {title}
          </h1>
          {children && <p className="section-copy">{children}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function ButtonLink({ href, children, variant = "default", className = "", ...props }) {
  return (
    <PageLink className={`button ${variant === "primary" ? "button-primary" : ""} ${className}`.trim()} href={href} {...props}>
      {children}
    </PageLink>
  );
}

export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}
