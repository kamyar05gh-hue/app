import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  FileText,
  Coffee,
  Wallet,
  Sparkles,
} from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Keine Kunden verlieren" },
  { icon: TrendingUp, label: "Mehr Aufträge gewinnen" },
  { icon: FileText, label: "Weniger Büroarbeit" },
  { icon: Coffee, label: "Mehr Freizeit" },
  { icon: Wallet, label: "Mehr Umsatz" },
  { icon: Sparkles, label: "24/7 Verfügbarkeit" },
];

const Row = () =>
  items.map((it, i) => (
    <span
      key={i}
      className="inline-flex items-center gap-3 shrink-0"
      data-testid={`trust-item-${i}`}
    >
      <span className="grid place-items-center h-8 w-8 rounded-full bg-[#25D366]/12 text-[#1EB955]">
        <it.icon className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
      <span className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-black/60 font-semibold whitespace-nowrap">
        {it.label}
      </span>
      <span className="mx-8 md:mx-14 h-1 w-1 rounded-full bg-black/25" aria-hidden />
    </span>
  ));

export const TrustBar = () => {
  return (
    <section
      id="vorteile"
      className="relative -mt-2 md:-mt-4 pb-8 md:pb-12"
      data-testid="trust-bar"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="trust-marquee-wrap relative overflow-hidden rounded-full border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]"
        >
          {/* Edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
            style={{ background: "linear-gradient(to right, rgba(255,255,255,0.95), transparent)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
            style={{ background: "linear-gradient(to left, rgba(255,255,255,0.95), transparent)" }}
          />

          <div className="flex overflow-hidden py-5 md:py-6">
            <div className="trust-marquee flex shrink-0 items-center pl-6">
              <Row />
              <Row />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
