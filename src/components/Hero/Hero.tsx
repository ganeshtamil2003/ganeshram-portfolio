"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const TERMINAL_LINES = [
  { type: "command", text: "$ running test suite..." },
  { type: "empty", text: "" },
  { type: "pass", text: "✓ Auth Validations        14/14 passed" },
  { type: "pass", text: "✓ Dynamic Tables           8/8  passed" },
  { type: "pass", text: "✓ API Contracts            6/6  passed" },
  { type: "pass", text: "✓ Regression Suite        31/31 passed" },
  { type: "divider", text: "" },
  { type: "status", text: "" },
  { type: "command", text: "$ deployment ready_" },
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= TERMINAL_LINES.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <span className={styles.microLabel}>
            {/* code-style label */}
            {"// Associate Software Analyst & Full-Stack Enthusiast"}
            <span className={styles.cursor} />
          </span>

          <h1 className={styles.heroHeading}>
            Crafting{" "}
            <span className="gradient-text">Quality</span> Into
            <br />
            Every Line of Code
          </h1>

          <p className={styles.heroDescription}>
            Software Quality Analyst with a developer&apos;s mindset. I bridge the gap
            between building software and ensuring it works — combining
            automation testing expertise for enterprise banking systems with
            full-stack development knowledge to deliver reliable applications.
          </p>

          <div className={styles.heroCtas}>
            <a href="#projects" className={styles.ctaPrimary}>
              Explore My Work →
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
              Download Résumé
            </a>
          </div>

          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            Open to Opportunities
          </div>
        </div>

        <div className={styles.terminalWrapper}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={`${styles.terminalDot} ${styles.dotRed}`} />
              <span className={`${styles.terminalDot} ${styles.dotYellow}`} />
              <span className={`${styles.terminalDot} ${styles.dotGreen}`} />
              <span className={styles.terminalTitle}>quality-check.sh</span>
            </div>
            <div className={styles.terminalBody}>
              {TERMINAL_LINES.map((line, i) => {
                if (i >= visibleLines) return null;
                const delay = `${i * 80}ms`;

                if (line.type === "divider") {
                  return (
                    <span
                      key={i}
                      className={styles.terminalLine}
                      style={{ animationDelay: delay }}
                    >
                      <span className={styles.terminalDivider} />
                    </span>
                  );
                }

                if (line.type === "status") {
                  return (
                    <div
                      key={i}
                      className={styles.terminalLine}
                      style={{ animationDelay: delay }}
                    >
                      <div className={styles.terminalStatusRow}>
                        <span className={styles.terminalText}>
                          Coverage:{" "}
                          <span className={styles.terminalHighlight}>
                            94.2%
                          </span>
                        </span>
                        <span className={styles.terminalText}>
                          Quality:{" "}
                          <span className={styles.progressBar}>████████░</span>
                        </span>
                      </div>
                      <div className={styles.terminalStatusRow}>
                        <span className={styles.terminalDim}>
                          Build: #247
                        </span>
                        <span className={styles.terminalPass}>
                          Status: PASSING
                        </span>
                      </div>
                    </div>
                  );
                }

                if (line.type === "empty") {
                  return (
                    <div
                      key={i}
                      className={styles.terminalLine}
                      style={{ animationDelay: delay, height: "12px" }}
                    />
                  );
                }

                return (
                  <div
                    key={i}
                    className={styles.terminalLine}
                    style={{ animationDelay: delay }}
                  >
                    <span
                      className={
                        line.type === "command"
                          ? styles.terminalCommand
                          : styles.terminalPass
                      }
                    >
                      {line.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
