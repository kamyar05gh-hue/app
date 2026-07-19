import { useEffect, useRef, useState } from "react";

/**
 * Reveal — lightweight IntersectionObserver-based scroll reveal.
 * - Uses hardware-accelerated translate3d + opacity only
 * - `delay` in ms lets parents stagger children
 * - Fires once (observer disconnects after first intersection)
 *
 * Usage:
 *   <Reveal><h2>Headline</h2></Reveal>
 *   <Reveal delay={120}><p>Subtext</p></Reveal>
 *   <Reveal delay={240}><CTA /></Reveal>
 */
export const Reveal = ({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -8% 0px",
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Tag
      ref={ref}
      className={`pm-reveal ${visible ? "pm-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
