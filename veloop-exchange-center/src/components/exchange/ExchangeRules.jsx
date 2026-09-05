import { ShieldCheck } from "lucide-react";
import styles from "./ExchangeRules.module.css";

export default function ExchangeRules({ rules }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <ShieldCheck size={18} className={styles.headerIcon} />
        <h2 className={styles.title}>Exchange Rules</h2>
      </div>
      <ul className={styles.list}>
        {rules.map((rule, index) => (
          <li key={index} className={styles.item}>
            {rule}
          </li>
        ))}
      </ul>
    </section>
  );
}