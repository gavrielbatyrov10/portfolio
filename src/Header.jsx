import React, { useState } from "react";
import "./Header.css";
import Modal from "./Modal"; // Ensure you import your Modal component
import ContactForm from "./Contact"; // Import your ContactForm component

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

      {/* Modal Component */}
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
    </header>
  );
}
