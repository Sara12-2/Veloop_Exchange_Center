import { useState, useEffect, useCallback } from "react";
import { AlertTriangle, PackageOpen } from "lucide-react";
import ExchangeHero from "../../components/exchange/ExchangeHero";
import BalanceOverview from "../../components/exchange/BalanceOverview";
import ExchangeCard from "../../components/exchange/ExchangeCard";
import ExchangeModal from "../../components/exchange/ExchangeModal";
import ConversionSuccess from "../../components/exchange/ConversionSuccess";
import HowExchangeWorks from "../../components/exchange/HowExchangeWorks";
import ExchangeHistory from "../../components/exchange/ExchangeHistory";
import ExchangeRules from "../../components/exchange/ExchangeRules";
import ExchangeLoader from "../../components/exchange/ExchangeLoader";
import {
  exchangeBalances,
  exchangeOptions,
  exchangeHistory,
  exchangeRules,
  howExchangeWorksSteps,
} from "../../data/exchangeData";
import styles from "./ExchangeCenter.module.css";

// Simulates an API call — swap for a real fetch() when the backend is ready.
function fetchExchangeData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const simulateError = false; // flip to true locally to preview the error state
      if (simulateError) {
        reject(new Error("Network error"));
      } else {
        resolve({
          balances: exchangeBalances,
          options: exchangeOptions,
          history: exchangeHistory,
          rules: exchangeRules,
          steps: howExchangeWorksSteps,
        });
      }
    }, 900);
  });
}

export default function ExchangeCenter() {
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"
  const [data, setData] = useState(null);
  const [balances, setBalances] = useState(null);
  const [history, setHistory] = useState([]);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOption, setCompletedOption] = useState(null);

  const loadData = useCallback(() => {
    fetchExchangeData()
      .then((result) => {
        setData(result);
        setBalances(result.balances);
        setHistory(result.history);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleRetry = () => {
    setStatus("loading");
    loadData();
  };

  const handleConvert = (option) => setSelectedOption(option);
  const handleCancel = () => setSelectedOption(null);

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      // Apply the conversion to real state
      setBalances((prev) => ({
        gems: prev.gems - selectedOption.requiredGems,
        ves: prev.ves + selectedOption.receiveVEs,
      }));

      setHistory((prev) => [
        {
          id: `h-${Date.now()}`,
          requiredGems: selectedOption.requiredGems,
          receiveVEs: selectedOption.receiveVEs,
          date: "Today",
          status: "completed",
        },
        ...prev,
      ]);

      setIsProcessing(false);
      setCompletedOption(selectedOption);
      setSelectedOption(null);
    }, 1200);
  };

  const handleContinue = () => setCompletedOption(null);

  if (status === "loading") {
    return (
      <div className={styles.page}>
        <ExchangeLoader />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={styles.page}>
        <div className={styles.errorState}>
          <AlertTriangle size={32} className={styles.errorIcon} />
          <p className={styles.errorTitle}>Unable to load exchange options.</p>
          <p className={styles.errorText}>Please try again.</p>
          <button className={styles.retryBtn} onClick={handleRetry}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  const hasOptions = data.options && data.options.length > 0;

  return (
    <div className={styles.page}>
      <ExchangeHero />
      <BalanceOverview balances={balances} />

      <section className={styles.optionsSection}>
        <h2 className={styles.sectionTitle}>Available Conversions</h2>

        {!hasOptions ? (
          <div className={styles.emptyState}>
            <PackageOpen size={28} className={styles.emptyIcon} />
            <p className={styles.emptyTitle}>No conversions available right now.</p>
            <p className={styles.emptyText}>
              New reward conversion opportunities will appear here when available.
            </p>
          </div>
        ) : (
          <div className={styles.optionsGrid}>
            {data.options.map((option) => (
              <ExchangeCard
                key={option.id}
                option={option}
                availableGems={balances.gems}
                onConvert={handleConvert}
              />
            ))}
          </div>
        )}
      </section>

      <HowExchangeWorks steps={data.steps} />
      <ExchangeHistory history={history} />
      <ExchangeRules rules={data.rules} />

      {selectedOption && (
        <ExchangeModal
          option={selectedOption}
          balances={balances}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          isProcessing={isProcessing}
        />
      )}

      {completedOption && (
        <ConversionSuccess option={completedOption} onContinue={handleContinue} />
      )}
    </div>
  );
}