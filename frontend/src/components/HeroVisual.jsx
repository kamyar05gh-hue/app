import { Mail, MessageCircle, Check, Bot } from "lucide-react";

/**
 * Hero composite visual — matches the reference UI mockup:
 * A realistic photo of a stressed entrepreneur at their desk, with
 * floating chat notification cards on the right side, and a "MOMO
 * hat geantwortet" confirmation card at the bottom-right.
 *
 * Ambient green glow + subtle grain. Static (no scroll animations).
 */
export const HeroVisual = () => {
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

      {/* Photo canvas */}
      <div className="relative w-full max-w-[620px] aspect-[5/4] md:aspect-[6/5]">
        <div className="relative h-full w-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden bg-[#E9E4DA] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">
          <img
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Unternehmer bei der Arbeit am Schreibtisch"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Warm overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,246,232,0.35) 0%, rgba(0,0,0,0.02) 45%, rgba(0,0,0,0.28) 100%)",
            }}
          />

          {/* MOMO badge — bottom left over photo */}
          <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 inline-flex items-center gap-2 rounded-full bg-black/85 backdrop-blur-[2px] pl-1.5 pr-3 py-1 md:pl-2 md:pr-3.5 md:py-1.5">
            <span className="grid place-items-center h-6 w-6 md:h-7 md:w-7 rounded-full bg-[#25D366] text-white shrink-0">
              <Bot className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2.2} />
            </span>
            <span className="font-display font-extrabold tracking-tight text-white text-[11px] md:text-[13px]">
              MOMO
            </span>
          </div>
        </div>

        {/* Floating chat cards — right stack */}
        <div className="absolute -right-3 md:right-2 top-4 md:top-8 space-y-2 md:space-y-2.5 w-[210px] md:w-[260px]">
          <FloatingCard
            icon={Mail}
            title="Neue Anfrage um 23:47 Uhr"
            sub="Offerte bitte für 3.5 Zimmer Wohnung"
          />
          <FloatingCard
            icon={MessageCircle}
            title="WhatsApp Nachricht"
            sub="Wann sind Sie verfügbar?"
            delayClass=""
          />
          <FloatingCard
            icon={Mail}
            title="E-Mail von Herr Müller"
            sub="Ich habe noch Fragen zur Offerte"
          />
        </div>

        {/* MOMO response card — bottom right */}
        <div
          className="absolute -bottom-3 md:-bottom-4 right-2 md:right-6 w-[240px] md:w-[280px] rounded-2xl bg-white border border-black/[0.06] px-3.5 md:px-4 py-2.5 md:py-3 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.25)]"
          data-testid="hero-momo-answer"
        >
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[12px] md:text-[13px] text-black tracking-tight">
              MOMO hat geantwortet
            </p>
            <span className="grid place-items-center h-5 w-5 md:h-6 md:w-6 rounded-full bg-[#25D366] text-white shrink-0">
              <Check className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={3.5} />
            </span>
          </div>
          <p className="mt-0.5 text-[11px] md:text-[12px] text-black/55">
            Professionell. Schnell. Automatisch.
          </p>
        </div>
      </div>
    </div>
  );
};

const FloatingCard = ({ icon: Icon, title, sub }) => (
  <div className="flex items-start gap-2.5 rounded-2xl bg-white border border-black/[0.06] px-3 md:px-3.5 py-2 md:py-2.5 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.25)]">
    <span className="grid place-items-center h-6 w-6 md:h-7 md:w-7 rounded-full bg-[#25D366]/10 text-[#1EB955] shrink-0 mt-0.5">
      <Icon className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={2.4} />
    </span>
    <div className="min-w-0">
      <p className="text-[11px] md:text-[12px] font-semibold text-black tracking-tight truncate">
        {title}
      </p>
      <p className="text-[10px] md:text-[11px] text-black/55 truncate">
        {sub}
      </p>
    </div>
  </div>
);

export default HeroVisual;
