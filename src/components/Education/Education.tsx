import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./Education.module.css";

const EDUCATION = [
  {
    degree: "SSLC (10th Grade)",
    school: "Kamaraj Matriculation Higher Secondary School",
    location: "Kovilpatti",
    score: "88%",
    year: "2018 - 2019",
    icon: "🏫",
  },
  {
    degree: "HSC (12th Grade)",
    school: "Kamaraj Matriculation Higher Secondary School",
    location: "Kovilpatti",
    score: "90%",
    year: "2019 - 2021",
    icon: "🏫",
  },
  {
    degree: "B.Tech in Information Technology",
    school: "National Engineering College",
    location: "Kovilpatti",
    score: "CGPA: 7.7",
    year: "2021 - 2025",
    icon: "🎓",
  },
];

export function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.educationInner}>
        <AnimatedReveal>
          <div className={styles.header}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Education
            </span>
            <h2 className="section-heading">Academic Journey</h2>
            <p className="section-subtext" style={{ margin: "0 auto" }}>
              Building a strong foundation from school to engineering.
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal>
          <div className={styles.timeline}>
            {/* Connecting line */}
            <div className={styles.timelineLine} />

            {EDUCATION.map((edu, i) => (
              <div key={i} className={styles.milestone}>
                {/* Node */}
                <div className={styles.node}>
                  <span className={styles.nodeIcon}>{edu.icon}</span>
                </div>

                {/* Card */}
                <div className={styles.card}>
                  <span className={styles.year}>{edu.year}</span>
                  <h4 className={styles.degree}>{edu.degree}</h4>
                  <span className={styles.school}>{edu.school}</span>
                  <span className={styles.location}>{edu.location}</span>
                  <div className={styles.scoreBadge}>
                    <span>{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
