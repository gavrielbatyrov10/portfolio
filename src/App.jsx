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
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        leftContent={
          <div className="modal-left-content">
            <h2>Let's Connect</h2>
            <p>
              I would love to hear from you. Whether it's a project, job
              opportunity, or just a chat, feel free to reach out!
            </p>
          </div>
        }
        rightContent={<ContactForm />}
      />
    </div>
  );
}
