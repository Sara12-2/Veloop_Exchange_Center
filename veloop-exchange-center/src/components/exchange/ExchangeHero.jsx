import { Gem, ArrowRight, Coins, Sparkles, Zap, TrendingUp, Shield, Clock, Star, Rocket } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import styles from "./ExchangeHero.module.css";

export default function ExchangeHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const progress = Math.min(Math.max(1 - rect.top / window.innerHeight, 0), 1);
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className={`${styles.hero} ${isVisible ? styles.visible : ''}`}
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y,
        '--scroll': scrollProgress,
      }}
    >
      {/* Glassmorphism Background Layers */}
      <div className={styles.glassBg}>
        <div className={styles.glassOrb} data-color="blue" />
        <div className={styles.glassOrb} data-color="gold" />
        <div className={styles.glassOrb} data-color="purple" />
        <div className={styles.glassOrb} data-color="pink" />
        <div className={styles.glassOrb} data-color="cyan" />
      </div>

      {/* Glassmorphism Overlay */}
      <div className={styles.glassOverlay} />

      {/* Animated Gradient Border */}
      <div className={styles.gradientBorder} />

      {/* Floating Glass Particles */}
      <div className={styles.glassParticles}>
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={styles.glassParticle}
            style={{
              '--delay': `${i * 0.12}s`,
              '--size': `${2 + Math.random() * 8}px`,
              '--x': `${5 + Math.random() * 90}%`,
              '--y': `${5 + Math.random() * 90}%`,
              '--duration': `${6 + Math.random() * 6}s`,
              '--opacity': `${0.1 + Math.random() * 0.3}`,
              '--color': ['#6c8cff', '#d4af37', '#ff6b6b', '#4ecdc4', '#a29bfe', '#fd79a8'][i % 6],
            }}
          />
        ))}
      </div>

      {/* Mouse Glow */}
      <div 
        className={styles.mouseGlow}
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
        }}
      />

      <div className={styles.content}>
        {/* Left Section */}
        <div className={styles.textBlock}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <Zap size={14} className={styles.badgeIcon} />
              Reward Conversion Hub
              <span className={styles.badgePulse} />
            </span>
          </div>

          <h1 className={styles.title}>
            Exchange <span className={styles.highlight}>Center</span>
            <span className={styles.titleUnderline} />
          </h1>

          <p className={styles.subtitle}>
            Turn your earned <span className={styles.gemText}>Gems</span> into <span className={styles.veText}>VEs</span>
          </p>

          <p className={styles.description}>
            Convert your eligible Gems into VEs and continue your reward journey.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <Clock size={14} />
              </div>
              <span className={styles.statValue}>24/7</span>
              <span className={styles.statLabel}>Available</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <TrendingUp size={14} />
              </div>
              <span className={styles.statValue}>Instant</span>
              <span className={styles.statLabel}>Conversion</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <Shield size={14} />
              </div>
              <span className={styles.statValue}>Secure</span>
              <span className={styles.statLabel}>Rewards</span>
            </div>
          </div>

          <div className={styles.actionRow}>
            <button className={styles.primaryBtn}>
              <Sparkles size={16} />
              Start Converting
              <span className={styles.btnGlow} />
              <span className={styles.btnRipple} />
            </button>
            <button className={styles.secondaryBtn}>
              Learn More
              <Rocket size={14} />
            </button>
          </div>
        </div>

        {/* Right Section - Glass 3D Illustration */}
        <div className={styles.illustrationWrapper}>
          <div 
            className={styles.illustration3d}
            style={{
              transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
            }}
          >
            {/* Glass Frame */}
            <div className={styles.glassFrame} />

            {/* Gem with 3D Glass Effect */}
            <div 
              className={styles.iconWrapper} 
              data-variant="gem"
              style={{
                transform: `rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg)`
              }}
            >
              <div className={styles.glowRing} data-variant="gem" />
              <div className={styles.glowPulse} data-variant="gem" />
              <div className={styles.glassIcon} data-variant="gem">
                <Gem size={34} strokeWidth={1.5} />
                <div className={styles.iconInnerGlow} />
              </div>
              <div className={styles.iconLabel}>
                <span className={styles.label}>Gems</span>
                <span className={styles.labelSub}>Reward Credits</span>
              </div>
              <div className={styles.iconShine} />
              <div className={styles.particleEffect} data-variant="gem">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className={styles.particleDot} style={{ '--i': i }} />
                ))}
              </div>
            </div>

            {/* Animated Glass Arrow */}
            <div 
              className={styles.arrowWrapper}
              style={{
                transform: `translateX(${mousePosition.x * 8}px)`
              }}
            >
              <div className={styles.glassArrow}>
                <ArrowRight size={26} strokeWidth={2} />
              </div>
              <div className={styles.arrowGlow} />
              <div className={styles.arrowTrail}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.trailDot} style={{ '--i': i }} />
                ))}
              </div>
              <div className={styles.arrowRings}>
                {[...Array(3)].map((_, i) => (
                  <span key={i} className={styles.ring} style={{ '--i': i }} />
                ))}
              </div>
            </div>

            {/* VE with 3D Glass Effect */}
            <div 
              className={styles.iconWrapper} 
              data-variant="ve"
              style={{
                transform: `rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg)`
              }}
            >
              <div className={styles.glowRing} data-variant="ve" />
              <div className={styles.glowPulse} data-variant="ve" />
              <div className={styles.glassIcon} data-variant="ve">
                <Coins size={34} strokeWidth={1.5} />
                <div className={styles.iconInnerGlow} />
              </div>
              <div className={styles.iconLabel}>
                <span className={styles.label}>VEs</span>
                <span className={styles.labelSub}>Virtual Currency</span>
              </div>
              <div className={styles.iconShine} />
              <div className={styles.particleEffect} data-variant="ve">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className={styles.particleDot} style={{ '--i': i + 4 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glass Bottom Bar */}
      <div className={styles.glassBottom}>
        <div className={styles.bottomProgress} />
        <div className={styles.bottomGlow} />
      </div>

      {/* Floating Glass Labels */}
      <div className={styles.floatingLabels}>
        <span className={styles.floatingLabel} style={{ top: '12%', left: '3%' }}>
          <Star size={10} /> 2.4k+ Converted
        </span>
        <span className={styles.floatingLabel} style={{ top: '65%', right: '2%' }}>
          <Zap size={10} /> Instant Rewards
        </span>
        <span className={styles.floatingLabel} style={{ bottom: '25%', left: '5%' }}>
          <Shield size={10} /> 100% Secure
        </span>
        <span className={styles.floatingLabel} style={{ top: '40%', left: '2%' }}>
          <Gem size={10} /> 500k+ Gems Exchanged
        </span>
      </div>
    </section>
  );
}