import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Testimonials = () => {
  const { t } = useLanguage();
  const items = t.testimonials.items;

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

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {items.map((tr, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="relative rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.06] bg-[#FAFBF8] p-6 md:p-8 flex flex-col"
              data-testid={`testimonial-${i}`}
            >
              <div className="flex items-center gap-1 pm-star-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-5 md:mt-6 font-display font-semibold tracking-tight text-[16px] md:text-[19px] leading-[1.35] text-black/85 flex-1">
                {tr.quote}
              </p>
              {tr.company && (
                <div className="mt-5 pt-5 border-t border-black/10">
                  <p className="text-[14px] font-semibold text-[#FBBF24]">
                    {tr.company}
                  </p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
