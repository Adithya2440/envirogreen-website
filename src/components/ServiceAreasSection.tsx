"use client";

import Image from "next/image";
import { motion } from "motion/react";

const areas = [
  {
    name: "Vancouver",
    link: "https://www.google.com/maps/search/?api=1&query=Vancouver+BC",
    tint: "hover:bg-[#eef8f3] hover:text-[var(--primary-green)]",
  },
  {
    name: "Burnaby",
    link: "https://www.google.com/maps/search/?api=1&query=Burnaby+BC",
    tint: "hover:bg-[#eef7fb] hover:text-[#1b6f9f]",
  },
  {
    name: "New Westminster",
    link: "https://www.google.com/maps/search/?api=1&query=New+Westminster+BC",
    tint: "hover:bg-[#fff4e8] hover:text-[#d97706]",
  },
  {
    name: "Coquitlam",
    link: "https://www.google.com/maps/search/?api=1&query=Coquitlam+BC",
    tint: "hover:bg-[#eef9f8] hover:text-[#0f7f72]",
  },
  {
    name: "Port Moody",
    link: "https://www.google.com/maps/search/?api=1&query=Port+Moody+BC",
    tint: "hover:bg-[#fff8da] hover:text-[#b7791f]",
  },
  {
    name: "Port Coquitlam",
    link: "https://www.google.com/maps/search/?api=1&query=Port+Coquitlam+BC",
    tint: "hover:bg-[#eef7fb] hover:text-[#2563eb]",
  },
  {
    name: "Surrey",
    link: "https://www.google.com/maps/search/?api=1&query=Surrey+BC",
    tint: "hover:bg-[#eef8f3] hover:text-[var(--primary-green)]",
  },
  {
    name: "Langley",
    link: "https://www.google.com/maps/search/?api=1&query=Langley+BC",
    tint: "hover:bg-[#eef9f8] hover:text-[#0f7f72]",
  },
  {
    name: "Abbotsford",
    link: "https://www.google.com/maps/search/?api=1&query=Abbotsford+BC",
    tint: "hover:bg-[#fff4e8] hover:text-[#d97706]",
  },
  {
    name: "Chilliwack",
    link: "https://www.google.com/maps/search/?api=1&query=Chilliwack+BC",
    tint: "hover:bg-[#eef7fb] hover:text-[#1b6f9f]",
  },
];

export default function ServiceAreasSection() {
  return (
    <section className="bg-white px-6 py-12 md:px-8 lg:px-12">
      <div className="rounded-[28px] border border-black/5 bg-[#fafafa] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)] lg:p-8">
        <div className="text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-black/55">
            Service Areas
          </p>
          <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] text-black md:text-[42px]">
            Pest Control Service Areas
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-8 text-black/65">
            We provide pest control services in Vancouver, Burnaby, Surrey,
            Coquitlam, Langley, Abbotsford, Chilliwack, and surrounding areas.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {areas.map((area, index) => (
              <motion.a
                key={area.name}
                href={area.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className={`group flex items-center gap-3 rounded-[16px] border border-black/5 bg-white px-4 py-3 text-[16px] text-[#4d4d4d] shadow-[0_6px_18px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 ${area.tint}`}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-green)] text-sm text-white transition duration-300 group-hover:scale-105">
                  📍
                </span>
                <span className="font-medium">{area.name}</span>
              </motion.a>
            ))}
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Burnaby+BC"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative h-[300px] overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <Image
                src="/map.jpg"
                alt="Map of EnviroGreen pest control service areas"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-[14px] font-semibold text-[var(--primary-green)] shadow-md backdrop-blur-sm transition duration-300 group-hover:bg-[var(--primary-green)] group-hover:text-white">
                Open in Google Maps
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
