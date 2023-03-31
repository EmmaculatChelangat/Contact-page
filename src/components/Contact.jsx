import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email using emailjs
    emailjs.sendForm("service_eawiqvf", "template_od2zlvl", e.target, "iTF9pY2t3P49JietR")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log('FAILED...', error);
        setSuccess(false);
      });
  };

  return (
    <div className="contact-container">
      <h1>Get in touch with us!</h1>
      {success && <div className="success-message">Message sent successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
