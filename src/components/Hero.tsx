"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const chips = [
  "20+ Years Experience",
  "Eco-Friendly Solutions",
  "Fast Response",
  "Homes & Businesses",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-12 md:px-8 lg:px-12 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="max-w-[660px]">
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-[13px] font-medium uppercase tracking-[0.18em] text-black/60"
          >
            EnviroGreen Pest Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-black md:text-[52px] lg:text-[64px]"
          >
            Pest Control in Burnaby, Surrey & Vancouver — Fast & Reliable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-2xl text-[17px] leading-8 text-black/70 md:text-[18px]"
          >
            Reliable pest control services for homes and businesses. We provide
            safe, eco-friendly, and effective solutions with fast response and
            long-term protection.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-5 text-[22px] font-semibold text-[var(--primary-green)] md:text-[28px]"
          >
            Call Us Today: 604-355-8550
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-[var(--primary-green)] px-7 py-3.5 text-[15px] font-medium text-white transition hover:bg-[#245746]"
            >
              Request Service
            </Link>

            <a
              href="tel:+16043558550"
              className="rounded-full border border-[var(--primary-green)] bg-white px-7 py-3.5 text-[15px] font-medium text-[var(--primary-green)] transition hover:bg-[var(--light-green-bg)]"
            >
              Call Us today
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {chips.map((chip, index) => {
              const styles = [
                "bg-[#eef8f3] text-[var(--primary-green)]",
                "bg-[#eef7fb] text-[#1b6f9f]",
                "bg-[#fff7e8] text-[#c97700]",
                "bg-[#eef9f8] text-[#0f7f72]",
              ];

              return (
                <span
                  key={chip}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium ${styles[index]}`}
                >
                  {chip}
                </span>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative mx-auto h-[340px] w-full max-w-[560px] md:h-[430px] lg:h-[540px]"
        >
          <div className="absolute -left-4 top-10 h-32 w-32 rounded-full bg-[#dff5ef] blur-3xl" />
          <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-[#fff2c9] blur-3xl" />

          <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/hero.jpg"
              alt="Pest control services in Burnaby, Surrey and Vancouver by EnviroGreen"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
