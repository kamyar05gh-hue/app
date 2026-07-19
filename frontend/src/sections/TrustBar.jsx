import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  FileText,
  Coffee,
  Wallet,
} from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Keine Kunden verlieren" },
  { icon: TrendingUp, label: "Mehr Aufträge gewinnen" },
  { icon: FileText, label: "Weniger Büroarbeit" },
  { icon: Coffee, label: "Mehr Freizeit" },
  { icon: Wallet, label: "Mehr Umsatz" },
];

export const TrustBar = () => {
  return (
    <section
      id="vorteile"
      className="relative py-8 md:py-10 border-y border-black/10 bg-white"
      data-testid="trust-bar"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4"
        >
          {items.map((it, i) => (
            <div
              key={i}
              data-testid={`trust-item-${i}`}
              className="group flex items-center gap-3 text-[13px] md:text-[14px] font-medium text-black/85"
            >
              <span className="grid place-items-center h-9 w-9 rounded-full bg-[#25D366]/12 text-[#1EB955] transition-colors duration-300 group-hover:bg-[#25D366] group-hover:text-white">
                <it.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="tracking-tight">{it.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
