import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

// Deep-glow green tick — mirrors the hero GlowTick treatment
const GlowTickIcon = () => (
  <span className="relative grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-full shrink-0">
    <span
      aria-hidden
      className="absolute -inset-2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(37,211,102,0.5) 0%, rgba(37,211,102,0.16) 50%, transparent 72%)",
        filter: "blur(6px)",
      }}
    />
    <span className="relative grid place-items-center h-full w-full rounded-full bg-gradient-to-br from-[#25D366] to-[#15924A] shadow-[0_10px_24px_-8px_rgba(37,211,102,0.65),inset_0_1px_1px_rgba(255,255,255,0.35)]">
      <Check className="h-5 w-5 md:h-6 md:w-6 text-white" strokeWidth={3.2} />
    </span>
  </span>
);

export const TrustBar = () => {
  const { t } = useLanguage();
  const items = t.trustBar.items;
  return (
    <section
      id="vorteile"
      className="relative bg-[#F9FAFB] border-b border-black/[0.06]"
      data-testid="trust-bar"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-8 md:py-20">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          {items.map((label, i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 60}
              data-testid={`trust-item-${i}`}
            >
              <div className="group flex flex-col items-center text-center h-full rounded-2xl md:rounded-[1.5rem] bg-white border border-black/[0.06] px-4 py-6 md:px-5 md:py-8 shadow-[0_6px_20px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_20px_45px_-18px_rgba(37,211,102,0.35)] hover:border-[#25D366]/30 hover:-translate-y-1">
                <GlowTickIcon />
                <p className="mt-4 md:mt-5 text-[12px] md:text-[15px] font-semibold tracking-tight text-black/80 leading-snug">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
