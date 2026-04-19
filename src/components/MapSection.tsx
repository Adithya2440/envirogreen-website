export default function MapSection() {
  return (
    <section className="bg-white px-6 pb-10 md:px-8 lg:px-12">
      <div className="rounded-[18px] overflow-hidden border border-[#ececec] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
        <iframe
          src="https://maps.google.com/maps?q=Burnaby%20BC&t=&z=11&ie=UTF8&iwloc=&output=embed"
          className="h-[320px] w-full md:h-[420px]"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
