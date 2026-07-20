import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const gradients = [
  "from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
  "from-violet-400 to-purple-500",
  "from-cyan-400 to-sky-500",
  "from-lime-400 to-green-500",
  "from-fuchsia-400 to-purple-500",
  "from-yellow-400 to-amber-500",
];

const Avatar = ({ name, index }) => {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  const gradient = gradients[index % gradients.length];
  return (
    <span
      className={`inline-grid place-items-center h-11 w-11 rounded-full bg-gradient-to-br ${gradient} text-white font-bold text-[13px] shadow-md shrink-0`}
      aria-hidden
    >
      {initials}
    </span>
  );
};

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
            {t.testimonials.headingLine2a}
            <span className="text-[#25D366]">{t.testimonials.headingLine2Highlight}</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {items.map((tr, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              className="relative rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.06] bg-[#FAFBF8] p-6 md:p-8 flex flex-col"
              data-testid={`testimonial-${i}`}
            >
              <div className="flex items-center gap-1 text-[#FBBF24]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 md:mt-6 font-display font-semibold tracking-tight text-[16px] md:text-[18px] leading-[1.4] text-black/85 flex-1">
                {tr.quote}
              </p>

              <div className="mt-6 pt-5 border-t border-black/10 flex items-center gap-3">
                <Avatar name={tr.name} index={i} />
                <div className="min-w-0">
                  <p className="text-[14px] md:text-[15px] font-bold text-black truncate">
                    {tr.name}
                  </p>
                  <p className="text-[12px] md:text-[13px] text-black/55 truncate">
                    {tr.role}
                  </p>
                </div>
              </div>

              {tr.company && (
                <div className="mt-4">
                  <p className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#FBBF24]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
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
