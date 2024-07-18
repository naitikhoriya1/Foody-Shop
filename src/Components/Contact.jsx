import "../Styles/Contact.css";
import contactImage from "../assets/contact.png";
function Contact() {
  return (
    <>
      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Us 🤝</h1>
          <h3>Home / Contact page</h3>
        </div>
        <div className="contact-form">
          <div className="contact-form-input">
            <form>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" />
              </div>
              <div className="input-group">
                <label htmlFor="Name">Name</label>
                <input type="text" id="name" placeholder="Enter your Name" />
              </div>
              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <input
                  type="text"
                  id="message"
                  placeholder="Write your Message"
                />
              </div>
              <div className="Submit-group">
                <button type="submit" className="submit-in-button">
                  Get in Touch
                </button>
              </div>
            </form>
          </div>
          <div className="contact-form-image">
            <img src={contactImage} alt="Login Illustration" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
