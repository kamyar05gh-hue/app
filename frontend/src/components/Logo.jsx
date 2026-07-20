/**
 * PlanMove wordmark logo — text-based, uses the display font (Outfit).
 * Optionally shows the brand mark image left of the wordmark.
 */
export const Logo = ({
  className = "",
  variant = "dark", // "dark" = black on light bg, "light" = white on dark bg
  showDot = true,
  showImage = true,
}) => {
  const color = variant === "light" ? "text-white" : "text-black";
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display font-extrabold tracking-[-0.04em] ${color} ${className}`}
      aria-label="PlanMove"
    >
      {showImage && (
        <img
          src="/images/logo.png"
          alt=""
          aria-hidden
          className="h-[1.35em] w-auto object-contain"
        />
      )}
      <span>PlanMove</span>
    </span>
  );
};

export default Logo;
