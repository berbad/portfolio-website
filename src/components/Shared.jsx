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

export function PageLink({
  href,
  children,
  className = "",
  onClick,
  ...props
}) {
  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
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

export function SectionHeading({ title, titleId, children }) {
  return (
    <div className="section-heading">
      <h2 className="section-title" id={titleId}>
        {title}
      </h2>
      {children && <p className="section-copy">{children}</p>}
    </div>
  );
}

export function PageHeader({ title, children }) {
  return (
    <section className="page-header" aria-labelledby="page-title">
      <div className="site-shell">
        <h1 id="page-title">{title}</h1>
        {children && <p className="section-copy">{children}</p>}
      </div>
    </section>
  );
}
