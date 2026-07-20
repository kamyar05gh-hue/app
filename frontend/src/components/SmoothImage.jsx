/**
 * SmoothImage
 * Fades in an image once it has loaded while showing a subtle placeholder
 * background to avoid blank/white flashes and layout shifts.
 */
import { useState, useRef, useEffect } from "react";

export const SmoothImage = ({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  containerClassName = "",
  className = "",
  placeholderClassName = "bg-[#E9E4DA]",
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Placeholder / skeleton */}
      <div
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100 animate-pulse"
        } ${placeholderClassName}`}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        onLoad={() => setLoaded(true)}
        className={`relative z-10 h-full w-full object-cover transition-[opacity,transform] duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};

export default SmoothImage;
