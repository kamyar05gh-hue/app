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

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[28px] sm:text-[38px] md:text-[52px] leading-[1.05] text-white">
            {data.headingBefore}
            <span className="text-[#25D366]"> → </span>
            {data.headingAfter}
          </h2>
        </motion.div>

        {/* Two-column comparison frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden"
        >
          {/* Before column */}
          <div className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-red-500/15 text-red-400">
                <X className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <h3 className="font-display font-bold text-[20px] md:text-[24px] text-white">
                {data.headingBefore}
              </h3>
            </div>
            <ul className="space-y-4 md:space-y-5">
              {data.items.map((item, i) => (
                <motion.li
                  key={`before-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-red-500/15 text-red-400 shrink-0">
                    <X className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] md:text-[17px] leading-snug text-white/55 line-through decoration-white/20">
                    {item.before}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* After column */}
          <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#25D366]/[0.06] to-transparent">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-[#25D366]/20 text-[#25D366]">
                <Check className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <h3 className="font-display font-bold text-[20px] md:text-[24px] text-white">
                {data.headingAfter}
              </h3>
            </div>
            <ul className="space-y-4 md:space-y-5">
              {data.items.map((item, i) => (
                <motion.li
                  key={`after-${i}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-[#25D366]/20 text-[#25D366] shrink-0">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] md:text-[17px] leading-snug text-white font-medium">
                    {item.after}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
