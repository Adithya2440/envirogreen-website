export default function AboutPreview() {
  return (
    <section className="px-10 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="h-[260px] rounded-lg bg-gray-200 flex items-center justify-center">
          Image / Icon
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">About EnviroGreen</h2>
          <p className="text-gray-600 mb-6">
            We provide eco-friendly pest control solutions for homes and
            businesses across Burnaby, Surrey, Vancouver, and nearby areas.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Safe and effective treatment solutions</li>
            <li>• Trusted by homeowners and businesses</li>
            <li>• Fast response and reliable service</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
