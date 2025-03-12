import React, { useEffect } from "react";
import "./App.css";
import githubLogo from "./Logos/github-logo.png";
import linkedinLogo from "./Logos/linkedin-logo.png";
import tireLogo from "./Logos/TireShopWebsitePicture.png";
import internetLogo from "./Logos/internet-logo.png";
import discordLogo from "./Logos/discord-logo.png";
import portfolioLogo from "./Logos/PortfolioPicture.png";
import websiteLogo from "./Logos/underconstruction.png";

const App = () => {
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
      <nav className="navbar">
        <ul>
          <li>
            <a
              href="https://github.com/berbad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" className="github-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/berdason-badel-294324179"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="linkedin-icon"
              />
            </a>
          </li>
        </ul>
      </nav>

      <section id="home">
        <div id="home-content">
          <h1>Welcome!</h1>
          <p>
            My name is Berdason Badel, a Computer Science graduate with a
            passion for problem-solving and software development. I've worked on
            a wide range of software projects, from web applications to backend
            systems, building efficient and user-friendly solutions. I'm eager
            to take on technical challenges, contribute innovative solutions,
            and grow professionally in a forward-thinking organization.
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
            <li>
              <a
                href="https://berdasonbadel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio Website
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2>My Work</h2>
        <p>A collection of projects I've worked on.</p>

        <div className="projects-container">
          <div className="project-card">
            <img
              src={tireLogo}
              alt="Tire Shop Website"
              className="TireWebsite"
            />
            <h3>Tire Shop Website</h3>
            <p>
              City Tire Shop Website is a fully responsive web application
              designed to provide an efficient and user-friendly experience for
              customers searching for used tires and repair services. Built
              using react with AWS Lambda and MongoDB handling backend
              functionality. This project enhances service efficiency and
              strengthens the online presence of City Tire Repair Shop.
            </p>
            <div className="project-icons">
              <a
                href="https://github.com/berbad/CityTireWebsite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="GitHub" className="github-icon" />
              </a>
              <a
                href="https://citytireshop.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={internetLogo}
                  alt="internet"
                  className="internet-icon"
                />
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={discordLogo} alt="discord" className="discordLogo" />
            <h3>Discord Trivia Bot</h3>
            <p>
              Discord Trivia Bot is an interactive bot that hosts engaging
              trivia games for Discord users. Built with Node.js and the
              Discord.js library, it features a variety of questions, real-time
              score tracking, and automated game management. The bot enhances
              user interaction within communities by providing a fun and
              competitive experience, making it a great addition to any Discord
              server.
            </p>
            <div className="project-icons">
              <a
                href="https://github.com/berbad/TriviaBot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>

          <div className="project-card">
            <img
              src={portfolioLogo}
              alt="portfolio"
              className="portfolioLogo"
            />
            <h3>Portfolio Website</h3>
            <p>
              Portfolio Website is a fully responsive, single-page application
              built with React to showcase my skills, projects, and experience.{" "}
            </p>
            <div className="project-icons">
              <a
                href="https://github.com/berbad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="GitHub" className="github-icon" />
              </a>
              <a
                href="https://yourprojecturl.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
          <h1>Currently Working on...</h1>
          <div className="project-card" id="skincare-card">
            <img
              src={websiteLogo}
              alt="underconstruction"
              className="websiteLogo"
            />
            <h3>Skincare Website</h3>
            <p>
              A skincare e-commerce website where users can browse and purchase
              high-quality skincare products. It features a clean and modern
              design with a seamless user experience. Customers can create
              accounts, manage their profiles, track order history, and leave
              product reviews. The site includes a secure authentication system,
              a functional cart, and a search bar for easy navigation. The site
              is designed to be responsive and user-friendly, making it easy for
              customers to explore and purchase skincare essentials.
            </p>
            <div className="project-icons">
              <a
                href="https://github.com/yourgithub/cookiemunch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://yourprojecturl.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <h1>About Me</h1>
        <img
          src={require("./Logos/aboutme.png")}
          alt="About Me"
          className="aboutMePicture"
        />
        <div className="about-text">
          <p>
            Hello! I'm <strong>Berdason Badel</strong>, a Computer Science
            graduate from DePaul University with a passion for software
            development and problem-solving.
          </p>
          <p>
            Proficient in JavaScript and Java, I enjoy building applications
            using React, Node.js, and MongoDB to create dynamic and efficient
            web solutions.
          </p>
          <p>
            When I'm not coding, I love playing video games, watching
            interesting videos, and spending time with friends.
          </p>
        </div>
      </section>

      <section id="contact">
        <p>
          <a href="mailto:berbad21@gmail.com" className="contact-link">
            Contact Me
          </a>
        </p>
        <footer id="footer">
          <p>© 2024 Berdason Badel. All Rights Reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default App;
