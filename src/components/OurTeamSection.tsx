"use client";

import Image from "next/image";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Nik Singh",
    title: "Managing Partner",
    image: "/team-1.jpg",
  },
  {
    name: "Raju Menon",
    title: "Managing Partner",
    image: "/team-2.jpg",
  },
  {
    name: "Janet Warwick",
    title: "Office Manager",
    image: "/team-3.jpg",
  },
];

export default function OurTeamSection() {
  return (
    <section className="bg-white px-6 py-12 md:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[34px] font-bold text-[#1f5f4b] md:text-[40px]">
            Our Team
          </h2>
        </div>

        {/* 3 Members */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[18px] border border-[#ececec] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)] transition duration-300"
            >
              <div className="relative h-[300px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-[20px] font-semibold text-[#1f5f4b]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[15px] text-[#6f6f6f]">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group Photo */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="overflow-hidden rounded-[22px] border border-[#ececec] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="relative h-[300px] md:h-[420px]">
              <Image
                src="/team-group.jpg"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>

            <div className="py-4 text-center">
              <p className="text-[18px] font-semibold text-[#1f5f4b]">
                The Team
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
