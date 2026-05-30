"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

// Fades/slides children in when they scroll into view.
// Mirrors the original [data-reveal] IntersectionObserver behaviour.
export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `${className} ${styles.reveal} ${shown ? styles.in : ""}`.trim();

  return (
    <Tag ref={ref} className={cls} {...props}>
      {children}
    </Tag>
  );
}
