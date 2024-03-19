import "./footer-socials.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import CONSTANTS from "../../../constants";

function FooterSocials() {
  return (
    <div className="footer-socials">
      <div className="footer-subtitle">Follow Us</div>
      <div className="socials">
        <a href={CONSTANTS.FACEBOOK_URL}>
          <FaFacebook size="30px" />
        </a>

        <a href={CONSTANTS.TWITTER_URL}>
          <AiFillTwitterCircle size="30px" />
        </a>

        <a href={CONSTANTS.INSTAGRAM_URL}>
          <RiInstagramFill size="30px" />
        </a>

        <a href={CONSTANTS.LINKED_IN_URL}>
          <FaLinkedin size="30px" />
        </a>

        <a href={CONSTANTS.YOUTUBE_URL}>
          <FaYoutube size="30px" />
        </a>
      </div>
    </div>
  );
}

export default FooterSocials;
