import Navbar from "../../src/components/Navbar";
import PestsHero from "../../src/components/PestsHero";
import PestsTabs from "../../src/components/PestsTabs";
import ServicesCTA from "../../src/components/ServicesCTA";
import Footer from "../../src/components/Footer";
import Reveal from "../../src/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Types of Pests",
  description:
    "Identify common pests including ants, rodents, bed bugs, spiders, termites, wasps, cockroaches, and bees. Learn the signs and why treatment matters.",
};

export default function TypesOfPestsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
        <Navbar />

        <Reveal>
          <PestsHero />
        </Reveal>

        <Reveal delay={0.05}>
          <PestsTabs />
        </Reveal>

        <Reveal delay={0.1}>
          <ServicesCTA />
        </Reveal>

        <Footer />
      </div>
    </main>
  );
}
