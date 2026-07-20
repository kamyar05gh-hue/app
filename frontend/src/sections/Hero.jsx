import { motion } from "framer-motion";
import { Check } from "lucide-react";
import RevealText from "@/components/RevealText";
import PhoneMockup from "@/components/PhoneMockup";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-40 pb-14 md:pb-24 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 items-center">
          {/* LEFT — Copy */}
          <div className="lg:col-span-6 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[15px] md:text-[18px] tracking-tight text-[#0a2540] font-bold"
              data-testid="hero-tagline"
            >
              <span className="inline-flex items-center gap-2">
                <span
                  aria-label="Schweiz"
                  className="inline-grid place-items-center h-5 w-5 md:h-6 md:w-6 rounded-[4px] bg-[#D52B1E] text-white text-[10px] md:text-[11px] font-black tracking-wide"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)" }}
                >
                  <span className="relative flex items-center justify-center">
                    <span className="absolute h-[2px] w-3 bg-white" />
                    <span className="absolute w-[2px] h-3 bg-white" />
                  </span>
                </span>
                <span className="text-[#0a2540]">Für Umzug & Reinigung Unternehmer gemacht</span>
              </span>
            </motion.p>

            <RevealText
              as="h1"
              className="mt-5 md:mt-6 font-display font-extrabold tracking-[-0.035em] text-[38px] sm:text-[54px] md:text-[76px] lg:text-[86px] leading-[0.95]"
              lines={[
                <>Mehr Kunden.</>,
                <>Mehr Zeit.</>,
                <>Mehr Geld.</>,
                <span className="text-[#25D366]" key="l4">
                  Weniger Stress.
                </span>,
              ]}
            />

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 md:mt-8 max-w-xl space-y-2.5 md:space-y-3 text-[15px] md:text-[17px] leading-relaxed text-black/75"
            >
              {[
                "Einfach in Ihrer Muttersprache sprechen – MOMO erledigt alles auf Deutsch.",
                "Offerten in wenigen Sekunden – einfach sprechen, MOMO schreibt perfektes Deutsch.",
                "Rechnungen sofort erstellen und versenden.",
                "Deutsche Briefe & E-Mails verstehen und beantworten.",
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 grid place-items-center h-5 w-5 rounded-full bg-[#25D366]/15 text-[#1EB955] shrink-0"
                    style={{ boxShadow: "0 0 14px 2px rgba(37,211,102,0.35)" }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 md:mt-10 flex flex-col items-start gap-4"
            >
              <WhatsAppButton size="lg" testId="hero-cta-button" />
              <span className="inline-flex items-center gap-2.5 text-[13px] md:text-[14px] font-medium text-black/75">
                <span className="grid place-items-center h-6 w-6 rounded-full bg-[#25D366]/15 text-[#1EB955]">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                Antwort innerhalb weniger Minuten
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Static phone (no floating cards) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
