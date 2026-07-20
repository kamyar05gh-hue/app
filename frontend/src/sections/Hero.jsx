import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import RevealText from "@/components/RevealText";
import HeroVisual from "@/components/HeroVisual";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden"
      data-testid="hero-section"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35] hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(9,9,11,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full blur-3xl pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.18), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT — Copy */}
          <div className="lg:col-span-6 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[13px] md:text-[15px] tracking-[0.1em] uppercase font-bold text-[#0047ff]"
              data-testid="hero-tagline"
            >
              <span className="inline-flex items-center gap-2">
                <span
                  aria-label={t.hero.flagAria}
                  className="inline-grid place-items-center h-5 w-5 md:h-6 md:w-6 rounded-[4px] bg-[#D52B1E] text-white text-[10px] md:text-[11px] font-black tracking-wide"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)" }}
                >
                  <span className="relative flex items-center justify-center">
                    <span className="absolute h-[3px] w-3.5 bg-white rounded-[1px]" />
                    <span className="absolute w-[3px] h-3.5 bg-white rounded-[1px]" />
                  </span>
                </span>
                <span>{t.hero.tagline}</span>
              </span>
            </motion.p>

            <RevealText
              as="h1"
              className="mt-8 md:mt-10 font-display font-extrabold tracking-[-0.035em] text-[34px] sm:text-[46px] md:text-[60px] lg:text-[68px] leading-[0.88]"
              lines={[
                ...t.hero.headlines.map((line, i) => (
                  <span key={`l${i}`}>{line}</span>
                )),
                <span className="text-[#25D366]" key="l4">
                  {t.hero.headlineHighlight}
                </span>,
              ]}
            />

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 md:mt-6 max-w-xl space-y-2 md:space-y-2.5 text-[14px] md:text-[15.5px] leading-relaxed text-black/75"
              data-testid="hero-benefits-list"
            >
              {t.hero.benefits.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-[#25D366] text-white shrink-0">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 md:mt-7 flex flex-col items-start gap-4"
            >
              {/* Google Review chip */}
              <div
                className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 pl-2 pr-3.5 py-1.5"
                data-testid="hero-google-review"
              >
                <span className="grid place-items-center h-7 w-7 rounded-full bg-white shadow-[0_2px_6px_-2px_rgba(0,0,0,0.25)]">
                  <GoogleGIcon />
                </span>
                <span className="flex items-center gap-0.5" aria-label={t.hero.starsAria}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 pm-star-gold"
                    />
                  ))}
                </span>
                <span className="font-helvetica text-[11px] md:text-[12px] tracking-[0.04em] text-black/70">
                  <span className="font-bold text-black">4.9/5</span>
                  <span className="text-black/40"> · </span>
                  {t.hero.reviews}
                </span>
              </div>

              <WhatsAppButton size="lg" testId="hero-cta-button" />
            </motion.div>
          </div>

          {/* RIGHT — Hero composite visual (desktop only) */}
          <div className="hidden lg:flex lg:col-span-6 relative justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

const GoogleGIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden focusable="false">
    <path
      d="M22.5 12.27c0-.86-.08-1.7-.22-2.5H12v4.72h5.9a5.05 5.05 0 0 1-2.2 3.32v2.75h3.55c2.08-1.92 3.25-4.75 3.25-8.29z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.67l-3.55-2.75c-.98.66-2.24 1.06-3.73 1.06-2.87 0-5.3-1.94-6.17-4.55H2.15v2.85A11 11 0 0 0 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.83 14.09a6.6 6.6 0 0 1 0-4.18V7.06H2.15a11 11 0 0 0 0 9.88l3.68-2.85z"
      fill="#FBBC04"
    />
    <path
      d="M12 5.38c1.62 0 3.07.56 4.21 1.65l3.15-3.15C17.45 2.05 14.97 1 12 1a11 11 0 0 0-9.85 6.06l3.68 2.85C6.7 7.32 9.13 5.38 12 5.38z"
      fill="#EA4335"
    />
  </svg>
);

export default Hero;
