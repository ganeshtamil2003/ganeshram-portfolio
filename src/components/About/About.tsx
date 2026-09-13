import Image from "next/image";
import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutInner}>
        {/* Profile Photo + Code Card */}
        <AnimatedReveal>
          <div className={styles.photoAndCard}>
            {/* Profile Photo */}
            <div className={styles.profilePhotoWrapper}>
              <div className={styles.profilePhotoRing}>
                <Image
                  src="/profile.jpg"
                  alt="Ganesh Ram M"
                  width={180}
                  height={180}
                  className={styles.profilePhoto}
                  priority
                />
              </div>
            </div>

          <div className={styles.codeCard}>
            <div className={styles.codeCardHeader}>
              <span
                className={styles.codeCardDot}
                style={{ background: "#EF4444" }}
              />
              <span
                className={styles.codeCardDot}
                style={{ background: "#F59E0B" }}
              />
              <span
                className={styles.codeCardDot}
                style={{ background: "#10B981" }}
              />
              <span className={styles.codeCardFileName}>
                developer-profile.json
              </span>
            </div>
            <div className={styles.codeCardBody}>
              <span className={styles.jsonBracket}>{"{"}</span>
              {"\n"}
              {"  "}
              <span className={styles.jsonKey}>&quot;name&quot;</span>
              <span className={styles.jsonPunctuation}>: </span>
              <span className={styles.jsonString}>
                &quot;Ganesh Ram M&quot;
              </span>
              <span className={styles.jsonPunctuation}>,</span>
              {"\n"}
              {"  "}
              <span className={styles.jsonKey}>&quot;role&quot;</span>
              <span className={styles.jsonPunctuation}>: </span>
              <span className={styles.jsonString}>
                &quot;Associate Software Analyst&quot;
              </span>
              <span className={styles.jsonPunctuation}>,</span>
              {"\n"}
              {"  "}
              <span className={styles.jsonKey}>&quot;mindset&quot;</span>
              <span className={styles.jsonPunctuation}>: </span>
              <span className={styles.jsonString}>
                &quot;Developer&quot;
              </span>
              <span className={styles.jsonPunctuation}>,</span>
              {"\n"}
              {"  "}
              <span className={styles.jsonKey}>&quot;passion&quot;</span>
              <span className={styles.jsonPunctuation}>: </span>
              <span className={styles.jsonString}>
                &quot;Development &amp; AI Tech&quot;
              </span>
              <span className={styles.jsonPunctuation}>,</span>
              {"\n"}
              {"  "}
              <span className={styles.jsonKey}>&quot;focus&quot;</span>
              <span className={styles.jsonPunctuation}>: [</span>
              {"\n"}
              {"    "}
              <span className={styles.jsonString}>
                &quot;Full-Stack Development&quot;
              </span>
              <span className={styles.jsonPunctuation}>,</span>
              {"\n"}
              {"    "}
              <span className={styles.jsonString}>
                &quot;Artificial Intelligence&quot;
              </span>
              <span className={styles.jsonPunctuation}>,</span>
              {"\n"}
              {"    "}
              <span className={styles.jsonString}>
                &quot;Quality Assurance&quot;
              </span>
              <span className={styles.jsonPunctuation}>,</span>
              {"\n"}
              {"    "}
              <span className={styles.jsonString}>
                &quot;Automation Testing&quot;
              </span>
              {"\n"}
              {"  "}  
              <span className={styles.jsonPunctuation}>],</span>
              {"\n"}
              {"  "}
              <span className={styles.jsonKey}>&quot;status&quot;</span>
              <span className={styles.jsonPunctuation}>: </span>
              <span className={styles.jsonString}>
                &quot;Always Learning&quot;
              </span>
              {"\n"}
              <span className={styles.jsonBracket}>{"}"}</span>
            </div>
          </div>
          </div>
        </AnimatedReveal>

        {/* Content */}
        <AnimatedReveal delay={150}>
          <div className={styles.aboutContent}>
            <span className="section-label">About Me</span>
            <h2 className="section-heading">
              Quality-Driven Engineer Who
              <br />
              Understands Both Sides of the Code
            </h2>

            <div className={styles.narrative}>
              <p>
                My journey in software quality began at Finsurge, where I
                immersed myself in testing enterprise banking systems — Treasury
                CRM, Branch Delivery System, and Fraud Risk Management. Working
                on mission-critical financial applications taught me that quality
                isn&apos;t optional — it&apos;s foundational. From analyzing BRDs and FSDs
                to designing comprehensive test scenarios, I developed a rigorous
                and systematic approach to software quality.
              </p>
              <p>
                What sets me apart is my developer&apos;s mindset. I don&apos;t just
                validate — I build. I&apos;ve engineered TestBento, an AI-powered QA
                platform using Next.js, TypeScript, and Supabase, and SpendSense,
                a progressive web application for personal finance. This hands-on
                development experience gives me deep insight into architecture,
                API contracts, and state management — making my testing smarter
                and my automation more resilient.
              </p>
              <p>
                Currently, I&apos;m focused on scaling automation frameworks using
                Cypress with POM and BDD patterns, integrating test suites into
                CI/CD pipelines, and continuously bridging the gap between
                quality assurance and software engineering.
              </p>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>3</div>
                <div className={styles.statLabel}>
                  Enterprise Banking
                  <br />
                  Projects Tested
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>Cypress + CI/CD</div>
                <div className={styles.statLabel}>
                  End-to-End
                  <br />
                  Automation Pipeline
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>Next.js + React</div>
                <div className={styles.statLabel}>
                  Personal Projects
                  <br />
                  Built
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
