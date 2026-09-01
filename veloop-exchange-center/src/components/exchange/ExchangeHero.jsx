import { Gem, ArrowRight, Coins } from "lucide-react";
import styles from "./ExchangeHero.module.css";

export default function ExchangeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Exchange Center</h1>
        <p className={styles.subtitle}>Turn your earned Gems into VEs</p>
        <p className={styles.description}>
          Convert your eligible Gems into VEs and continue your reward journey.
        </p>
      </div>

      <div className={styles.illustration} aria-hidden="true">
        <div className={styles.iconCircle} data-variant="gem">
          <Gem size={26} />
        </div>
        <ArrowRight size={20} className={styles.arrowIcon} />
        <div className={styles.iconCircle} data-variant="ve">
          <Coins size={26} />
        </div>
      </div>
    </section>
  );
}