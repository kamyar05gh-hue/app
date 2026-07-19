import {
  ShieldCheck,
  TrendingUp,
  FileText,
  Coffee,
  Wallet,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const items = [
  { icon: ShieldCheck, label: "Keine Kunden verlieren" },
  { icon: TrendingUp, label: "Mehr Aufträge" },
  { icon: FileText, label: "Weniger Büroarbeit" },
  { icon: Coffee, label: "Mehr Freizeit" },
  { icon: Wallet, label: "Mehr Umsatz" },
  { icon: Sparkles, label: "24/7 Verfügbar" },
];

export const TrustBar = () => {
  return (
    <section
      id="vorteile"
      className="relative bg-[#F9FAFB] border-y border-black/[0.06]"
      data-testid="trust-bar"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-6 md:py-8">
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-x-3 md:gap-x-6 gap-y-5 md:gap-y-4">
          {items.map((it, i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 60}
              className="flex flex-col items-center text-center"
              data-testid={`trust-item-${i}`}
            >
              <span className="grid place-items-center h-9 w-9 md:h-10 md:w-10 rounded-full bg-white border border-black/[0.06] text-[#1EB955]">
                <it.icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-2 text-[11px] md:text-[12px] font-medium tracking-tight text-black/70 leading-snug">
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
