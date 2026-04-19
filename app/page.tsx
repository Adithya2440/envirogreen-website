import type { Metadata } from "next";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import TrustHighlights from "../src/components/TrustHighlights";
import ServicesSection from "../src/components/Services";
import ServiceAreasSection from "../src/components/ServiceAreasSection";
import WhyChooseUs from "../src/components/WhyChooseUs";
import Testimonials from "../src/components/Testimonials";
import ContactStrip from "../src/components/ContactStrip";
import Footer from "../src/components/Footer";
import Reveal from "../src/components/Reveal";

export const metadata: Metadata = {
  title: "Pest Control in Burnaby, Surrey & Vancouver",
  description:
    "Professional pest control in Burnaby, Surrey, Vancouver, and surrounding areas. Eco-friendly solutions for ants, rodents, bed bugs, cockroaches, wasps, and more.",
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EnviroGreen Pest Solutions",
  url: "https://www.envirogreenpest.com",
  telephone: "+1-604-355-8550",
  email: "info@envirogreenpest.com",
  areaServed: [
    "Burnaby",
    "Surrey",
    "Vancouver",
    "New Westminster",
    "Coquitlam",
    "Langley",
    "Abbotsford",
    "Chilliwack",
  ],
  openingHours: "Mo-Sa 06:00-21:00",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "12-7549 Humphries Court",
      addressLocality: "Burnaby",
      addressRegion: "BC",
      postalCode: "V3N 4K9",
      addressCountry: "CA",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "10603 140 St",
      addressLocality: "Surrey",
      addressRegion: "BC",
      postalCode: "V3T 4N6",
      addressCountry: "CA",
    },
  ],
};
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={0.05}>
          <TrustHighlights />
        </Reveal>

        <Reveal delay={0.1}>
          <ServicesSection />
        </Reveal>

        <Reveal delay={0.15}>
          <ServiceAreasSection />
        </Reveal>

        <Reveal delay={0.2}>
          <WhyChooseUs />
        </Reveal>

        <Reveal delay={0.25}>
          <Testimonials />
        </Reveal>

        <Reveal delay={0.3}>
          <ContactStrip />
        </Reveal>

        <Footer />
      </div>
    </main>
  );
}
