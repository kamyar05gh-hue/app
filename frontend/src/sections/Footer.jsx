import { LOGO_URL } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer
      className="relative bg-[#0A0A0C] text-white/70 border-t border-white/10"
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <img
              src={LOGO_URL}
              alt="PlanMove"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/60">
              PlanMove ist der intelligente Assistent für Schweizer Umzugs- und
              Reinigungsunternehmen. 24/7 erreichbar. In jeder Sprache.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-widest font-mono-pm text-white/40">
              Rechtliches
            </p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <a href="#" data-testid="footer-impressum" className="pm-link hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" data-testid="footer-datenschutz" className="pm-link hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" data-testid="footer-agb" className="pm-link hover:text-white transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-widest font-mono-pm text-white/40">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <a
                  href="mailto:hallo@planmove.ch"
                  data-testid="footer-email"
                  className="pm-link hover:text-white transition-colors"
                >
                  hallo@planmove.ch
                </a>
              </li>
              <li className="text-white/50">Schweiz</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 md:mt-20 border-t border-white/10 pt-8">
          <div
            className="font-display font-extrabold tracking-[-0.045em] leading-none text-white/95 select-none"
            style={{ fontSize: "clamp(80px, 18vw, 260px)" }}
            aria-hidden
          >
            PLANMOVE
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-widest font-mono-pm text-white/40">
          <span>© {new Date().getFullYear()} PlanMove — 100% Swiss Made</span>
          <span>Für Umzug & Reinigung</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
