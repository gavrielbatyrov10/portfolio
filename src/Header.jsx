import React, { useState } from "react";
import "./Header.css";
import Modal from "./Modal"; // Import the Modal component
import ContactForm from "./Contact"; // Import the ContactForm component
import modalImage from "./assets/modal.svg"; // Import the modal image

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Gavriel Batyrov</h1>
        <nav>
          <ul
            className={`nav-links ${
              isMobileMenuOpen ? "nav-links-mobile" : ""
            }`}
          >
            <li>
              <a href="#hero" onClick={toggleMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMobileMenu}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  toggleMobileMenu();
                  toggleModal();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
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
    </header>
  );
}
