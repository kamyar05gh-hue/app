import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

// Names and roles are brand-level and stay identical across languages.
const MEMBERS = [
  { initials: "E", name: "Elais", role: "CEO & Founder" },
  { initials: "L", name: "Livia", role: "Co-CEO" },
  { initials: "A", name: "Alex", role: "Lead Manager" },
  { initials: "M", name: "Mohommad", role: "Software Manager" },
];

export const Team = () => {
  const { t } = useLanguage();
  return (
    <section
      id="team"
      className="relative py-16 md:py-28 bg-white"
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
                className="group flex flex-col items-center text-center rounded-[1.5rem] border border-black/[0.06] bg-[#F5F4EF] p-7 md:p-8 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(0,0,0,0.15)]"
                data-testid={`team-member-${m.name.toLowerCase()}`}
              >
                <div className="grid place-items-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#0A0A0C] text-[#25D366] font-display font-extrabold text-[26px] md:text-[30px] shadow-[0_15px_30px_-12px_rgba(0,0,0,0.35)]">
                  {m.initials}
                </div>
                <h3 className="mt-5 font-display font-bold tracking-tight text-[19px] md:text-[21px] text-black">
                  {m.name}
                </h3>
                <p className="mt-1.5 text-[13px] md:text-[14px] font-medium text-black/55">
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
