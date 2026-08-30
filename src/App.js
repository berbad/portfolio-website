import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AboutPage, HomePage, MissionPage, ProjectsPage } from "./pages";

function Fonts() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    if (document.getElementById("gf-portfolio-fonts")) return;
    const link = document.createElement("link");
    link.id = "gf-portfolio-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500;6..96,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

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

  if (pathname === "/projects") return <ProjectsPage />;
  if (pathname === "/mission") return <MissionPage />;
  if (pathname === "/about") return <AboutPage />;

  return <HomePage />;
}

export default function App() {
  return (
    <>
      <Fonts />
      <NavBar />
      <main>
        <CurrentPage />
      </main>
      <Footer />
    </>
  );
}
