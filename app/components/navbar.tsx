"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Podcast", href: "/podcast" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="absolute w-full z-20 px-6 md:px-12 lg:px-20 py-8">
      <nav className="flex items-center justify-between text-white">

        {/* Logo */}
        <Link href="/" className="text-center leading-tight">
          <h1 className="font-lemon font-extrabold text-[11px] md:text-[22px] tracking-[0.06em]">
            DHRUVA
          </h1>
          <p className="font-lemon font-semibold text-[6px] md:text-[12px]">
            ASTRONOMY CLUB
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-12 text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-all duration-300 ${
                  pathname === link.href
                    ? "text-cyan-400 underline underline-offset-8"
                    : "hover:text-cyan-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 bg-black/80 backdrop-blur-md rounded-xl py-6 px-6">
          <ul className="flex flex-col items-center gap-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-all duration-300 ${
                    pathname === link.href
                      ? "text-cyan-400 underline underline-offset-8"
                      : "hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
