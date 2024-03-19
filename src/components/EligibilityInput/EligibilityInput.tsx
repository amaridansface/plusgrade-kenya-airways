import CONSTANTS from "../../../constants";

import "./eligibility-input.css";

function EligibilityInput() {
  return (
    <div className="form-container">
      <div className="form-title">{CONSTANTS.ELIGIBILITY_FORM_TITLE}</div>
      <form>
        <div className="form-field">
          <label className="form-field-name">
            {CONSTANTS.ELIGIBILITY_FORM_LAST_NAME}
          </label>
          <input type="text" name="name" className="form-input" />
        </div>

        <div className="form-field">
          <label className="form-field-name">
            {CONSTANTS.ELIGIBILITY_FORM_PNR}
          </label>
          <input type="text" name="pnr" className="form-input" />
        </div>

        <input
          type="submit"
          value={CONSTANTS.ELIGIBILITY_SUBMIT_BUTTON}
          className="form-button"
        />
      </form>
    </div>
  );
}

export default EligibilityInput;
