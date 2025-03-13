import React from "react";
import "./NavBar.css";
import githubLogo from "../../Logos/github-logo.png";
import linkedinLogo from "../../Logos/linkedin-logo.png";

function NavBar() {
  return (
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
            <img src={linkedinLogo} alt="LinkedIn" className="linkedin-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
