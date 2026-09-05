// exchangeData.js
// ⚠️ IMPORTANT: Replace the dummy values below with the actual exchange rates
// from the live Exchange Center before final submission.

/**
 * Dummy user balances - Replace with actual API data
 */
export const exchangeBalances = {
  gems: 420,   // Replace with real user Gem balance
  ves: 3850,   // Replace with real user VE balance
};

/**
 * Exchange Options - Replace with real conversion data
 * 
 * Required fields:
 * @property {string} id - Unique identifier
 * @property {string} type - Currently "gem-to-ve"
 * @property {string} label - Display name for the conversion
 * @property {string} description - Short description for the user
 * @property {number} requiredGems - Gems needed for conversion
 * @property {number} receiveVEs - VEs received after conversion
 */
export const exchangeOptions = [
  {
    id: "exchange-01",
    type: "gem-to-ve",
    label: "Daily Gem Conversion",
    description: "Convert your earned Gems into VEs.",
    requiredGems: 28,   // ⚠️ Verify this value from the live site
    receiveVEs: 151,    // ⚠️ Verify this value from the live site
  },
  {
    id: "exchange-02",
    type: "gem-to-ve",
    label: "Bonus Gem Conversion",
    description: "A larger conversion opportunity for active users.",
    requiredGems: 39,   // ⚠️ Verify this value from the live site
    receiveVEs: 168,    // ⚠️ Verify this value from the live site
  },
  // Add more exchange options as they appear on the live site
];

/**
 * Exchange History - Dummy data for demonstration
 */
export const exchangeHistory = [
  { id: "h1", requiredGems: 28, receiveVEs: 151, date: "Today", status: "completed" },
  { id: "h2", requiredGems: 39, receiveVEs: 168, date: "Yesterday", status: "completed" },
  { id: "h3", requiredGems: 25, receiveVEs: 120, date: "18 Aug", status: "completed" },
];

/**
 * Exchange Rules - Platform rules (Keep as-is)
 */
export const exchangeRules = [
  "Only eligible Gems can be exchanged.",
  "Exchange rates are predefined by VELOOP Rewards.",
  "Available conversions may vary.",
  "A successful conversion cannot be duplicated.",
  "Your balance is updated after successful conversion.",
  "Platform rules apply.",
];

/**
 * How Exchange Works - Steps (Keep as-is)
 */
export const howExchangeWorksSteps = [
  { step: "01", label: "Earn Gems" },
  { step: "02", label: "Choose Conversion" },
  { step: "03", label: "Review Exchange" },
  { step: "04", label: "Confirm" },
  { step: "05", label: "Receive VEs" },
];