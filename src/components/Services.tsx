"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Bug,
  Rat,
  ShieldAlert,
  ShieldBan,
  CircleAlert,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Ant Control",
    description:
      "Fast and effective solutions to remove ant infestations from your home or business.",
    icon: Bug,
    accent: "from-[#e8f7f0] to-[#f8fffb]",
    iconBg: "bg-[#e8f7f0]",
    iconColor: "text-[#2d6b57]",
  },
  {
    title: "Rodent Control",
    description:
      "Safe rodent treatment for mice and rats with long-term prevention solutions.",
    icon: Rat,
    accent: "from-[#eef6ff] to-[#fbfdff]",
    iconBg: "bg-[#eef6ff]",
    iconColor: "text-[#2f6fb3]",
  },
  {
    title: "Bed Bug Treatment",
    description:
      "Targeted bed bug treatments designed to protect your family and property.",
    icon: ShieldAlert,
    accent: "from-[#fff4e8] to-[#fffdf9]",
    iconBg: "bg-[#fff4e8]",
    iconColor: "text-[#d97706]",
  },
  {
    title: "Cockroach Control",
    description:
      "Reliable cockroach extermination with effective treatment and follow-up care.",
    icon: ShieldBan,
    accent: "from-[#eef9f8] to-[#fbfffe]",
    iconBg: "bg-[#eef9f8]",
    iconColor: "text-[#0f7f72]",
  },
  {
    title: "Wasp Treatment",
    description:
      "Safe removal of wasp nests and treatment for high-activity areas around your property.",
    icon: CircleAlert,
    accent: "from-[#fff8da] to-[#fffef8]",
    iconBg: "bg-[#fff8da]",
    iconColor: "text-[#b7791f]",
  },
  {
    title: "Spider Control",
    description:
      "Reduce spider activity indoors and outdoors with professional pest control service.",
    icon: Sparkles,
    accent: "from-[#eef2ff] to-[#fcfcff]",
    iconBg: "bg-[#eef2ff]",
    iconColor: "text-[#4f46e5]",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white px-6 pt-8 pb-8 md:px-8 lg:px-12">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[34px] font-bold text-[#1f5f4b] md:text-[40px]">
          Pest Control Services We Offer
        </h2>
        <p className="mt-3 text-[16px] text-[#7f7f7f] md:text-[17px]">
          Professional pest control services in Burnaby, Surrey, Vancouver, and
          surrounding areas for homes and businesses.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[16px] border border-[var(--primary-green)] bg-white p-6 text-left shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all duration-300 hover:bg-[var(--primary-green)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            >
              {/* Soft decorative background layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-70 transition duration-300 group-hover:opacity-0`}
              />

              {/* Decorative blurred circle */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/40 blur-2xl transition duration-300 group-hover:bg-white/10" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}

                {/* Title */}
                <h3 className="mt-5 text-[20px] font-semibold text-[#1f5f4b] transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[15px] leading-7 text-[#7a7a7a] transition-colors duration-300 group-hover:text-white">
                  {service.description}
                </p>

                {/* Small CTA line */}
                <div className="mt-5 inline-flex items-center text-[14px] font-medium text-[var(--primary-green)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/services"
          className="rounded-md border border-transparent bg-[var(--primary-green)] px-7 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:border-[var(--primary-green)] hover:bg-white hover:text-[var(--primary-green)]"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
