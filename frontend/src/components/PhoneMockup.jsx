import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mic, Check, Send, Sparkles } from "lucide-react";

/**
 * Premium iPhone mockup with PlanMove voice UI.
 * Uses framer-motion parallax on scroll.
 */
export const PhoneMockup = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  const bars = Array.from({ length: 24 });

  return (
    <div ref={ref} className="relative w-full flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 45%, rgba(37,211,102,0.14), transparent 65%)",
        }}
      />

      <motion.div
        style={{ y, rotate }}
        className="relative"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <div
          className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[9/19] rounded-[3.2rem] bg-[#0a0a0c] p-[10px] shadow-[0_45px_90px_-25px_rgba(0,0,0,0.4),0_25px_50px_-15px_rgba(37,211,102,0.25)]"
          data-testid="phone-mockup"
        >
          <div className="absolute left-1/2 top-3 -translate-x-1/2 z-20 h-6 w-24 rounded-full bg-black" />
          <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-gradient-to-b from-[#F7F7F4] to-[#EDEDE8]">
            <div className="flex items-center justify-between px-6 pt-4 text-[10px] font-medium text-black/70 font-mono-pm">
              <span>9:41</span>
              <span>•••</span>
            </div>

            <div className="px-5 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-widest uppercase text-black/50 font-mono-pm">
                  Neue Anfrage
                </span>
                <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              </div>
              <h4 className="font-display text-[22px] font-extrabold tracking-tight leading-[1.05] mt-2">
                Sprich einfach.
                <br />
                PlanMove tippt.
              </h4>
            </div>

            <div className="mt-6 mx-5 rounded-2xl bg-black p-5 text-white relative overflow-hidden">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/70 font-mono-pm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Aufnahme läuft
              </div>
              <div className="mt-4 flex items-end gap-[3px] h-14">
                {bars.map((_, i) => (
                  <span
                    key={i}
                    className="voice-bar w-[4px] rounded-full bg-[#25D366]"
                    style={{
                      height: `${20 + ((i * 13) % 80)}%`,
                      animationDelay: `${(i % 10) * 0.08}s`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 text-[11px] leading-snug text-white/80">
                {"„Offerte für Familie Meier, Umzug 3-Zimmer, Zürich nach Winterthur, Freitag um acht…"}
              </div>
              <button
                aria-label="Aufnahme"
                className="absolute -bottom-4 right-4 h-12 w-12 rounded-full bg-[#25D366] grid place-items-center shadow-lg shadow-[#25D366]/40"
              >
                <Mic className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-black/40 font-mono-pm">
              <span className="h-px w-6 bg-black/20" />
              <Sparkles className="h-3 w-3" />
              erstellt in 4.8s
              <span className="h-px w-6 bg-black/20" />
            </div>

            <div className="mx-5 mt-3 rounded-2xl bg-white border border-black/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-[#25D366]/15 grid place-items-center">
                    <Check className="h-3 w-3 text-[#1EB955]" strokeWidth={3} />
                  </span>
                  <span className="text-[11px] font-semibold">Offerte #2049</span>
                </div>
                <span className="text-[10px] font-mono-pm text-black/45">JETZT</span>
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-2 w-3/4 rounded-full bg-black/10" />
                <div className="h-2 w-2/3 rounded-full bg-black/10" />
                <div className="h-2 w-4/5 rounded-full bg-black/10" />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2">
                <span className="text-[10px] text-black/50 font-mono-pm">CHF</span>
                <span className="font-display font-extrabold text-lg tracking-tight">
                  2&apos;480.00
                </span>
              </div>
              <button className="mt-3 w-full h-9 rounded-full bg-[#25D366] text-white text-[11px] font-semibold flex items-center justify-center gap-2">
                <Send className="h-3.5 w-3.5" /> Per WhatsApp senden
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup;
