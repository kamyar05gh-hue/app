import { useEffect, useState } from "react";

/**
 * Line-by-line masked reveal. Pass `lines` as an array of strings (or JSX).
 * CSS-transition version: each line sits in an overflow-hidden mask and slides
 * up with a staggered delay on mount. Replaces the old framer-motion
 * implementation so the animation library stays out of the initial bundle.
 */
export const RevealText = ({
  lines = [],
  className = "",
  delay = 50,
  duration = 900,
  stagger = 90,
  as: Tag = "h1",
}) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-line">
          <span
            className="inline-block will-change-transform pm-reveal-text-line"
            style={{
              transform: on ? "translateY(0%)" : "translateY(115%)",
              transitionDuration: `${duration}ms`,
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealText;
