import React, { useState } from "react";
import "./Footer.css";
import Modal from "./Modal";
import ContactForm from "./Contact";
import modalImage from "./assets/modal.svg";
import resume from "./assets/resume.pdf";

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
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  toggleModal();
                }}
              >
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
                I'm actively pursuing opportunities as a software engineer and
                would be thrilled to connect with others in the field. If you
                have a job opening or simply want to discuss anything related to
                technology and development, I'd be happy to hear from you. Don't
                hesitate to get in touch—I'm eager to explore new possibilities
                and engage in meaningful conversations.
              </p>
              <figure className="modal__img--wrapper">
                <img
                  src={modalImage}
                  alt="Contact Illustration"
                  className="modal__img"
                />
              </figure>
            </div>
          }
          rightContent={<ContactForm />}
        />
      )}
    </footer>
  );
}
