"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Bug,
  ShieldAlert,
  Rat,
  Sparkles,
  Hammer,
  CircleAlert,
  ShieldBan,
  Leaf,
} from "lucide-react";

type Pest = {
  id: string;
  title: string;
  image: string;
  short: string;
  description: string;
  signs: string[];
  habits: string[];
  whyItMatters: string[];
  icon: any;
  tabTint: string;
  iconBg: string;
  iconColor: string;
  cardTint: string;
};

const pests: Pest[] = [
  {
    id: "ants",
    title: "Ants",
    image: "/ant.jpg",
    short: "Common pests that enter buildings in search of food and shelter.",
    description:
      "Ants are one of the most common pests found in homes and businesses. They often enter through cracks, windows, and doors in search of food, water, and nesting areas. Some species can quickly form large colonies and become difficult to control without professional treatment.",
    signs: [
      "Visible ant trails near kitchens, sinks, or food areas",
      "Small piles of dirt near walls, patios, or entry points",
      "Recurring activity around moisture or crumbs",
    ],
    habits: [
      "Nest near foundations, patios, driveways, and wall voids",
      "Often active in kitchens and around food storage areas",
      "Can expand quickly when food and moisture are available",
    ],
    whyItMatters: [
      "Can contaminate food",
      "Can become a recurring infestation",
      "Some species are difficult to eliminate completely",
    ],
    icon: Bug,
    tabTint: "hover:bg-[#eef8f3] hover:text-[var(--primary-green)]",
    iconBg: "bg-[#e8f7f0]",
    iconColor: "text-[#2d6b57]",
    cardTint: "from-[#f4fbf7] to-white",
  },
  {
    id: "bedbugs",
    title: "Bed Bugs",
    image: "/bedbug.jpg",
    short: "Small parasitic insects that feed on human blood.",
    description:
      "Bed bugs are tiny insects that hide in mattresses, furniture, baseboards, and cracks near sleeping areas. They are difficult to spot early and can spread quickly through homes, apartments, and hospitality spaces.",
    signs: [
      "Bites after sleeping",
      "Dark spots on bedding or mattresses",
      "Live bugs or shed skins near bed seams or furniture",
    ],
    habits: [
      "Hide in tight cracks near resting areas",
      "Most active at night",
      "Can spread through luggage, furniture, and clothing",
    ],
    whyItMatters: [
      "Can spread quickly",
      "Difficult to eliminate without treatment",
      "Disrupts sleep and comfort",
    ],
    icon: ShieldAlert,
    tabTint: "hover:bg-[#fff4e8] hover:text-[#d97706]",
    iconBg: "bg-[#fff4e8]",
    iconColor: "text-[#d97706]",
    cardTint: "from-[#fff9f3] to-white",
  },
  {
    id: "rodents",
    title: "Rodents",
    image: "/rodents.jpg",
    short: "Mice and rats that damage property and create health risks.",
    description:
      "Rodents such as mice and rats can enter properties through very small openings. Once inside, they can contaminate food, damage wiring and insulation, and create unsanitary conditions.",
    signs: [
      "Droppings in cupboards, basements, or attics",
      "Scratching sounds in walls or ceilings",
      "Chewed packaging, wires, or stored items",
    ],
    habits: [
      "Hide in attics, crawl spaces, basements, and wall voids",
      "Search for food and water at night",
      "Use small openings to enter homes and businesses",
    ],
    whyItMatters: [
      "Can cause property damage",
      "Can contaminate food and surfaces",
      "Can multiply quickly if untreated",
    ],
    icon: Rat,
    tabTint: "hover:bg-[#eef6ff] hover:text-[#2f6fb3]",
    iconBg: "bg-[#eef6ff]",
    iconColor: "text-[#2f6fb3]",
    cardTint: "from-[#f3f8ff] to-white",
  },
  {
    id: "spiders",
    title: "Spiders",
    image: "/spider.jpg",
    short: "Common indoor and outdoor pests that gather in quiet corners.",
    description:
      "While many spiders are harmless, they are still unwelcome in homes and businesses. They often gather where insects are already present, making them a sign of a broader pest issue.",
    signs: [
      "Frequent webs near windows, ceilings, or corners",
      "Spider sightings in basements, garages, or storage areas",
      "Increased insect activity attracting spiders",
    ],
    habits: [
      "Prefer quiet, undisturbed spaces",
      "Build webs near light sources and insect activity",
      "Can gather in basements, crawl spaces, and garages",
    ],
    whyItMatters: [
      "Creates discomfort indoors",
      "Can indicate another pest issue",
      "Web buildup affects cleanliness and appearance",
    ],
    icon: Sparkles,
    tabTint: "hover:bg-[#eef2ff] hover:text-[#4f46e5]",
    iconBg: "bg-[#eef2ff]",
    iconColor: "text-[#4f46e5]",
    cardTint: "from-[#f5f6ff] to-white",
  },
  {
    id: "termites",
    title: "Termites",
    image: "/termite.jpg",
    short: "Wood-damaging pests that can quietly weaken structures.",
    description:
      "Termites can cause serious damage to wood structures over time. Because they often remain hidden inside walls, floors, or foundations, infestations can go unnoticed until significant damage occurs.",
    signs: [
      "Mud tubes near foundations",
      "Damaged or hollow-sounding wood",
      "Discarded wings near windows or doors",
    ],
    habits: [
      "Feed on wood and cellulose materials",
      "Remain hidden inside structures",
      "Can stay active for long periods undetected",
    ],
    whyItMatters: [
      "Can cause structural damage",
      "Can be costly if ignored",
      "Needs quick professional inspection",
    ],
    icon: Hammer,
    tabTint: "hover:bg-[#fff8da] hover:text-[#b7791f]",
    iconBg: "bg-[#fff8da]",
    iconColor: "text-[#b7791f]",
    cardTint: "from-[#fffdf3] to-white",
  },
  {
    id: "wasps",
    title: "Wasps & Hornets",
    image: "/wasps.jpg",
    short: "Aggressive stinging insects that build nests near properties.",
    description:
      "Wasps and hornets commonly build nests around roofs, decks, eaves, sheds, and trees. Their stings can be painful and dangerous, especially for people with allergies.",
    signs: [
      "Visible nest near roofs, decks, or fencing",
      "Frequent flying activity around one area",
      "Buzzing around entrances or outdoor seating spaces",
    ],
    habits: [
      "Build nests in sheltered outdoor spaces",
      "Become more aggressive when nests are disturbed",
      "Remain highly active during warmer months",
    ],
    whyItMatters: [
      "Stings can be painful or dangerous",
      "Unsafe near children or guests",
      "Outdoor activity becomes difficult",
    ],
    icon: CircleAlert,
    tabTint: "hover:bg-[#fff4e8] hover:text-[#d97706]",
    iconBg: "bg-[#fff4e8]",
    iconColor: "text-[#d97706]",
    cardTint: "from-[#fff9f3] to-white",
  },
  {
    id: "cockroaches",
    title: "Cockroaches",
    image: "/cockroach.jpg",
    short: "Harmful pests that hide in dark, warm, and moist spaces.",
    description:
      "Cockroaches are resilient pests that often stay hidden in kitchens, utility rooms, and commercial spaces. They can contaminate food and surfaces and are most active at night.",
    signs: [
      "Roach sightings late at night",
      "Droppings near cupboards or appliances",
      "Musty odour in infested areas",
    ],
    habits: [
      "Hide in warm, dark, moist spaces",
      "Feed on crumbs, waste, and organic matter",
      "Spread quickly if food and shelter are available",
    ],
    whyItMatters: [
      "Can contaminate food",
      "Unsanitary for homes and businesses",
      "Difficult to manage without treatment",
    ],
    icon: ShieldBan,
    tabTint: "hover:bg-[#eef9f8] hover:text-[#0f7f72]",
    iconBg: "bg-[#eef9f8]",
    iconColor: "text-[#0f7f72]",
    cardTint: "from-[#f3fcfb] to-white",
  },
  {
    id: "bees",
    title: "Bees",
    image: "/bee.jpg",
    short: "Important pollinators that can still pose risks near buildings.",
    description:
      "Bees play an important role in the environment, but nests too close to homes or businesses can create safety concerns. Extra care is needed when managing bee activity near occupied spaces.",
    signs: [
      "Repeated bee activity near one wall, roofline, or tree",
      "Hive activity close to entrances or outdoor areas",
      "Buzzing concentrated in one nesting location",
    ],
    habits: [
      "Nest in sheltered outdoor or structural spaces",
      "Remain active around flowers and food sources",
      "May sting if threatened",
    ],
    whyItMatters: [
      "Can pose allergy risks",
      "Unsafe near busy entrances",
      "Needs careful, responsible handling",
    ],
    icon: Leaf,
    tabTint: "hover:bg-[#eef8f3] hover:text-[var(--primary-green)]",
    iconBg: "bg-[#e8f7f0]",
    iconColor: "text-[#2d6b57]",
    cardTint: "from-[#f4fbf7] to-white",
  },
];

