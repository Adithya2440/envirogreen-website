"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Leaf, ShieldCheck, Zap, Building2 } from "lucide-react";

const points = [
  {
    text: "Eco-Friendly & Effective Pest Control Solutions",
    icon: Leaf,
    iconBg: "bg-[#e8f7f0]",
    iconColor: "text-[#2d6b57]",
    cardTint: "from-[#f4fbf7] to-white",
  },
  {
    text: "Experienced Pest Control Technicians",
    icon: ShieldCheck,
    iconBg: "bg-[#eef6ff]",
    iconColor: "text-[#2f6fb3]",
    cardTint: "from-[#f3f8ff] to-white",
  },
  {
    text: "Fast Response Across Burnaby, Surrey & Vancouver",
    icon: Zap,
    iconBg: "bg-[#fff4e8]",
    iconColor: "text-[#d97706]",
    cardTint: "from-[#fff9f3] to-white",
  },
  {
    text: "Trusted by Homes & Businesses",
    icon: Building2,
    iconBg: "bg-[#eef9f8]",
    iconColor: "text-[#0f7f72]",
    cardTint: "from-[#f3fcfb] to-white",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-8 md:px-8 lg:px-12 lg:py-10">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative h-[340px] overflow-hidden rounded-[10px] md:h-[420px]"
        >
          <Image
            src="/technician-placeholder.jpg"
            alt="Professional pest control technician providing service in Burnaby and Surrey"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d6b57]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-[36px] font-bold text-[#1f5f4b] md:text-[44px]">
            Why Choose Our Pest Control Services?
          </h2>

          <p className="mt-4 max-w-xl text-[16px] leading-8 text-[#7c7c7c] md:text-[17px]">
            We provide reliable pest control services in Burnaby, Surrey,
            Vancouver, and surrounding areas, focusing on quality, safety, and
            long-term protection.
          </p>

          <ul className="mt-7 space-y-4">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.li
                  key={point.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  whileHover={{ y: -3 }}
                  className={`flex items-start gap-4 rounded-[16px] border border-[#ededed] bg-gradient-to-br ${point.cardTint} px-4 py-4 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition duration-300`}
                >
                  <span
                    className={`mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full ${point.iconBg} ${point.iconColor} shadow-sm`}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </span>

                  <span className="text-[16px] leading-7 text-[#4b4b4b]">
                    {point.text}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
