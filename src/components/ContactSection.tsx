"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormDataType = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send request.");
      }

      setStatus({
        type: "success",
        message: "Your request has been sent successfully.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white px-6 py-10 md:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* LEFT: CONTACT INFO */}
        <div>
          <h2 className="text-[28px] font-bold text-[#1f5f4b]">
            Contact Information
          </h2>

          <div className="mt-6 space-y-5 text-[15px] text-[#6f6f6f]">
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
              <strong>Location:</strong> Burnaby & Surrey, BC
            </p>

            <p>
              <strong>Hours:</strong> Mon - Sat: 6:00 AM - 9:00 PM
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+16043558550"
              className="inline-flex items-center justify-center rounded-md border border-[var(--primary-green)] bg-white px-6 py-3 font-semibold text-[var(--primary-green)] transition duration-300 hover:bg-[var(--primary-green)] hover:text-white"
            >
              Call Us Today
            </a>

            <Link
              href="/schedule-service"
              className="inline-flex items-center justify-center rounded-md border border-[var(--primary-green)] px-6 py-3 font-semibold text-[var(--primary-green)] transition hover:bg-[var(--primary-green-dark)] hover:text-white"
            >
              Schedule Service
            </Link>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="rounded-[18px] border border-[#ececec] bg-[#fafafa] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
          <h3 className="text-[22px] font-semibold text-[#474747]">
            Request a Quote
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
            />

            <textarea
              name="message"
              placeholder="Describe your pest issue..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-block rounded-lg border border-transparent bg-[var(--primary-green)] px-7 py-3 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--primary-green)] hover:bg-white hover:text-[var(--primary-green)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

            {status.message && (
              <p
                className={`pt-2 text-[14px] ${
                  status.type === "success" ? "text-green-700" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}

            <div className="pt-2 text-center">
              <p className="text-[14px] text-[#6f6f6f]">
                Want to book a preferred appointment instead?
              </p>
              <Link
                href="/schedule-service"
                className="mt-2 inline-block text-[15px] font-medium text-[var(--primary-green)] transition hover:underline"
              >
                Go to Schedule Service
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
