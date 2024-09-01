import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function ContactForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_x1av16s",
        "template_k56cllk",
        event.target,
        "rPd9AimZ7kQn2fjQi"
      )
      .then(() => {
        setLoading(false);
        onSuccess("Your message has been sent successfully!");
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
        onSuccess("Failed to send the message. Please try again later.");
      });
  };

  return (
    <form id="contact__form" onSubmit={handleSubmit} className="contact-form">
      <h3>Contact Me</h3>
      <div className="form__item">
        <label className="form__item--label">Name</label>
        <input
          className="input"
          name="user_name"
          type="text"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form__item">
        <label className="form__item--label">Email</label>
        <input
          className="input"
          name="user_email"
          type="email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form__item">
        <label className="form__item--label">Message</label>
        <textarea
          className="input textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button
        id="contact__submit"
        className="form__submit"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
