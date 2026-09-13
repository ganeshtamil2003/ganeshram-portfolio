import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./Expertise.module.css";

const PIPELINE_STEPS = [
  { icon: "📋", label: "Requirement\nAnalysis", color: "#8B5CF6" },
  { icon: "🗺️", label: "Test\nPlanning", color: "#3B82F6" },
  { icon: "✏️", label: "Test Case\nDesign", color: "#3B82F6" },
  { icon: "▶️", label: "Test\nExecution", color: "#22D3EE" },
  { icon: "🐛", label: "Defect\nReporting", color: "#EF4444" },
  { icon: "🔄", label: "Re-\ntesting", color: "#F59E0B" },
  { icon: "✅", label: "Sign-\nOff", color: "#10B981" },
];

const CAPABILITIES = [
  {
    icon: "🛡️",
    title: "Functional Testing",
    desc: "Validating dynamic tables, filters, pagination, and banking workflows against BRDs and functional specifications.",
    border: "borderBlue",
  },
  {
    icon: "⚙️",
    title: "Automation Testing",
    desc: "Cypress & Playwright frameworks using Page Object Model (POM) and BDD (Cucumber) patterns for scalable test suites.",
    border: "borderCyan",
  },
  {
    icon: "🔗",
    title: "API Testing",
    desc: "REST API validation with Postman — verifying contracts, status codes, response schemas, and data integrity.",
    border: "borderViolet",
  },
  {
    icon: "📊",
    title: "Performance Testing",
    desc: "Load and stress testing with Apache JMeter to ensure application reliability under high traffic conditions.",
    border: "borderAmber",
  },
  {
    icon: "🔁",
    title: "Regression Testing",
    desc: "Protecting existing banking functionality from unintended side effects during new releases and code changes.",
    border: "borderBlue",
  },
  {
    icon: "🚀",
    title: "CI/CD Integration",
    desc: "GitLab CI/CD and Jenkins pipelines for automated, scheduled, and triggered test execution across environments.",
    border: "borderCyan",
  },
  {
    icon: "🔍",
    title: "Requirement Analysis",
    desc: "Deriving comprehensive test scenarios from BRDs, FSDs, and stakeholder requirements to ensure full coverage.",
    border: "borderViolet",
  },
  {
    icon: "📝",
    title: "Test Case Design",
    desc: "Creating traceable, reusable test cases with boundary value analysis, equivalence partitioning, and edge case coverage.",
    border: "borderGreen",
  },
  {
    icon: "🐞",
    title: "Defect Management",
    desc: "End-to-end bug lifecycle management with Jira and QASE — from discovery and reporting to verification and closure.",
    border: "borderRose",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className={styles.expertise}>
      <div className={styles.expertiseInner}>
        <AnimatedReveal>
          <div className={styles.header}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Expertise
            </span>
            <h2 className="section-heading">
              Quality Engineering, End to End
            </h2>
            <p className="section-subtext" style={{ margin: "0 auto" }}>
              From requirement analysis to sign-off — a systematic approach to
              software quality across the entire STLC.
            </p>
          </div>
        </AnimatedReveal>

        {/* Pipeline */}
        <AnimatedReveal>
          <div className={styles.pipeline}>
            {PIPELINE_STEPS.map((step, i) => (
              <div key={i} className={styles.pipelineStep}>
                <div
                  className={styles.pipelineIcon}
                  style={{ borderColor: step.color }}
                >
                  {step.icon}
                </div>
                <span className={styles.pipelineLabel}>{step.label}</span>
                {i < PIPELINE_STEPS.length - 1 && (
                  <div className={styles.pipelineConnector} />
                )}
              </div>
            ))}
          </div>
        </AnimatedReveal>

        {/* Capability Grid */}
        <div className={styles.capabilityGrid}>
          {CAPABILITIES.map((cap, i) => (
            <AnimatedReveal key={i} delay={i * 80}>
              <div
                className={`${styles.capabilityCard} ${
                  styles[cap.border as keyof typeof styles] || ""
                }`}
              >
                <span className={styles.capabilityIcon}>{cap.icon}</span>
                <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                <p className={styles.capabilityDesc}>{cap.desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
