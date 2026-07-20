import Reveal from "@/components/Reveal";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <span
      className="inline-grid place-items-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 border border-white/10 text-white font-bold text-[12px] md:text-[13px] shrink-0"
      aria-hidden
    >
      {initials}
    </span>
  );
};

const TestimonialCard = ({ tr }) => (
  <div className="group relative flex flex-col h-full rounded-[1.5rem] md:rounded-[1.75rem] bg-white/[0.04] backdrop-blur-md border border-white/[0.08] p-6 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-[#25D366]/30">
    {/* Soft green glow on hover */}
    <div
      aria-hidden
      className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, rgba(37,211,102,0.18), transparent 65%)",
      }}
    />

    <Quote
      className="relative h-6 w-6 md:h-7 md:w-7 text-[#25D366]/60 rotate-180"
      fill="currentColor"
      strokeWidth={0}
    />

    <div className="relative mt-4 flex items-center gap-1 text-[#FBBF24]">
      {Array.from({ length: 5 }).map((_, k) => (
        <Star key={k} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>

    <p className="relative mt-4 font-display font-semibold tracking-tight text-[15px] md:text-[17px] leading-[1.5] text-white/85 flex-1">
      {tr.quote}
    </p>

    <div className="relative mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-3">
      <Avatar name={tr.name} />
      <div className="min-w-0">
        <p className="text-[14px] md:text-[15px] font-bold text-white truncate">
          {tr.name}
        </p>
        <p className="text-[12px] md:text-[13px] text-white/45 truncate">
          {tr.role}
        </p>
      </div>
      {tr.company && (
        <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
          {tr.company}
        </span>
      )}
    </div>
  </div>
);

export const Testimonials = () => {
  const { t } = useLanguage();
  const items = t.testimonials.items.slice(0, 6);

  return (
    <section
      id="stimmen"
      className="relative py-16 md:py-28 bg-[#0B0C0E] overflow-hidden"
      data-testid="testimonials-section"
    >
      {/* Ambient green glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full blur-3xl pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,211,102,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[40px] md:text-[56px] leading-[1.02] max-w-3xl text-white">
            {t.testimonials.headingLine1}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {t.testimonials.headingLine2a}
            <span className="text-[#25D366]">{t.testimonials.headingLine2Highlight}</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((tr, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              data-testid={`testimonial-${i}`}
            >
              <TestimonialCard tr={tr} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
