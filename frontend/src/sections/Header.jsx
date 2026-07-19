import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOGO_URL } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    setTimeout(() => setMounted(true), 200);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" data-testid="site-header">
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[1400px] px-6 md:px-10 mt-4 md:mt-6"
          >
            <div
              className={`flex items-center justify-between rounded-full pl-4 pr-2 md:pl-6 md:pr-3 py-2.5 md:py-3 border border-black/10 transition-all duration-500 ${
                scrolled
                  ? "bg-white/85 backdrop-blur-xl shadow-[0_12px_40px_-15px_rgba(0,0,0,0.15)]"
                  : "bg-white/55 backdrop-blur-md"
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
                  className="h-7 md:h-8 w-auto object-contain"
                />
              </button>

              <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-tight">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => scrollTo(n.id)}
                    data-testid={`nav-${n.id}`}
                    className="pm-link text-black/75 hover:text-black transition-colors"
                  >
                    {n.label}
                  </button>
                ))}
              </nav>

              <WhatsAppButton
                size="sm"
                testId="header-cta-button"
                label="Jetzt auf WhatsApp schreiben"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
