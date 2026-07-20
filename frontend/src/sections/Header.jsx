import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import { WHATSAPP_URL } from "@/lib/constants";
import { Logo } from "@/components/Logo";

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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[1400px] px-4 md:px-10 mt-3 md:mt-6"
          >
            <div
              className={`flex items-center justify-between rounded-full pl-4 pr-2 md:pl-6 md:pr-3 py-2 md:py-3 border border-black/10 transition-colors duration-500 ${
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
                <Logo className="text-[20px] md:text-[22px]" />
              </button>

              <div className="flex items-center gap-2 md:gap-3">
                <div className="hidden md:block">
                  <WhatsAppButton size="sm" testId="header-cta-button" />
                </div>
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
