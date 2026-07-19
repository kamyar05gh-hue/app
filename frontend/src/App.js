import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Landing from "@/pages/Landing";
import { Toaster } from "@/components/ui/sonner";

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
