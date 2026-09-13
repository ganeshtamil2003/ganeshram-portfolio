import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./Philosophy.module.css";

const VALUES = [
  {
    icon: "🎯",
    title: "Quality First",
    desc: "Every feature deserves thorough validation",
  },
  {
    icon: "💡",
    title: "Developer Empathy",
    desc: "Understanding code makes testing smarter",
  },
  {
    icon: "📈",
    title: "Continuous Learning",
    desc: "Technology evolves; so does my expertise",
  },
  {
    icon: "🔬",
    title: "Attention to Detail",
    desc: "The smallest defect can have the biggest impact",
  },
];

export function Philosophy() {
  return (
    <section className={styles.philosophy}>
      <div className={styles.philosophyInner}>
        <AnimatedReveal>
          <p className={styles.quote}>
            &ldquo;Building software is important.
            <br />
            Building <span className="gradient-text">reliable</span> software
            is essential.&rdquo;
          </p>
        </AnimatedReveal>

        <div className={styles.valuesGrid}>
          {VALUES.map((value, i) => (
            <AnimatedReveal key={i} delay={i * 100}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <span className={styles.valueTitle}>{value.title}</span>
                <span className={styles.valueDesc}>{value.desc}</span>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
