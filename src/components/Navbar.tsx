import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[#e9e9e9] bg-white">
      <div className="mx-auto flex h-[84px] items-center justify-between px-6 md:px-8 lg:px-12">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="EnviroGreen Pest Solutions logo"
            width={180}
            height={60}
            priority
            className="h-auto w-[140px] md:w-[170px]"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-8 text-[14px] font-medium text-[#6d6d6d] md:flex lg:gap-10">
          <Link href="/" className="hover:text-[var(--primary-green)]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[var(--primary-green)]">
            About Us
          </Link>
          <Link href="/services" className="hover:text-[var(--primary-green)]">
            Services
          </Link>
          <Link
            href="/types-of-pests"
            className="hover:text-[var(--primary-green)]"
          >
            Types of Pests
          </Link>
          <Link href="/contact" className="hover:text-[var(--primary-green)]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
