import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact us</h2>
      <form className="form-container">
        <div className="form-item">
          <label htmlFor="name">Your name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-item">
          <label htmlFor="email">Your email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-item">
          <label htmlFor="message">Your message:</label>
          <textarea name="message" id="message" cols="30" rows="6"></textarea>
        </div>
        <button type="submit" className="send-message-button">
          Send
        </button>
      </form>
    </div>
  );
}
