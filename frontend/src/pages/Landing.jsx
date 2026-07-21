import { lazy, Suspense } from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Below-the-fold sections are code-split so the initial bundle parses faster,
// especially on mobile connections.
const Problems = lazy(() => import("@/sections/Problems"));
const Testimonials = lazy(() => import("@/sections/Testimonials"));
const FAQ = lazy(() => import("@/sections/FAQ"));
const FinalCTA = lazy(() => import("@/sections/FinalCTA"));
const Footer = lazy(() => import("@/sections/Footer"));

export default function Landing() {
  return (
    <main data-testid="landing-page">
      <Header />
      <Hero />
      <TrustBar />
      <Suspense fallback={null}>
        <Problems />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
    </main>
  );
}
