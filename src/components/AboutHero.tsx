"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#ececec] px-6 py-10 md:px-8 lg:px-12 lg:py-14 font-sans min-h-[75vh] flex items-center">
      {/* Background Image with subtle zoom animation */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/about-hero.jpg"
          alt="About EnviroGreen"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="relative z-10 max-w-5xl"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black/70"
        >
          About Us
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mt-3 text-[34px] font-bold leading-tight tracking-tight text-black md:text-[42px] lg:text-[52px]"
        >
          Why Choose Us?
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-6 space-y-5 text-[15px] leading-8 text-gray-700 md:text-[16px]"
        >
          <p>
            At EnviroGreen Pest Solutions, we are dedicated to providing
            top-quality pest management solutions for both residential and
            commercial properties. With years of experience in the industry, our
            expert team uses safe and effective methods to ensure your spaces
            remain pest-free.
          </p>

          <p>
            We pride ourselves on our commitment to customer satisfaction,
            offering reliable and tailored services to meet your specific needs.
            Trust EnviroGreen Pest Solutions to protect your home and business
            with professionalism and care. Your safety and comfort are our top
            priorities.
          </p>

          <p>
            With over 20 years of experience, EnviroGreen Pest Solutions
            provides effective and eco-friendly pest control services in
            Vancouver, Burnaby, and nearby service areas.
          </p>

          <p>
            Our certified pest control professionals are committed to providing
            top-notch service for all our clients across Vancouver, Burnaby, and
            North Vancouver.
          </p>

          <p>
            <span className="font-semibold text-black">Our Mission:</span> At
            EnviroGreen Pest Solutions, our mission is to provide effective and
            eco-friendly pest management solutions, ensuring the safety and
            well-being of our clients. We strive to deliver exceptional service
            and create pest-free environments for homes and businesses alike.
          </p>
        </motion.div>

        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          href="tel:+16043558550"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-7 inline-block rounded-md bg-black px-7 py-3.5 text-[16px] font-semibold text-white transition"
        >
          Call Now: 604-355-8550
        </motion.a>
      </motion.div>
    </section>
  );
}
