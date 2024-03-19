import "./footer-mobile-apps.css";
import appStore from "../../assets/app-store-badge.png";
import googlePlayStore from "../../assets/google-play-badge.png";
import CONSTANTS from "../../../constants";

function FooterMobileApps() {
  return (
    <>
      <div className="footer-subtitle">Mobile APP</div>
      <div className="apps">
        <a href={CONSTANTS.IOS_URL}>
          <img src={appStore} alt="app-store-badge" />
        </a>
        <a href={CONSTANTS.APK_URL}>
          <img src={googlePlayStore} alt="google-play-store-badge" />
        </a>
      </div>
    </>
  );
}

export default FooterMobileApps;
