"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Podcast", href: "/podcast" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="absolute px-20 py-10 w-full z-10">
      <nav className="flex items-center justify-between text-white">

        {/* Logo */}
        <Link href="/" className="text-center cursor-pointer leading-tight">
          <h1 className="font-lemon font-extrabold text-[24px] tracking-[0.06em]">
            DHRUVA
          </h1>
          <p className="font-lemon font-semibold text-[13px]">
            ASTRONOMY CLUB
          </p>
        </Link>

        {/* Navigation Links */}
        <ul className="flex text-xl items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link transition-all duration-300 ${
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

      </nav>
    </header>
  );
};

export default Navbar;
