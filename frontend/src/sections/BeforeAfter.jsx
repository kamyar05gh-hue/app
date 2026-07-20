import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const BeforeAfter = () => {
  const { t } = useLanguage();
  const data = t.beforeAfter;

  return (
    <section
      className="relative py-16 md:py-24 bg-[#0A0A0A] overflow-hidden"
      data-testid="before-after-section"
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[30px] sm:text-[40px] md:text-[56px] leading-[1.05] text-white">
            {data.headingBefore}
            <span className="text-[#25D366]"> → </span>
            {data.headingAfter}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5 flex items-start gap-3 md:gap-4 hover:bg-white/[0.06] transition-colors duration-300"
            >
              <span className="mt-0.5 grid place-items-center h-6 w-6 md:h-7 md:w-7 rounded-full bg-red-500/15 text-red-400 shrink-0">
                <X className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-[14px] md:text-[16px] leading-snug text-white/60 line-through decoration-white/20">
                {item.before}
              </span>

              <span className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-px bg-white/10" />

              <span className="mt-0.5 grid place-items-center h-6 w-6 md:h-7 md:w-7 rounded-full bg-[#25D366]/15 text-[#25D366] shrink-0">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-[14px] md:text-[16px] leading-snug text-white font-medium">
                {item.after}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
