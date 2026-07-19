import { motion } from "framer-motion";
import { Check, Mail, MessageCircle } from "lucide-react";
import RevealText from "@/components/RevealText";
import PhoneMockup from "@/components/PhoneMockup";
import WhatsAppButton from "@/components/WhatsAppButton";

const cards = [
  {
    id: "req",
    icon: MessageCircle,
    title: "Neue Anfrage · 23:47",
    body: "Offerte für 3.5 Zi. Wohnung",
    style: { top: "8%", right: "-6%" },
    delay: 1.05,
  },
  {
    id: "wa",
    icon: MessageCircle,
    title: "WhatsApp · Frau Meier",
    body: "Wann sind Sie verfügbar?",
    style: { top: "34%", right: "-10%" },
    delay: 1.2,
  },
  {
    id: "mail",
    icon: Mail,
    title: "E-Mail · Herr Müller",
    body: "Fragen zur Offerte #2049",
    style: { top: "60%", right: "-6%" },
    delay: 1.35,
  },
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden"
      data-testid="hero-section"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(9,9,11,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.18), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          {/* LEFT — Copy */}
          <div className="lg:col-span-6 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-mono-pm text-[#1EB955] font-semibold"
              data-testid="hero-tagline"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Für Umzug & Reinigung Unternehmer gemacht
              </span>
            </motion.p>

            <RevealText
              as="h1"
              className="mt-6 font-display font-extrabold tracking-[-0.035em] text-[44px] sm:text-[62px] md:text-[76px] lg:text-[86px] leading-[0.94]"
              lines={[
                <>Mehr Kunden.</>,
                <>Mehr Zeit.</>,
                <>Mehr Geld.</>,
                <span className="text-[#25D366]" key="l4">
                  Weniger Stress.
                </span>,
              ]}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-[15px] md:text-[17px] leading-relaxed text-black/65"
            >
              PlanMove ist Ihr intelligenter Assistent, der Anfragen beantwortet,
              Offerten schreibt, Termine vereinbart und Ihre Kundenkommunikation
              komplett übernimmt — 24/7, in jeder Sprache.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col items-start gap-4"
            >
              <WhatsAppButton size="lg" testId="hero-cta-button" />
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-black/70">
                <span className="grid place-items-center h-5 w-5 rounded-full bg-[#25D366]/15 text-[#1EB955]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                Antwort innerhalb weniger Minuten
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Phone + floating cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-[560px] aspect-[7/8]">
              <div className="absolute inset-0 flex items-center justify-center">
                <PhoneMockup />
              </div>

              {cards.map((c) => (
                <div
                  key={c.id}
                  style={c.style}
                  className="absolute z-20 rounded-2xl bg-white border border-black/10 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)] w-[220px] md:w-[240px] animate-[cardIn_0.8s_cubic-bezier(.22,1,.36,1)_both]"
                  data-testid={`hero-card-${c.id}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="grid place-items-center h-9 w-9 rounded-full bg-[#25D366]/12 text-[#1EB955] shrink-0">
                      <c.icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-black leading-tight truncate">
                        {c.title}
                      </p>
                      <p className="text-[12px] text-black/55 leading-snug mt-0.5">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div
                style={{ bottom: "0%", left: "-2%" }}
                className="absolute z-20 rounded-2xl bg-white border border-[#25D366]/40 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(37,211,102,0.35)] w-[240px] md:w-[260px] animate-[cardIn_0.9s_cubic-bezier(.22,1,.36,1)_both]"
                data-testid="hero-card-answered"
              >
                <div className="flex items-start gap-3">
                  <span className="grid place-items-center h-9 w-9 rounded-full bg-[#25D366] text-white shrink-0">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold">PlanMove hat geantwortet</p>
                    <p className="text-[12px] text-black/55">
                      Professionell. Schnell. Automatisch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
