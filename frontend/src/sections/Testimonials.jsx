import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    quote:
      "Früher zwei Stunden Papierkram nach Feierabend. Heute spreche ich 40 Sekunden ins Handy — fertig. Ich habe meinen Feierabend zurück.",
    name: "Marco Kälin",
    role: "Inhaber, Kälin Umzüge GmbH",
    location: "Zürich",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80&auto=format&fit=crop",
  },
  {
    id: "t2",
    quote:
      "Ich bin in Portugal aufgewachsen. MOMO versteht meine Muttersprache und schreibt sauberes Deutsch. Meine Kunden merken den Unterschied.",
    name: "Elira Berisha",
    role: "Geschäftsführerin, Sparkle Reinigung",
    location: "Basel",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
  },
  {
    id: "t3",
    quote:
      "Der Auto-Follow-up hat mir letzten Monat drei Aufträge gerettet, die ich sonst vergessen hätte. MOMO zahlt sich mehrfach aus.",
    name: "Andreas Bühler",
    role: "Schreinerei Bühler AG",
    location: "Winterthur",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="stimmen"
      className="relative py-16 md:py-28 bg-white"
      data-testid="testimonials-section"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[40px] md:text-[56px] leading-[1.02] max-w-3xl">
            Handwerker, die
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            nicht mehr <span className="text-[#25D366]">tippen.</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.id}
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
                {`„${t.quote}"`}
              </p>
              <div className="mt-6 pt-5 border-t border-black/10 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-black truncate">{t.name}</p>
                  <p className="text-[12px] text-black/55 truncate">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
