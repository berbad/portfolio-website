import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
