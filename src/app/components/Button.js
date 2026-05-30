import styles from "./Button.module.css";

// Reusable pill button. Renders an <a> when `href` is given, otherwise a <button>.
export default function Button({
  href,
  variant = "solid", // "solid" | "accent" | "ghost"
  size, // undefined | "lg" | "xl"
  className = "",
  children,
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    size && styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
