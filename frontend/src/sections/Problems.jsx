import { motion } from "framer-motion";
import { Check, Mic, Mail, MessageCircle, CalendarClock, FileText } from "lucide-react";
import { CARD_VISUALS } from "@/components/CardVisuals";

const H = (text) => (
  <span className="underline decoration-2 underline-offset-4 decoration-[#25D366] text-[#1EB955] font-semibold">
    {text}
  </span>
);

const problems = [
  {
    n: "01",
    tag: "Reaktionszeit",
    title: "Jede unbeantwortete Anfrage kostet Sie Kunden – und viel Geld.",
    body: (
      <>
        Kunden warten nicht. Wenn Sie zu spät antworten, gehen sie zur
        Konkurrenz. MOMO antwortet {H("innerhalb weniger Sekunden")} – {H("24/7")}.
      </>
    ),
    Visual: CARD_VISUALS.reaktion,
  },
  {
    n: "02",
    tag: "Muttersprache",
    title: "Deutsch ist nicht Ihre Muttersprache? Kein Problem.",
    body: (
      <>
        Sprechen Sie einfach in Ihrer Sprache. MOMO schreibt {H("professionelle E-Mails, Offerten und Nachrichten")}{" "}
        auf perfektem Deutsch, Französisch oder nach Wunsch.
      </>
    ),
    Visual: CARD_VISUALS.sprache,
  },
  {
    n: "03",
    tag: "Feierabend",
    title: "Nach einem langen Arbeitstag wartet die Büroarbeit.",
    body: (
      <>
        Offerten, E-Mails, WhatsApp, Rechnungen, Einsatzplanung… Viele
        Unternehmer bleiben bis spät wach, nur um keine Anfrage zu verpassen.{" "}
        MOMO {H("erledigt alles")}.
      </>
    ),
    Visual: CARD_VISUALS.feierabend,
  },
  {
    n: "04",
    tag: "Follow-up",
    title: "Sie verschicken Offerten und vergessen nachzufassen.",
    body: (
      <>
        Viele Unternehmer verlieren den Überblick — und damit auch Kunden und
        Geld. MOMO {H("erinnert automatisch nach")} – per Nachricht oder Anruf.
      </>
    ),
    Visual: CARD_VISUALS.followup,
  },
  {
    n: "05",
    tag: "Anrufe",
    title: "Das Telefon klingelt, während Sie arbeiten.",
    body: (
      <>
        Sie können nicht rangehen? Kein Problem. MOMO {H("nimmt Anrufe entgegen")},
        sammelt alle Infos und vereinbart auf Wunsch Termine.
      </>
    ),
    Visual: CARD_VISUALS.anrufe,
  },
  {
    n: "06",
    tag: "Kanäle",
    title: "So viele Nachrichten. So wenig Zeit.",
    body: (
      <>
        WhatsApp, E-Mail, Telefon — alles kommt zur gleichen Zeit. MOMO{" "}
        {H("beantwortet, organisiert und bringt alles an einen Ort zusammen")}.
      </>
    ),
    Visual: CARD_VISUALS.kanaele,
  },
];

// ---------- Plain Card (no sticky, alternating image/text) ----------
const ProblemCard = ({ p, index }) => {
  const imgLeft = index % 2 === 0;
  return (
    <article
      data-testid={`problem-card-${p.n}`}
      className="pm-card relative rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.06] bg-white overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] transition-shadow duration-500"
    >
      <div className="grid grid-cols-5 md:grid-cols-12">
        {/* Visual — smaller share */}
        <div className={`col-span-2 md:col-span-4 relative min-h-[180px] sm:min-h-[220px] md:min-h-[300px] ${imgLeft ? "" : "order-2"}`}>
          <p.Visual />
        </div>
        {/* Copy — larger share */}
        <div className={`col-span-3 md:col-span-8 p-5 sm:p-7 md:p-10 flex flex-col justify-center ${imgLeft ? "" : "order-1"}`}>
          <h3 className="font-display font-extrabold tracking-[-0.03em] text-[19px] sm:text-[24px] md:text-[34px] leading-[1.1] text-black">
            {p.title}
          </h3>
          <p className="mt-3 md:mt-4 text-[13px] sm:text-[15px] md:text-[17px] leading-relaxed text-black/70">
            {p.body}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] md:text-[12px] uppercase tracking-widest text-[#1EB955] font-semibold">
            <Check className="h-4 w-4" strokeWidth={3} />
            MOMO löst das
          </div>
        </div>
      </div>
    </article>
  );
};

