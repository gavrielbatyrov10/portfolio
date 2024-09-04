import React from "react";
import "./Projects.css";
import projectsite from "./assets/projectsite.png"; // Import the image
import projectsitet2 from "./assets/projectsitet2.png"; // Import the correct image name

export default function Projects() {
  const projectList = [
    {
      title: "Book Base",
      description:
        "A backend API for managing books and authors, built with Express.js and Prisma. It supports create, read, update, and delete operations, using Node.js and JavaScript, with version control via Git and GitHub.",
      imageUrl:
        "https://images.prismic.io/turing/652ec2a4fbd9a45bcec8194e_Express_js_11zon_0a5a935350.webp?auto=format%2Ccompress&fit=max&w=1920",
      link: "https://github.com/gavrielbatyrov10/books-backend",
    },
    {
      title: "Paw Pals",
      description:
        "A fullstack application built using React and Express, providing a platform for pet owners to connect and share. The tech stack for this project includes React, Express, Node.js, JavaScript, Git, GitHub, Prisma, HTML, and CSS.",
      imageUrl: projectsitet2,
      link: "https://fullstackproject1-838j.onrender.com/", // Fix the link and remove extra attributes
    },
    {
      title: "Handy Chevra",
      description:
        "A modern and responsive frontend application for a handyman service, built with React and CSS to provide an intuitive and user-friendly experience.",
      imageUrl: projectsite, // Directly use the imported image
      link: "https://handychevra.com/",
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
              style={{
                backgroundImage: `url(${project.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
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
