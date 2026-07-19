import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, MessageCircle } from "lucide-react";
import { IMG } from "@/lib/constants";

const problems = [
  {
    n: "01",
    title: "Jede unbeantwortete Anfrage kostet Sie Kunden – und viel Geld.",
    body: "Kunden warten nicht. Wenn Sie zu spät antworten, gehen sie zur Konkurrenz. PlanMove antwortet innerhalb weniger Sekunden – 24/7.",
    tag: "Reaktionszeit",
    img: IMG.problems[0],
  },
  {
    n: "02",
    title: "Deutsch ist nicht Ihre Muttersprache? Kein Problem.",
    body: "Sprechen Sie einfach in Ihrer Sprache. PlanMove schreibt professionelle E-Mails, Offerten und Nachrichten auf perfektem Deutsch, Französisch oder nach Wunsch.",
    tag: "Sprache",
    img: IMG.problems[1],
  },
  {
    n: "03",
    title: "Nach einem langen Arbeitstag wartet die Büroarbeit.",
    body: "Offerten, E-Mails, WhatsApp, Rechnungen, Einsatzplanung… Viele Unternehmer bleiben bis spät wach, nur um keine Anfrage zu verpassen. PlanMove erledigt alles.",
    tag: "Feierabend",
    img: IMG.problems[2],
  },
  {
    n: "04",
    title: "Sie verschicken Offerten und vergessen nachzufassen.",
    body: "Viele Unternehmer verlieren den Überblick — und damit auch Kunden und Geld. PlanMove erinnert automatisch nach – per Nachricht oder Anruf.",
    tag: "Follow-up",
    img: IMG.problems[3],
  },
  {
    n: "05",
    title: "Das Telefon klingelt, während Sie arbeiten.",
    body: "Sie können nicht rangehen? Kein Problem. PlanMove nimmt Anrufe entgegen, sammelt alle Infos und vereinbart auf Wunsch Termine.",
    tag: "Anrufe",
    img: IMG.problems[4],
  },
  {
    n: "06",
    title: "So viele Nachrichten. So wenig Zeit.",
    body: "WhatsApp, E-Mail, Telefon — alles kommt zur gleichen Zeit. PlanMove beantwortet, organisiert und bringt alles an einen Ort zusammen.",
    tag: "Kanäle",
    img: IMG.problems[5],
  },
];

// -------- Horizontal-pinned scroll --------

const ProblemCard = ({ p }) => (
  <article
    className="relative shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[42vw] xl:w-[38vw] max-w-[640px] h-full flex flex-col"
    data-testid={`problem-card-${p.n}`}
  >
    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-black/5">
      {/* DALL-E: ${p.img.dallePrompt} */}
      <img
        src={p.img.src}
        alt={p.img.alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-5 left-5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-widest text-black">
        {p.n} · {p.tag}
      </div>
    </div>
    <div className="mt-8">
      <h3 className="font-display font-extrabold tracking-[-0.02em] text-[22px] md:text-[28px] leading-[1.15] max-w-lg">
        {p.title}
      </h3>
      <p className="mt-4 text-[14px] md:text-[15px] text-black/60 leading-relaxed max-w-lg">
        {p.body}
      </p>
    </div>
  </article>
);

const HorizontalScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Move 6 cards from x:0 to x:-(cards-1) * cardWidth
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <section
      ref={targetRef}
      id="probleme"
      className="relative bg-white"
      style={{ height: "560vh" }}
      data-testid="problems-scroller"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section head */}
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 pt-24 md:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] uppercase tracking-[0.25em] font-mono-pm text-black/55"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-black/40" />
              Kapitel Eins — Die 7 Probleme
            </span>
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display font-extrabold tracking-[-0.03em] text-[34px] md:text-[52px] leading-[1.02] max-w-4xl"
          >
            Die <span className="text-[#25D366]">7 grössten Probleme</span> im
            Alltag von Umzug & Reinigung Unternehmern.
          </motion.h2>
        </div>

        {/* Scroller */}
        <div className="relative mt-10 md:mt-14 flex-1 min-h-0">
          <motion.div
            style={{ x }}
            className="absolute left-0 top-0 h-full flex items-start gap-8 md:gap-12 pl-6 md:pl-10 will-change-transform"
          >
            {problems.map((p) => (
              <ProblemCard key={p.n} p={p} />
            ))}

            {/* End spacer that hints at "manifest" section */}
            <div className="shrink-0 w-[40vw] hidden md:block" aria-hidden />
          </motion.div>
        </div>

        {/* Bottom progress indicator */}
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-8">
          <div className="mt-6 flex items-center justify-between text-[11px] font-mono-pm uppercase tracking-widest text-black/55">
            <span>Scrollen Sie weiter →</span>
            <ScrollProgress progress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollProgress = ({ progress }) => {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="relative h-[2px] w-40 md:w-64 bg-black/10 overflow-hidden rounded-full">
      <motion.span style={{ width }} className="absolute inset-y-0 left-0 bg-[#25D366]" />
    </div>
  );
};

