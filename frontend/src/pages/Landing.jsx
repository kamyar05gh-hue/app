import { lazy, Suspense } from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LazySection from "@/components/LazySection";

// Below-the-fold sections are code-split so the initial bundle parses faster,
// especially on mobile connections. LazySection delays each chunk's download
// until the user scrolls near it.
const Problems = lazy(() => import("@/sections/Problems"));
const Testimonials = lazy(() => import("@/sections/Testimonials"));
const FAQ = lazy(() => import("@/sections/FAQ"));
const Team = lazy(() => import("@/sections/Team"));
const FinalCTA = lazy(() => import("@/sections/FinalCTA"));
const Footer = lazy(() => import("@/sections/Footer"));

export default function Landing() {
  return (
    <main data-testid="landing-page">
      <Header />
      <Hero />
      <TrustBar />
      <Suspense fallback={null}>
        <LazySection minHeight={1400}>
          <Problems />
        </LazySection>
        <LazySection minHeight={700}>
          <Testimonials />
        </LazySection>
        <LazySection minHeight={600}>
          <FAQ />
        </LazySection>
        <LazySection minHeight={600}>
          <Team />
        </LazySection>
        <LazySection minHeight={500}>
          <FinalCTA />
        </LazySection>
        <LazySection minHeight={600}>
          <Footer />
        </LazySection>
      </Suspense>
      <FloatingWhatsApp />
    </main>
  );
}
