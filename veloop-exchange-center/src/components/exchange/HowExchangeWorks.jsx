import { Gem, MousePointerClick, Eye, CheckCircle, Coins } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./HowExchangeWorks.module.css";

const stepIcons = [Gem, MousePointerClick, Eye, CheckCircle, Coins];

const stepDescriptions = [
  "Earn Gems through eligible activities",
  "Choose your conversion option",
  "Review the exchange details",
  "Confirm your conversion",
  "Receive VEs in your balance"
];

export default function HowExchangeWorks({ steps }) {
  return (
    <motion.section 
      className={styles.section}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>How Exchange Works</h2>
        <p className={styles.subtitle}>
          Convert your Gems to VEs in 5 simple steps
        </p>
      </div>

      <div className={styles.stepsRow}>
        {steps.map((item, index) => {
          const Icon = stepIcons[index] || Gem;
          const isLast = index === steps.length - 1;
          const description = stepDescriptions[index] || "";

          return (
            <motion.div 
              key={item.step} 
              className={styles.stepWrap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className={styles.step}>
                <div className={styles.stepNumber}>
                  <span className={styles.number}>{item.step}</span>
                </div>
                
                <div className={styles.stepContent}>
                  <div className={styles.iconWrap}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className={styles.stepInfo}>
                    <p className={styles.stepLabel}>{item.label}</p>
                    <p className={styles.stepDesc}>{description}</p>
                  </div>
                </div>
              </div>

              {!isLast && (
                <div className={styles.connectorWrapper} aria-hidden="true">
                  <div className={styles.connectorLine} />
                  <div className={styles.connectorDot} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}