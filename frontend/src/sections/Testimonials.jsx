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
      className="inline-grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#15924A] text-white font-bold text-[13px] md:text-[14px] shadow-[0_8px_18px_-6px_rgba(37,211,102,0.5)] shrink-0"
      aria-hidden
    >
      {initials}
    </span>
  );
};

const Author = ({ name, role, company }) => (
  <div className="mt-auto pt-5 flex items-center gap-3">
    <Avatar name={name} />
    <div className="min-w-0">
      <p className="text-[14px] md:text-[15px] font-bold text-black truncate">
        {name}
      </p>
      <p className="text-[12px] md:text-[13px] text-black/55 truncate">
        {role}
      </p>
    </div>
    {company && (
      <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[12px] font-bold text-[#FBBF24] bg-[#FBBF24]/10 px-2.5 py-1 rounded-full">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
        {company}
      </span>
    )}
  </div>
);

const TestimonialCard = ({ tr, featured = false }) => (
  <div
    className={`group relative flex flex-col h-full rounded-[1.75rem] md:rounded-[2rem] bg-gradient-to-br from-white to-[#F5FBF7] p-6 md:p-8 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_24px_50px_-20px_rgba(37,211,102,0.25)] hover:-translate-y-1 overflow-hidden`}
  >
    {/* Soft green radial wash */}
    <div
      aria-hidden
      className="absolute -top-10 -right-10 h-32 w-32 rounded-full pointer-events-none opacity-60"
      style={{
        background:
          "radial-gradient(circle, rgba(37,211,102,0.18), transparent 65%)",
      }}
    />

    <Quote
      aria-hidden
      className={`absolute text-[#25D366]/10 ${
        featured ? "top-4 right-5 h-14 w-14 md:h-20 md:w-20" : "top-4 right-4 h-10 w-10 md:h-14 md:w-14"
      }`}
      fill="currentColor"
      strokeWidth={0}
    />

    <div className="relative flex items-center gap-1 text-[#FBBF24]">
      {Array.from({ length: 5 }).map((_, k) => (
        <Star key={k} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>

    <p
      className={`relative mt-4 md:mt-5 font-display font-semibold tracking-tight ${
        featured
          ? "text-[17px] md:text-[22px] leading-[1.35]"
          : "text-[15px] md:text-[17px] leading-[1.4]"
      } text-black/85`}
    >
      {tr.quote}
    </p>

    <Author name={tr.name} role={tr.role} company={tr.company} />
  </div>
);

export const Testimonials = () => {
  const { t } = useLanguage();
  const items = t.testimonials.items;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section
      id="stimmen"
      className="relative py-16 md:py-28 bg-white"
      data-testid="testimonials-section"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[40px] md:text-[56px] leading-[1.02] max-w-3xl">
            {t.testimonials.headingLine1}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {t.testimonials.headingLine2a}
            <span className="text-[#25D366]">{t.testimonials.headingLine2Highlight}</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          <Reveal
            delay={0}
            className="md:col-span-2 lg:col-span-2"
            data-testid="testimonial-featured"
          >
            <TestimonialCard tr={featured} featured />
          </Reveal>

          {rest.slice(0, 2).map((tr, i) => (
            <Reveal
              key={i}
              delay={(i + 1) * 80}
              className="lg:col-span-1"
              data-testid={`testimonial-${i + 1}`}
            >
              <TestimonialCard tr={tr} />
            </Reveal>
          ))}
        </div>

        <div className="mt-5 md:mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {rest.slice(2).map((tr, i) => (
            <Reveal
              key={i + 2}
              delay={(i + 3) * 80}
              data-testid={`testimonial-${i + 3}`}
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
