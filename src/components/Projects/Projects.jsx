import React from "react";
import "./Projects.css";
import tireLogo from "../../Logos/TireShopWebsitePicture.png";
import internetLogo from "../../Logos/internet-logo.png";
import discordLogo from "../../Logos/discord-logo.png";
import githubLogo from "../../Logos/github-logo.png";
import portfolioLogo from "../../Logos/PortfolioPicture.png";
import websiteLogo from "../../Logos/underconstruction.png";

function Projects() {
  return (
    <section id="projects">
      <h2>My Work</h2>
      <p>A collection of projects I've worked on.</p>
      <div className="projects-container">
        <div className="project-card">
          <img src={tireLogo} alt="Tire Shop Website" className="TireWebsite" />
          <h3>Tire Shop Website</h3>
          <p>
            City Tire Shop Website is a fully responsive web application
            designed to provide an efficient and user-friendly experience for
            customers searching for used tires and repair services. Built using
            react with AWS Lambda and MongoDB handling backend functionality.
            This project enhances service efficiency and strengthens the online
            presence of City Tire Repair Shop.
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
            Discord Trivia Bot is an interactive bot that hosts engaging trivia
            games for Discord users. Built with Node.js and the Discord.js
            library, it features a variety of questions, real-time score
            tracking, and automated game management. The bot enhances user
            interaction within communities by providing a fun and competitive
            experience, making it a great addition to any Discord server.
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
          <img src={portfolioLogo} alt="portfolio" className="portfolioLogo" />
          <h3>Portfolio Website</h3>
          <p>
            Portfolio Website is a fully responsive, single-page application
            built with React to showcase my skills, projects, and experience.
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
            product reviews. The site includes a secure authentication system, a
            functional cart, and a search bar for easy navigation. The site is
            designed to be responsive and user-friendly, making it easy for
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
  );
}

export default Projects;
