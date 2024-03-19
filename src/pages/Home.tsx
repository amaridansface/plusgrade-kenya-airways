import EligibilityBanner from "../components/EligibilityBanner/EligibilityBanner";
import CONSTANTS from "../../constants";
import EconomyMaxPricingTable from "../components/EconomyMaxPricingTable/EconomyMaxPricingTable";
import BookingStep from "../components/BookingStep/BookingStep";
import TermsAndConditionsButton from "../components/TermsAndConditions/TermsAndConditionsButton";
import NavigationPath from "../components/NavigationPath/NavigationPath";
import "./Home.css";

function Home() {
  return (
    <>
      <EligibilityBanner
        economyMaxTitle={CONSTANTS.ECONOMY_MAX_TITLE}
        economyMaxDescription={CONSTANTS.ECONOMY_MAX_DESCRIPTION}
        economyMaxAllowanceTitle={CONSTANTS.ECONOMY_MAX_ALLOWANCE_TITLE}
        economyMaxAllowanceDescription={
          CONSTANTS.ECONOMY_MAX_ALLOWANCE_DESCRIPTION
        }
      />

      <NavigationPath />

      <h1 className="booking-steps-title">{CONSTANTS.BOOKING_STEPS_TITLE}</h1>
      <div className="booking-steps-subtitle">
        {CONSTANTS.BOOKING_STEPS_SUBTITLE}
      </div>

      {CONSTANTS.BOOKING_STEPS_CONTENT.map((step) => (
        <BookingStep
          image={step.IMAGE_SRC}
          icon={step.ICON_SRC}
          subtitle={step.SUBTITLE}
          description={step.DESCRIPTION}
          title={step.TITLE}
        />
      ))}

      <EconomyMaxPricingTable
        titleRow={CONSTANTS.ECONOMY_MAX_PRICING_TABLE_TITLE}
        subtitleRow={CONSTANTS.ECONOMY_MAX_PRICING_TABLE_SUBTITLE}
        columnNames={CONSTANTS.ECONOMY_MAX_PRICING_TABLE_ROW_NAMES}
      ></EconomyMaxPricingTable>

      <TermsAndConditionsButton></TermsAndConditionsButton>
    </>
  );
}

export default Home;
