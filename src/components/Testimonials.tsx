"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    name: "Emily Carter",
    text: "EnviroGreen Pest Solutions provided top-notch service for our commercial property. Their team was knowledgeable and responsive, ensuring minimal disruption to our business. We appreciate their dedication and expertise in keeping our facility pest-free.",
  },
  {
    name: "Wei Zhang",
    text: "EnviroGreen Pest Solutions exceeded my expectations. Their team was professional, courteous, and thorough. They quickly identified and resolved our pest issue, and we've been pest-free ever since. Highly recommend!",
  },
  {
    name: "Arjun Patel",
    text: "I can't thank EnviroGreen Pest Solutions enough for their help. We had a severe bed bug infestation, and their team handled it with great care and expertise. The results were outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-14 md:px-8 lg:px-12">
      <div className="text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-black/55">
          Testimonials
        </p>

        <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] text-black md:text-[42px]">
          What Our Customers Say
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-[22px] border border-black/5 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          >
            {/* Quote */}
            <p className="text-[15px] leading-7 text-black/70">{item.text}</p>

            {/* Name */}
            <p className="mt-6 text-[16px] font-semibold text-[#1f5f4b]">
              — {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
