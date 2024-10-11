"use client";
import Image from "next/image";
import Logo from "@/public/images/logo_1.png";
import React, { useState } from "react";
import Link from "next/link";

// Links array
const links = [
  { id: 1, link: "/", name: "HOME" },
  { id: 2, link: "/products", name: "PRODUCTS" },
  { id: 3, link: "/services", name: "SERVICES" },
  { id: 4, link: "/about", name: "ABOUT US" },
  { id: 5, link: "/contact", name: "CONTACT US" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-yellow-200 text-sm mb-8">
      <div className="flex justify-between items-center md:pt-3 pt-3 md:pb-3 pb-2 md:px-0 px-10 md:flex-col md:items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} width={40} height={60} alt="Logo" className="w-10 h-auto pb-3" />
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-200 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Horizontal line visible only on larger screens */}
        <hr className="hidden md:block text-white h-3 w-screen" />

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row justify-center gap-x-16 pb-1">
          {links.map((link) => (
            <Link key={link.id} href={link.link} className="hover:text-white md:active:bg-white">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu for small screens */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-end space-y-3 pb-4 pr-10">
          {links.map((link) => (
            <Link key={link.id} href={link.link} className="hover:text-white">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
