import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./Certifications.module.css";

const CERTIFICATIONS = [
  {
    name: "End-to-End JavaScript Testing with Cypress.io",
    issuer: "LinkedIn Learning",
  },
  { name: "GitLab CI/CD", issuer: "LinkedIn Learning" },
  { name: "Docker Essentials", issuer: "IBM" },
  { name: "Performance Testing Foundations", issuer: "Udemy" },
  { name: "Software Testing Foundations: AI", issuer: "LinkedIn Learning" },
  { name: "Linux", issuer: "Great Learning" },
  { name: "Databases for Development", issuer: "Oracle Dev Gym" },
  { name: "Python", issuer: "Infosys Springboard" },
  { name: "Java", issuer: "Udemy" },
  { name: "HTML/CSS", issuer: "SoloLearn" },
  { name: "C", issuer: "Coursera" },
];

export function Certifications() {
  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.certificationsInner}>
        <AnimatedReveal>
          <div className={styles.header}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Credentials
            </span>
            <h2 className="section-heading">
              Certifications & Achievements
            </h2>
            <p className="section-subtext" style={{ margin: "0 auto" }}>
              Continuous learning through industry-recognized certifications and
              professional accomplishments.
            </p>
          </div>
        </AnimatedReveal>

        {/* Achievement Banner */}
        <AnimatedReveal>
          <div className={styles.achievementBanner}>
            <span className={styles.achievementIcon}>🏆</span>
            <div className={styles.achievementInfo}>
              <span className={styles.achievementTitle}>
                2nd Rank — National-level BrandQuezt Contest
              </span>
              <span className={styles.achievementIssuer}>by Firstnaukri</span>
            </div>
            <span className={styles.achievementTag}>Achievement</span>
          </div>
        </AnimatedReveal>

        {/* Certifications Grid */}
        <AnimatedReveal>
          <div className={styles.certGrid}>
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className={styles.certCard}>
                <span className={styles.certIcon}>📜</span>
                <div className={styles.certInfo}>
                  <span className={styles.certName}>{cert.name}</span>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
