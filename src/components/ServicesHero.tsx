"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceHero() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden px-6 py-10 md:px-8 lg:px-12 lg:py-14 flex items-center font-sans">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/service-hero.jpg"
          alt="Pest control services"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/25" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-[13px] font-medium uppercase tracking-[0.18em] text-black/65"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-4 max-w-3xl text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-black md:text-[52px] lg:text-[68px]"
        >
          Reliable Pest Control Services for Homes and Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-8 max-w-3xl text-[16px] leading-8 text-black/70 md:text-[17px]"
        >
          EnviroGreen Pest Solutions offers safe, effective, and eco-friendly
          pest control services across Vancouver, Burnaby, Surrey, and nearby
          service areas.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          href="tel:+16043558550"
          className="mt-10 inline-flex items-center rounded-full bg-black px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-black/85"
        >
          Call Now: 604-355-8550
        </motion.a>
      </div>
    </section>
  );
}
