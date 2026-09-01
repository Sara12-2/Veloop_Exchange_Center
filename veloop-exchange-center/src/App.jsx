import { useState } from "react";
import ExchangeHero from "./components/exchange/ExchangeHero";
import BalanceOverview from "./components/exchange/BalanceOverview";
import ExchangeCard from "./components/exchange/ExchangeCard";
import ExchangeModal from "./components/exchange/ExchangeModal";
import { exchangeBalances, exchangeOptions } from "./data/exchangeData";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConvert = (option) => setSelectedOption(option);
  const handleCancel = () => setSelectedOption(null);

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSelectedOption(null);
      alert("Conversion complete! (wire real success state next)");
    }, 1200);
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
      <ExchangeHero />
      <BalanceOverview balances={exchangeBalances} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {exchangeOptions.map((option) => (
          <ExchangeCard
            key={option.id}
            option={option}
            availableGems={exchangeBalances.gems}
            onConvert={handleConvert}
          />
        ))}
      </div>

      {selectedOption && (
        <ExchangeModal
          option={selectedOption}
          balances={exchangeBalances}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          isProcessing={isProcessing}
        />
      )}
    </div>
  );
}

export default App;