export default function ServicesCTA() {
  return (
    <section className="bg-white px-6 pb-10 md:px-8 lg:px-12">
      <div className="rounded-[18px] bg-[var(--primary-green)] px-6 py-10 text-center text-white md:px-8">
        <h2 className="text-[28px] font-bold md:text-[34px]">
          Looking for Reliable Pest Control?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/90 md:text-[16px]">
          Our team is ready to help with safe, effective pest control solutions
          for your home or business.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+16043558550"
            className="rounded-md bg-white px-7 py-3.5 text-[16px] font-semibold text-[#2d6b57] transition hover:bg-[#f3f3f3]"
          >
            Call Us Today
          </a>

          <a
            href="/contact"
            className="rounded-md border border-white px-7 py-3.5 text-[16px] font-semibold text-white transition hover:bg-white hover:text-[#2d6b57]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
