import ReactMarkdown from "react-markdown";
import EligibilityInput from "../EligibilityInput/EligibilityInput";
import "./eligibility-banner.css";

function EligibilityBanner({
  economyMaxTitle,
  economyMaxDescription,
  economyMaxAllowanceTitle,
  economyMaxAllowanceDescription,
}: Props) {
  return (
    <>
      <div className="eligibility-banner">
        <div className="eligibility-description">
          <div className="economy-max-title">{economyMaxTitle}</div>
          <div className="economy-max-description">{economyMaxDescription}</div>
          <div className="economy-max-allowance-title">
            {economyMaxAllowanceTitle}
          </div>
          <div className="economy-max-description">
            <ReactMarkdown>{economyMaxAllowanceDescription}</ReactMarkdown>
          </div>
        </div>
        <EligibilityInput />
      </div>
    </>
  );
}

interface Props {
  economyMaxTitle: string;
  economyMaxDescription: string;
  economyMaxAllowanceTitle: string;
  economyMaxAllowanceDescription: string;
}

export default EligibilityBanner;
