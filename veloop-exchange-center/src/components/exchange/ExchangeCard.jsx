import { Gem, ArrowDown, Coins } from "lucide-react";
import styles from "./ExchangeCard.module.css";

export default function ExchangeCard({ option, availableGems, onConvert }) {
  const hasEnoughGems = availableGems >= option.requiredGems;
  const shortfall = option.requiredGems - availableGems;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        <Gem size={22} />
      </div>

      <p className={styles.label}>{option.label}</p>
      <p className={styles.description}>{option.description}</p>

      <div className={styles.conversionRow}>
        <div className={styles.conversionValue}>
          <Gem size={16} className={styles.gemIcon} />
          <span>{option.requiredGems} Gems</span>
        </div>
        <ArrowDown size={16} className={styles.arrowIcon} />
        <div className={styles.conversionValue}>
          <Coins size={16} className={styles.veIcon} />
          <span>{option.receiveVEs} VEs</span>
        </div>
      </div>

      {hasEnoughGems ? (
        <button
          className={styles.convertBtn}
          onClick={() => onConvert(option)}
        >
          Convert {option.requiredGems} Gems
        </button>
      ) : (
        <div className={styles.insufficientBlock}>
          <p className={styles.insufficientText}>
            You need {shortfall} more Gem{shortfall !== 1 ? "s" : ""} to unlock this conversion.
          </p>
          <button className={styles.earnMoreBtn}>
            Earn More Gems
          </button>
        </div>
      )}
    </div>
  );
}