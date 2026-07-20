/**
 * SmoothImage
 * Fades in an image once it has loaded while showing a subtle placeholder
 * background to avoid blank/white flashes and layout shifts.
 */
import { useState, useRef, useEffect } from "react";
import { ImageIcon } from "lucide-react";

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
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    setLoaded(img.complete && img.naturalHeight !== 0);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Placeholder / skeleton */}
      <div
        aria-hidden
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          loaded && !failed ? "opacity-0" : "opacity-100"
        } ${failed ? "bg-[#E9E4DA]" : placeholderClassName}`}
      >
        {failed && (
          <span className="absolute inset-0 flex items-center justify-center text-black/20">
            <ImageIcon className="h-8 w-8" />
          </span>
        )}
      </div>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`relative z-10 h-full w-full object-cover bg-[#E9E4DA] transition-[opacity,transform] duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};

export default SmoothImage;
