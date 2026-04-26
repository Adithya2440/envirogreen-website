"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#e9e9e9] bg-white sticky top-0 z-50">
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

        {/* DESKTOP NAV (unchanged) */}
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
            href="/#pest-section" // 🔥 updated for scroll
            className="hover:text-[var(--primary-green)]"
          >
            Types of Pests
          </Link>
          <Link href="/contact" className="hover:text-[var(--primary-green)]">
            Contact
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-[15px] text-[#6d6d6d]">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>

          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/#pest-section" onClick={() => setOpen(false)}>
            Types of Pests
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          {/* CTA BUTTON */}
          <a
            href="tel:+16043558550"
            className="mt-2 rounded-lg bg-[var(--primary-green)] py-3 text-center text-white font-medium"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
