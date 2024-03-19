const CONSTANTS = {
  CONTACT_MESSAGE: "Talk to us",
  NAV_BAR_TABS: [
    { link: "home", title: "Home" },
    { link: "prepare-for-travel", title: "Prepare For Travel" },
    { link: "plan-and-book", title: "Plan And Book" },
    { link: "loyalty-program", title: "Loyalty Program" },
    { link: "guest-support", title: "Guest Support" },
    { link: "about-us", title: "About Us" },
  ],
  ELIGIBILITY_SUBMIT_BUTTON: "Get Economy Max",
  ELIGIBILITY_FORM_LAST_NAME: "Last Name",
  ELIGIBILITY_FORM_PNR: "PNR",
  ELIGIBILITY_FORM_TITLE: "Check Your Eligibility",
  ECONOMY_MAX_TITLE: "Economy Max",
  ECONOMY_MAX_DESCRIPTION:
    "Nothing feels as good as having your own space and that's exactly what you get with Economy Max. Economy Max is the new dynamic way for you to create your own personal space by booking the seat or row next to you.",
  ECONOMY_MAX_ALLOWANCE_TITLE: "With Economy Max it allows you to:",
  ECONOMY_MAX_ALLOWANCE_DESCRIPTION: `
  * Get more space for a more pleasurable experience
  * Travel with more confidence with assurance of your own personal space
  * Enjoy more privacy when you just want some quiet space to yourself`,

  BOOKING_STEPS_CONTENT: [
    {
      TITLE: "Step 1",
      SUBTITLE: "Access Economy Max Offer Page",
      DESCRIPTION: `
48 hours to 3 hours before your scheduled flight departure, you can access the Economy Max Offer either through:
  
- An email we have sent you inviting you to buy an Economy Max Seat
- Check-in Page
- Manage My Booking Page
`,
      IMAGE_SRC: "src/assets/booking-step-1-img.png",
      ICON_SRC: "src/assets/booking-step-1-icon.png",
    },
    {
      TITLE: "Step 2",
      SUBTITLE: "Select Flight(s) & your Economy Max Seat(s)",
      DESCRIPTION: `Select the flight you wish to purchase Economy Max seat(s). You will
      then be directed to our seat map page. First, select your own seat on the seat map and then
      select the additional seat(s) you wish to book as Economy Max.`,
      IMAGE_SRC: "src/assets/booking-step-2-img.png",
      ICON_SRC: "src/assets/booking-step-2-icon.png",
    },
    {
      TITLE: "Step 3",
      SUBTITLE: "Payments",
      DESCRIPTION: `Once you select your seat(s), confirm your Economy
      Max seat selection and proceed to the Payments
      page. On the payments page, review your offer, enter
      payment details and confirm your purchase.`,
      IMAGE_SRC: "src/assets/booking-step-3-img.png",
      ICON_SRC: "src/assets/booking-step-3-icon.png",
    },
    {
      TITLE: "Step 4",
      SUBTITLE: "Confirmation",
      DESCRIPTION: `
Once the purchase is successful you will be taken to the Confirmation page
showing confirmation that your payment has been received. You will also receive
a Confirmation Email with details on your Economy Max purchase. The Email will
contain:
      
- Confirmation Message
- Flight information
- Passenger Seat Assignments
- Seat Block seat numbers
- Amount Paid
`,
      IMAGE_SRC: "src/assets/booking-step-4-img.png",
      ICON_SRC: "src/assets/booking-step-4-icon.png",
    },
  ],
  BOOKING_STEPS_TITLE: "How to Book Economy Max Seats",
  BOOKING_STEPS_SUBTITLE: `Economy Max seats can only be purchased online during the check-in window
  from 48 hours until 3 hours before your scheduled departure time.`,

  ECONOMY_MAX_PRICING_TABLE_TITLE: "Economy Max Pricing",
  ECONOMY_MAX_PRICING_TABLE_SUBTITLE: "To/From NBO",
  ECONOMY_MAX_PRICING_TABLE_ROW_NAMES: ["Routes", "1 Seat", "2 Seats"],
  ECONOMY_MAX_PRICING_TABLE_ROWS: [
    { routes: "Americas", oneSeat: "USD 120", twoSeats: "USD 230" },
    { routes: "Europe", oneSeat: "USD 80", twoSeats: "USD 150" },
    { routes: "Middle East & Asia", oneSeat: "USD 60", twoSeats: "USD 110" },
    { routes: "Africa", oneSeat: "USD 45", twoSeats: "USD 80" },
    { routes: "Domestic", oneSeat: "USD 15", twoSeats: "USD 20" },
  ],
  ECONOMY_MAX_PRICING_NOTE:
    "Kindly note no discounts apply for Flying Blue members.",
  TERMS_AND_CONDITIONS: "Terms and conditions",
  FOOTER_LINKS: [
    {
      subtitle: "Other Sites",
      links: [
        "About Us",
        "KQ Cargo",
        "KQ Pride Center",
        "NDC Trade Portal",
        "KQ Msafiri",
        "iPride",
      ],
    },
    {
      subtitle: "Useful Links",
      links: [
        `Contingency Plan for\n
        Lenghty Tarmac Delays`,
        "Customer Service Plan",
        "24 Hours Refund",
        "Privacy policy",
        "Conditions of Carriage",
      ],
    },
    {
      subtitle: "Informational Services",
      links: [
        "International Travelers",
        "Health Surveillance",
        "Wollonal rees",
        "Our Partner Airlines",
        "KRA Declaration Form",
      ],
    },
    {
      subtitle: "Connect With Us",
      links: [
        "Security Policy Statement",
        "Web Security Policy",
        "Sustainability Policy",
        "Booking Policy",
        "KO Adm Policy",
      ],
    },
  ],

  IOS_URL: "https://apps.apple.com/us/app/kenya-airways/id1303500717?ls=1",
  APK_URL:
    "https://play.google.com/store/apps/details?id=com.amadeus.merci.kq&hl=en",
  FACEBOOK_URL: "https://www.facebook.com/KenyaAirwaysKE/",
  TWITTER_URL: "https://twitter.com/KenyaAirways",
  INSTAGRAM_URL: "https://www.instagram.com/officialkenyaairways/",
  LINKED_IN_URL: "https://www.linkedin.com/company/kenya-airways/",
  YOUTUBE_URL: "https://www.youtube.com/@KenyaAirwaysKQ",
};

Object.freeze(CONSTANTS);

export default CONSTANTS;
