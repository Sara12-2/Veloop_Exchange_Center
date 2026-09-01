// Dummy values — replace with actual current exchange rates from
// https://velooprewards.in/exchange-center before final submission.

export const exchangeBalances = {
  gems: 420,
  ves: 3850,
};

export const exchangeOptions = [
  {
    id: "exchange-01",
    type: "gem-to-ve",
    label: "Daily Gem Conversion",
    description: "Convert your earned Gems into VEs.",
    requiredGems: 28,
    receiveVEs: 151,
  },
  {
    id: "exchange-02",
    type: "gem-to-ve",
    label: "Bonus Gem Conversion",
    description: "A larger conversion opportunity for active users.",
    requiredGems: 39,
    receiveVEs: 168,
  },
];

export const exchangeHistory = [
  { id: "h1", requiredGems: 28, receiveVEs: 151, date: "Today", status: "completed" },
  { id: "h2", requiredGems: 39, receiveVEs: 168, date: "Yesterday", status: "completed" },
  { id: "h3", requiredGems: 25, receiveVEs: 120, date: "18 Aug", status: "completed" },
];

export const exchangeRules = [
  "Only eligible Gems can be exchanged.",
  "Exchange rates are predefined by VELOOP Rewards.",
  "Available conversions may vary.",
  "A successful conversion cannot be duplicated.",
  "Your balance is updated after successful conversion.",
  "Platform rules apply.",
];

export const howExchangeWorksSteps = [
  { step: "01", label: "Earn Gems" },
  { step: "02", label: "Choose Conversion" },
  { step: "03", label: "Review Exchange" },
  { step: "04", label: "Confirm" },
  { step: "05", label: "Receive VEs" },
];