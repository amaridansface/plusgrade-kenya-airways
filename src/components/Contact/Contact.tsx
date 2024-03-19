import CONSTANTS from "../../../constants";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <a href="/contact">{CONSTANTS.CONTACT_MESSAGE}</a>
    </div>
  );
}

export default Contact;
