import { Gem, MousePointerClick, Eye, CheckCircle, Coins } from "lucide-react";
import styles from "./HowExchangeWorks.module.css";

const stepIcons = [Gem, MousePointerClick, Eye, CheckCircle, Coins];

export default function HowExchangeWorks({ steps }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How Exchange Works</h2>
      <div className={styles.stepsRow}>
        {steps.map((item, index) => {
          const Icon = stepIcons[index] || Gem;
          const isLast = index === steps.length - 1;
          return (
            <div key={item.step} className={styles.stepWrap}>
              <div className={styles.step}>
                <div className={styles.iconWrap}>
                  <Icon size={18} />
                </div>
                <p className={styles.stepNumber}>{item.step}</p>
                <p className={styles.stepLabel}>{item.label}</p>
              </div>
              {!isLast && <div className={styles.connector} aria-hidden="true" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}