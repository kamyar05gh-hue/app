import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";
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
      className="inline-grid place-items-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] text-white font-bold text-[12px] md:text-[13px] shadow-[0_6px_16px_-6px_rgba(59,130,246,0.5)] shrink-0"
      aria-hidden
    >
      {initials}
    </span>
  );
};

const TestimonialCard = ({ tr }) => (
  <div className="group relative flex flex-col h-full rounded-[1.75rem] md:rounded-[2rem] bg-gradient-to-br from-[#0B1120] to-[#151F32] p-6 md:p-8 overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-18px_rgba(59,130,246,0.35)] hover:border-[#3B82F6]/30">
    {/* Blue ambient glow */}
    <div
      aria-hidden
      className="absolute -top-16 -right-16 h-40 w-40 rounded-full pointer-events-none opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.35), transparent 65%)",
      }}
    />
    {/* Left accent bar */}
    <span
      aria-hidden
      className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-gradient-to-b from-[#3B82F6] to-[#1E40AF] opacity-70"
    />

    <div className="relative flex items-center gap-1 text-[#FBBF24]">
      {Array.from({ length: 5 }).map((_, k) => (
        <Star key={k} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>

    <p className="relative mt-4 md:mt-5 font-display font-semibold tracking-tight text-[15px] md:text-[17px] leading-[1.45] text-white/90 flex-1">
      {tr.quote}
    </p>

    <div className="relative mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
      <Avatar name={tr.name} />
      <div className="min-w-0">
        <p className="text-[14px] md:text-[15px] font-bold text-white truncate">
          {tr.name}
        </p>
        <p className="text-[12px] md:text-[13px] text-white/50 truncate">
          {tr.role}
        </p>
      </div>
      {tr.company && (
        <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-[#FBBF24] bg-[#FBBF24]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
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
      className="relative py-16 md:py-28 bg-[#F5F7FA]"
      data-testid="testimonials-section"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[40px] md:text-[56px] leading-[1.02] max-w-3xl text-black">
            {t.testimonials.headingLine1}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {t.testimonials.headingLine2a}
            <span className="text-[#1E40AF]">{t.testimonials.headingLine2Highlight}</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
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
