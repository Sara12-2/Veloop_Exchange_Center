import { Gem, ArrowRight, Coins, CheckCircle2, Clock, XCircle, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ExchangeHistory.module.css";

const statusConfig = {
  completed: { 
    label: "Completed", 
    icon: CheckCircle2, 
    variant: "completed",
    color: "#4CAF50"
  },
  pending: { 
    label: "Processing", 
    icon: Clock, 
    variant: "pending",
    color: "#FFA726"
  },
  failed: { 
    label: "Failed", 
    icon: XCircle, 
    variant: "failed",
    color: "#EF5350"
  },
};

export default function ExchangeHistory({ history = [] }) {
  const hasHistory = history && history.length > 0;

  return (
    <motion.section 
      className={styles.section}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>
          <History size={20} className={styles.titleIcon} />
          Recent Conversions
        </h2>
        {hasHistory && (
          <span className={styles.count}>{history.length} conversions</span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!hasHistory ? (
          <motion.div 
            className={styles.emptyState}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.emptyIconWrapper}>
              <History size={32} className={styles.emptyIcon} />
            </div>
            <p className={styles.emptyText}>No conversions yet</p>
            <p className={styles.emptySubtext}>
              Your first conversion will appear here
            </p>
          </motion.div>
        ) : (
          <div className={styles.list}>
            {history.map((item, index) => {
              const status = statusConfig[item.status] || statusConfig.completed;
              const StatusIcon = status.icon;
              
              return (
                <motion.div 
                  key={item.id || index}
                  className={styles.row}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className={styles.conversionInfo}>
                    <div className={styles.conversionValue}>
                      <Gem size={16} className={styles.gemIcon} />
                      <span className={styles.valueNumber}>{item.requiredGems}</span>
                      <span className={styles.valueLabel}>Gems</span>
                    </div>
                    
                    <div className={styles.arrowWrapper}>
                      <ArrowRight size={14} className={styles.arrowIcon} />
                    </div>
                    
                    <div className={styles.conversionValue}>
                      <Coins size={16} className={styles.veIcon} />
                      <span className={styles.valueNumber}>{item.receiveVEs}</span>
                      <span className={styles.valueLabel}>VEs</span>
                    </div>
                    
                    <span className={styles.date}>{item.date}</span>
                  </div>
                  
                  <div className={styles.statusWrapper}>
                    <span 
                      className={styles.statusBadge} 
                      data-variant={status.variant}
                      style={{ '--status-color': status.color }}
                    >
                      <StatusIcon size={12} className={styles.statusIcon} />
                      {status.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}