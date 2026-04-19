"use client";

import { useState } from "react";
import { Phone, Mail, FileText } from "lucide-react";

const actionCards = [
  {
    title: "Call Us today",
    text: "Speak directly with our team for immediate help.",
    href: "tel:+16043558550",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    title: "Email Us",
    text: "Send us your details and pest concern.",
    href: "mailto:customersupport@envirogreenpest.ca",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    title: "Request a Quote",
    text: "Tell us about your pest issue and we’ll get back to you.",
    href: "#quote-form",
    icon: <FileText className="h-5 w-5" />,
  },
];

export default function InteractiveContactSection() {
  const [selectedService, setSelectedService] = useState("Ant Control");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          message: `Service Needed: ${selectedService}\nCity/Postal Code: ${formData.city}\n\nIssue Details:\n${formData.message}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Your request has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
        setSelectedService("Ant Control");
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-6 py-10 md:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-[28px] font-bold text-[#1f5f4b] md:text-[34px]">
              Get in Touch
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#6f6f6f] md:text-[16px]">
              Choose the fastest way to reach us. Call, email, or send a request
              and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {actionCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-[16px] border border-[var(--primary-green)] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-green)] hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[var(--light-green-bg)] p-2 text-[var(--primary-green)] transition group-hover:bg-white/20 group-hover:!text-white">
                    {card.icon}
                  </div>

                  <h3 className="text-[18px] font-semibold text-[#474747] transition group-hover:!text-white">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-3 text-[14px] leading-6 text-[#7b7b7b] transition group-hover:!text-white">
                  {card.text}
                </p>
              </a>
            ))}
          </div>

          <div className="rounded-[18px] border border-[#ececec] bg-[#fafafa] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
            <h3 className="text-[22px] font-semibold text-[#474747]">
              Contact Information
            </h3>

            <div className="mt-5 space-y-4 text-[15px] text-[#6f6f6f]">
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+16043558550"
                  className="transition hover:text-[var(--primary-green)]"
                >
                  604-355-8550
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:customersupport@envirogreenpest.ca"
                  className="transition hover:text-[var(--primary-green)]"
                >
                  customersupport@envirogreenpest.ca
                </a>
              </p>

              <p>
                <strong>Burnaby:</strong>{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=12-7549+Humphries+Court+Burnaby+BC+V3N+4K9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--primary-green)]"
                >
                  12-7549 Humphries Court Burnaby, BC V3N 4K9
                </a>
              </p>

              <p>
                <strong>Surrey:</strong>{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10603+140+St+Surrey+BC+V3T+4N6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--primary-green)]"
                >
                  10603 140 St, Surrey, BC V3T 4N6
                </a>
              </p>

              <p>
                <strong>Hours:</strong> Mon - Sat: 6:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        <div
          id="quote-form"
          className="relative overflow-hidden rounded-[18px] border border-[#ececec] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] md:p-8"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/form-bg.jpg"
              alt="Background"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[2px]" />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-[26px] font-bold text-[#1f5f4b]">
                  Request a Quote
                </h2>
                <p className="mt-2 text-[15px] leading-7 text-[#7a7a7a]">
                  Tell us what you need and we’ll get back to you.
                </p>
              </div>

              <div className="hidden rounded-full bg-[var(--light-green-bg)] px-4 py-2 text-[13px] font-semibold text-[var(--primary-green)] md:block">
                Fast Response
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 outline-none transition focus:border-[var(--primary-green)]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 outline-none transition focus:border-[var(--primary-green)]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 outline-none transition focus:border-[var(--primary-green)]"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Postal Code / City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 outline-none transition focus:border-[var(--primary-green)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#5f5f5f]">
                  Service Needed
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Ant Control",
                    "Rodent Control",
                    "Bed Bug Treatment",
                    "Cockroach Control",
                    "Wasp Removal",
                    "Spider Control",
                  ].map((service) => {
                    const active = selectedService === service;

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`rounded-full border px-4 py-2 text-[14px] font-medium transition ${
                          active
                            ? "border-[var(--primary-green)] bg-[var(--primary-green)] text-white"
                            : "border-[#dcdcdc] bg-white text-[#5f5f5f] hover:border-[var(--primary-green)] hover:bg-[var(--light-green-bg)] hover:text-[var(--primary-green)]"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Describe your pest issue..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 outline-none transition focus:border-[var(--primary-green)]"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md border border-transparent bg-[var(--primary-green)] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-[var(--primary-green)] hover:border-[var(--primary-green)] disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>

              {statusMessage && (
                <p className="text-sm text-[#5f5f5f]">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
