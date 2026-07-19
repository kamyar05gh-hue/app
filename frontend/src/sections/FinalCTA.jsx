import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { IMG } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";

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
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.16), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* LEFT — Mover */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 hidden md:block"
          >
            <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-black/10">
              {/* DALL-E: A friendly Swiss mover (male, mid-20s) in navy uniform smiling while holding a clean cardboard box, bone-white seamless background, warm cinematic rim light, editorial premium look, 85mm f/1.4. */}
              <img
                src={IMG.cta.left.src}
                alt={IMG.cta.left.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-mono-pm uppercase tracking-widest">
                Umzug
              </div>
            </div>
          </motion.div>

          {/* CENTER — copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 text-center"
          >
            <h2 className="font-display font-extrabold tracking-[-0.03em] text-[34px] md:text-[54px] leading-[1.02]">
              Weniger Büro. Mehr Zeit.
              <br />
              Mehr Kunden. <span className="text-[#25D366]">Mehr Umsatz.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-[15px] md:text-[17px] leading-relaxed text-black/60">
              Erfahren Sie, wie PlanMove Ihren Arbeitsalltag einfacher macht und
              sicherstellt, dass Ihnen keine Anfragen und Aufträge mehr entgehen.
            </p>

            <div className="mt-10 flex justify-center">
              <WhatsAppButton size="lg" testId="final-cta-button" />
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-black/65">
              {subItems.map((s, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <span className="grid place-items-center h-5 w-5 rounded-full bg-[#25D366]/15 text-[#1EB955]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — Cleaner */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 hidden md:block"
          >
            <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-black/10">
              {/* DALL-E: A friendly Swiss cleaner (female, mid-30s) in gray uniform smiling while holding a stainless steel cleaning bucket, bone-white seamless background, warm cinematic rim light, editorial premium look, 85mm f/1.4. */}
              <img
                src={IMG.cta.right.src}
                alt={IMG.cta.right.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-mono-pm uppercase tracking-widest">
                Reinigung
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
