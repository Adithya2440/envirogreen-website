import Image from "next/image";

const certs = [
  {
    name: "AIB International",
    src: "/cert_aib.jpg",
  },
  {
    name: "GreenPro",
    src: "/greenpro.jpg",
  },
  {
    name: "Schools Certificate",
    src: "/cert_schools.jpg",
  },
  {
    name: "QualityPro",
    src: "/qualitypro.jpg",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-white px-6 py-8 md:px-8 lg:px-12">
      <div className="rounded-[18px] border border-[#ececec] bg-[#fafafa] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] lg:p-8">
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d6b57]">
            Our Certifications
          </p>
          <h2 className="mt-3 text-[30px] font-bold text-[#1f5f4b] md:text-[38px]">
            Trusted Standards & Professional Credentials
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-[#7b7b7b] md:text-[16px]">
            We maintain high professional standards and proudly showcase
            certifications that support our commitment to safe, effective, and
            responsible pest control services.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="rounded-[16px] border border-[#e9e9e9] bg-white p-5 text-center shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            >
              <div className="relative mx-auto h-[110px] w-full max-w-[180px]">
                <Image
                  src={cert.src}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-[15px] font-medium text-[#555555]">
                {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
