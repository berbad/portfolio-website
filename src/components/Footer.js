import { email, PageLink } from "./Shared";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <PageLink className="brand" href="/">
          Berdason Badel
        </PageLink>
        <p>© {new Date().getFullYear()} Berdason Badel</p>
        <div className="footer-links" aria-label="Social links">
          <a href="https://github.com/berbad" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/berdason-badel-294324179" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
