import { lazy, Suspense } from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LazySection from "@/components/LazySection";

// Below-the-fold sections are code-split so the initial bundle parses faster,
// especially on mobile connections. LazySection delays each chunk's download
// until the user scrolls near it. Each section gets its OWN Suspense boundary
// with a height-matched placeholder: if one section suspends, the others (and
// the page height/scroll position) are unaffected.
const Problems = lazy(() => import("@/sections/Problems"));
const Testimonials = lazy(() => import("@/sections/Testimonials"));
const FAQ = lazy(() => import("@/sections/FAQ"));
const Team = lazy(() => import("@/sections/Team"));
const FinalCTA = lazy(() => import("@/sections/FinalCTA"));
const Footer = lazy(() => import("@/sections/Footer"));

const Deferred = ({ component: Component, minHeight }) => (
  <LazySection minHeight={minHeight}>
    <Suspense fallback={<div style={{ minHeight }} aria-hidden />}>
      <Component />
    </Suspense>
  </LazySection>
);

export default function Landing() {
  return (
    <main data-testid="landing-page">
      <Header />
      <Hero />
      <TrustBar />
      <Deferred component={Problems} minHeight={1400} />
      <Deferred component={Testimonials} minHeight={700} />
      <Deferred component={FAQ} minHeight={600} />
      <Deferred component={Team} minHeight={600} />
      <Deferred component={FinalCTA} minHeight={500} />
      <Deferred component={Footer} minHeight={600} />
      <FloatingWhatsApp />
    </main>
  );
}
