import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Slick language switcher — DE (default), FR, IT.
 * Wired to LanguageContext: selection translates the whole site and
 * persists to localStorage (pm_lang).
 * Responsive: pill on desktop, compact icon-only on mobile.
 */
const LANGS = [
  { code: "DE", label: "Deutsch", flagBg: "#D52B1E", flagText: "CH" },
  { code: "FR", label: "Français", flagBg: "#0055A4", flagText: "FR" },
  { code: "IT", label: "Italiano", flagBg: "#008C45", flagText: "IT" },
];

const SwissFlag = () => (
  <span
    className="inline-grid place-items-center h-4 w-4 rounded-[3px] bg-[#D52B1E]"
    aria-hidden
  >
    <span className="relative flex items-center justify-center">
      <span className="absolute h-[2px] w-2 bg-white rounded-[1px]" />
      <span className="absolute w-[2px] h-2 bg-white rounded-[1px]" />
    </span>
  </span>
);

const FrenchFlag = () => (
  <span
    className="inline-flex h-4 w-5 overflow-hidden rounded-[3px] border border-black/10"
    aria-hidden
  >
    <span className="h-full w-1/3 bg-[#0055A4]" />
    <span className="h-full w-1/3 bg-white" />
    <span className="h-full w-1/3 bg-[#EF4135]" />
  </span>
);

const ItalianFlag = () => (
  <span
    className="inline-flex h-4 w-5 overflow-hidden rounded-[3px] border border-black/10"
    aria-hidden
  >
    <span className="h-full w-1/3 bg-[#008C45]" />
    <span className="h-full w-1/3 bg-white" />
    <span className="h-full w-1/3 bg-[#CD212A]" />
  </span>
);

const FLAG_ICONS = {
  DE: <SwissFlag />,
  FR: <FrenchFlag />,
  IT: <ItalianFlag />,
};

export const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const selectLang = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative" data-testid="language-switcher">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-testid="language-switcher-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.languageSwitcher.ariaLabel(lang)}
        className="inline-flex items-center gap-1.5 md:gap-2 h-9 md:h-10 pl-2 pr-2.5 md:pl-2.5 md:pr-3 rounded-full bg-white border border-black/10 hover:border-black/25 transition-colors duration-300"
      >
        {FLAG_ICONS[lang]}
        <span className="font-helvetica text-[11px] md:text-[12px] font-semibold tracking-[0.05em] text-black/80">
          {lang}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-black/50 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.2}
        />
      </button>

      {open && (
        <div
          role="listbox"
          data-testid="language-switcher-menu"
          className="absolute right-0 mt-2 w-[188px] rounded-2xl bg-white border border-black/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] overflow-hidden z-50 origin-top-right animate-[fadeIn_180ms_ease-out]"
          style={{ animation: "fadeIn 180ms ease-out" }}
        >
          <ul className="py-1.5">
            {LANGS.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    data-testid={`language-option-${l.code}`}
                    onClick={() => selectLang(l.code)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left transition-colors duration-200 ${
                      active
                        ? "bg-[#25D366]/10"
                        : "hover:bg-black/[0.04]"
                    }`}
                  >
                    {FLAG_ICONS[l.code]}
                    <span
                      className={`flex-1 text-[13px] font-medium tracking-tight ${
                        active ? "text-[#0f5f2a]" : "text-black/80"
                      }`}
                    >
                      {l.label}
                    </span>
                    <span className="font-helvetica text-[10px] tracking-[0.08em] text-black/40">
                      {l.code}
                    </span>
                    {active && (
                      <Check className="h-3.5 w-3.5 text-[#1EB955] shrink-0" strokeWidth={3} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