export default function PestsTabs() {
  const [activeId, setActiveId] = useState("ants");

  const activePest = pests.find((pest) => pest.id === activeId) ?? pests[0];
  const ActiveIcon = activePest.icon;

  return (
    <section className="bg-white px-6 py-10 md:px-8 lg:px-12">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[30px] font-bold text-[#1f5f4b] md:text-[36px]"
        >
          Identify Your Pests
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-3 text-[15px] leading-7 text-[#7f7f7f] md:text-[16px]"
        >
          Select a pest below to view details, signs, and why treatment matters.
        </motion.p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {pests.map((pest, index) => {
          const isActive = activeId === pest.id;
          const Icon = pest.icon;

          return (
            <motion.button
              key={pest.id}
              onClick={() => setActiveId(pest.id)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "border-[#F28C18] bg-[#F28C18] text-white shadow-[0_8px_18px_rgba(0,0,0,0.10)]"
                  : "border-[#dddddd] bg-white text-[#5f5f5f] hover:bg-[#FFF4E5] hover:text-[#F28C18]"
              }`}
            >
              <Icon size={16} />
              {pest.title}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-10 rounded-[18px] border border-[#ececec] bg-[#fafafa] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.05)] md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePest.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
              <motion.div
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="relative h-[280px] overflow-hidden rounded-[16px] border border-[#e8e8e8] bg-white md:h-[360px]"
              >
                <Image
                  src={activePest.image}
                  alt={activePest.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              </motion.div>

              <div>
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${activePest.iconBg} ${activePest.iconColor} shadow-sm`}
                >
                  <ActiveIcon size={22} strokeWidth={2} />
                </div>

                <h3 className="mt-4 text-[28px] font-bold text-[#1f5f4b] md:text-[34px]">
                  {activePest.title}
                </h3>

                <p className="mt-3 text-[17px] font-medium text-[var(--primary-green)]">
                  {activePest.short}
                </p>

                <p className="mt-5 text-[15px] leading-8 text-[#767676] md:text-[16px]">
                  {activePest.description}
                </p>

                <motion.a
                  href="tel:+16043558550"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="mt-6 inline-block rounded-lg border border-transparent bg-[var(--primary-green)] px-7 py-3 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--primary-green)] hover:bg-white hover:text-[var(--primary-green)] hover:shadow-md"
                >
                  Call Now: 604-355-8550
                </motion.a>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[16px] border border-[#f3d2a5] bg-[#F28C18] p-5 text-white shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                <h4 className="text-[18px] font-semibold text-white">
                  Common Signs
                </h4>

                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-white/90">
                  {activePest.signs.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-white">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[16px] border border-[#f5d2a6] bg-[#F4A340] p-5 text-white shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                <h4 className="text-[18px] font-semibold text-white">
                  Behavior & Nesting
                </h4>

                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-white/90">
                  {activePest.habits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-white">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[16px] border border-[#f5d2a6] bg-[#F4A340] p-5 text-white shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                <h4 className="text-[18px] font-semibold text-white">
                  Why It Matters
                </h4>

                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-white/90">
                  {activePest.whyItMatters.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-white">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
