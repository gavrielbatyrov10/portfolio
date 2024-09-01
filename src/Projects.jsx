import React from "react";
import "./Projects.css";

export default function Projects() {
  const projectList = [
    {
      title: "Project One",
      description:
        "A detailed exploration of Project One, focusing on innovative features and user experience.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Project Two",
      description:
        "Project Two showcases advanced technology solutions with a user-friendly design.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "A comprehensive look at Project Three, highlighting its impact and market relevance.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            >
              <div className="overlay">
                <a href={project.link} className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
