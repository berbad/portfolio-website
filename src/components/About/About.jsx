import React from "react";
import "./About.css";
import aboutMeImage from "../../Logos/aboutme.png";

function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <img src={aboutMeImage} alt="About Me" className="aboutMePicture" />
      <div className="about-text">
        <p>
          Hello! I'm <strong>Berdason Badel</strong>, a Computer Science
          graduate from DePaul University with a passion for software
          development and problem-solving.
        </p>
        <p>
          Proficient in JavaScript and Java, I enjoy building applications using
          React, Node.js, and MongoDB to create dynamic and efficient web
          solutions.
        </p>
        <p>
          When I'm not coding, I love playing video games, watching interesting
          videos, and spending time with friends.
        </p>
      </div>
    </section>
  );
}

export default About;
