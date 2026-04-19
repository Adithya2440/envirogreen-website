"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much do your pest control services cost?",
    answer:
      "The cost depends on the type of pest, the size of your property, and the severity of the infestation. We offer estimates based on your specific situation.",
  },
  {
    question: "Do you offer maintenance plans for ongoing pest control?",
    answer:
      "Yes, we offer annual pest control plans that include regular inspections and treatments to keep your property protected year-round.",
  },
  {
    question: "Are your pest control methods safe for children and pets?",
    answer:
      "Yes, our pest control methods are designed to be safe for children and pets. We focus on eco-friendly products and responsible treatment methods.",
  },
  {
    question: "How often should I have my home inspected for pests?",
    answer:
      "We generally recommend at least one inspection per year, though more frequent inspections may be helpful if you have had recurring pest issues.",
  },
  {
    question: "Do you offer services for commercial properties?",
    answer:
      "Yes, we provide pest control services for residential and commercial properties, including offices, restaurants, warehouses, hotels, retail stores, and more.",
  },
  {
    question: "What should I expect during a pest control treatment?",
    answer:
      "A technician will inspect your property, identify the pest issue, apply the appropriate treatment, and provide recommendations for prevention and follow-up.",
  },
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-8 md:px-8 lg:px-12">
      <div className="text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d6b57]">
          Frequently Asked Questions
        </p>
        <h2 className="mt-3 text-[30px] font-bold text-[#1f5f4b] md:text-[38px]">
          Common Questions About Our Services
        </h2>
      </div>

      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-[16px] border transition duration-300 ${
                isOpen
                  ? "border-[#2d6b57] bg-[#f7fbf8] shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
                  : "border-[#ececec] bg-[#fafafa] hover:border-[#2d6b57] hover:bg-[#f7fbf8]"
              }`}
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex w-full items-center justify-between px-5 py-5 text-left md:px-6"
              >
                <span className="pr-4 text-[17px] font-semibold text-[#474747] md:text-[18px]">
                  {faq.question}
                </span>

                <span
                  className={`text-[22px] font-light text-[#2d6b57] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-[15px] leading-7 text-[#7b7b7b] md:px-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
