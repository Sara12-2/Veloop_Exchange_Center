import { Gem, Coins } from "lucide-react";
import styles from "./ExchangeLoader.module.css";

export default function ExchangeLoader() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <div className={styles.iconRow}>
        <Gem size={28} className={styles.gemIcon} />
        <div className={styles.trackDots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <Coins size={28} className={styles.veIcon} />
      </div>
      <p className={styles.text}>Preparing your reward conversions...</p>
    </div>
  );
}