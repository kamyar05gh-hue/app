import { motion } from "framer-motion";
import { Check, Bot, Sparkles } from "lucide-react";
import { IMG } from "@/lib/constants";

// Highlighted keyword — bold + green
const H = (text) => (
  <span className="text-[#1EB955] font-semibold">{text}</span>
);

const problems = [
  {
    n: 1,
    tag: "Reaktionszeit",
    title: (
      <>
        Jede <span className="text-[#1EB955]">unbeantwortete</span> Anfrage
        kostet Sie Kunden – und viel Geld.
      </>
    ),
    body: (
      <>
        Kunden warten nicht. Wenn Sie zu spät antworten, gehen sie zur
        Konkurrenz. MOMO antwortet {H("innerhalb weniger Sekunden")} – {H("24/7")}.
      </>
    ),
    img: IMG.problems[0],
  },
  {
    n: 2,
    tag: "Muttersprache",
    title: (
      <>
        <span className="text-[#1EB955]">Deutsch</span> ist nicht Ihre
        Muttersprache? Kein Problem.
      </>
    ),
    body: (
      <>
        Sprechen Sie einfach in Ihrer Sprache. MOMO schreibt{" "}
        {H("professionelle E-Mails, Offerten und Nachrichten")} auf perfektem
        Deutsch, Französisch oder nach Wunsch.
      </>
    ),
    img: IMG.problems[1],
  },
  {
    n: 3,
    tag: "Feierabend",
    title: (
      <>
        Nach einem langen Arbeitstag wartet die{" "}
        <span className="text-[#1EB955]">Büroarbeit</span>.
      </>
    ),
    body: (
      <>
        Offerten, E-Mails, WhatsApp, Rechnungen, Einsatzplanung… Viele
        Unternehmer bleiben bis spät wach, nur um keine Anfrage zu verpassen.{" "}
        MOMO {H("erledigt alles")}.
      </>
    ),
    img: IMG.problems[2],
  },
  {
    n: 4,
    tag: "Follow-up",
    title: (
      <>
        Sie verschicken Offerten und vergessen{" "}
        <span className="text-[#1EB955]">nachzufassen</span>.
      </>
    ),
    body: (
      <>
        Viele Unternehmer verlieren den Überblick — und damit auch Kunden und
        Geld. MOMO {H("erinnert automatisch nach")} – per Nachricht oder Anruf.
      </>
    ),
    img: IMG.problems[3],
  },
  {
    n: 5,
    tag: "Anrufe",
    title: (
      <>
        Das <span className="text-[#1EB955]">Telefon klingelt</span>, während
        Sie arbeiten.
      </>
    ),
    body: (
      <>
        Sie können nicht rangehen? Kein Problem. MOMO {H("nimmt Anrufe entgegen")},
        sammelt alle Infos und vereinbart auf Wunsch Termine.
      </>
    ),
    img: IMG.problems[4],
  },
  {
    n: 6,
    tag: "Kanäle",
    title: (
      <>
        So viele Nachrichten. So{" "}
        <span className="text-[#1EB955]">wenig Zeit</span>.
      </>
    ),
    body: (
      <>
        WhatsApp, E-Mail, Telefon — alles kommt zur gleichen Zeit. MOMO{" "}
        {H("beantwortet, organisiert und bringt alles an einen Ort zusammen")}.
      </>
    ),
    img: IMG.problems[5],
  },
];

