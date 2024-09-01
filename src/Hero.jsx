import React, { useState } from "react";
import "./Hero.css";
import Modal from "./Modal";
import ContactForm from "./Contact"; // Ensure you import ContactForm if it is a separate component

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
                  I would love to hear from you. Whether it's a project, job
                  opportunity, or just a chat, feel free to reach out!
                </p>
                <figure className="modal__img--wrapper">
                  <img
                    src="./src/assets/modal.svg"
                    alt=""
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
              src="./src/assets/landing.svg"
              alt="Landing Illustration"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
