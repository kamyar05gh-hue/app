import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Check, Check, Check, Check, Check];

export const TrustBar = () => {
  const { t } = useLanguage();
  const items = icons.map((icon, i) => ({ icon, label: t.trustBar.items[i] }));
  return (
    <section
      id="vorteile"
      className="relative bg-[#F9FAFB] border-b border-black/[0.06]"
      data-testid="trust-bar"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-6 md:py-16">
        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-x-3 md:gap-x-8 gap-y-5">
          {items.map((it, i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 60}
              className="flex flex-col items-center text-center"
              data-testid={`trust-item-${i}`}
            >
              <span className="grid place-items-center h-11 w-11 md:h-[72px] md:w-[72px] rounded-full bg-[#25D366]/10 text-[#1EB955] shadow-sm border border-[#25D366]/10">
                <it.icon className="h-5 w-5 md:h-7 md:w-7" strokeWidth={1.8} />
              </span>
              <p className="mt-2 md:mt-4 text-[11px] md:text-[15px] font-medium tracking-tight text-black/70 leading-snug">
                {it.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
