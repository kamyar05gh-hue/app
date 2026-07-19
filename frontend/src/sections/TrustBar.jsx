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
  { icon: ShieldCheck, label: "Keine Kunden verlieren", sub: "Sofort-Antworten 24/7" },
  { icon: TrendingUp, label: "Mehr Aufträge", sub: "Erste Antwort gewinnt" },
  { icon: FileText, label: "Weniger Büroarbeit", sub: "Sprich statt tippen" },
  { icon: Coffee, label: "Mehr Freizeit", sub: "Feierabend zurück" },
  { icon: Wallet, label: "Mehr Umsatz", sub: "Keine Anfrage verloren" },
  { icon: Sparkles, label: "24/7 Verfügbar", sub: "Auch nach Feierabend" },
];

export const TrustBar = () => {
  return (
    <section
      id="vorteile"
      className="relative bg-[#F9FAFB] border-y border-black/[0.06]"
      data-testid="trust-bar"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-14 md:py-20">
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <Reveal as="span" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-mono-pm text-black/55">
              <span className="h-px w-6 bg-black/40" />
              Warum PlanMove
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display font-extrabold tracking-[-0.03em] text-[26px] md:text-[38px] leading-[1.05]">
                Sechs Gründe, warum Schweizer KMU
                <br className="hidden md:block" /> wechseln.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={220} as="p" className="max-w-sm text-[13px] md:text-[14px] text-black/55 leading-relaxed">
            Kein Vertrag. Keine Verpflichtung. Nur mehr Zeit für das, was
            wirklich zählt — Ihr Handwerk.
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
          {items.map((it, i) => (
            <Reveal
              key={i}
              as="li"
              delay={320 + i * 80}
              className="flex flex-col items-start"
              data-testid={`trust-item-${i}`}
            >
              <span className="grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-white border border-black/[0.06] text-[#1EB955] shadow-[0_10px_25px_-15px_rgba(0,0,0,0.15)]">
                <it.icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.6} />
              </span>
              <p className="mt-5 text-[15px] md:text-[16px] font-semibold tracking-tight text-black">
                {it.label}
              </p>
              <p className="mt-1 text-[12px] md:text-[13px] text-black/55 leading-snug">
                {it.sub}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
