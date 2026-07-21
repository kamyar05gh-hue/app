import { Suspense, lazy } from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Problems from "@/sections/Problems";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Testimonials = lazy(() => import("@/sections/Testimonials"));
const FAQ = lazy(() => import("@/sections/FAQ"));
const FinalCTA = lazy(() => import("@/sections/FinalCTA"));
const Footer = lazy(() => import("@/sections/Footer"));

const LazyShell = ({ children, minH = "300px" }) => (
  <Suspense fallback={<div style={{ minHeight: minH }} aria-hidden="true" />}>
    {children}
  </Suspense>
);

export default function Landing() {
  return (
    <main data-testid="landing-page">
      <Header />
      <Hero />
      <TrustBar />
      <Problems />
      <LazyShell minH="520px">
        <Testimonials />
      </LazyShell>
      <LazyShell minH="400px">
        <FAQ />
      </LazyShell>
      <LazyShell minH="360px">
        <FinalCTA />
      </LazyShell>
      <LazyShell minH="420px">
        <Footer />
      </LazyShell>
      <FloatingWhatsApp />
    </main>
  );
}
