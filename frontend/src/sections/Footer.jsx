import { Logo } from "@/components/Logo";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const navHrefs = ["#hero", "#probleme", "#loesungen", "#vorteile"];
  const legalTestIds = ["footer-impressum", "footer-datenschutz", "footer-agb"];
  return (
    <footer
      className="relative bg-[#0A0A0A] text-white overflow-hidden"
      data-testid="site-footer"
    >
      {/* Ambient green wash */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full blur-3xl pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.22), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* GRAND STATEMENT */}
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-40 pb-12 md:pb-24">
        <Reveal as="p" className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-mono-pm text-white/50">
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-white/40" />
            {t.footer.kicker}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h2
            data-testid="footer-headline"
            className="mt-5 md:mt-6 font-display font-extrabold tracking-[-0.045em] text-[44px] sm:text-[64px] md:text-[120px] lg:text-[152px] leading-[0.92]"
          >
            {t.footer.headlineA}
            <br />
            {t.footer.headlineB}<span className="italic font-light text-[#25D366]">{t.footer.headlineHighlight}</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <Reveal delay={240} as="p" className="max-w-md text-[14px] md:text-[17px] leading-relaxed text-white/65">
            {t.footer.paragraph}
          </Reveal>
          <Reveal delay={360}>
            <WhatsAppButton size="lg" testId="footer-cta-button" />
          </Reveal>
        </div>
      </div>

      {/* MINI GRID */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-10 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
            <div className="col-span-2 md:col-span-5">
              <Logo variant="light" className="text-[26px] md:text-[32px]" />
              <p className="mt-4 md:mt-6 max-w-md text-[13px] md:text-[14px] leading-relaxed text-white/55">
                {t.footer.brandDescription}
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                {t.footer.navHeading}
              </p>
              <ul className="mt-4 md:mt-5 space-y-2.5 md:space-y-3 text-[13px] md:text-[14px]">
                {t.footer.navLinks.map((label, i) => (
                  <li key={i}>
                    <a href={navHrefs[i]} className="pm-link text-white/80 hover:text-white transition-colors duration-500">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                {t.footer.legalHeading}
              </p>
              <ul className="mt-4 md:mt-5 space-y-2.5 md:space-y-3 text-[13px] md:text-[14px]">
                {t.footer.legalLinks.map((label, i) => (
                  <li key={i}>
                    <a href="#" data-testid={legalTestIds[i]} className="pm-link text-white/80 hover:text-white transition-colors duration-500">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                {t.footer.contactHeading}
              </p>
              <ul className="mt-4 md:mt-5 space-y-2.5 md:space-y-3 text-[13px] md:text-[14px]">
                <li>
                  <a
                    href="mailto:hallo@planmove.ch"
                    data-testid="footer-email"
                    className="pm-link text-white/80 hover:text-white transition-colors duration-500 inline-flex items-center gap-1 break-all"
                  >
                    hallo@planmove.ch <ArrowUpRight className="h-3 w-3 shrink-0" />
                  </a>
                </li>
                <li className="text-white/55">{t.footer.country}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* WORDMARK */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-8 md:py-10 overflow-hidden">
          <div
            aria-hidden
            className="font-display font-extrabold tracking-[-0.055em] leading-[0.9] text-white/95 select-none whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 17vw, 260px)" }}
          >
            PlanMove
          </div>
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-white/40" style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}>
            <span>© {new Date().getFullYear()} PlanMove</span>
            <span>{t.footer.bottomNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
