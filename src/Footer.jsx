import React, { useState } from "react";
import "./Footer.css";
import Modal from "./Modal"; // Import the Modal component
import ContactForm from "./Contact"; // Import the ContactForm component

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
          >
            <i className="fab fa-github">github</i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin">Linkedin</i>
          </a>
          <a href="#contact" onClick={toggleModal}>
            <i className="fas fa-envelope"></i>
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
                I would love to hear from you. Whether it's a project, job
                opportunity, or just a chat, feel free to reach out!
              </p>
            </div>
          }
          rightContent={<ContactForm />}
        />
      )}
    </footer>
  );
}
