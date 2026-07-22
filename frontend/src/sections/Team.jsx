import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

// Names and roles are brand-level and stay identical across languages.
const MEMBERS = [
  {
    initials: "E",
    name: "Elias",
    role: "CEO & Founder",
    image: "https://i.imgur.com/9pjdi6d.jpg",
  },
  {
    initials: "L",
    name: "Livia",
    role: "Co-CEO",
    image: "https://i.imgur.com/tsxABsf.jpg",
  },
  {
    initials: "A",
    name: "Alex",
    role: "Lead Manager",
    image: "https://i.imgur.com/PiOi9FF.jpg",
  },
  { initials: "M", name: "Mohamamd", role: "Software Manager" },
];

export const Team = () => {
  const { t } = useLanguage();
  return (
    <section
      id="team"
      className="relative py-16 md:py-28 bg-[#F5F4EF]"
      data-testid="team-section"
    >
      <div className="mx-auto max-w-[1100px] px-5 md:px-10">
        <Reveal>
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#1EB955] text-center">
            {t.team.kicker}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[40px] md:text-[52px] leading-[1.05] text-center">
            {t.team.heading}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-center text-[14px] md:text-[17px] leading-relaxed text-black/60">
            {t.team.sub}
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div
                className="group flex flex-col items-center text-center rounded-[1.75rem] border border-black/[0.06] bg-white p-7 md:p-8 h-full transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.18)]"
                data-testid={`team-member-${m.name.toLowerCase()}`}
              >
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#25D366]/25 to-transparent blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="relative h-28 w-28 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-white shadow-[0_18px_35px_-15px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="relative grid place-items-center h-28 w-28 md:h-32 md:w-32 rounded-full bg-[#0A0A0C] text-[#25D366] font-display font-extrabold text-[34px] md:text-[38px] ring-4 ring-white shadow-[0_18px_35px_-15px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.04]">
                      {m.initials}
                    </div>
                  )}
                </div>
                <h3 className="mt-5 font-display font-bold tracking-tight text-[19px] md:text-[21px] text-black">
                  {m.name}
                </h3>
                <p className="mt-2.5 inline-flex items-center rounded-full bg-[#25D366]/10 px-3 py-1 text-[12px] md:text-[13px] font-semibold text-[#1EB955]">
                  {m.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
