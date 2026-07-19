import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Problems from "@/sections/Problems";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page">
      <Header />
      <Hero />
      <TrustBar />
      <Problems />
      <FinalCTA />
      <Footer />
    </main>
  );
}
