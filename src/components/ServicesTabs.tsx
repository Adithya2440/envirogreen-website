"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  signs: string[];
  process: string[];
  whyChoose: string[];
};

const services: Service[] = [
  {
    id: "ants",
    title: "Ant Control",
    short: "Fast and effective treatment for ant infestations.",
    description:
      "Our ant control service targets common ant problems in homes and commercial spaces. We inspect entry points, identify nesting activity, and use safe, effective treatments to reduce infestations and prevent return visits.",
    signs: [
      "Visible ant trails in kitchens, bathrooms, or walls",
      "Small piles of dirt near baseboards or entry points",
      "Frequent ant activity around food or moisture areas",
    ],
    process: [
      "Inspect the affected areas and locate activity zones",
      "Apply targeted treatment to infested areas",
      "Recommend prevention steps to reduce future infestations",
    ],
    whyChoose: [
      "Safe treatment options",
      "Fast response for active infestations",
      "Long-term prevention recommendations",
    ],
  },
  {
    id: "rodents",
    title: "Rodent Control",
    short: "Safe control for rats and mice with prevention support.",
    description:
      "Our rodent control service helps remove mice and rats from your property while addressing entry points and nesting areas. We focus on treatment, monitoring, and long-term protection.",
    signs: [
      "Droppings in cupboards, attics, or storage spaces",
      "Scratching sounds in ceilings or walls",
      "Chewed materials, wiring, or food packaging",
    ],
    process: [
      "Inspect for rodent entry points and nesting activity",
      "Set up control and monitoring measures",
      "Seal high-risk points and provide follow-up recommendations",
    ],
    whyChoose: [
      "Professional inspection",
      "Safe, strategic rodent control",
      "Prevention-focused solutions",
    ],
  },
  {
    id: "bedbugs",
    title: "Bed Bug Treatment",
    short: "Targeted treatment to protect your home and family.",
    description:
      "We provide detailed bed bug treatment designed to reduce infestations and restore comfort in your home. Our team inspects the affected spaces and uses targeted solutions for effective results.",
    signs: [
      "Small bites after sleeping",
      "Dark spots on mattresses or bedding",
      "Live bed bugs or shed skins near seams and furniture",
    ],
    process: [
      "Inspect bedrooms, furniture, and affected spaces",
      "Apply bed bug treatment to targeted areas",
      "Provide preparation and follow-up guidance",
    ],
    whyChoose: [
      "Detailed inspection process",
      "Treatment tailored to affected areas",
      "Clear preparation guidance",
    ],
  },
  {
    id: "cockroaches",
    title: "Cockroach Control",
    short: "Effective extermination with targeted follow-up care.",
    description:
      "Our cockroach control service is designed to reduce infestation activity in kitchens, utility areas, commercial spaces, and hidden problem zones. We focus on treatment and prevention.",
    signs: [
      "Cockroach sightings, especially at night",
      "Droppings in cupboards or under sinks",
      "Musty odour in infested areas",
    ],
    process: [
      "Identify problem areas and harborage zones",
      "Apply targeted treatment in key locations",
      "Recommend sanitation and prevention improvements",
    ],
    whyChoose: [
      "Targeted treatment methods",
      "Practical prevention advice",
      "Solutions for residential and commercial spaces",
    ],
  },
  {
    id: "wasps",
    title: "Wasp Removal",
    short: "Safe nest treatment and removal for active wasp problems.",
    description:
      "We help treat active wasp issues around roofs, decks, eaves, and outdoor access points. Our service focuses on safe removal and reducing future activity around your property.",
    signs: [
      "Visible wasp nest on eaves, roofs, or fences",
      "Frequent wasp activity around one area",
      "Buzzing activity near entrances or outdoor spaces",
    ],
    process: [
      "Inspect the nest location and activity level",
      "Apply treatment safely to the affected area",
      "Remove or manage the nest when appropriate",
    ],
    whyChoose: [
      "Safe handling of active nests",
      "Fast outdoor response",
      "Reduced risk around entry points and living spaces",
    ],
  },
  {
    id: "spiders",
    title: "Spider Control",
    short: "Reduce spider activity indoors and outdoors effectively.",
    description:
      "Our spider control service helps manage spider activity in basements, garages, corners, exterior entry points, and other common problem areas around the home or business.",
    signs: [
      "Frequent webs around windows, ceilings, or corners",
      "Regular spider sightings indoors",
      "High insect activity attracting spiders",
    ],
    process: [
      "Inspect common spider activity zones",
      "Treat interior and exterior areas as needed",
      "Recommend steps to reduce future activity",
    ],
    whyChoose: [
      "Interior and exterior treatment options",
      "Focus on common activity zones",
      "Prevention-minded service",
    ],
  },
];

export default function ServicesTabs() {
  const [activeId, setActiveId] = useState("ants");
  const activeService =
    services.find((service) => service.id === activeId) ?? services[0];

  return (
    <section className="bg-white px-6 py-10 md:px-8 lg:px-12">
      <div className="text-center">
        <h2 className="text-[30px] font-bold text-[#1f5f4b] md:text-[36px]">
          Explore Our Pest Services
        </h2>
        <p className="mt-3 text-[15px] leading-7 text-[#7f7f7f] md:text-[16px]">
          Click a service below to view detailed information.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <motion.button
              key={service.id}
              onClick={() => setActiveId(service.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-full border px-5 py-3 text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#2f6fb3] text-white border-[#2f6fb3] shadow-[0_8px_18px_rgba(47,111,179,0.25)]"
                  : "bg-[#eef6ff] text-[#2f6fb3] border-[#dbe8ff] hover:bg-[#2f6fb3] hover:text-white"
              }`}
            >
              {service.title}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.28 }}
          className="mt-10 rounded-[18px] border border-[#ececec] bg-[#fafafa] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-[28px] font-bold text-[#1f5f4b] md:text-[34px]">
                {activeService.title}
              </h3>

              <p className="mt-3 text-[17px] font-medium text-[var(--primary-green)]">
                {activeService.short}
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#767676] md:text-[16px]">
                {activeService.description}
              </p>
            </div>

            <div className="rounded-[16px] border border-[#e8e8e8] bg-white p-5">
              <h4 className="text-[18px] font-semibold text-[#474747]">
                Need Immediate Help?
              </h4>
              <p className="mt-3 text-[15px] leading-7 text-[#7d7d7d]">
                Contact our team for professional pest control support and fast
                response across our service areas.
              </p>

              <a
                href="tel:+16043558550"
                className="mt-5 inline-block rounded-md bg-[var(--primary-green)] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[var(--primary-green-dark)]"
              >
                Call Now: 604-355-8550
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[16px] border border-[#dfe7e3] bg-[#2FA36B] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.15)]"
            >
              <h4 className="text-[18px] font-semibold text-white">
                Our Process
              </h4>
              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-white/90">
                {activeService.process.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-white">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[16px] border border-[#dfe7e3] bg-[#2FA36B] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.15)]"
            >
              <h4 className="text-[18px] font-semibold text-white">
                Why Choose This Service
              </h4>

              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-white/90">
                {activeService.whyChoose.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-white">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
