import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.top}>
      <div className={styles.wordmark}>
        social <span className={styles.accentWord}>alchemy</span>
      </div>
      <footer>
        <div className={styles.bar}>
          <div className={styles.group}>
            <span>© 2026 Social Alchemy</span>
            <span>Bhubaneswar, IN</span>
          </div>
          <div className={styles.group}>
            <a href="mailto:hello@socialalchemy.in">hello@socialalchemy.in</a>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
