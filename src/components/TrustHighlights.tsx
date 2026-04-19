"use client";

import { motion } from "motion/react";

const items = [
  {
    title: "Quality",
    text: "Trusted pest control solutions for homes and businesses.",
  },
  {
    title: "Trust",
    text: "Reliable service with a strong commitment to customer care.",
  },
  {
    title: "Integrity",
    text: "Eco-conscious approach with honest and professional support.",
  },
  {
    title: "20+ Years",
    text: "Experienced team serving the Vancouver area.",
  },
];

export default function TrustHighlights() {
  return (
    <section className="bg-white px-6 pb-6 md:px-8 lg:px-12">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="rounded-[14px] border border-[#ededed] bg-white px-5 py-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
          >
            <h3 className="text-[18px] font-semibold text-[#4b4b4b]">
              {item.title}
            </h3>
            <p className="mt-2 text-[14px] leading-6 text-[#8a8a8a]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
