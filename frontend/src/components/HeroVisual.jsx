import { useLanguage } from "@/i18n/LanguageContext";
import SmoothImage from "@/components/SmoothImage";

/**
 * Hero visual — PLANMOVE KI robot photo.
 * 4:3 frame matching the image so nothing is cropped.
 */
export const HeroVisual = () => {
  const { t } = useLanguage();
  return (
    <div className="relative w-full flex items-center justify-center" data-testid="hero-visual">
      {/* Ambient green glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 50% at 55% 50%, rgba(37,211,102,0.16), transparent 65%)",
        }}
      />

      {/* Photo canvas — 4:3 ratio matching the hero image so nothing is cropped */}
      <div className="relative w-full max-w-[540px] md:max-w-[620px] lg:max-w-[680px] aspect-[4/3]">
        <div className="relative h-full w-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden bg-[#E9E4DA] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">
          <SmoothImage
            src="/images/hero-stock.jpg"
            alt={t.hero.visualAlt}
            width="1448"
            height="1086"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            containerClassName="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
