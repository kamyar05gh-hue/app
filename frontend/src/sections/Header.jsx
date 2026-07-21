import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setMounted(true), 200);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" data-testid="site-header">
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[1400px] px-4 md:px-10 mt-2 md:mt-2.5"
          >
            <div
              className={`relative flex items-center justify-between rounded-full px-4 md:px-6 py-2 border border-white/40 backdrop-blur-xl bg-white/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-[background-color,box-shadow] duration-500`}
            >
              {/* Liquid-glass glossy highlight */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0) 60%)",
                }}
              />
              <button
                onClick={() => scrollTo("hero")}
                data-testid="header-logo"
                className="flex items-center gap-2 group"
                aria-label="PLANMOVE"
              >
                <Logo className="text-[24px] md:text-[27px]" showImage />
              </button>

              <div className="flex items-center gap-2 md:gap-3">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
