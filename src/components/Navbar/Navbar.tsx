"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience & Expertise", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.navInner}>
        <a href="#hero" className={styles.logo} onClick={handleNavClick}>
          Ganesh Ram M
        </a>

        <ul className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${styles.navLink} ${
                  activeSection === item.href.slice(1)
                    ? styles.navLinkActive
                    : ""
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.navCta} onClick={handleNavClick}>
          Get in Touch
        </a>

        <button
          className={`${styles.hamburger} ${
            mobileOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!mobileOpen}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={handleNavClick}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.mobileCta}
          onClick={handleNavClick}
          tabIndex={mobileOpen ? 0 : -1}
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
