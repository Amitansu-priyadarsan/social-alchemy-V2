import BookCallButton from "./BookCallButton";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.wrap} ${styles.row}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark} />
          <span>social alchemy</span>
        </a>
        <nav className={styles.nav}>
          <a href="#engines">Engines</a>
          <a href="#work">Work</a>
          <a href="#case">Case study</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>
        <BookCallButton>
          Book a call <span aria-hidden="true">→</span>
        </BookCallButton>
      </div>
    </header>
  );
}
