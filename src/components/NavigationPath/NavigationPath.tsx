import "./navigation-path.css";
import { GiCommercialAirplane } from "react-icons/gi";

function NavigationPath() {
  return (
    <>
      <div className="navigation-path">
        <div className="navigation-page"> Home </div>
        <GiCommercialAirplane />
        <div className="navigation-page">On board Experience </div>
        <GiCommercialAirplane />
        <div className="navigation-page"> Seats </div>
        <GiCommercialAirplane />
        <div className="navigation-page"> Economy Max </div>
      </div>
    </>
  );
}

export default NavigationPath;
