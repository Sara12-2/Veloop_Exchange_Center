// src/components/exchange/ExchangeHero.jsx
import { Gem, ArrowRight, Coins, Sparkles } from "lucide-react";
import styles from "./ExchangeHero.module.css";

export default function ExchangeHero() {
  return (
    <section className={styles.hero}>
      {/* Floating Particles */}
      <div className={styles.particles}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            '--delay': `${i * 0.4}s`,
            '--size': `${3 + Math.random() * 7}px`,
            '--x': `${5 + Math.random() * 90}%`,
            '--y': `${5 + Math.random() * 90}%`,
            '--duration': `${4 + Math.random() * 4}s`,
          }} />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <Sparkles size={12} className={styles.badgeIcon} />
              Reward Conversion
            </span>
          </div>

          <h1 className={styles.title}>
            Exchange <span className={styles.highlight}>Center</span>
          </h1>

          <p className={styles.subtitle}>Turn your earned Gems into VEs</p>

          <p className={styles.description}>
            Convert your eligible Gems into VEs and continue your reward journey.
          </p>

          <div className={styles.decorativeLine}>
            <span className={styles.lineDot} />
            <span className={styles.line} />
            <span className={styles.lineDot} />
          </div>
        </div>

        <div className={styles.illustration}>
          {/* Gem */}
          <div className={styles.iconWrapper} data-variant="gem">
            <div className={styles.glowRing} data-variant="gem" />
            <div className={styles.glowPulse} data-variant="gem" />
            <div className={styles.iconContainer} data-variant="gem">
              <Gem size={28} strokeWidth={1.5} />
            </div>
            <span className={styles.label}>Gems</span>
            <div className={styles.iconShine} />
          </div>

          {/* Arrow */}
          <div className={styles.arrowWrapper}>
            <div className={styles.arrowTrack}>
              <ArrowRight size={22} strokeWidth={2} />
            </div>
            <div className={styles.arrowGlow} />
          </div>

          {/* VE */}
          <div className={styles.iconWrapper} data-variant="ve">
            <div className={styles.glowRing} data-variant="ve" />
            <div className={styles.glowPulse} data-variant="ve" />
            <div className={styles.iconContainer} data-variant="ve">
              <Coins size={28} strokeWidth={1.5} />
            </div>
            <span className={styles.label}>VEs</span>
            <div className={styles.iconShine} />
          </div>
        </div>
      </div>

      <div className={styles.bottomGlow} />
    </section>
  );
}