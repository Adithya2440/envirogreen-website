import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-[#f8f8f8] px-6 py-12 text-[var(--primary-green)] md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Image
            src="/logo.png"
            alt="EnviroGreen logo"
            width={180}
            height={60}
            className="w-[150px]"
          />

          <div className="mt-6 space-y-3 text-[15px] text-[#5f5f5f]">
            <p>Burnaby & Surrey, BC</p>

            <a
              href="tel:+16043558550"
              className="block transition hover:text-[var(--primary-green)]"
            >
              604-355-8550
            </a>

            <a
              href="mailto:customersupport@envirogreenpest.ca"
              className="block transition hover:text-[var(--primary-green)]"
            >
              customersupport@envirogreenpest.ca
            </a>

            <p>Monday - Saturday: 9am to 6pm</p>
          </div>
        </div>

        <div>
          <h4 className="text-[18px] font-semibold text-black">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-[15px] text-[#5f5f5f]">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Types of Pests", href: "/types-of-pests" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="inline-block transition duration-300 hover:translate-x-1 hover:text-[var(--primary-green)]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[18px] font-semibold text-black">Follow Us</h4>
          <ul className="mt-5 space-y-3 text-[15px] text-[#5f5f5f]">
            {["Facebook", "Instagram", "LinkedIn"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="inline-block transition duration-300 hover:translate-x-1 hover:text-[var(--primary-green)]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-[#e5e5e5] pt-6 text-center text-[14px] text-[#6f6f6f]">
        © {new Date().getFullYear()} EnviroGreen Pest Solutions. All rights
        reserved.
      </div>
    </footer>
  );
}
