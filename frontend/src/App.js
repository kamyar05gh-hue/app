import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Landing from "@/pages/Landing";
import ImpressumPage from "@/pages/ImpressumPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import { Toaster } from "@/components/ui/sonner";

function useLenis() {
  useEffect(() => {
    // Skip Lenis entirely on touch devices: syncTouch re-interpolates native
    // touch scrolling every frame, which feels slow/laggy on phones, and the
    // rAF loop drains battery. Native touch scrolling is GPU-accelerated.
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;
    const lenis = new Lenis({
      duration: 0.95,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.35,
      lerp: 0.08,
    });
    // Expose for programmatic scroll (nav clicks, testing)
    if (typeof window !== "undefined") window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      if (typeof window !== "undefined") delete window.__lenis;
    };
  }, []);
}

function AppShell() {
  useLenis();
  return (
    <div className="App">
      <Landing />
      <Toaster position="bottom-center" theme="light" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<PrivacyPage />} />
        <Route path="/agb" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
