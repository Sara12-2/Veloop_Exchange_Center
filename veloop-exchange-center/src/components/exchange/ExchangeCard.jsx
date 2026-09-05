import { Gem, ArrowDown, Coins, Sparkles, Lock } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ExchangeCard.module.css";

export default function ExchangeCard({ option, availableGems, onConvert }) {
  const hasEnoughGems = availableGems >= option.requiredGems;
  const shortfall = option.requiredGems - availableGems;
  const progress = Math.min((availableGems / option.requiredGems) * 100, 100);

  return (
    <motion.div 
      className={`${styles.card} ${!hasEnoughGems ? styles.insufficient : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Card Glow */}
      <div className={styles.cardGlow} />
      
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <Gem size={22} strokeWidth={1.5} />
          {!hasEnoughGems && (
            <div className={styles.lockBadge}>
              <Lock size={10} />
            </div>
          )}
        </div>
        {hasEnoughGems && (
          <motion.div 
            className={styles.availableBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={12} />
            <span>Available</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.label}>{option.label}</h3>
        <p className={styles.description}>{option.description}</p>

        {/* Conversion Display */}
        <div className={styles.conversionRow}>
          <div className={styles.conversionItem}>
            <div className={styles.conversionIcon} data-type="gem">
              <Gem size={16} strokeWidth={1.5} />
            </div>
            <span className={styles.conversionAmount}>{option.requiredGems}</span>
            <span className={styles.conversionLabel}>Gems</span>
          </div>

          <div className={styles.arrowWrapper}>
            <div className={styles.arrowLine} />
            <ArrowDown size={18} className={styles.arrowIcon} />
            <div className={styles.arrowLine} />
          </div>

          <div className={styles.conversionItem}>
            <div className={styles.conversionIcon} data-type="ve">
              <Coins size={16} strokeWidth={1.5} />
            </div>
            <span className={styles.conversionAmount}>{option.receiveVEs}</span>
            <span className={styles.conversionLabel}>VEs</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                background: hasEnoughGems 
                  ? 'linear-gradient(90deg, #6c8cff, #4CAF50)'
                  : 'linear-gradient(90deg, #6c8cff, #FFA726)'
              }}
            />
          </div>
          <span className={styles.progressText}>
            {availableGems.toLocaleString()} / {option.requiredGems} Gems
          </span>
        </div>

        {/* Action Button */}
        {hasEnoughGems ? (
          <motion.button
            className={styles.convertBtn}
            onClick={() => onConvert(option)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Gem size={16} strokeWidth={1.5} />
            Convert {option.requiredGems} Gems
            <span className={styles.btnArrow}>→</span>
          </motion.button>
        ) : (
          <motion.div 
            className={styles.insufficientBlock}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.insufficientContent}>
              <Lock size={16} className={styles.lockIcon} />
              <div className={styles.insufficientText}>
                <p className={styles.insufficientTitle}>
                  {shortfall} more Gem{shortfall !== 1 ? "s" : ""} needed
                </p>
                <p className={styles.insufficientDesc}>
                  You need {shortfall} more Gem{shortfall !== 1 ? "s" : ""} to unlock this conversion
                </p>
              </div>
            </div>
            <button className={styles.earnMoreBtn}>
              <Sparkles size={14} />
              Earn More Gems
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}