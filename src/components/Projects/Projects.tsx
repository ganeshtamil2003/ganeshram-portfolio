import Image from "next/image";
import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./Projects.module.css";

const DOMAIN_PROJECTS = [
  {
    name: "Treasury CRM",
    desc: "Customer Relationship Management system for banking treasury operations.",
    contribution:
      "Automation testing with Cypress (POM + BDD), API validation, CI/CD pipeline integration, and comprehensive regression suites.",
    tech: ["Cypress", "Postman", "GitLab CI/CD", "BDD"],
  },
  {
    name: "BDS (Branch Delivery System)",
    desc: "Core banking branch operations and delivery platform for branch-level transactions.",
    contribution:
      "Functional testing of dynamic tables, filters, and pagination. Regression testing, defect tracking, and UI validation.",
    tech: ["Cypress", "Jira", "SQL", "QASE"],
  },
  {
    name: "FRIMS",
    desc: "Fraud Risk Identification and Management System for banking compliance and risk assessment.",
    contribution:
      "Test scenario design from BRDs/FSDs, smoke testing, SIT, UAT, and requirement traceability.",
    tech: ["Selenium", "Jira", "Manual Testing", "SQL"],
  },
];

const PERSONAL_PROJECTS = [
  {
    name: "TestBento",
    subtitle: "AI-Powered QA Test Management Platform",
    desc: "Full-cycle QA platform supporting requirement management, AI-generated test cases using Gemini API, execution tracking, and defect management. Built to streamline the entire testing lifecycle.",
    role: "Full-Stack Developer & QA Architect",
    tech: ["TypeScript", "Next.js", "Supabase", "Gemini API"],
    logo: "/testbento_logo.png",
    github: "https://github.com/ganeshtamil2003/TestBento",
    demo: "https://test-bento.vercel.app",
  },
  {
    name: "SpendSense",
    subtitle: "Smart Personal Finance Tracker (PWA)",
    desc: "Progressive Web Application for secure expense and budget management with interactive charts, category-based tracking, and financial insights. Installable on mobile devices.",
    role: "Full-Stack Developer",
    tech: ["React.js", "Supabase", "Recharts", "PWA"],
    logo: "/spendsense_logo.svg",
    github: "https://github.com/ganeshtamil2003/Spend-Sense",
    demo: "https://spendsense-pi.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsInner}>
        <AnimatedReveal>
          <div className={styles.header}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Projects
            </span>
            <h2 className="section-heading">Work & Creations</h2>
            <p className="section-subtext" style={{ margin: "0 auto" }}>
              From enterprise banking systems to personal full-stack
              applications — quality and craftsmanship in every project.
            </p>
          </div>
        </AnimatedReveal>

        {/* Professional Domain Projects */}
        <AnimatedReveal>
          <h3 className={styles.categoryTitle}>
            Professional Domain Projects
          </h3>
        </AnimatedReveal>

        <div className={styles.domainGrid}>
          {DOMAIN_PROJECTS.map((project, i) => (
            <AnimatedReveal key={i} delay={i * 100}>
              <div className={styles.domainCard}>
                <span className={styles.domainBadge}>
                  🏦 Enterprise Banking
                </span>
                <h4 className={styles.domainName}>{project.name}</h4>
                <p className={styles.domainDesc}>{project.desc}</p>
                <p className={styles.domainContribution}>
                  <strong>My QA Contribution: </strong>
                  {project.contribution}
                </p>
                <div className={styles.domainTechTags}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        {/* Personal Projects */}
        <AnimatedReveal>
          <h3 className={styles.categoryTitle}>Personal Projects</h3>
        </AnimatedReveal>

        <div className={styles.featuredGrid}>
          {PERSONAL_PROJECTS.map((project, i) => (
            <AnimatedReveal key={i} delay={i * 150}>
              <div className={styles.featuredCard}>
                <div className={styles.featuredVisual}>
                  {project.logo ? (
                    <div className={styles.projectLogoWrapper}>
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        fill
                        className={styles.projectLogo}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  ) : (
                    <span className={styles.featuredPlaceholder}>
                      {/* Fallback to text if logo is missing */}
                    </span>
                  )}
                </div>
                <div className={styles.featuredContent}>
                  <span className={styles.featuredBadge}>
                    ✨ Personal Project
                  </span>
                  <h4 className={styles.featuredName}>{project.name}</h4>
                  <span className={styles.featuredSubtitle}>
                    {project.subtitle}
                  </span>
                  <p className={styles.featuredDesc}>{project.desc}</p>
                  <p className={styles.featuredRole}>
                    <strong>Role: </strong>
                    {project.role}
                  </p>
                  <div className={styles.featuredTech}>
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className={styles.featuredLinks}>
                    <a
                      href={project.github}
                      className={styles.linkGhost}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code ↗
                    </a>
                    <a
                      href={project.demo}
                      className={styles.linkSecondary}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo →
                    </a>
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
