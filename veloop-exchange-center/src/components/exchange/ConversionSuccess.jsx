import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, Gem, Coins } from "lucide-react";
import styles from "./ConversionSuccess.module.css";

export default function ConversionSuccess({ option, onContinue }) {
  const continueBtnRef = useRef(null);

  // Auto-focus and keyboard accessibility
  useEffect(() => {
    const timer = setTimeout(() => {
      continueBtnRef.current?.focus();
    }, 300);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onContinue();
      if (e.key === "Enter" && e.target === continueBtnRef.current) onContinue();
    };
    
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, [onContinue]);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={styles.card}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            delay: 0.1
          }}
        >
          {/* Background effects */}
          <div className={styles.cardGlow} />
          <div className={styles.confettiContainer}>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.confetti}
                style={{
                  left: `${5 + Math.random() * 90}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${4 + Math.random() * 6}px`,
                  height: `${4 + Math.random() * 6}px`,
                  backgroundColor: ['#6c8cff', '#d4af37', '#4CAF50', '#FF6B6B', '#FFA726'][i % 5],
                  borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  y: [0, -50, -100],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2 + Math.random() * 1.5,
                  delay: Math.random() * 0.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Icon with animation */}
          <motion.div 
            className={styles.iconWrap}
            animate={{
              scale: [0.8, 1.1, 1],
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              damping: 12,
              stiffness: 200,
            }}
          >
            <div className={styles.iconCircle}>
              <CheckCircle2 size={48} strokeWidth={1.5} />
            </div>
            <motion.div
              className={styles.sparkle1}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={20} />
            </motion.div>
            <motion.div
              className={styles.sparkle2}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, -180],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.8,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={14} />
            </motion.div>
            <motion.div
              className={styles.sparkle3}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 90],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 1.1,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={16} />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h2 id="success-title" className={styles.title}>
              Conversion Complete! 🎉
            </h2>
            
            <div className={styles.conversionDetails}>
              <div className={styles.detailRow}>
                <div className={styles.detailItem}>
                  <Gem size={16} className={styles.gemIcon} />
                  <span className={styles.detailValue}>{option.requiredGems}</span>
                  <span className={styles.detailLabel}>Gems</span>
                </div>
                <span className={styles.arrowIcon}>→</span>
                <div className={styles.detailItem}>
                  <Coins size={16} className={styles.veIcon} />
                  <span className={styles.detailValue}>{option.receiveVEs}</span>
                  <span className={styles.detailLabel}>VEs</span>
                </div>
              </div>
            </div>

            <p className={styles.amount}>
              +{option.receiveVEs} VEs added to your balance
            </p>
          </motion.div>

          {/* Continue button */}
          <motion.button
            ref={continueBtnRef}
            className={styles.continueBtn}
            onClick={onContinue}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}