import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Problems from "@/sections/Problems";
import Testimonials from "@/sections/Testimonials";
import FinalCTA from "@/sections/FinalCTA";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Landing() {
  return (
    <main data-testid="landing-page">
      <Header />
      <Hero />
      <TrustBar />
      <Problems />
      <Testimonials />
      <FinalCTA />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