// -------- Manifesto (Card 07) --------

const Manifesto = () => {
  const voiceCmds = [
    "PlanMove, erstelle eine Offerte für Herr Müller.",
    "Schick Frau Meier die Offerte per E-Mail.",
    "Schreibe dem Kunden auf WhatsApp, dass wir morgen um 08:00 Uhr kommen.",
    "Erstelle die Rechnung und sende sie an den Kunden.",
  ];
  const checklist = [
    "Offerten",
    "Nachrichten",
    "Rechnungen",
    "Termine",
    "Anrufe",
    "Übersetzungen",
    "und vieles mehr…",
  ];

  return (
    <section
      id="loesungen"
      className="relative py-24 md:py-32 bg-[#FAFBF8]"
      data-testid="manifesto-section"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          data-testid="manifesto-card"
          className="relative rounded-[2.5rem] bg-white border border-black/10 overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.15)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT — crossed out stress */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[560px]">
              {/* DALL-E: An overwhelmed Swiss business owner buried in paperwork, ultra-realistic cinematic photograph, muted color palette, a large translucent WhatsApp green (#25D366) X crossing him out. */}
              <img
                src={IMG.problems[6].src}
                alt={IMG.problems[6].alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25" />
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <line x1="14" y1="14" x2="86" y2="86" stroke="#25D366" strokeWidth="5" strokeLinecap="round" />
                <line x1="86" y1="14" x2="14" y2="86" stroke="#25D366" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <div className="absolute top-6 left-6 z-10">
                <span className="chapter-num text-[54px] md:text-[80px] leading-none text-white/90">
                  07
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <p className="text-white font-display font-extrabold text-[22px] md:text-[30px] leading-tight tracking-tight">
                  Vergessen Sie Papierkram
                  <br />
                  und komplizierte Programme.
                </p>
                <p className="mt-3 text-white/85 text-[13px] md:text-[14px] leading-relaxed max-w-sm">
                  Keine Notizen, keine Excel-Listen, keine langen Abende vor dem
                  Computer. Sagen Sie es einfach.
                </p>
              </div>
            </div>

            {/* MIDDLE — voice commands */}
            <div className="lg:col-span-4 p-8 md:p-12 border-t lg:border-t-0 lg:border-l lg:border-r border-black/10">
              <p className="text-[11px] uppercase tracking-widest font-mono-pm text-black/50">
                Sprechen Sie einfach mit PlanMove
              </p>
              <ul className="mt-6 space-y-3">
                {voiceCmds.map((cmd, i) => (
                  <li
                    key={i}
                    data-testid={`voice-cmd-${i}`}
                    className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#FAFBF8] px-4 py-3.5"
                  >
                    <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-[#25D366] text-white shrink-0">
                      <MessageCircle className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-[13px] md:text-[14px] leading-snug text-black/85 italic">
                      {`„${cmd}"`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — PlanMove does the rest */}
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col bg-[#0A0A0C] text-white">
              <p className="text-[11px] uppercase tracking-widest font-mono-pm text-white/50">
                Ergebnis
              </p>
              <p className="mt-4 font-display font-extrabold text-[26px] md:text-[32px] tracking-[-0.02em] leading-[1.05]">
                PlanMove
                <br />
                erledigt den{" "}
                <span className="text-[#25D366]">Rest.</span>
              </p>
              <ul className="mt-6 space-y-2.5">
                {checklist.map((it, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[13px] text-white/85"
                  >
                    <span className="grid place-items-center h-5 w-5 rounded-full bg-[#25D366]/20 text-[#25D366] shrink-0">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export const Problems = () => (
  <>
    <HorizontalScroller />
    <Manifesto />
  </>
);

export default Problems;
