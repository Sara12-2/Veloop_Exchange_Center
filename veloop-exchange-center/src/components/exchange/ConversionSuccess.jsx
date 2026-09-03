import { useEffect } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import styles from "./ConversionSuccess.module.css";

export default function ConversionSuccess({ option, onContinue }) {
  // Allow Escape to dismiss, same accessibility pattern as the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onContinue();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onContinue]);

  return (
    <div className={styles.overlay}>
      <div
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
      >
        <div className={styles.iconWrap}>
          <CheckCircle2 size={40} />
          <Sparkles size={16} className={styles.sparkle1} aria-hidden="true" />
          <Sparkles size={12} className={styles.sparkle2} aria-hidden="true" />
        </div>

        <h2 id="success-title" className={styles.title}>Conversion Complete</h2>
        <p className={styles.detail}>{option.requiredGems} Gems converted</p>
        <p className={styles.amount}>+{option.receiveVEs} VEs added to your balance</p>

        <button className={styles.continueBtn} onClick={onContinue} autoFocus>
          Continue
        </button>
      </div>
    </div>
  );
}