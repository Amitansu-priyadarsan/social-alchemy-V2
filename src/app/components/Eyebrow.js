import styles from "./Eyebrow.module.css";

// Mono, uppercase label with the glowing accent dot.
export default function Eyebrow({ children, className = "" }) {
  return <span className={`${styles.eyebrow} ${className}`}>{children}</span>;
}
