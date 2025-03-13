import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home">
      <div id="home-content">
        <h1>Welcome!</h1>
        <p>
          My name is Berdason Badel, a Computer Science graduate with a passion
          for problem-solving and software development. I've worked on a wide
          range of software projects, from web applications to backend systems,
          building efficient and user-friendly solutions. I'm eager to take on
          technical challenges, contribute innovative solutions, and grow
          professionally in a forward-thinking organization.
        </p>
      </div>

      <div id="home-projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://citytireshop.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tire Shop Website
            </a>
          </li>
          <li>
            <a
              href="https://github.com/berbad/TriviaBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord Trivia Bot
            </a>
          </li>
          <li>
            <a href="#skincare-card">Skincare Website</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
