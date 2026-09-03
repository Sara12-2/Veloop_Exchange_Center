import { Gem, ArrowRight, Coins, CheckCircle2, Clock, XCircle, History } from "lucide-react";
import styles from "./ExchangeHistory.module.css";

const statusConfig = {
  completed: { label: "Completed", icon: CheckCircle2, variant: "completed" },
  pending: { label: "Processing", icon: Clock, variant: "pending" },
  failed: { label: "Failed", icon: XCircle, variant: "failed" },
};

export default function ExchangeHistory({ history }) {
  const hasHistory = history && history.length > 0;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Recent Conversions</h2>

      {!hasHistory ? (
        <div className={styles.emptyState}>
          <History size={26} className={styles.emptyIcon} />
          <p className={styles.emptyText}>No conversions yet.</p>
        </div>
      ) : (
        <div className={styles.list}>
          {history.map((item) => {
            const status = statusConfig[item.status] || statusConfig.completed;
            const StatusIcon = status.icon;
            return (
              <div key={item.id} className={styles.row}>
                <div className={styles.conversionInfo}>
                  <div className={styles.conversionValue}>
                    <Gem size={14} className={styles.gemIcon} />
                    <span>{item.requiredGems}</span>
                  </div>
                  <ArrowRight size={13} className={styles.arrowIcon} />
                  <div className={styles.conversionValue}>
                    <Coins size={14} className={styles.veIcon} />
                    <span>{item.receiveVEs}</span>
                  </div>
                  <span className={styles.date}>{item.date}</span>
                </div>
                <span className={styles.statusBadge} data-variant={status.variant}>
                  <StatusIcon size={13} />
                  {status.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}