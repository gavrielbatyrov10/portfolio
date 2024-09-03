import React, { useState } from "react";
import "./Hero.css";
import Modal from "./Modal";
import ContactForm from "./Contact";
import landing from "./assets/landing.svg";
import modal from "./assets/modal.svg";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero__wrapper--text">
          <h2 className="">Hi, I'm Gavriel</h2>
          <p className="modal__para">
            Full Stack Developer specializing in modern web technologies.
          </p>
          <button onClick={toggleModal} className="cta">
            Let's Connect
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            leftContent={
              <div className="modal-left-content">
                <h3 className="modal__header1">Let's Connect</h3>
                <p className="modal__para">
                  I'm actively pursuing opportunities as a software engineer and
                  would be thrilled to connect with others in the field. If you
                  have a job opening or simply want to discuss anything related
                  to technology and development, I'd be happy to hear from you.
                  Don't hesitate to get in touch—I'm eager to explore new
                  possibilities and engage in meaningful conversations.
                </p>
                <figure className="modal__img--wrapper">
                  <img
                    src={modal} // Update path if necessary
                    alt="Contact Illustration"
                    className="modal__img"
                  />
                </figure>
              </div>
            }
            rightContent={<ContactForm />}
          />
        </div>

        <div className="landing__img--wrapper">
          <figure className="img__wrapper">
            <img
              className="landing__img"
              src={landing} // Update path if necessary
              alt="Landing Illustration"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
