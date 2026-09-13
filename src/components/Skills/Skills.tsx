import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./Skills.module.css";

const SKILL_CATEGORIES = [
  {
    label: "Quality Assurance",
    skills: [
      { name: "Manual Testing", icon: "🔍" },
      { name: "Functional Testing", icon: "✅" },
      { name: "Regression Testing", icon: "🔁" },
      { name: "Smoke Testing", icon: "💨" },
      { name: "UAT", icon: "👤" },
      { name: "SIT", icon: "🔗" },
      { name: "Test Planning", icon: "🗺️" },
      { name: "Requirement Analysis", icon: "📋" },
      { name: "SDLC / STLC", icon: "♾️" },
    ],
  },
  {
    label: "Automation Testing",
    skills: [
      { name: "Cypress", icon: "🌿" },
      { name: "Playwright", icon: "🎭" },
      { name: "Selenium", icon: "🌐" },
      { name: "POM", icon: "📐" },
      { name: "BDD / Cucumber", icon: "🥒" },
    ],
  },
  {
    label: "API & Performance",
    skills: [
      { name: "Postman", icon: "📬" },
      { name: "REST API", icon: "🔗" },
      { name: "JMeter", icon: "📊" },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "🔷" },
    ],
  },
  {
    label: "Frontend & Backend",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "Supabase", icon: "⚡" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "📂" },
      { name: "GitLab CI/CD", icon: "🦊" },
      { name: "Jenkins", icon: "🔧" },
      { name: "Docker", icon: "🐳" },
      { name: "Linux", icon: "🐧" },
    ],
  },
  {
    label: "Test Management",
    skills: [
      { name: "Jira", icon: "📌" },
      { name: "QASE", icon: "📝" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsInner}>
        <AnimatedReveal>
          <div className={styles.header}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Skills
            </span>
            <h2 className="section-heading">Technical Proficiency</h2>
            <p className="section-subtext" style={{ margin: "0 auto" }}>
              A comprehensive toolkit spanning quality assurance, automation,
              development, and DevOps.
            </p>
          </div>
        </AnimatedReveal>

        <div className={styles.categories}>
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <AnimatedReveal key={catIndex} delay={catIndex * 80}>
              <div className={styles.category}>
                <span className={styles.categoryLabel}>{category.label}</span>
                <div className={styles.skillGrid}>
                  {category.skills.map((skill) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <span className={styles.skillIcon}>{skill.icon}</span>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
