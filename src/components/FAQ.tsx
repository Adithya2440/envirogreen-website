"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How much do your pest control services cost?",
    answer:
      "The cost depends on the type of pest, the size of the property, and the severity of the infestation. We can provide a quote after understanding your pest issue and service needs.",
  },
  {
    question: "Do you offer maintenance plans for ongoing pest control?",
    answer:
      "Yes, we offer ongoing pest control and annual maintenance plans to help protect your home or business throughout the year.",
  },
  {
    question: "Are your pest control methods safe for children and pets?",
    answer:
      "We focus on safe and eco-friendly pest control solutions. Our team uses treatment methods designed to minimize risk while effectively addressing pest problems.",
  },
  {
    question: "How often should I have my home inspected for pests?",
    answer:
      "This depends on your location, property type, and past pest activity. Many customers choose regular inspections or annual plans to help prevent infestations before they grow.",
  },
  {
    question: "Do you offer services for commercial properties?",
    answer:
      "Yes, we provide pest control services for commercial properties including offices, retail spaces, restaurants, and other business environments.",
  },
  {
    question: "What should I expect during a pest control treatment?",
    answer:
      "Our team will inspect the affected areas, identify the pest issue, explain the recommended treatment, and provide guidance on next steps and prevention.",
  },
  {
    question: "How long does a pest control treatment take?",
    answer:
      "Treatment time varies depending on the pest type and property size. Some visits are completed quickly, while more detailed treatments may take longer.",
  },
  {
    question: "How soon can I expect results after a pest control treatment?",
    answer:
      "Results depend on the type of pest and treatment used. Some issues improve quickly, while others may require follow-up care and monitoring for full control.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-12 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-[36px] font-bold text-[var(--primary-green)] md:text-[42px]">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-[60px] bg-[var(--primary-green)]"></div>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[16px] border border-[#e7e7e7] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.03)]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start gap-4 px-5 py-5 text-left transition hover:bg-[var(--light-green-bg)] md:px-6"
                >
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--primary-green)] text-[14px] text-[var(--primary-green)]">
                    {isOpen ? "−" : "✓"}
                  </span>

                  <div className="flex-1">
                    <p className="text-[18px] leading-7 text-[var(--primary-green)] transition">
                      {faq.question}
                    </p>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="px-5 pb-5 pl-[60px] text-[15px] leading-7 text-[#6f6f6f] md:px-6 md:pb-6 md:pl-[68px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
