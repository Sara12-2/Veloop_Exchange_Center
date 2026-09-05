// src/components/exchange/BalanceOverview.jsx
import { useState, useEffect } from "react";
import { Gem, Coins, Info } from "lucide-react";
import styles from "./BalanceOverview.module.css";

const infoText = {
  gems: {
    title: "What are Gems?",
    description: "Gems are reward credits earned through eligible activities on VELOOP Rewards."
  },
  ves: {
    title: "What are VEs?",
    description: "VEs are VELOOP Rewards' virtual reward currency and may be used for eligible redemption options according to platform rules."
  }
};

export default function BalanceOverview({ balances }) {
  const [activeInfo, setActiveInfo] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleInfoClick = (type, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX + rect.width / 2
    });
    setActiveInfo((v) => (v === type ? null : type));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveInfo(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.balanceGrid}>
        {/* Gems Card */}
        <div className={styles.card} data-variant="gems">
          <div className={styles.cardGlow} data-variant="gems" />
          <div className={styles.header}>
            <div className={styles.leftGroup}>
              <div className={styles.iconWrap} data-variant="gems">
                <Gem size={20} strokeWidth={1.5} />
              </div>
              <span className={styles.cardTitle}>Gems</span>
            </div>
            <button
              className={styles.infoBtn}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setTooltipPosition({
                  top: rect.bottom + window.scrollY + 8,
                  left: rect.left + window.scrollX + rect.width / 2
                });
                setActiveInfo("gems");
              }}
              onMouseLeave={() => setActiveInfo(null)}
              onClick={(e) => handleInfoClick("gems", e)}
              aria-label="What are Gems?"
              aria-expanded={activeInfo === "gems"}
            >
              <Info size={16} strokeWidth={1.5} />
            </button>
          </div>
          <p className={styles.value}>{balances?.gems?.toLocaleString() || 0}</p>
          <p className={styles.label}>Available Gems</p>
          <span className={styles.subLabel}>Reward Credits</span>
        </div>

        {/* VEs Card */}
        <div className={styles.card} data-variant="ves">
          <div className={styles.cardGlow} data-variant="ves" />
          <div className={styles.header}>
            <div className={styles.leftGroup}>
              <div className={styles.iconWrap} data-variant="ves">
                <Coins size={20} strokeWidth={1.5} />
              </div>
              <span className={styles.cardTitle}>VEs</span>
            </div>
            <button
              className={styles.infoBtn}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setTooltipPosition({
                  top: rect.bottom + window.scrollY + 8,
                  left: rect.left + window.scrollX + rect.width / 2
                });
                setActiveInfo("ves");
              }}
              onMouseLeave={() => setActiveInfo(null)}
              onClick={(e) => handleInfoClick("ves", e)}
              aria-label="What are VEs?"
              aria-expanded={activeInfo === "ves"}
            >
              <Info size={16} strokeWidth={1.5} />
            </button>
          </div>
          <p className={styles.value}>{balances?.ves?.toLocaleString() || 0}</p>
          <p className={styles.label}>Available VEs</p>
          <span className={styles.subLabel}>Virtual Currency</span>
        </div>
      </div>

      {activeInfo && (
        <div
          className={styles.tooltip}
          role="tooltip"
          style={{
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            transform: 'translateX(-50%)'
          }}
        >
          <div className={styles.tooltipArrow} />
          <h4 className={styles.tooltipTitle}>{infoText[activeInfo]?.title}</h4>
          <p className={styles.tooltipDescription}>{infoText[activeInfo]?.description}</p>
        </div>
      )}
    </section>
  );
}