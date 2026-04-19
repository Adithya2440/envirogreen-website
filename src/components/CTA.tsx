export default function CTA() {
  return (
    <section className="bg-[var(--primary-green)] text-white text-center py-16">
      <h2 className="text-2xl font-semibold mb-4">
        Get Fast & Reliable Pest Control Today
      </h2>

      <div className="flex justify-center gap-4">
        <a
          href="tel:+16043558550"
          className="px-6 py-3 bg-white text-black rounded-md"
        >
          Call Now
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          Get Quote
        </a>
      </div>
    </section>
  );
}
