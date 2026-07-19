import { motion } from "framer-motion";
import { Check, Mic, Mail, MessageCircle, CalendarClock, FileText, Sparkles } from "lucide-react";
import { CARD_VISUALS } from "@/components/CardVisuals";

const problems = [
  {
    n: "01",
    tag: "Reaktionszeit",
    title: "Jede unbeantwortete Anfrage kostet Sie Kunden – und viel Geld.",
    body: "Kunden warten nicht. Wenn Sie zu spät antworten, gehen sie zur Konkurrenz. PlanMove antwortet innerhalb weniger Sekunden – 24/7.",
    Visual: CARD_VISUALS.reaktion,
  },
  {
    n: "02",
    tag: "Muttersprache",
    title: "Deutsch ist nicht Ihre Muttersprache? Kein Problem.",
    body: "Sprechen Sie einfach in Ihrer Sprache. PlanMove schreibt professionelle E-Mails, Offerten und Nachrichten auf perfektem Deutsch, Französisch oder nach Wunsch.",
    Visual: CARD_VISUALS.sprache,
  },
  {
    n: "03",
    tag: "Feierabend",
    title: "Nach einem langen Arbeitstag wartet die Büroarbeit.",
    body: "Offerten, E-Mails, WhatsApp, Rechnungen, Einsatzplanung… Viele Unternehmer bleiben bis spät wach, nur um keine Anfrage zu verpassen. PlanMove erledigt alles.",
    Visual: CARD_VISUALS.feierabend,
  },
  {
    n: "04",
    tag: "Follow-up",
    title: "Sie verschicken Offerten und vergessen nachzufassen.",
    body: "Viele Unternehmer verlieren den Überblick — und damit auch Kunden und Geld. PlanMove erinnert automatisch nach – per Nachricht oder Anruf.",
    Visual: CARD_VISUALS.followup,
  },
  {
    n: "05",
    tag: "Anrufe",
    title: "Das Telefon klingelt, während Sie arbeiten.",
    body: "Sie können nicht rangehen? Kein Problem. PlanMove nimmt Anrufe entgegen, sammelt alle Infos und vereinbart auf Wunsch Termine.",
    Visual: CARD_VISUALS.anrufe,
  },
  {
    n: "06",
    tag: "Kanäle",
    title: "So viele Nachrichten. So wenig Zeit.",
    body: "WhatsApp, E-Mail, Telefon — alles kommt zur gleichen Zeit. PlanMove beantwortet, organisiert und bringt alles an einen Ort zusammen.",
    Visual: CARD_VISUALS.kanaele,
  },
];

