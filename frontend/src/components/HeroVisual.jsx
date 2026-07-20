import { useLanguage } from "@/i18n/LanguageContext";
import SmoothImage from "@/components/SmoothImage";

/**
 * Hero visual — matches the hero image's natural 13:10 ratio.
 * The notification cards are part of the artwork itself, so no HTML
 * overlays are rendered on top. Ambient green glow + rounded frame.
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
            "radial-gradient(60% 45% at 60% 45%, rgba(37,211,102,0.14), transparent 65%)",
        }}
      />

      {/* Photo canvas — matches the hero image's natural 13:10 ratio */}
      <div className="relative w-full max-w-[620px] md:max-w-[680px] aspect-[13/10]">
        <div className="relative h-full w-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden bg-[#E9E4DA] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">
          <SmoothImage
            src="/images/hero-momo.jpg"
            alt={t.hero.visualAlt}
            width="1430"
            height="1100"
            loading="eager"
            decoding="async"
            containerClassName="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
