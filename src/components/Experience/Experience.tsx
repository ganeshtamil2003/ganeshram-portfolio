import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./Experience.module.css";

const EXPERIENCES = [
  {
    company: "Finsurge Pvt Ltd",
    role: "Associate Software Analyst",
    duration: "Aug 2025 – Present",
    isActive: true,
    projects: ["Treasury CRM", "BDS (Branch Delivery System)", "FRIMS"],
    responsibilities: [
      "Designed scalable Cypress automation frameworks using Page Object Model (POM) and BDD (Cucumber) for enterprise banking applications.",
      "Automated validations for dynamic tables, filters, file uploads, date pickers, and complex form workflows.",
      "Developed REST API automation scripts; validated with Postman for contract and data integrity testing.",
      "Integrated test suites with GitLab CI/CD pipelines for scheduled and triggered execution.",
      "Conducted performance testing using Apache JMeter for load and stress scenarios.",
    ],
    tech: ["Cypress", "GitLab CI/CD", "Postman", "POM", "BDD", "JMeter"],
  },
  {
    company: "Finsurge Pvt Ltd",
    role: "Software Quality Analyst Intern",
    duration: "Feb 2025 – Aug 2025",
    isActive: false,
    projects: [],
    responsibilities: [
      "Analysed BRDs and FSDs to derive comprehensive test scenarios and test cases.",
      "Performed Manual, Functional, Regression, Smoke, UAT, and SIT testing for banking applications.",
      "Documented and tracked defects using Jira with detailed reproduction steps.",
      "Built foundational automation scripts and contributed to CI/CD pipeline setup.",
    ],
    tech: ["Jira", "SQL", "Selenium", "QASE"],
  },
];

export function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceInner}>
        <AnimatedReveal>
          <div className={styles.header}>
            <span className={`section-label ${styles.sectionLabel}`}>
              Experience
            </span>
            <h2 className="section-heading">Professional Journey</h2>
          </div>
        </AnimatedReveal>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, index) => (
            <AnimatedReveal key={index} delay={index * 150}>
              <div className={styles.timelineEntry}>
                <div
                  className={`${styles.timelineNode} ${
                    exp.isActive ? styles.timelineNodeActive : ""
                  }`}
                />
                <div className={styles.expCard}>
                  <div className={styles.expCardHeader}>
                    <div>
                      <div className={styles.company}>{exp.company}</div>
                      <div className={styles.role}>{exp.role}</div>
                    </div>
                    <div className={styles.duration}>{exp.duration}</div>
                  </div>

                  {exp.projects.length > 0 && (
                    <div className={styles.projectBadges}>
                      {exp.projects.map((project) => (
                        <span key={project} className={styles.projectBadge}>
                          🏦 {project}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className={styles.responsibilities}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>

                  <div className={styles.techTags}>
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
