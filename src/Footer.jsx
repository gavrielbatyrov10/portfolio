import React, { useState } from "react";
import "./Footer.css";
import Modal from "./Modal"; // Import the Modal component
import ContactForm from "./Contact"; // Import the ContactForm component
import resume from "./assets/resume.pdf"; // Correctly import the PDF

export default function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Gavriel Batyrov</h2>
        </div>
        <nav className="footer-nav">
          <ul className="footer-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleModal}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer-social">
          <a
            href="https://github.com/gavrielbatyrov10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" aria-hidden="true"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gavriel-batyrov/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <i className="fas fa-file-pdf" aria-hidden="true"></i> Resume
          </a>
          <a href="#contact" onClick={toggleModal} aria-label="Contact">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Gavriel Batyrov. All rights reserved.</p>
      </div>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          leftContent={
            <div className="modal-left-content">
              <h3 className="modal__header1">Let's Connect</h3>
              <p className="modal__para">
                I'm currently looking for new opportunities! If you have a job
                opening or would like to discuss potential roles, please reach
                out—I'd love to connect.
              </p>
            </div>
          }
          rightContent={<ContactForm />}
        />
      )}
    </footer>
  );
}
