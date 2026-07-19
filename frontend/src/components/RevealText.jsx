import { motion } from "framer-motion";

/**
 * Line-by-line masked reveal. Pass `lines` as an array of strings (or JSX).
 * Uses framer-motion staggerChildren, wrapping each line in overflow-hidden.
 */
export const RevealText = ({
  lines = [],
  className = "",
  delay = 0.05,
  duration = 0.9,
  stagger = 0.09,
  as = "h1",
}) => {
  const Tag = motion[as] || motion.h1;
  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {lines.map((line, i) => (
        <span key={i} className="reveal-line">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "115%" },
              visible: {
                y: "0%",
                transition: { duration, ease: [0.65, 0, 0.35, 1] },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealText;
