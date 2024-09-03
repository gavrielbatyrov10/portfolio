import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Modal from "./Modal";
import ContactForm from "./Contact";
import About from "./About";
import Footer from "./Footer";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Header toggleModal={toggleModal} />
      <Hero toggleModal={toggleModal} />
      <About />
      <Projects />
      <Footer toggleModal={toggleModal} />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        leftContent={
          <div className="modal-left-content">
            <h2>Let's Connect</h2>
            <p>
              I’m currently looking for new opportunities! If you have a job
              opening or would like to discuss potential roles, please reach
              out—I’d love to connect.
            </p>
          </div>
        }
        rightContent={<ContactForm />}
      />
    </div>
  );
}
