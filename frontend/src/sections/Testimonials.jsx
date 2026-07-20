import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Names and photos stay constant; quotes, roles and locations come from i18n.
const testimonials = [
  {
    id: "t1",
    name: "Marco Kälin",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Elira Berisha",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Andreas Bühler",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
];

export const Testimonials = () => {
  const { t } = useLanguage();
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
            {t.testimonials.headingLine2a}<span className="text-[#25D366]">{t.testimonials.headingLine2Highlight}</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((item, i) => {
            const tr = t.testimonials.items[i];
            return (
            <Reveal
              key={item.id}
              delay={i * 100}
              className="relative rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.06] bg-[#FAFBF8] p-6 md:p-8 flex flex-col"
              data-testid={`testimonial-${i}`}
            >
              <div className="flex items-center gap-1 text-[#25D366]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-5 md:mt-6 font-display font-semibold tracking-tight text-[16px] md:text-[19px] leading-[1.35] text-black/85 flex-1">
                {tr.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-black/10 flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-black truncate">{item.name}</p>
                  <p className="text-[12px] text-black/55 truncate">
                    {tr.role} · {tr.location}
                  </p>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
