import { Check, Truck, SprayCan } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export const FinalCTA = () => {
  const { t } = useLanguage();
  const subItems = t.finalCta.subItems;

  return (
    <section
      id="ueber"
      className="relative py-16 md:py-24 lg:py-28 bg-white overflow-hidden"
      data-testid="final-cta-section"
    >
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.20), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(9,9,11,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* LEFT image — desktop only */}
          <div className="hidden lg:block lg:col-span-3">
            <Reveal delay={120}>
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] bg-[#F5F4EF]">
                <img
                  src="/images/final-cta-01.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="450"
                  height="560"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* CENTER copy */}
          <div className="lg:col-span-6 text-center">
            <Reveal className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-[0.22em] text-black/60">
                <Truck className="h-3.5 w-3.5" strokeWidth={2} />
                {t.finalCta.chipMoving}
              </span>
              <span className="h-1 w-1 rounded-full bg-black/25" />
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-[0.22em] text-black/60">
                <SprayCan className="h-3.5 w-3.5" strokeWidth={2} />
                {t.finalCta.chipCleaning}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[42px] md:text-[58px] lg:text-[68px] leading-[1.02]">
                {t.finalCta.headline1}
                <br />
                {t.finalCta.headline2}
                <br />
                <span className="text-[#25D366]">{t.finalCta.headline3}</span>
              </h2>
            </Reveal>

            <Reveal delay={260} as="p" className="mt-5 md:mt-6 max-w-xl mx-auto text-[14px] md:text-[18px] leading-relaxed text-black/60">
              {t.finalCta.paragraph}
            </Reveal>

            <Reveal delay={380} className="mt-6 md:mt-8 flex justify-center">
              <WhatsAppButton size="lg" testId="final-cta-button" />
            </Reveal>

            <Reveal delay={500} as="ul" className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-black/65">
              {subItems.map((s, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-[#25D366]/15 text-[#1EB955]">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {s}
                </li>
              ))}
            </Reveal>
          </div>

          {/* RIGHT image — desktop only */}
          <div className="hidden lg:block lg:col-span-3">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] bg-[#F5F4EF]">
                <img
                  src="/images/final-cta-02.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="450"
                  height="560"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
