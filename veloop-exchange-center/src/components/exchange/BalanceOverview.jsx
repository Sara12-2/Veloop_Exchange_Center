import { Gem, Coins, Info } from "lucide-react";
import { useState } from "react";
import styles from "./BalanceOverview.module.css";

const infoText = {
  gems: "Gems are reward credits earned through eligible activities on VELOOP Rewards.",
  ves: "VEs are VELOOP Rewards' virtual reward currency and may be used for eligible redemption options according to platform rules.",
};

export default function BalanceOverview({ balances }) {
  const [activeInfo, setActiveInfo] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.card} data-variant="gems">
        <div className={styles.header}>
          <div className={styles.iconWrap}>
            <Gem size={20} />
          </div>
          <button
            className={styles.infoBtn}
            onMouseEnter={() => setActiveInfo("gems")}
            onMouseLeave={() => setActiveInfo(null)}
            onClick={() => setActiveInfo((v) => (v === "gems" ? null : "gems"))}
            aria-label="What are Gems?"
          >
            <Info size={14} />
          </button>
          {activeInfo === "gems" && (
            <div className={styles.tooltip} role="tooltip">
              {infoText.gems}
            </div>
          )}
        </div>
        <p className={styles.value}>{balances.gems.toLocaleString()}</p>
        <p className={styles.label}>Available Gems</p>
      </div>

      <div className={styles.card} data-variant="ves">
        <div className={styles.header}>
          <div className={styles.iconWrap}>
            <Coins size={20} />
          </div>
          <button
            className={styles.infoBtn}
            onMouseEnter={() => setActiveInfo("ves")}
            onMouseLeave={() => setActiveInfo(null)}
            onClick={() => setActiveInfo((v) => (v === "ves" ? null : "ves"))}
            aria-label="What are VEs?"
          >
            <Info size={14} />
          </button>
          {activeInfo === "ves" && (
            <div className={styles.tooltip} role="tooltip">
              {infoText.ves}
            </div>
          )}
        </div>
        <p className={styles.value}>{balances.ves.toLocaleString()}</p>
        <p className={styles.label}>Available VEs</p>
      </div>
    </section>
  );
}