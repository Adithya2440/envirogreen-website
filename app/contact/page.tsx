import Navbar from "../../src/components/Navbar";
import ContactHero from "../../src/components/ContactHero";
import InteractiveContactSection from "../../src/components/InteractiveContactSection";
import MapSection from "../../src/components/MapSection";
import AboutFAQ from "../../src/components/AboutFAQ";
import ServicesCTA from "../../src/components/ServicesCTA";
import Footer from "../../src/components/Footer";
import Reveal from "../../src/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact EnviroGreen Pest Solutions for pest control services in Burnaby, Surrey, Vancouver, and nearby areas. Call now, request a quote, or schedule service.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
        <Navbar />

        <Reveal>
          <ContactHero />
        </Reveal>

        <Reveal delay={0.05}>
          <InteractiveContactSection />
        </Reveal>

        <Reveal delay={0.1}>
          <MapSection />
        </Reveal>

        <Reveal delay={0.15}>
          <AboutFAQ />
        </Reveal>

        <Reveal delay={0.2}>
          <ServicesCTA />
        </Reveal>

        <Footer />
      </div>
    </main>
  );
}
