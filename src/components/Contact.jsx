import { useState } from "react";
import "../styles/contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sentConfirmation, setSentConfirmation] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `New message\nfrom: ${e.target[0].value}, email: ${e.target[1].value}\nMessage: ${e.target[2].value}`
    );
    setSentConfirmation(true);
  };

  return (
    <div className="contact-section">
      {!sentConfirmation ? (
        <>
          <h2>Contact us</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="name">Your name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInput}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">Your email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-item">
              <label htmlFor="message">Your message:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                value={formData.message}
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="send-message-button">
              Send
            </button>
          </form>
        </>
      ) : (
        <div className="sent-confirmation-container">
          <p>Thanks for your message, we will get in touch soon!</p>
          <Link to="/">
            <button type="button" className="return-button">
              Go back to home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