// ---------- Sticky Stack Card (perf-optimized: CSS only, no per-card useScroll) ----------
const StickyCard = ({ p, index }) => {
  const topOffset = 120 + index * 16;

  return (
    <div
      className="sticky pm-sticky-card"
      style={{ top: `${topOffset}px`, zIndex: 10 + index }}
      data-testid={`problem-card-${p.n}`}
    >
      <article
        className="pm-card relative mx-auto max-w-[1200px] rounded-[2rem] border border-black/[0.06] bg-white overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Visual */}
          <div className={`lg:col-span-6 relative h-[220px] sm:h-[280px] lg:h-[520px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
            <p.Visual />
            <div className="absolute top-4 left-4 z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-white/60 px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-widest">
                <span className="chapter-num text-[14px]">{p.n}</span>
                <span className="h-3 w-px bg-black/20" />
                <span>{p.tag}</span>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className={`lg:col-span-6 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
            <span className="chapter-num text-[42px] md:text-[72px] leading-none text-black/[0.12] mb-3 md:mb-4">
              {p.n}
            </span>
            <h3 className="font-display font-extrabold tracking-[-0.03em] text-[22px] sm:text-[26px] md:text-[38px] leading-[1.08] text-black">
              {p.title}
            </h3>
            <p className="mt-4 text-[14px] md:text-[16px] leading-relaxed text-black/60 max-w-md">
              {p.body}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-[11px] md:text-[12px] font-mono-pm uppercase tracking-widest text-[#1EB955]">
              <Check className="h-4 w-4" strokeWidth={3} />
              PlanMove löst das
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

// ---------- Magic Climax Card 07 ----------
const ClimaxCard = () => {
  const notifications = [
    { icon: FileText, tag: "Offerte", label: "Offerte #2049 erstellt", ts: "in 4.8s" },
    { icon: MessageCircle, tag: "WhatsApp", label: "An Frau Meier gesendet", ts: "jetzt" },
    { icon: Mail, tag: "E-Mail", label: "Bestätigung an Herr Müller", ts: "jetzt" },
    { icon: CalendarClock, tag: "Kalender", label: "Termin · Freitag 08:00", ts: "gebucht" },
  ];
  const bars = Array.from({ length: 28 });

  return (
    <div
      className="sticky pm-sticky-card"
      style={{ top: "140px", zIndex: 20 }}
      data-testid="problem-card-07"
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pm-card-dark relative mx-auto max-w-[1200px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0A0A0C] text-white"
      >
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(37,211,102,0.30), transparent 60%)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative p-6 sm:p-8 md:p-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-widest text-white/70">
                <span className="chapter-num text-[14px] text-[#25D366]">07</span>
                <span className="h-3 w-px bg-white/20" />
                Die PlanMove-Magie
              </div>
              <h3 className="mt-6 font-display font-extrabold tracking-[-0.03em] text-[26px] sm:text-[32px] md:text-[54px] leading-[1.02] max-w-2xl">
                Ein Satz sagen.
                <br />
                <span className="text-[#25D366]">Alles</span> ist erledigt.
              </h3>
            </div>
            <p className="max-w-sm text-[14px] md:text-[15px] leading-relaxed text-white/60">
              Keine Notizen, keine Excel-Listen, keine langen Abende. PlanMove
              hört zu, versteht — und handelt in Sekunden.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* LEFT — Glowing voice recorder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative rounded-[1.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-black to-[#0F1613] p-8"
            >
              <div
                aria-hidden
                className="absolute -inset-6 pointer-events-none opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 40% at 50% 60%, rgba(37,211,102,0.25), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest font-mono-pm text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Aufnahme läuft
                </div>

                <div className="mt-8 flex items-end justify-center gap-[3px] h-24">
                  {bars.map((_, i) => (
                    <span
                      key={i}
                      className="voice-bar w-[5px] rounded-full bg-gradient-to-t from-[#0F5F1E] to-[#25D366]"
                      style={{
                        height: `${25 + ((i * 17) % 75)}%`,
                        animationDelay: `${(i % 12) * 0.08}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="text-[11px] uppercase tracking-widest text-white/45 font-mono-pm">
                    Sie sagen
                  </p>
                  <p className="mt-2 font-display italic text-[17px] md:text-[19px] text-white/95 leading-snug">
                    {`„PlanMove, erstelle eine Offerte für Herr Müller und schick sie per WhatsApp."`}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white pl-3 pr-5 py-2.5">
                  <span className="grid place-items-center h-8 w-8 rounded-full bg-white/20">
                    <Mic className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] font-semibold">Sprachbefehl aktiv</span>
                </span>
              </div>
            </motion.div>

            {/* RIGHT — Cascade of notifications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
              }}
              className="lg:col-span-6 relative rounded-[1.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0B0E10] to-[#141B1C] p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest font-mono-pm text-white/60">
                <Sparkles className="h-3 w-3 text-[#25D366]" />
                PlanMove reagiert
              </div>

              <div className="mt-6 space-y-3">
                {notifications.map((n, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    data-testid={`climax-noti-${i}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5"
                  >
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-[#25D366] text-white">
                      <Check className="h-5 w-5" strokeWidth={3} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-mono-pm uppercase tracking-widest text-white/45">
                        {n.tag}
                      </p>
                      <p className="text-[14px] font-semibold text-white truncate flex items-center gap-2">
                        <n.icon className="h-4 w-4 text-[#25D366]" />
                        {n.label}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono-pm uppercase tracking-widest text-white/50">
                      {n.ts}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } },
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366]/12 border border-[#25D366]/30 px-3 py-1.5 text-[10px] font-mono-pm uppercase tracking-widest text-[#8EF5B0]"
              >
                <Sparkles className="h-3 w-3" />
                4.8 Sekunden · Zero Klicks
              </motion.div>
            </motion.div>
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
      className="relative py-24 md:py-32 bg-[#F5F4EF]"
      data-testid="problems-section"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-mono-pm text-black/55">
            <span className="h-px w-6 bg-black/40" />
            Kapitel Eins — Die 7 Probleme
          </span>
          <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] text-[32px] sm:text-[42px] md:text-[64px] leading-[1.02]">
            Die <span className="text-[#25D366]">7 grössten Probleme</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            im Alltag von Umzug &
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Reinigung Unternehmern.
          </h2>
        </motion.div>
      </div>

      {/* Sticky stacking cards (disabled on mobile — plain stacked layout) */}
      <div id="loesungen" className="relative">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="relative space-y-6 md:space-y-16 md:pb-[40vh]">
            {problems.map((p, i) => (
              <StickyCard key={p.n} p={p} index={i} />
            ))}
            <ClimaxCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
