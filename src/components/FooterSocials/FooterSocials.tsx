import "./footer-socials.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import CONSTANTS from "../../../constants";
import appStore from "../../assets/app-store-badge.png";
import googlePlayStore from "../../assets/google-play-badge.png";

function FooterSocials() {
  return (
    <div className="footer-socials">
      <div className="footer-subtitle">{CONSTANTS.FOOTER_FOLLOW_US}</div>
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

      <div className="footer-subtitle">{CONSTANTS.FOOTER_MOBILE_APPS}</div>
      <div className="footer-apps">
        <a href={CONSTANTS.IOS_URL}>
          <img src={appStore} alt="app-store-badge" />
        </a>
        <a href={CONSTANTS.APK_URL}>
          <img src={googlePlayStore} alt="google-play-store-badge" />
        </a>
      </div>
    </div>
  );
}

export default FooterSocials;
