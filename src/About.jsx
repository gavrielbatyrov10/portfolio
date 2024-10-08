import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h1>About Me</h1>
          <p>
            Hi there! I'm Gavriel, a Fullstack Software Engineer who’s
            passionate about crafting user-friendly and responsive web
            applications. I love transforming complex challenges into elegant,
            intuitive solutions that make life easier.
          </p>
        </div>
        <div className="about-right">
          <h2>Skills & Technologies</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript & React</li>
            <li>Node.js & Express</li>
            <li>Prisma & PostgreSQL</li>
            <li>Git & GitHub</li>
          </ul>
          <h2>Interests</h2>
          <p>
            When I'm not coding, I enjoy keeping up with the latest tech trends,
            contributing to open-source projects, and exploring new programming
            languages. Outside the digital world, I love experimenting with new
            recipes, reading sci-fi novels, and gaming.
          </p>
        </div>
      </div>
    </section>
  );
}