// ---------- Magic Climax Card 07 (same template as other problem cards) ----------
const ClimaxVisual = ({ bars, notifications }) => (
  <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0A0A0C] to-[#0F1613] p-4 sm:p-5 md:p-6">
    <div
      aria-hidden
      className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl pointer-events-none opacity-60"
      style={{ background: "radial-gradient(circle, rgba(37,211,102,0.35), transparent 60%)" }}
    />
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    <div className="relative h-full flex flex-col gap-2.5 md:gap-3 justify-center">
      {/* Voice recorder — compact */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 md:p-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Aufnahme läuft
          </div>
          <Mic className="h-3.5 w-3.5 text-[#25D366]" />
        </div>
        <div className="mt-2 flex items-end justify-center gap-[3px] h-9 md:h-11">
          {bars.map((_, i) => (
            <span
              key={i}
              className="voice-bar w-[3px] md:w-[4px] rounded-full bg-gradient-to-t from-[#0F5F1E] to-[#25D366]"
              style={{
                height: `${25 + ((i * 17) % 75)}%`,
                animationDelay: `${(i % 12) * 0.08}s`,
              }}
            />
          ))}
        </div>
        <p className="mt-2 font-display italic text-[11px] md:text-[13px] text-white/85 leading-snug">
          {`„MOMO, erstelle eine Offerte für Herr Müller…"`}
        </p>
      </div>

      {/* Notification cascade — compact */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
        }}
        className="space-y-1.5"
      >
        {notifications.map((n, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            data-testid={`climax-noti-${i}`}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] px-2.5 md:px-3 py-1.5 md:py-2"
          >
            <span className="grid place-items-center h-6 w-6 md:h-7 md:w-7 rounded-full bg-[#25D366] text-white shrink-0">
              <Check className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={3} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/45">
                {n.tag}
              </p>
              <p className="text-[11px] md:text-[13px] font-semibold text-white truncate flex items-center gap-1.5">
                <n.icon className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#25D366] shrink-0" />
                <span className="truncate">{n.label}</span>
              </p>
            </div>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/50 shrink-0">
              {n.ts}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

const ClimaxCard = () => {
  const notifications = [
    { icon: FileText, tag: "Offerte", label: "Offerte erstellt", ts: "in 4.8s" },
    { icon: MessageCircle, tag: "WhatsApp", label: "Nachricht gesendet", ts: "jetzt" },
    { icon: Mail, tag: "E-Mail", label: "Bestätigung versandt", ts: "jetzt" },
    { icon: CalendarClock, tag: "Kalender", label: "Termin gebucht", ts: "Fr 08:00" },
  ];
  const bars = Array.from({ length: 24 });

  return (
    <div
      className="mb-6 md:mb-10"
      data-testid="problem-card-07"
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pm-card relative rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.06] bg-white overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Visual — larger climax visual */}
          <div className="lg:col-span-7 relative h-[280px] sm:h-[360px] lg:h-[620px]">
            <ClimaxVisual bars={bars} notifications={notifications} />
          </div>

          {/* Copy — MOMO bot with ticks */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white">
            <div className="inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-widest text-[#1EB955] font-semibold mb-3 md:mb-4">
              <span className="grid place-items-center h-6 w-6 rounded-full bg-[#25D366]/15">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              Die MOMO-Magie
            </div>
            <h3 className="font-display font-extrabold tracking-[-0.03em] text-[26px] sm:text-[32px] md:text-[46px] leading-[1.02] text-black">
              Ein Satz sagen.
              <br />
              <span className="text-[#25D366]">Alles</span> ist erledigt.
            </h3>
            <p className="mt-4 md:mt-5 text-[14px] md:text-[17px] leading-relaxed text-black/70 max-w-md">
              Keine Notizen, keine Excel-Listen, keine langen Abende. MOMO hört zu,
              versteht — und handelt in Sekunden.
            </p>

            <ul className="mt-6 md:mt-8 space-y-3">
              {[
                "Offerten & Rechnungen erstellen",
                "WhatsApp & E-Mails beantworten",
                "Termine automatisch buchen",
                "Kunden nachfassen ohne Aufwand",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] md:text-[15px] font-medium text-black/85">
                  <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-[#25D366] text-white shrink-0">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
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
      className="relative py-16 md:py-32 bg-[#F5F4EF]"
      data-testid="problems-section"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-10 md:mb-24"
        >
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[32px] sm:text-[42px] md:text-[64px] leading-[1.02]">
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

      {/* 2-col grid on desktop, single-col on mobile. No sticky. */}
      <div id="loesungen" className="relative">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 mb-6 md:mb-10">
            {problems.map((p, i) => (
              <ProblemCard key={p.n} p={p} index={i} />
            ))}
          </div>
          <ClimaxCard />
        </div>
      </div>
    </section>
  );
};

export default Problems;
