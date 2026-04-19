import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import Reveal from "../../src/components/Reveal";
import Link from "next/link";

export default function ScheduleServicePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
        <Navbar />

        <Reveal>
          <section className="border-b border-[#ececec] bg-white px-6 py-10 md:px-8 lg:px-12 lg:py-14">
            <div className="max-w-3xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--primary-green)]">
                Schedule Service
              </p>

              <h1 className="mt-3 text-[34px] font-bold text-[#1f5f4b] md:text-[42px] lg:text-[52px]">
                Book a Pest Control Appointment
              </h1>

              <p className="mt-4 text-[16px] leading-8 text-[#7a7a7a]">
                This is a temporary scheduling page for demo purposes. Once
                PestPac access is available, this page can be connected to the
                live booking portal.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section className="bg-white px-6 py-10 md:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[18px] border border-[#ececec] bg-[#fafafa] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] md:p-8">
                <h2 className="text-[26px] font-bold text-[#1f5f4b]">
                  Request a Preferred Appointment
                </h2>

                <form className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
                  />

                  <select className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]">
                    <option>Select Service</option>
                    <option>Ant Control</option>
                    <option>Rodent Control</option>
                    <option>Bed Bug Treatment</option>
                    <option>Cockroach Control</option>
                    <option>Wasp Removal</option>
                    <option>Spider Control</option>
                  </select>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="date"
                      className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
                    />
                    <input
                      type="time"
                      className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Service Address / City"
                    className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
                  />

                  <textarea
                    rows={4}
                    placeholder="Tell us about the pest issue"
                    className="w-full rounded-md border border-[#ddd] px-4 py-3 outline-none focus:border-[var(--primary-green)]"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-md bg-[var(--primary-green)] px-6 py-3 text-white font-semibold transition hover:bg-[var(--primary-green-dark)]"
                  >
                    Submit Scheduling Request
                  </button>
                </form>
              </div>

              <div className="rounded-[18px] border border-[#ececec] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] md:p-8">
                <h2 className="text-[24px] font-bold text-[#1f5f4b]">
                  Need Immediate Help?
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-[#7a7a7a]">
                  Call our team directly for urgent pest control needs in
                  Burnaby, Surrey, Vancouver, and surrounding areas.
                </p>

                <a
                  href="tel:+16043558550"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[var(--primary-green)] px-6 py-3 text-white font-semibold transition hover:bg-[var(--primary-green-dark)]"
                >
                  Call Now: 604-355-8550
                </a>

                <div className="mt-8 rounded-[16px] bg-[var(--light-green-bg)] p-5">
                  <h3 className="text-[18px] font-semibold text-[#474747]">
                    Later PestPac Connection
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#6f6f6f]">
                    This demo page can later be linked directly to the PestPac
                    customer portal or booking flow once access is available.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-[15px] font-medium text-[var(--primary-green)] transition hover:underline"
                >
                  Prefer to contact us instead?
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        <Footer />
      </div>
    </main>
  );
}
