import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-section">
      <h2>Contact us</h2>
      <form className="form-container" onChange={handleInput}>
        <div className="form-item">
          <label htmlFor="name">Your name:</label>
          <input type="text" name="name" id="name" value={formData.name} />
        </div>
        <div className="form-item">
          <label htmlFor="email">Your email:</label>
          <input type="email" name="email" id="email" value={formData.email} />
        </div>
        <div className="form-item">
          <label htmlFor="message">Your message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            value={formData.message}
          />
        </div>
        <button type="submit" className="send-message-button">
          Send
        </button>
      </form>
    </div>
  );
}
