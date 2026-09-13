"use client";

import { useState, FormEvent } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal/AnimatedReveal";
import styles from "./Contact.module.css";

const CONTACT_LINKS = [
  {
    icon: "📧",
    label: "Email",
    value: "ganesh28062003@gmail.com",
    href: "mailto:ganesh28062003@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "ganesh-ram-m",
    href: "https://www.linkedin.com/in/ganesh-ram-m-410308213",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "ganeshtamil2003",
    href: "https://github.com/ganeshtamil2003",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Nagercoil, Tamil Nadu",
    href: "#",
  },
];

const WEB3FORMS_KEY = "86178072-1825-41e4-b45f-17313af6c5cf";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInner}>
        <AnimatedReveal>
          <div className={styles.header}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Contact
            </span>
            <h2 className="section-heading">Let&apos;s Connect</h2>
            <p className="section-subtext" style={{ margin: "0 auto" }}>
              Open to new opportunities, collaboration, and conversations about
              software quality and development.
            </p>
          </div>
        </AnimatedReveal>

        <div className={styles.contactGrid}>
          {/* Links */}
          <AnimatedReveal>
            <div className={styles.contactLinks}>
              <p className={styles.contactIntro}>
                Whether you&apos;re looking for a QA professional who understands
                development, or a developer who values quality — I&apos;d love to
                hear from you.
              </p>

              {CONTACT_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={styles.linkItem}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className={styles.linkIcon}>{link.icon}</span>
                  <div className={styles.linkInfo}>
                    <span className={styles.linkLabel}>{link.label}</span>
                    <span className={styles.linkValue}>{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedReveal>

          {/* Form */}
          <AnimatedReveal delay={200}>
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit}
            >
              {/* Honeypot field for spam prevention */}
              <input type="checkbox" name="botcheck" className={styles.honeypot} />

              {status === "success" ? (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✅</span>
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    className={styles.formSubmit}
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.formLabel}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={styles.formInput}
                      placeholder="Your name"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email" className={styles.formLabel}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={styles.formInput}
                      placeholder="your.email@example.com"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message" className={styles.formLabel}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className={`${styles.formInput} ${styles.formTextarea}`}
                      placeholder="Tell me about your opportunity or project..."
                      required
                      minLength={10}
                      disabled={status === "sending"}
                    />
                  </div>

                  {status === "error" && (
                    <p className={styles.errorMessage}>
                      ⚠️ {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className={styles.formSubmit}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </>
              )}
            </form>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