// ---------- Problem Card (image top + text bottom) ----------
const ProblemCard = ({ p }) => {
  return (
    <article
      data-testid={`problem-card-0${p.n}`}
      className="pm-card group relative rounded-[1.5rem] md:rounded-[1.75rem] border border-black/[0.06] bg-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative aspect-[16/11] overflow-hidden bg-[#0F1013]">
        <img
          src={p.img.src}
          alt={p.img.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        {/* Number badge — top-left */}
        <span
          className="absolute top-4 left-4 grid place-items-center h-9 w-9 md:h-10 md:w-10 rounded-full bg-[#25D366] text-white font-display font-extrabold text-[16px] md:text-[17px] shadow-[0_10px_25px_-8px_rgba(37,211,102,0.6)] tabular-nums"
          aria-hidden
        >
          {p.n}
        </span>
      </div>

      {/* Copy */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-7">
        <h3 className="font-display font-extrabold tracking-[-0.02em] text-[19px] sm:text-[21px] md:text-[22px] leading-[1.15] text-black">
          {p.title}
        </h3>
        <p className="mt-3 md:mt-4 text-[13.5px] md:text-[14.5px] leading-relaxed text-black/60">
          {p.body}
        </p>
      </div>
    </article>
  );
};

// ---------- Climax Card 07 — full-width, 3-column composition ----------
const ClimaxCard = () => {
  const voiceCommands = [
    { icon: Check, text: "MOMO, erstelle eine Offerte für Herr Müller." },
    { icon: Check, text: "Schick Frau Meier die Offerte per E-Mail." },
    { icon: Check, text: "Schreibe dem Kunden auf WhatsApp, dass wir morgen um 08:00 Uhr kommen." },
    { icon: Check, text: "Erstelle die Rechnung und sende sie an den Kunden." },
  ];
  const services = [
    "Offerten",
    "Nachrichten",
    "Rechnungen",
    "Termine",
    "Anrufe",
    "Übersetzungen",
    "und vieles mehr…",
  ];

  return (
    <div className="mt-6 md:mt-10" data-testid="problem-card-07">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pm-card relative rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.06] bg-white overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* LEFT: Image — stressed man crossed out */}
          <div className="md:col-span-4 relative min-h-[280px] md:min-h-[520px] overflow-hidden bg-[#F5F4EF]">
            <img
              src={IMG.problems[2].src}
              alt="Vergessen Sie Papierkram"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Green X overlay */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <line
                  x1="8"
                  y1="10"
                  x2="92"
                  y2="90"
                  stroke="#25D366"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <line
                  x1="92"
                  y1="10"
                  x2="8"
                  y2="90"
                  stroke="#25D366"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              </svg>
            </div>
            {/* Number badge */}
            <span
              className="absolute top-4 left-4 grid place-items-center h-10 w-10 rounded-full bg-[#25D366] text-white font-display font-extrabold text-[17px] shadow-[0_10px_25px_-8px_rgba(37,211,102,0.6)] tabular-nums"
              aria-hidden
            >
              7
            </span>
          </div>

          {/* MIDDLE: Copy + Voice commands */}
          <div className="md:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l md:border-r border-black/[0.05]">
            <h3 className="font-display font-extrabold tracking-[-0.02em] text-[22px] sm:text-[26px] md:text-[30px] leading-[1.1] text-black">
              Vergessen Sie <span className="text-[#1EB955]">Papierkram</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              und komplizierte Programme.
            </h3>
            <p className="mt-3 md:mt-4 text-[13.5px] md:text-[15px] leading-relaxed text-black/60 max-w-md">
              Keine Notizen, keine Excel-Listen, keine langen Abende am Computer.
              Sagen Sie einfach:
            </p>

            <ul className="mt-5 md:mt-6 space-y-2.5" data-testid="climax-voice-commands">
              {voiceCommands.map((cmd, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-[#F5F4EF] px-3.5 py-2.5"
                >
                  <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-[#25D366] text-white shrink-0">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  <span className="text-[12.5px] md:text-[13.5px] font-medium text-black/85 leading-snug italic">
                    {`„${cmd.text}"`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: MOMO Bot + services checklist */}
          <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col items-center md:items-start justify-center bg-gradient-to-br from-[#F9FCF9] to-[#F5F4EF] relative">
            {/* Bot mascot */}
            <div className="relative">
              <div className="grid place-items-center h-[110px] w-[110px] md:h-[140px] md:w-[140px] rounded-[2rem] bg-[#0A0A0C] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(37,211,102,0.35), transparent 55%)",
                  }}
                />
                <Bot className="relative h-14 w-14 md:h-16 md:w-16 text-[#25D366]" strokeWidth={1.6} />
              </div>
              <span className="mt-3 block font-display font-extrabold text-center md:text-left text-[15px] md:text-[17px] tracking-tight text-black">
                MOMO <span className="text-black/50 font-medium">erledigt den Rest.</span>
              </span>
            </div>

            <ul className="mt-5 md:mt-6 space-y-2 w-full max-w-[200px]">
              {services.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 text-[12.5px] md:text-[13.5px] font-medium text-black/80"
                >
                  <span className="grid place-items-center h-4 w-4 rounded-full bg-[#25D366] text-white shrink-0">
                    <Check className="h-2.5 w-2.5" strokeWidth={4} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            <span className="mt-5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-[#1EB955] font-semibold">
              <Sparkles className="h-3 w-3" />
              Die MOMO-Magie
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

// ---------- Section wrapper ----------
export const Problems = () => {
  return (
    <section
      id="probleme"
      className="relative py-16 md:py-28 bg-[#F5F4EF]"
      data-testid="problems-section"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[30px] sm:text-[42px] md:text-[54px] leading-[1.05]">
            Die <span className="text-[#25D366]">7 grössten Probleme</span> im
            Alltag von Umzug &amp; Reinigung Unternehmern.
          </h2>
        </motion.div>

        <div id="loesungen" className="relative">
          {/* 3-col grid on desktop, single on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {problems.map((p) => (
              <ProblemCard key={p.n} p={p} />
            ))}
          </div>
          <ClimaxCard />
        </div>
      </div>
    </section>
  );
};

export default Problems;
