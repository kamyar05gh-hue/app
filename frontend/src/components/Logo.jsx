/**
 * PlanMove wordmark logo — uses the supplied PNG wordmark (icon + PLANMOVE text).
 * The image already contains the full uppercase wordmark, so no separate text is rendered.
 */
export const Logo = ({
  className = "",
  variant = "dark", // "dark" = black on light bg, "light" = white on dark bg
  showImage = true,
}) => {
  const filter = variant === "light" ? "invert" : "";
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label="PLANMOVE"
    >
      {showImage && (
        <img
          src="/images/logo.png"
          alt="PLANMOVE"
          className={`h-[1.65em] w-auto object-contain ${filter}`}
        />
      )}
    </span>
  );
};

export default Logo;
