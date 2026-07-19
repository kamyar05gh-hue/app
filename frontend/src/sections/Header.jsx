import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LOGO_URL, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";

const scrollTo = (id, close) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (close) close();
};

const NAV = [
  { id: "hero", label: "Für wen?" },
  { id: "probleme", label: "Probleme" },
  { id: "loesungen", label: "Lösungen" },
  { id: "vorteile", label: "Vorteile" },
  { id: "ueber", label: "Über PlanMove" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    setTimeout(() => setMounted(true), 200);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" data-testid="site-header">
        <AnimatePresence>
          {mounted && (
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[1400px] px-4 md:px-10 mt-3 md:mt-6"
            >
              <div
                className={`flex items-center justify-between rounded-full pl-3 pr-2 md:pl-6 md:pr-3 py-2 md:py-3 border border-black/10 transition-colors duration-500 ${
                  scrolled
                    ? "bg-white/85 backdrop-blur-xl shadow-[0_12px_40px_-15px_rgba(0,0,0,0.15)]"
                    : "bg-white/60 backdrop-blur-md"
                }`}
              >
                <button
                  onClick={() => scrollTo("hero")}
                  data-testid="header-logo"
                  className="flex items-center gap-2 group"
                  aria-label="PlanMove"
                >
                  <img
                    src={LOGO_URL}
                    alt="PlanMove"
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </button>

                <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-tight">
                  {NAV.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => scrollTo(n.id)}
                      data-testid={`nav-${n.id}`}
                      className="pm-link text-black/75 hover:text-black transition-colors duration-500"
                    >
                      {n.label}
                    </button>
                  ))}
                </nav>

                <div className="flex items-center gap-2 md:gap-3">
                  {/* Desktop CTA */}
                  <div className="hidden md:block">
                    <WhatsAppButton
                      size="sm"
                      testId="header-cta-button"
                      label="Jetzt auf WhatsApp schreiben"
                    />
                  </div>
                  {/* Mobile compact CTA */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="header-cta-button-mobile"
                    aria-label="WhatsApp"
                    className="md:hidden grid place-items-center h-9 w-9 rounded-full bg-[#25D366] hover:bg-[#168222] text-white transition-colors duration-500"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                  {/* Mobile menu trigger */}
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    aria-label="Menü öffnen"
                    data-testid="mobile-menu-open"
                    className="lg:hidden grid place-items-center h-9 w-9 rounded-full bg-black text-white"
                  >
                    <Menu className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-panel"
            className="lg:hidden fixed inset-0 z-[60] bg-[#0A0A0A] text-white"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div
              aria-hidden
              className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full blur-3xl pointer-events-none opacity-70"
              style={{
                background: "radial-gradient(circle, rgba(37,211,102,0.28), transparent 60%)",
              }}
            />

            <div className="relative h-full w-full flex flex-col p-5 pt-6">
              <div className="flex items-center justify-between">
                <img
                  src={LOGO_URL}
                  alt="PlanMove"
                  className="h-6 w-auto object-contain brightness-0 invert"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Menü schliessen"
                  data-testid="mobile-menu-close"
                  className="grid place-items-center h-10 w-10 rounded-full bg-white/10 border border-white/15 text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-14 flex-1 flex flex-col">
                <ul className="space-y-1">
                  {NAV.map((n, i) => (
                    <motion.li
                      key={n.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <button
                        onClick={() => scrollTo(n.id, () => setOpen(false))}
                        data-testid={`mobile-nav-${n.id}`}
                        className="w-full flex items-center justify-between py-4 border-b border-white/10 text-left group"
                      >
                        <span className="font-display font-extrabold tracking-tight text-[28px] leading-none group-hover:text-[#25D366] transition-colors duration-300">
                          {n.label}
                        </span>
                        <span className="font-mono-pm text-[11px] uppercase tracking-widest text-white/40">
                          0{i + 1}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pt-6 pb-2"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="mobile-menu-cta"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#168222] transition-colors duration-500 text-white font-semibold py-4 text-[14px]"
                >
                  Jetzt auf WhatsApp schreiben
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-white/20">
                    <WhatsAppIcon className="h-3 w-3" />
                  </span>
                </a>
                <p className="mt-4 text-center text-[11px] uppercase tracking-widest text-white/40 font-mono-pm">
                  Antwort innerhalb weniger Minuten
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
