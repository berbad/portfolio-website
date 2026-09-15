import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AboutPage, HomePage, MissionPage, ProjectsPage } from "./pages";

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return pathname;
}

function CurrentPage() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Reset after the destination renders, before paint; bypass smooth scrolling.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  if (pathname === "/projects") return <ProjectsPage />;
  if (pathname === "/mission") return <MissionPage />;
  if (pathname === "/about") return <AboutPage />;

  return <HomePage />;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content" tabIndex="-1">
        <CurrentPage />
      </main>
      <Footer />
    </>
  );
}
