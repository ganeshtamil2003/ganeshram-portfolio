import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <div className={styles.footerName}>Ganesh Ram M</div>
          <div className={styles.footerTitle}>
            Associate Software Analyst · Full-Stack Enthusiast
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/ganeshtamil2003"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            GH
          </a>
          <a
            href="https://linkedin.com/in/ganesh-ram-m-410308213"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            LI
          </a>
          <a
            href="mailto:ganesh28062003@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            EM
          </a>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          Designed & Built with <span>attention to quality</span> · ©{" "}
          {new Date().getFullYear()} Ganesh Ram M
        </div>
      </div>
    </footer>
  );
}
