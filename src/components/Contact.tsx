// src/components/Contact.tsx
import React, { useState } from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: value.trim() === "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent! (Pretend this works for now 😃)");
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <p className="error-text">Name is required</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <p className="error-text">Valid email is required</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.message ? "error" : ""}
        />
        {errors.message && <p className="error-text">Message cannot be empty</p>}

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
