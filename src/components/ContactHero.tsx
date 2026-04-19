"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#ececec] px-6 py-14 md:px-8 lg:px-12 lg:py-20">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/contact_hero.jpg"
          alt="Contact EnviroGreen Pest Control"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/45 to-white/20" />

      {/* Decorative blur accents */}
      <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-[#e8f7f0]/70 blur-3xl" />
      <div className="absolute right-10 top-16 h-40 w-40 rounded-full bg-[#eef6ff]/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#fff4e8]/60 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--primary-green)]"
        >
          Contact Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="mt-3 text-[34px] font-bold text-[#1f5f4b] md:text-[42px] lg:text-[52px]"
        >
          Contact Pest Control Experts in Burnaby, Surrey & Vancouver
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="mt-4 max-w-3xl text-[16px] leading-8 text-[#6f6f6f] md:text-[17px]"
        >
          Need help with ants, rodents, bed bugs, cockroaches, wasps, or other
          pest issues? Contact our team for fast, reliable, and eco-friendly
          pest control services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24 }}
          className="mt-7 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="tel:+16043558550"
            className="inline-block rounded-lg border border-transparent bg-[var(--primary-green)] px-7 py-3 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--primary-green)] hover:bg-white hover:text-[var(--primary-green)] hover:shadow-md"
          >
            Call us: 604-355-8550
          </a>
        </motion.div>
      </div>
    </section>
  );
}
