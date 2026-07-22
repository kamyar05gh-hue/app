import { useEffect, useRef, useState } from "react";

/**
 * LazySection — mounts children only when the placeholder approaches the
 * viewport, so below-the-fold React.lazy chunks download on demand instead
 * of during the initial page load. `minHeight` keeps the page height stable
 * and prevents layout jumps while the real section is not mounted yet.
 */
export const LazySection = ({
  children,
  minHeight = 600,
  rootMargin = "400px",
}) => {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (near) return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNear(true);
            io.disconnect();
          }
        });
      },
      { rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [near, rootMargin]);

  if (near) return children;
  return <div ref={ref} style={{ minHeight }} aria-hidden />;
};

export default LazySection;
