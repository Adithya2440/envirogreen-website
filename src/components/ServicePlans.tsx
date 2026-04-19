import Image from "next/image";

const plans = [
  {
    title: "Residential Pest Control Solutions",
    label: "Pest Control for Home",
    image: "/residential-placeholder.jpg",
    description:
      "Protect your home and family from unwanted pests with our comprehensive residential pest control services. Our expert team provides effective and eco-friendly solutions tailored to your specific needs, ensuring a safe and pest-free environment for your loved ones. Whether you are dealing with ants, rodents, termites, or other pests, we use the latest techniques and environmentally friendly products to eliminate infestations and prevent future issues.",
    points: [
      "Thorough inspections to identify potential pest problems and entry points",
      "Customized treatment plans to effectively target and eliminate pests",
      "Use of safe and eco-friendly products that are safe for your family and pets",
    ],
  },
  {
    title: "Commercial Pest Control Plans",
    label: "Pest Control for Office Spaces",
    image: "/commercial-placeholder.jpg",
    description:
      "Safeguard your business and reputation with our specialized commercial pest control services. We cater to a wide range of industries, including food service, healthcare, retail, hospitality, and more. We understand the unique challenges faced by different industries and offer customized treatment plans to address specific pest issues.",
    points: [
      "Comprehensive inspections to identify pest problems and risk areas",
      "Targeted treatments to eliminate existing infestations and prevent future occurrences",
      "Detailed documentation and reporting to help you stay compliant with industry regulations",
    ],
  },
  {
    title: "Annual Pest Control Plans",
    label: "Year-Round Protection",
    image: "/annual.jpg",
    description:
      "Enjoy peace of mind with our annual pest control plan, offering continuous protection for your property. Our comprehensive plan includes regular inspections, preventive treatments, and prompt response to any pest issues, ensuring your spaces remain pest-free throughout the year.",
    points: [
      "Regular, scheduled inspections to monitor for pest activity and identify potential issues",
      "Preventive treatments to stop infestations before they start",
      "Immediate response and treatment for any pest problems that arise",
      "Ongoing support and advice from our expert technicians",
    ],
  },
];

export default function ServicePlans() {
  return (
    <section className="bg-white px-6 py-10 md:px-8 lg:px-12">
      <div className="text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#2d6b57]">
          Choosing The Right Plan
        </p>
        <h2 className="mt-3 text-[30px] font-bold text-[#1f5f4b] md:text-[38px]">
          Pest Control Plans for Every Space
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-[#7b7b7b] md:text-[16px]">
          Choose the right pest control plan for your home, office, or ongoing
          year-round protection needs.
        </p>
      </div>

      <div className="mt-10 space-y-12">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            className="grid items-center gap-8 border-b border-[#ececec] pb-10 last:border-b-0 last:pb-0 lg:grid-cols-2"
          >
            <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="relative h-[280px] overflow-hidden rounded-[18px] bg-[#f4f4f4] md:h-[340px]">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#2d6b57]">
                {plan.label}
              </p>

              <h3 className="mt-2 text-[26px] font-bold leading-tight text-[#474747] md:text-[34px]">
                {plan.title}
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-[#7a7a7a] md:text-[16px]">
                {plan.description}
              </p>

              <div className="mt-6">
                <ul className="space-y-3 text-[15px] leading-7 text-[#5f5f5f]">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2d6b57] text-sm text-white">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
