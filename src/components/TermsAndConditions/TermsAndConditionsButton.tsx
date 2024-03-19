import CONSTANTS from "../../../constants";
import "./terms-and-conditions.css";

function TermsAndConditionsButton() {
  return (
    <button className="terms-button">{CONSTANTS.TERMS_AND_CONDITIONS}</button>
  );
}

export default TermsAndConditionsButton;
