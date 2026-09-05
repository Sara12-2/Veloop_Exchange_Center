import { Gem, Coins } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ExchangeLoader.module.css";

export default function ExchangeLoader({ message = "Preparing your reward conversions..." }) {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      {/* Background glow effect */}
      <div className={styles.glowBackground} />
      
      {/* Main loader content */}
      <div className={styles.content}>
        <div className={styles.iconRow}>
          <motion.div
            className={styles.iconWrapper}
            data-type="gem"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className={styles.iconGlow} data-type="gem" />
            <Gem size={32} className={styles.gemIcon} strokeWidth={1.5} />
          </motion.div>

          <div className={styles.trackDots}>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className={styles.dot}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            className={styles.iconWrapper}
            data-type="ve"
            animate={{
              y: [0, 8, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <div className={styles.iconGlow} data-type="ve" />
            <Coins size={32} className={styles.veIcon} strokeWidth={1.5} />
          </motion.div>
        </div>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {message}
        </motion.p>

        <motion.div
          className={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}