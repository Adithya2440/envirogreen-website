"use client";

import Image from "next/image";
import { motion } from "motion/react";

const chips = [
  { label: "Fast Response", style: "bg-[#eef8f3] text-[#2d6b57]" },
  { label: "Eco-Friendly", style: "bg-[#eef9f8] text-[#0f7f72]" },
  { label: "Homes & Businesses", style: "bg-[#eef6ff] text-[#2f6fb3]" },
  { label: "Trusted Local Service", style: "bg-[#fff8da] text-[#b7791f]" },
];

export default function PestHero() {
  return (
    <section className="relative overflow-hidden px-6 py-14 md:px-8 lg:px-12 lg:py-20">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/pestherobg.jpg"
          alt="Pest control background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-white/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/74 to-white/58" />

      {/* Decorative color blur */}
      <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-[#e8f7f0]/80 blur-3xl" />
      <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-[#fff4e8]/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#eef6ff]/70 blur-3xl" />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d6b57]"
        >
          Types of Pests
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, delay: 0.08 }}
          className="mt-4 max-w-3xl text-[38px] font-bold leading-[1.08] text-[#1f5f4b] md:text-[50px] lg:text-[62px]"
        >
          Learn About the Common Pests We Handle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="mt-6 max-w-2xl text-[16px] leading-8 text-[#666666] md:text-[17px]"
        >
          Explore common pest problems, warning signs, nesting behavior, and why
          professional pest control matters for homes and businesses across
          Burnaby, Surrey, Vancouver, and nearby areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`rounded-full px-4 py-2 text-[13px] font-medium shadow-sm ${chip.style}`}
            >
              {chip.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="tel:+16043558550"
            className="rounded-full bg-[var(--primary-green)] px-7 py-3.5 text-[15px] font-semibold text-white transition duration-300 hover:bg-[#245746]"
          >
            Call Now
          </a>

          <a
            href="/contact"
            className="rounded-full border border-[var(--primary-green)] bg-white px-7 py-3.5 text-[15px] font-semibold text-[var(--primary-green)] transition duration-300 hover:bg-[var(--light-green-bg)]"
          >
            Request Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
