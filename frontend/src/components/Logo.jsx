/**
 * PlanMove wordmark logo — text-based, uses the display font (Outfit).
 * Small green dot after the "e" for a subtle brand mark.
 */
export const Logo = ({
  className = "",
  variant = "dark", // "dark" = black on light bg, "light" = white on dark bg
  showDot = true,
}) => {
  const color = variant === "light" ? "text-white" : "text-black";
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display font-extrabold tracking-[-0.04em] ${color} ${className}`}
      aria-label="PlanMove"
    >
      <span>PlanMove</span>
    </span>
  );
};

export default Logo;
