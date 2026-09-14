import { useEffect, useState } from "react";
import { navItems, PageLink } from "./Shared";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
      <div className="site-shell nav-inner">
        <PageLink className="brand" href="/" onClick={() => setMenuOpen(false)}>
          Berdason Badel
        </PageLink>

        <div className="nav-links">
          {navItems.map(([label, path]) => (
            <PageLink
              className={`nav-link ${pathname === path ? "is-active" : ""}`}
              href={path}
              key={path}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </PageLink>
          ))}
          <a className="nav-link nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </nav>
  );
}
