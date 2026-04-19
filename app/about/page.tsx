import Navbar from "../../src/components/Navbar";
import AboutHero from "../../src/components/AboutHero";
import AboutGallery from "../../src/components/AboutGallery";

import CertificationsSection from "../../src/components/CertificationsSection";
import OurTeamSection from "../../src/components/OurTeamSection";
import AboutFAQ from "../../src/components/AboutFAQ";

import ServicesCTA from "../../src/components/ServicesCTA";
import Footer from "../../src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about EnviroGreen Pest Solutions, our experience, mission, certifications, and commitment to safe, effective pest control services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
        <Navbar />
        <AboutHero />
        <AboutGallery />

        <CertificationsSection />
        <OurTeamSection />
        <AboutFAQ />
        <ServicesCTA />
        <Footer />
      </div>
    </main>
  );
}
