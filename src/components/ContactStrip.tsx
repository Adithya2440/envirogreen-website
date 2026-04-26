"use client";

import { motion } from "motion/react";

export default function ContactStrip() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary-green)] px-6 py-14 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/75">
            Contact EnviroGreen
          </p>

          <h2 className="mt-4 max-w-2xl text-[34px] font-semibold leading-tight tracking-[-0.03em] md:text-[44px]">
            Ready to protect your home or business from pests?
          </h2>

          <p className="mt-5 max-w-xl text-[16px] leading-8 text-white/80">
            Fast, eco-friendly, and reliable pest control solutions across
            Burnaby, Surrey, Vancouver, and nearby service areas.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+16043558550"
              className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-[var(--primary-green)] transition duration-300 hover:scale-[1.02]"
            >
              Call us today
            </a>

            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
            >
              Request Service
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="grid gap-4"
        >
          <div className="rounded-[20px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <h3 className="text-[18px] font-semibold">Office Hours</h3>
            <div className="mt-3 space-y-2 text-[15px] text-white/85">
              <p>Monday - Saturday: 9am to 6pm</p>

              <a
                href="tel:+16043558550"
                className="inline-block pt-1 font-medium underline underline-offset-4 hover:text-white"
              >
                Phone: 604-355-8550
              </a>
            </div>
          </div>

          {/*<div className="rounded-[20px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <h3 className="text-[18px] font-semibold">Our Locations</h3>
            <div className="mt-3 space-y-3 text-[15px] text-white/85">
              <a
                href="https://www.google.com/maps/search/?api=1&query=12-7549+Humphries+Court+Burnaby+BC+V3N+4K9"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline underline-offset-4 transition hover:text-white"
              >
                12-7549 Humphries Court, Burnaby, BC V3N 4K9
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=10603+140+St+Surrey+BC+V3T+4N6"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline underline-offset-4 transition hover:text-white"
              >
                10603 140 St, Surrey, BC V3T 4N6 
              </a>
            </div>
          </div>*/}
        </motion.div>
      </div>
    </section>
  );
}
