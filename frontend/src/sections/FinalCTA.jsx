import { Check, Truck, SprayCan, Sparkles } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

export const FinalCTA = () => {
  const subItems = ["Keine Verpflichtung", "Schnelle Antwort", "Persönliche Beratung"];

  return (
    <section
      id="ueber"
      className="relative py-24 md:py-40 bg-white overflow-hidden"
      data-testid="final-cta-section"
    >
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl pointer-events-none"
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

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal className="flex items-center justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-[0.22em] text-black/60">
            <Truck className="h-3.5 w-3.5" strokeWidth={2} />
            Umzug
          </span>
          <span className="h-1 w-1 rounded-full bg-black/25" />
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-[0.22em] text-black/60">
            <SprayCan className="h-3.5 w-3.5" strokeWidth={2} />
            Reinigung
          </span>
        </Reveal>

        <div className="text-center">
          <Reveal delay={120}>
            <h2 className="font-display font-extrabold tracking-[-0.035em] text-[38px] md:text-[68px] lg:text-[80px] leading-[0.98]">
              Weniger Büro.
              <br />
              Mehr Zeit. Mehr Kunden.
              <br />
              <span className="text-[#25D366]">Mehr Umsatz.</span>
            </h2>
          </Reveal>

          <Reveal delay={260} as="p" className="mt-8 max-w-xl mx-auto text-[16px] md:text-[18px] leading-relaxed text-black/60">
            Erfahren Sie, wie PlanMove Ihren Arbeitsalltag einfacher macht und
            sicherstellt, dass Ihnen keine Anfragen und Aufträge mehr entgehen.
          </Reveal>

          <Reveal delay={380} className="mt-12 flex justify-center">
            <WhatsAppButton size="lg" testId="final-cta-button" />
          </Reveal>

          <Reveal delay={500} as="ul" className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-black/65">
            {subItems.map((s, i) => (
              <li key={i} className="inline-flex items-center gap-2">
                <span className="grid place-items-center h-6 w-6 rounded-full bg-[#25D366]/15 text-[#1EB955]">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                {s}
              </li>
            ))}
          </Reveal>

          <Reveal delay={620} className="mt-10 inline-flex items-center gap-2 text-[11px] font-mono-pm uppercase tracking-[0.25em] text-black/45">
            <Sparkles className="h-3 w-3 text-[#25D366]" />
            100% Swiss Made · DSGVO Konform · Hosting CH
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
