import Navbar from "../../src/components/Navbar";
import ServicesHero from "../../src/components/ServicesHero";
import ServicesTabs from "../../src/components/ServicesTabs";
import ServicePlans from "../../src/components/ServicePlans";
import ServicesCTA from "../../src/components/ServicesCTA";
import Footer from "../../src/components/Footer";
import Reveal from "../../src/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description:
    "Explore EnviroGreen Pest Solutions services including ant control, rodent control, bed bug treatment, cockroach control, wasp removal, and more.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
        <Navbar />

        <Reveal>
          <ServicesHero />
        </Reveal>

        <Reveal delay={0.05}>
          <ServicesTabs />
        </Reveal>

        <Reveal delay={0.1}>
          <ServicePlans />
        </Reveal>

        <Reveal delay={0.15}>
          <ServicesCTA />
        </Reveal>

        <Footer />
      </div>
    </main>
  );
}
