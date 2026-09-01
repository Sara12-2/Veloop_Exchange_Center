import { useEffect, useRef } from "react";
import { X, Gem, ArrowDown, Coins } from "lucide-react";
import styles from "./ExchangeModal.module.css";

export default function ExchangeModal({ option, balances, onCancel, onConfirm, isProcessing }) {
  const closeBtnRef = useRef(null);

  const gemsAfter = balances.gems - option.requiredGems;
  const vesAfter = balances.ves + option.receiveVEs;

  // Focus the close button on open, and allow Escape to close (keyboard accessibility)
  useEffect(() => {
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !isProcessing) onCancel();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCancel, isProcessing]);

  return (
    <div className={styles.overlay} onClick={() => !isProcessing && onCancel()}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id="modal-title" className={styles.title}>Confirm Conversion</h2>
          <button
            ref={closeBtnRef}
            className={styles.closeBtn}
            onClick={onCancel}
            aria-label="Close dialog"
            disabled={isProcessing}
          >
            <X size={18} />
          </button>
        </div>

        <div className={styles.conversionBlock}>
          <div className={styles.conversionValue}>
            <Gem size={20} className={styles.gemIcon} />
            <span>{option.requiredGems} Gems</span>
          </div>
          <ArrowDown size={18} className={styles.arrowIcon} />
          <div className={styles.conversionValue}>
            <Coins size={20} className={styles.veIcon} />
            <span>{option.receiveVEs} VEs</span>
          </div>
        </div>

        <div className={styles.balancePreview}>
          <div className={styles.balanceRow}>
            <span className={styles.balanceLabel}>Gems after conversion</span>
            <span className={styles.balanceValue}>{gemsAfter.toLocaleString()}</span>
          </div>
          <div className={styles.balanceRow}>
            <span className={styles.balanceLabel}>VEs after conversion</span>
            <span className={styles.balanceValue}>{vesAfter.toLocaleString()}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.cancelBtn}
            onClick={onCancel}
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            className={styles.confirmBtn}
            onClick={onConfirm}
            disabled={isProcessing}
          >
            {isProcessing ? "Converting..." : "Confirm Conversion"}
          </button>
        </div>
      </div>
    </div>
  );
}