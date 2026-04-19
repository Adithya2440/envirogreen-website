import Image from "next/image";

const images = [
  {
    src: "/home.jpg",
    alt: "Home pest control",
  },
  {
    src: "/warehouse.jpg",
    alt: "Warehouse pest control",
  },
  {
    src: "/office.jpg",
    alt: "Office pest control",
  },
];

export default function AboutGallery() {
  return (
    <section className="bg-white px-6 py-8 md:px-8 lg:px-12">
      <div className="grid gap-5 md:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative h-[240px] overflow-hidden rounded-[16px] border border-[#ececec] bg-[#f7f7f7] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
