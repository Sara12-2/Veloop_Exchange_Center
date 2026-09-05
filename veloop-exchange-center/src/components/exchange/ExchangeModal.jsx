import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gem, ArrowDown, Coins, Sparkles } from "lucide-react";
import styles from "./ExchangeModal.module.css";

export default function ExchangeModal({ 
  option, 
  balances, 
  onCancel, 
  onConfirm, 
  isProcessing 
}) {
  const closeBtnRef = useRef(null);
  const gemsAfter = balances.gems - option.requiredGems;
  const vesAfter = balances.ves + option.receiveVEs;

  // Focus management and keyboard accessibility
  useEffect(() => {
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 100);

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !isProcessing) onCancel();
    };
    
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, [onCancel, isProcessing]);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        onClick={() => !isProcessing && onCancel()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ 
            type: "spring",
            damping: 25,
            stiffness: 300
          }}
        >
          {/* Decorative background */}
          <div className={styles.modalGlow} />
          
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.headerIcon}>
                <Sparkles size={18} />
              </div>
              <h2 id="modal-title" className={styles.title}>
                Confirm Conversion
              </h2>
            </div>
            <button
              ref={closeBtnRef}
              className={styles.closeBtn}
              onClick={onCancel}
              aria-label="Close dialog"
              disabled={isProcessing}
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Conversion Display */}
          <div className={styles.conversionBlock}>
            <motion.div 
              className={styles.conversionItem}
              initial={{ y: 0 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className={styles.iconWrapper} data-type="gem">
                <Gem size={24} strokeWidth={1.5} />
              </div>
              <div className={styles.conversionDetails}>
                <span className={styles.conversionAmount}>
                  {option.requiredGems}
                </span>
                <span className={styles.conversionLabel}>Gems</span>
              </div>
            </motion.div>

            <div className={styles.arrowWrapper}>
              <div className={styles.arrowLine} />
              <ArrowDown size={20} className={styles.arrowIcon} />
              <div className={styles.arrowLine} />
            </div>

            <motion.div 
              className={styles.conversionItem}
              initial={{ y: 0 }}
              animate={{ y: [0, 4, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className={styles.iconWrapper} data-type="ve">
                <Coins size={24} strokeWidth={1.5} />
              </div>
              <div className={styles.conversionDetails}>
                <span className={styles.conversionAmount}>
                  {option.receiveVEs}
                </span>
                <span className={styles.conversionLabel}>VEs</span>
              </div>
            </motion.div>
          </div>

          {/* Balance Preview */}
          <div className={styles.balancePreview}>
            <div className={styles.balanceRow}>
              <span className={styles.balanceLabel}>Gems after conversion</span>
              <span className={`${styles.balanceValue} ${styles.balanceGem}`}>
                {gemsAfter.toLocaleString()}
              </span>
            </div>
            <div className={styles.balanceDivider} />
            <div className={styles.balanceRow}>
              <span className={styles.balanceLabel}>VEs after conversion</span>
              <span className={`${styles.balanceValue} ${styles.balanceVe}`}>
                {vesAfter.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Actions */}
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
              {isProcessing ? (
                <>
                  <span className={styles.spinner} />
                  Converting...
                </>
              ) : (
                "Confirm Conversion"
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}