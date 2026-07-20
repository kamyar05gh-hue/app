import {
  ShieldCheck,
  TrendingUp,
  FileText,
  Coffee,
  Wallet,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const items = [
  { icon: ShieldCheck, label: "Keine Kunden verlieren" },
  { icon: TrendingUp, label: "Mehr Aufträge" },
  { icon: FileText, label: "Weniger Büroarbeit" },
  { icon: Coffee, label: "Mehr Freizeit" },
  { icon: Wallet, label: "Mehr Umsatz" },
];

export const TrustBar = () => {
  return (
    <section
      id="vorteile"
      className="relative bg-[#F9FAFB] border-y border-black/[0.06]"
      data-testid="trust-bar"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-5 md:py-14">
        <ul className="grid grid-cols-5 gap-x-2 md:gap-x-8">
          {items.map((it, i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 60}
              className="flex flex-col items-center text-center"
              data-testid={`trust-item-${i}`}
            >
              <span className="grid place-items-center h-8 w-8 md:h-16 md:w-16 rounded-full bg-white border border-black/[0.06] text-[#1EB955]">
                <it.icon className="h-3.5 w-3.5 md:h-7 md:w-7" strokeWidth={1.8} />
              </span>
              <p className="mt-2 md:mt-4 text-[10px] md:text-[15px] font-medium tracking-tight text-black/70 leading-snug">
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
